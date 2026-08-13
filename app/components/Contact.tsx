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

    // Por ahora solamente simulamos el envío.
    // En el siguiente paso lo conectaremos con Google Forms.
    await new Promise((resolve) => setTimeout(resolve, 800));

    setMensaje(
      "¡Solicitud recibida! Gracias por contactar con NIVALSU."
    );

    setForm({
      nombre: "",
      email: "",
      telefono: "",
      proyecto: "",
    });

    setEnviando(false);
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

        <div className="grid md:grid-cols-2 gap-10 items-start">

          {/* Información de contacto */}
          <div className="bg-gray-50 rounded-2xl p-8 shadow-sm border border-gray-100">
            <h3 className="text-2xl font-bold text-gray-800 mb-6">
              Información de contacto
            </h3>

            <div className="space-y-5">

              <div>
                <p className="font-semibold text-gray-800">
                  📍 Ubicación
                </p>
                <p className="text-gray-600 mt-1">
                  Lima, Perú
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-800">
                  📞 Teléfono
                </p>
                <p className="text-gray-600 mt-1">
                  922 610 983
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-800">
                  ✉️ Correo electrónico
                </p>
                <p className="text-gray-600 mt-1 break-all">
                  nivalsu.proyectos@gmail.com
                </p>
              </div>

              <div>
                <p className="font-semibold text-gray-800">
                  🕒 Horario de atención
                </p>

                <p className="text-gray-600 mt-1">
                  Lunes a Viernes: 9 am a 6 pm
                  <br />
                  Sábados: 9 am a 1 pm
                </p>
              </div>

            </div>
          </div>

          {/* Formulario NIVALSU */}
          <div className="bg-white rounded-2xl p-8 shadow-lg border border-gray-100">

            <div className="mb-7">
              <h3 className="text-2xl font-bold text-gray-900">
                Solicita una cotización
              </h3>

              <p className="text-gray-500 mt-2">
                Cuéntanos sobre tu proyecto y nuestro equipo se pondrá
                en contacto contigo.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Nombre */}
              <div>
                <label
                  htmlFor="nombre"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Nombre
                </label>

                <input
                  id="nombre"
                  type="text"
                  name="nombre"
                  value={form.nombre}
                  onChange={handleChange}
                  placeholder="Tu nombre"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
                />
              </div>

              {/* Correo */}
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Correo electrónico
                </label>

                <input
                  id="email"
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="correo@ejemplo.com"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
                />
              </div>

              {/* Teléfono */}
              <div>
                <label
                  htmlFor="telefono"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Teléfono
                </label>

                <input
                  id="telefono"
                  type="tel"
                  name="telefono"
                  value={form.telefono}
                  onChange={handleChange}
                  placeholder="922 610 983"
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition"
                />
              </div>

              {/* Proyecto */}
              <div>
                <label
                  htmlFor="proyecto"
                  className="block text-sm font-semibold text-gray-700 mb-2"
                >
                  Cuéntanos sobre tu proyecto
                </label>

                <textarea
                  id="proyecto"
                  name="proyecto"
                  value={form.proyecto}
                  onChange={handleChange}
                  placeholder="Cuéntanos qué necesitas, medidas aproximadas, tipo de estructura, instalación, mantenimiento, etc."
                  rows={6}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-gray-300 bg-white text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-600 focus:border-red-600 transition resize-none"
                />
              </div>

              {/* Botón */}
              <button
                type="submit"
                disabled={enviando}
                className="w-full bg-red-700 hover:bg-red-800 text-white py-3.5 px-6 rounded-xl font-semibold transition disabled:opacity-60 disabled:cursor-not-allowed shadow-sm"
              >
                {enviando
                  ? "Enviando solicitud..."
                  : "Solicitar cotización"}
              </button>

              {/* Mensaje */}
              {mensaje && (
                <div className="rounded-xl bg-green-50 border border-green-200 p-4 text-center">
                  <p className="text-green-700 font-medium">
                    {mensaje}
                  </p>
                </div>
              )}

            </form>
          </div>

        </div>
      </div>
    </section>
  );
}
