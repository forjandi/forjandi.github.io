export const prerender = false;
import { APIRoute } from "astro";
import nodemailer from "nodemailer";

export const POST: APIRoute = async ({ request }: { request: Request }) => {
	const formData = await request.json();
	const auth = nodemailer.createTransport({
		host: "smtp.gmail.com",
		port: 587,
		secure: false,
		auth: {
			user: import.meta.env.USER_MAIL,
			pass: import.meta.env.USER_PASSWORD,
		},
	});

	const template = {
		from: process.env.USER_MAIL,
		to: formData.user_email,
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
				}
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
				}
			}
		);
	}
};
