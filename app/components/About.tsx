export default function About() {
  return (
    <section id="nosotros" className="py-16 bg-white">
      <div className="container mx-auto px-6">

        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
            Sobre Nosotros
          </h2>

          <p className="text-gray-600 text-lg leading-relaxed">
            En <strong>NIVALSU Proyectos y Servicios</strong> somos una empresa
            dedicada a la fabricación, instalación y mantenimiento de
            estructuras metálicas, brindando soluciones seguras y
            personalizadas para proyectos industriales, comerciales y
            residenciales.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            Contamos con experiencia en trabajos de soldadura, fabricación de
            puertas metálicas, rejas de seguridad, ventanas, estructuras,
            andamios y soluciones especiales según las necesidades de cada
            cliente.
          </p>

          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            Nuestro compromiso es entregar trabajos de calidad, con acabados
            resistentes y cumpliendo los requerimientos de nuestros clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-12">

          <div className="bg-gray-100 rounded-xl p-6 text-center shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Experiencia
            </h3>
            <p className="text-gray-600">
              Conocimiento en fabricación y montaje de estructuras metálicas.
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl p-6 text-center shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Calidad
            </h3>
            <p className="text-gray-600">
              Trabajos resistentes con materiales seleccionados y buenos
              acabados.
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl p-6 text-center shadow">
            <h3 className="text-xl font-bold text-gray-800 mb-3">
              Compromiso
            </h3>
            <p className="text-gray-600">
              Cumplimos con los tiempos y necesidades de cada proyecto.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}