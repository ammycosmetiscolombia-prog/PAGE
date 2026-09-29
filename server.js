const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
const path = require("path");
const fs = require("fs");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 3000;
app.disable("x-powered-by");
app.use(express.json({ limit: "256kb" }));
const normalizeEnvValue = (value) => String(value ?? "").trim().replace(/\s+/g, "");
const mailUser = normalizeEnvValue(process.env.MAIL_USER);
const mailPass = normalizeEnvValue(process.env.MAIL_PASS);
const sellerEmail = normalizeEnvValue(process.env.SELLER_EMAIL || mailUser || "");
const whatsappNumber = normalizeEnvValue(process.env.WHATSAPP_NUMBER || "");
const resendApiKey = normalizeEnvValue(process.env.RESEND_API_KEY || "");
const resendFrom = normalizeEnvValue(process.env.RESEND_FROM || "");
const SMTP_TIMEOUT_MS = Number(process.env.SMTP_TIMEOUT_MS || 90000);
const mailHost = normalizeEnvValue(process.env.MAIL_HOST || "smtp.gmail.com");
const isGmailHost = mailHost.toLowerCase().includes("gmail");
const parsedMailPort = Number(process.env.MAIL_PORT);
const mailPort = isGmailHost ? 587 : (Number.isFinite(parsedMailPort) ? parsedMailPort : 465);
const mailSecure = isGmailHost ? false : (process.env.MAIL_SECURE !== undefined ? process.env.MAIL_SECURE === "true" : true);

const mailConfigured = !!mailUser && !!mailPass;
const emailProvider = normalizeEnvValue(process.env.EMAIL_PROVIDER || "auto").toLowerCase();
const useResend = emailProvider === "resend" || (emailProvider === "auto" && !mailConfigured && !!resendApiKey);
const useSmtp = emailProvider === "smtp" || (emailProvider === "auto" && mailConfigured);
let transporter = null;

function withTimeout(promise, timeoutMs, errorMessage) {
  return new Promise((resolve, reject) => {
    const timer = setTimeout(() => reject(new Error(errorMessage)), timeoutMs);
    promise.then(resolve, reject).finally(() => clearTimeout(timer));
  });
}

async function sendViaResend(messageOptions) {
  const payload = {
    from: resendFrom || messageOptions.from || "onboarding@resend.dev",
    to: Array.isArray(messageOptions.to) ? messageOptions.to : [messageOptions.to],
    subject: messageOptions.subject,
    html: messageOptions.html || `<pre>${messageOptions.text || ""}</pre>`,
    text: messageOptions.text || "",
  };

  if (messageOptions.cc) {
    payload.cc = Array.isArray(messageOptions.cc) ? messageOptions.cc : [messageOptions.cc];
  }

  const response = await fetch("https://api.resend.com/emails", {
    method: "POST",
    headers: {
      Authorization: `Bearer ${resendApiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });

  const data = await response.json().catch(() => ({}));
  if (!response.ok) {
    throw new Error(data.message || `Resend error ${response.status}`);
  }

  return data;
}

async function sendMailWithLogging(messageOptions) {
  if (useResend) {
    if (!resendApiKey) {
      throw new Error("No está configurada la clave RESEND_API_KEY para enviar por Resend.");
    }
    return sendViaResend(messageOptions);
  }

  if (useSmtp) {
    if (!transporter) {
      throw new Error("Transportador SMTP no inicializado.");
    }

    return withTimeout(
      transporter.sendMail(messageOptions),
      SMTP_TIMEOUT_MS,
      `Tiempo de espera agotado al enviar el correo. Timeout configurado: ${SMTP_TIMEOUT_MS} ms.`
    );
  }

  throw new Error("No está configurado ningún proveedor de correo. Usa SMTP o configura RESEND_API_KEY.");
}

if (mailConfigured) {
  transporter = nodemailer.createTransport({
    host: mailHost,
    port: mailPort,
    secure: mailSecure,
    connectionTimeout: SMTP_TIMEOUT_MS,
    greetingTimeout: SMTP_TIMEOUT_MS,
    socketTimeout: SMTP_TIMEOUT_MS,
    auth: {
      user: mailUser,
      pass: mailPass,
    },
  });
} else {
  console.warn("Falta configurar MAIL_USER o MAIL_PASS en las variables de entorno.");
  console.warn("El servidor arrancará, pero los pedidos no podrán enviarse por correo hasta que se configuren estas variables.");
}

app.use(cors());
app.use(express.static(path.resolve(__dirname), { maxAge: "1h", etag: true, lastModified: true }));

function escapeHtml(value) {
  return String(value ?? "").replace(/[&<>"']/g, (ch) => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;",
  }[ch]));
}
function getMailErrorMessage(error) {
  const message = error && error.message ? error.message : "";
  const code = error && error.code ? String(error.code) : "";

  if (/invalid login|authentication|535|534|EAUTH/i.test(message) || /EAUTH|535|534/.test(code)) {
    return "Autenticación SMTP fallida. Revisa el correo y genera una contraseña de aplicación para Gmail si usas esa cuenta.";
  }

  if (/timeout|ETIMEDOUT|ECONNRESET|ECONNREFUSED/i.test(message) || /ETIMEDOUT|ECONNRESET|ECONNREFUSED/.test(code)) {
    return "No se pudo conectar con el servidor SMTP. Revisa la red, el host y el puerto configurado.";
  }

  return error && error.message ? error.message : "Error al enviar el pedido";
}
function resolveLogoPath() {
  const candidates = [
    path.resolve(__dirname, "assets", "images", "logo.png"),
    path.resolve(__dirname, "logo.png"),
    path.resolve(process.cwd(), "assets", "images", "logo.png"),
    path.resolve(process.cwd(), "logo.png"),
  ];

  return candidates.find((candidate) => fs.existsSync(candidate)) || null;
}

function buildOrderHtml({ orderId, orderDate, logoCid, safeName, safeEmail, safePhone, safeDocument, safeAddress, safeCity, safeNotes, cart, total }) {
  const rows = cart
    .map((item, index) => {
      const rowColor = index % 2 === 0 ? "#ffffff" : "#fcf1f7";
      return `
        <tr style="background-color:${rowColor};">
          <td style="padding:10px 8px;border-bottom:1px solid #f0dcdf;">${escapeHtml(item.name)}</td>
          <td align="center" style="padding:10px 8px;border-bottom:1px solid #f0dcdf;">${escapeHtml(item.quantity)}</td>
          <td align="right" style="padding:10px 8px;border-bottom:1px solid #f0dcdf;white-space:nowrap;">$${item.price.toLocaleString("es-CO")}</td>
          <td align="right" style="padding:10px 8px;border-bottom:1px solid #f0dcdf;white-space:nowrap;">$${(item.price * item.quantity).toLocaleString("es-CO")}</td>
        </tr>`;
    })
    .join("");

  return `<!doctype html>
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width,initial-scale=1" />
    <title>Factura AMMYCOSMETIC - ${orderId}</title>
  </head>
  <body style="margin:0;padding:0;background:#f4e9f0;font-family:Arial,Helvetica,sans-serif;color:#392235;">
    <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background:#f4e9f0;">
      <tr>
        <td align="center" style="padding:24px 12px;">
          <table role="presentation" width="600" cellpadding="0" cellspacing="0" border="0" style="width:600px;max-width:100%;background:#ffffff;border:1px solid #f0d9e4;border-radius:14px;overflow:hidden;">
            <tr>
              <td style="padding:26px 26px;background-color:#ffe8f1;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0">
                  <tr>
                    <td width="140" valign="middle" style="padding-right:14px;">
                      ${logoCid ? `<img src="cid:${logoCid}" alt="AMMYCOSMETIC" width="120" style="display:block;width:120px;height:auto;border-radius:14px;border:1px solid #ffffff;" />` : ""}
                    </td>
                    <td valign="middle" align="right" style="color:#5e3a55;">
                      <div style="font-size:22px;font-weight:bold;margin-bottom:4px;">AMMYCOSMETIC</div>
                      <div style="font-size:13px;color:#7a5373;">Factura de pedido</div>
                      <div style="margin-top:6px;font-size:12px;color:#8e6c88;">Pedido #${orderId}</div>
                      <div style="font-size:12px;color:#8e6c88;">${orderDate}</div>
                    </td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:22px 26px 6px 26px;">
                <h2 style="margin:0 0 12px;color:#3f2c40;font-size:16px;">Datos del cliente</h2>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="font-size:14px;color:#4f3a4f;">
                  <tr><td style="padding:6px 0;width:110px;font-weight:bold;vertical-align:top;">Cliente</td><td style="padding:6px 0;">${safeName}</td></tr>
                  <tr><td style="padding:6px 0;font-weight:bold;vertical-align:top;">Email</td><td style="padding:6px 0;">${safeEmail}</td></tr>
                  <tr><td style="padding:6px 0;font-weight:bold;vertical-align:top;">Teléfono</td><td style="padding:6px 0;">${safePhone}</td></tr>
                  <tr><td style="padding:6px 0;font-weight:bold;vertical-align:top;">CC o TI</td><td style="padding:6px 0;">${safeDocument}</td></tr>
                  <tr><td style="padding:6px 0;font-weight:bold;vertical-align:top;">Dirección</td><td style="padding:6px 0;">${safeAddress}</td></tr>
                  <tr><td style="padding:6px 0;font-weight:bold;vertical-align:top;">Ciudad</td><td style="padding:6px 0;">${safeCity}</td></tr>
                  <tr><td style="padding:6px 0;font-weight:bold;vertical-align:top;">Notas</td><td style="padding:6px 0;">${safeNotes}</td></tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 26px 6px 26px;">
                <h3 style="margin:0 0 10px;color:#3f2c40;font-size:15px;">Productos</h3>
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;font-size:13px;color:#37273d;">
                  <tr style="background-color:#faf0f5;">
                    <td align="left" style="padding:10px 8px;border-bottom:2px solid #e8d6e0;color:#7a5c79;font-size:11px;text-transform:uppercase;font-weight:bold;">Producto</td>
                    <td align="center" style="padding:10px 8px;border-bottom:2px solid #e8d6e0;color:#7a5c79;font-size:11px;text-transform:uppercase;font-weight:bold;">Cant.</td>
                    <td align="right" style="padding:10px 8px;border-bottom:2px solid #e8d6e0;color:#7a5c79;font-size:11px;text-transform:uppercase;font-weight:bold;">Precio</td>
                    <td align="right" style="padding:10px 8px;border-bottom:2px solid #e8d6e0;color:#7a5c79;font-size:11px;text-transform:uppercase;font-weight:bold;">Subtotal</td>
                  </tr>
                  ${rows}
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:16px 26px 22px 26px;">
                <table role="presentation" width="100%" cellpadding="0" cellspacing="0" border="0" style="background-color:#fff0f5;border-radius:10px;">
                  <tr>
                    <td style="padding:14px 16px;font-weight:bold;color:#6b435e;font-size:14px;">Total a pagar</td>
                    <td align="right" style="padding:14px 16px;font-size:20px;font-weight:bold;color:#c01a5c;">$${total.toLocaleString("es-CO")}</td>
                  </tr>
                </table>
              </td>
            </tr>
            <tr>
              <td style="padding:18px 26px 26px 26px;background-color:#fff7fb;text-align:center;color:#5d3d52;font-size:12px;">
                <p style="margin:0 0 6px;">Gracias por tu compra en AMMYCOSMETIC. Tu pedido llegará pronto.</p>
                <p style="margin:0;">Estamos en contacto por WhatsApp para confirmar la entrega.</p>
              </td>
            </tr>
          </table>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}

app.post("/api/order", async (req, res) => {
  req.setTimeout(120000);
  res.setTimeout(120000);

  const { name, email, phone, document, address, city, notes, cart } = req.body;

  if (!name || !email || !phone || !document || !address || !city || !cart || !cart.length) {
    return res.status(400).json({ message: "Faltan datos obligatorios" });
  }

  const itemsDescription = cart
    .map((item) => `${item.name} x ${item.quantity}: $${item.price.toLocaleString("es-CO")}`)
    .join("\n");

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const orderId = `AMMY-${Date.now()}`;
  const orderDate = new Date().toLocaleString("es-CO", { dateStyle: "medium", timeStyle: "short" });
  const subject = `Nuevo pedido AMMYCOSMETIC - ${name}`;

  const text = `Pedido desde AMMYCOSMETIC\n\nCliente: ${name}\nEmail: ${email}\nTeléfono: ${phone}\nCC o TI: ${document || "No registrado"}\nDirección: ${address}\nCiudad: ${city}\nNotas: ${notes || "Ninguna"}\n\nProductos:\n${itemsDescription}\n\nTotal: $${total.toLocaleString("es-CO")}`;

  const logoName = "logo.png";
  const logoPath = resolveLogoPath();
  const logoPathCwd = logoPath ? path.resolve(logoPath) : null;

  console.log("LOGO PATH resolved:", logoPath, !!logoPath);
  console.log("LOGO PATH cwd:", logoPathCwd);

  let logoAttachment = null;
  if (logoPath) {
    try {
      const logoCid = `ammy-logo-${Date.now()}@ammycosmetic`;
      logoAttachment = {
        filename: logoName,
        path: logoPath,
        cid: logoCid,
        contentType: "image/png",
        contentDisposition: "inline",
      };
      console.log(`Logo cargado para factura desde: ${logoPath}`);
      console.log(`Logo CID: ${logoCid}`);
    } catch (err) {
      console.error("No se pudo preparar el adjunto logo.png para la factura:", err && err.message);
      return res.status(500).json({ message: `Error al preparar logo.png: ${err && err.message}` });
    }
  } else {
    console.warn("No se encontró logo.png; se enviará el correo sin imagen adjunta.");
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safePhone = escapeHtml(phone);
  const safeDocument = escapeHtml(document || "No registrado");
  const safeAddress = escapeHtml(address);
  const safeCity = escapeHtml(city);
  const safeNotes = escapeHtml(notes || "Ninguna");

  const html = buildOrderHtml({
    orderId,
    orderDate,
    logoCid: logoAttachment ? logoAttachment.cid : "",
    safeName,
    safeEmail,
    safePhone,
    safeDocument,
    safeAddress,
    safeCity,
    safeNotes,
    cart,
    total,
  });

  if (!useSmtp && !useResend) {
    return res.status(500).json({ message: "No está configurado ningún proveedor de correo. Configura SMTP o RESEND_API_KEY en las variables de entorno." });
  }

  if (useSmtp && !mailConfigured) {
    return res.status(500).json({ message: "No está configurado el correo SMTP. Configura MAIL_USER y MAIL_PASS en las variables de entorno." });
  }

  if (!sellerEmail) {
    return res.status(500).json({ message: "No está configurado SELLER_EMAIL. Agrega SELLER_EMAIL en las variables de entorno." });
  }

  const mailOptions = {
    from: mailUser,
    to: sellerEmail,
    cc: email,
    subject,
    text,
    html,
    attachments: logoAttachment ? [logoAttachment] : [],
  };

  try {
    await sendMailWithLogging(mailOptions);
    console.log(`Pedido enviado correctamente a ${sellerEmail}`);

    return res.status(200).json({
      message: "Pedido enviado correctamente",
      whatsappUrl: `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
        `¡Hola! Realicé un pedido en AMMYCOSMETIC.%0A%0A${text}`
      )}`,
    });
  } catch (error) {
    console.error('Error sending mail:', error && error.stack ? error.stack : error);
    const errMsg = getMailErrorMessage(error);
    return res.status(500).json({ message: `Error al enviar el pedido: ${errMsg}` });
  }
});

app.get('/api/health', async (req, res) => {
  if (!useSmtp && !useResend) {
    return res.status(500).json({ ok: false, message: 'No está configurado el correo. Configura MAIL_USER y MAIL_PASS o RESEND_API_KEY.' });
  }

  const provider = useResend ? 'resend' : useSmtp ? 'smtp' : 'none';
  res.json({ ok: true, message: 'Servidor listo para enviar pedidos', smtpConfigured: !!mailConfigured, provider });

  if (transporter) {
    transporter.verify().catch((err) => {
      console.warn('No se pudo validar SMTP en segundo plano:', err && err.message ? err.message : err);
    });
  }
});

app.get('/api/logo-debug', (req, res) => {
  const logoName = 'logo.png';
  const logoPath = resolveLogoPath();
  const exists = !!logoPath;
  const stats = exists ? fs.statSync(logoPath) : null;
  return res.json({
    logoName,
    logoPath,
    exists,
    size: stats ? stats.size : null,
    mtime: stats ? stats.mtime : null,
    cwd: process.cwd(),
    dirname: __dirname,
  });
});

app.post('/api/test-email', async (req, res) => {
  if (!mailConfigured && !resendApiKey) {
    return res.status(500).json({ ok: false, message: 'No está configurado el correo. Configura MAIL_USER y MAIL_PASS o RESEND_API_KEY.' });
  }

  const to = req.body && req.body.to ? req.body.to : sellerEmail;
  const subject = 'Prueba de correo AMMYCOSMETIC';
  const text = 'Este es un correo de prueba para verificar la configuración de correo.';
  try {
    await sendMailWithLogging({ from: mailUser, to, subject, text });
    return res.json({ ok: true, message: 'Correo de prueba enviado' });
  } catch (err) {
    console.error('Error sending test email:', err && err.stack ? err.stack : err);
    return res.status(500).json({ ok: false, message: getMailErrorMessage(err) || 'Error al enviar correo de prueba' });
  }
});

const server = app.listen(PORT, () => {
  console.log(`Servidor iniciado en http://localhost:${PORT}`);
});

server.on("error", (err) => {
  if (err.code === "EADDRINUSE") {
    console.error(`No se pudo iniciar: el puerto ${PORT} ya está en uso.`);
    console.error("Cierra el otro proceso o configura PORT en .env.");
    process.exit(1);
  }
  console.error("Error al iniciar el servidor:", err);
  process.exit(1);
});
