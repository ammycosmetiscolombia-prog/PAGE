AMMYCOSMETIC - Ejecutar servidor de correo local

Requisitos
- Node.js (>=14)
- Tener el repositorio descargado y ubicado en la carpeta del proyecto

Instalación
```bash
npm install
```

Variables de entorno
Copia `.env.example` a `.env` y rellena las credenciales:
- `MAIL_USER` — cuenta SMTP (ej. tu@gmail.com)
- `MAIL_PASS` — contraseña o App Password (Gmail: App Password obligatorio si 2FA activa)
- `MAIL_HOST`, `MAIL_PORT`, `MAIL_SECURE` — opcionales; valores por defecto para Gmail están en `.env.example`
- `SELLER_EMAIL` — email de la tienda que recibirá pedidos
- `WHATSAPP_NUMBER` — número en formato internacional sin `+` (ej. `573206185147`)

Arrancar servidor
```bash
npm start
```

Endpoints para pruebas
- `GET /api/health` — verifica conexión con el servicio SMTP. Retorna JSON `{ok:true}` si está todo bien.
- `POST /api/test-email` — envía un correo de prueba al `SELLER_EMAIL` (o al `to` enviado en body).
- `POST /api/order` — endpoint consumido por el front-end para enviar pedidos.

Prueba manual del flujo
1. Ejecuta `npm start`.
2. En otra terminal, prueba `health`:
```bash
curl http://localhost:3000/api/health
```
3. Para enviar un correo de prueba (si `curl` está disponible):
```bash
curl -X POST -H "Content-Type: application/json" -d '{"to":"tu@correo.com"}' http://localhost:3000/api/test-email
```

Depuración
- Revisa la salida de la terminal donde ejecutaste `npm start` para ver errores detallados de Nodemailer.
- Si usas Gmail y recibes errores de autenticación, crea un "App Password" desde tu cuenta Google y usa ese valor en `MAIL_PASS`.

Si quieres, puedo crear un pequeño script para ejecutar pruebas automáticas cada vez que arranques el servidor, o preparar una integración con Mailtrap/Ethereal para pruebas sin enviar correos reales.