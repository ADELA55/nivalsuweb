import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { nombre, email, telefono, proyecto } = await request.json();

    if (!nombre || !email || !telefono || !proyecto) {
      return NextResponse.json(
        { error: "Todos los campos son obligatorios." },
        { status: 400 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "NIVALSU Web <onboarding@resend.dev>",
      to: ["nivalsu.proyectos@gmail.com"],
      subject: `Nueva solicitud de cotización - ${nombre}`,
      replyTo: email,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>Nueva solicitud de cotización</h2>

          <p><strong>Nombre:</strong> ${nombre}</p>
          <p><strong>Correo:</strong> ${email}</p>
          <p><strong>Teléfono:</strong> ${telefono}</p>

          <h3>Información del proyecto</h3>

          <p>${proyecto.replace(/\n/g, "<br />")}</p>

          <hr />

          <p>
            Este mensaje fue enviado desde el formulario de contacto
            de la página web de NIVALSU Proyectos y Servicios.
          </p>
        </div>
      `,
    });

    if (error) {
  console.error("RESEND API ERROR:", error);

  return NextResponse.json(
    {
      error: "Error de Resend",
      detalle: error.message,
      nombre: error.name,
      status: error.statusCode,
    },
    { status: 500 }
  );
}

    return NextResponse.json({
      success: true,
      message: "Correo enviado correctamente.",
      data,
    });
  } catch (error) {
    console.error("CONTACT API ERROR:", error);

    return NextResponse.json(
      {
        error: "Error interno",
        detalle:
          error instanceof Error
            ? error.message
            : String(error),
      },
      { status: 500 }
    );
  }
}
