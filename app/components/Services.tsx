const services = [
  {
    title: "Fabricación de Estructuras Metálicas",
    description:
      "Diseño y fabricación de estructuras metálicas resistentes para proyectos industriales, comerciales y residenciales.",
    icon: "🏗️",
  },
  {
    title: "Andamios Metálicos",
    description:
      "Venta y alquiler de andamios metálicos seguros para trabajos de construcción y mantenimiento.",
    icon: "🔧",
  },
  {
    title: "Puertas y Rejas de Seguridad",
    description:
      "Fabricación de puertas metálicas, rejas y soluciones de seguridad con acabados de calidad.",
    icon: "🚪",
  },
  {
    title: "Ventanas Metálicas",
    description:
      "Diseño e instalación de ventanas metálicas adaptadas a las necesidades del cliente.",
    icon: "🪟",
  },
  {
    title: "Trabajos de Soldadura",
    description:
      "Servicios de soldadura y reparación de estructuras metálicas para diferentes aplicaciones.",
    icon: "⚙️",
  },
  {
    title: "Montacargas y Soluciones Especiales",
    description:
      "Fabricación y mantenimiento de soluciones metálicas personalizadas según requerimientos del proyecto.",
    icon: "🏭",
  },
];

export default function Services() {
  return (
    <section id="servicios" className="py-16 bg-white">
      <div className="container mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Nuestros Servicios
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Ofrecemos soluciones metálicas confiables para empresas,
            industrias y hogares.
          </p>
        </div>


        <div className="grid md:grid-cols-3 gap-8">

          {services.map((service, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-2xl shadow-md p-6 hover:shadow-xl transition"
            >

              <div className="text-4xl mb-4">
                {service.icon}
              </div>

              <h3 className="text-xl font-bold text-gray-800 mb-3">
                {service.title}
              </h3>

              <p className="text-gray-600 leading-relaxed">
                {service.description}
              </p>

            </div>
          ))}

        </div>

      </div>
    </section>
  );
}