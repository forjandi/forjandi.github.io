export const prerender = false;
import { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }: { request: Request }) => {
  const formData = await request.json();
  const auth = nodemailer.createTransport({
    host: import.meta.env.EMAIL_HOST,
    port: import.meta.env.EMAIL_PORT,
    secure: import.meta.env.EMAIL_SECURE,
    auth: {
      user: import.meta.env.USER_SENDER_EMAIL,
      pass: import.meta.env.USER_SENDER_PASSWORD,
    },
  });

  const template = {
    from: import.meta.env.USER_SENDER_EMAIL,
    to: import.meta.env.USER_RECEIVER_EMAIL,
    subject: "Nuevo contacto desde el formulario",
    html: `
		<p>Nombre: ${formData.user_name}</p>
		<p>Email: ${formData.user_email}</p>
		<p>Compañia: ${formData.company_name}</p>
		<p>Celular/Teléfono: ${formData.user_phone}</p>
		<p>Mensaje: ${formData.message}</p>`,
  };

  try {
    await auth.sendMail(template);
    return new Response(
      JSON.stringify({
        message: "Email sent",
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Error, email not sent",
        error: error,
      }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
};
