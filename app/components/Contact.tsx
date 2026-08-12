"use client";

import { FormEvent, useState } from "react";

export default function Contact() {
  const [form, setForm] = useState({
    nombre: "",
    email: "",
    telefono: "",
    proyecto: "",
  });

  const [enviando, setEnviando] = useState(false);
  const [mensaje, setMensaje] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setEnviando(true);
    setMensaje("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(
          data.error || "No se pudo enviar la solicitud."
        );
      }

      setMensaje(
        "¡Solicitud enviada correctamente! Nos pondremos en contacto contigo."
      );

      setForm({
        nombre: "",
        email: "",
        telefono: "",
        proyecto: "",
      });
    } catch (error) {
      console.error(error);

      setMensaje(
        "No se pudo enviar la solicitud. Por favor, inténtalo nuevamente o contáctanos por WhatsApp."
      );
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section id="contacto" className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        {/* Título */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900">
            Contáctanos
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Solicita una cotización para tu proyecto.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Información de contacto */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Información de contacto
            </h3>

            <p className="text-gray-600 mb-4">
              📍 Lima, Perú
            </p>

            <p className="text-gray-600 mb-4">
              📞 Teléfono: 922 610 983
            </p>

            <p className="text-gray-600 mb-4">
              ✉️ Email: nivalsu.proyectos@gmail.com
            </p>

            <p className="text-gray-600">
              🕒 Atención:
              <br />
              Lunes a Viernes: 9 am a 6 pm
              <br />
              Sábados: 9 am a 1 pm
            </p>
          </div>

          {/* Formulario */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow">
            <form onSubmit={handleSubmit} className="space-y-5">
              {/* Nombre */}
              <input
                type="text"
                name="nombre"
                value={form.nombre}
                onChange={handleChange}
                placeholder="Nombre"
                required
                className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              {/* Correo */}
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                placeholder="Correo electrónico"
                required
                className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              {/* Teléfono */}
              <input
                type="tel"
                name="telefono"
                value={form.telefono}
                onChange={handleChange}
                placeholder="Teléfono"
                required
                className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              {/* Proyecto */}
              <textarea
                name="proyecto"
                value={form.proyecto}
                onChange={handleChange}
                placeholder="Cuéntanos sobre tu proyecto"
                rows={5}
                required
                className="w-full p-3 rounded-lg border border-gray-300 bg-white text-gray-900 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-red-600"
              />

              {/* Botón */}
              <button
                type="submit"
                disabled={enviando}
                className="w-full bg-red-700 text-white py-3 rounded-lg font-semibold hover:bg-red-800 transition disabled:opacity-60 disabled:cursor-not-allowed"
              >
                {enviando ? "Enviando..." : "Enviar solicitud"}
              </button>

              {/* Mensaje */}
              {mensaje && (
                <p
                  className={`text-center text-sm font-medium ${
                    mensaje.startsWith("¡")
                      ? "text-green-600"
                      : "text-red-600"
                  }`}
                >
                  {mensaje}
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}