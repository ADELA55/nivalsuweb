"use client";

export default function Contact() {
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

          {/* Formulario de Google Forms */}
          {/* Formulario de Google Forms */}
<div className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
  <iframe
    src="https://docs.google.com/forms/d/e/1FAIpQLSeVZbwKMxRpqF-bL8qWVqdjxxvehKQMqoD0Qs-YvL-38af5Bg/viewform?embedded=true"
    width="100%"
    height="1000"
    frameBorder="0"
    marginHeight={0}
    marginWidth={0}
    title="Solicitud de cotización NIVALSU"
    className="w-full"
  >
    Cargando formulario…
  </iframe>
</div>
        </div>
      </div>
    </section>
  );
}
