# AMMYCOSMETIC

Sitio web para tienda de maquillaje con catálogo, carrito, formulario y envío de pedidos por correo y WhatsApp.

## Archivos principales

- `index.html` - frontend principal
- `styles.css` - estilos responsive
- `script.js` - lógica del carrito y envío de orden
- `server.js` - backend Node.js con Express y Nodemailer
- `package.json` - dependencias del servidor
- `.env.example` - variables de configuración para correo y WhatsApp

## Configuración

1. Copia `.env.example` a un archivo `.env`.
2. Completa los valores:
   - `MAIL_USER`: tu correo de envío
   - `MAIL_PASS`: contraseña de aplicación (no uses la cuenta normal)
   - `SELLER_EMAIL`: correo donde quieres recibir los pedidos
   - `WHATSAPP_NUMBER`: tu número en formato `573XXXXXXXXX`
3. Instala dependencias:

```bash
npm install
```

4. Inicia el servidor:

```bash
npm start
```

5. Abre `http://localhost:3000` en tu navegador.

## Cómo funciona

- El cliente añade productos al carrito.
- Completa sus datos en el formulario.
- El servidor envía un correo a `SELLER_EMAIL` con copia al cliente.
- Se abre WhatsApp con el pedido listo para enviar.

## Notas

- No subas tu `.env` a ningún repositorio público.
- Si necesitas soporte de hosting, puedo ayudarte a desplegarlo.
