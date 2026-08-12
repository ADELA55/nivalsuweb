const projects = [
  {
    title: "Estructuras Metálicas",
    image:
      "https://chinasteelbuildsales.com/wp-content/uploads/2025/09/Steel-Web-Truss-Building1.webp",
  },
  {
    title: "Fabricación de Puertas Metálicas",
    image: "/images/puerta.jpg",
  },
  {
    title: "Andamios Metálicos",
    image: "/images/andamios.jpg",
  },
  {
    title: "Rejas de Seguridad",
    image: "/images/reja.jpg",
  },
  {
    title: "Trabajos de Soldadura",
    image:
      "https://oxifam.com.pe/wp-content/uploads/2026/01/Realistic_8k_action_2k_202601281018_11zon-1024x572.jpeg",
  },
  {
    title: "Pintura",
    image: "/images/pintura.jpg",
  },
  {
    title: "Drywall y Acabados",
    image:
      "https://homesolution.net/blog/wp-content/uploads/2019/06/construccion-de-drywall-a-todo-costo-o-solo-mano-de-obra-D_NQ_NP_565225-MPE25400117517_022017-F-1024x683.jpg",
  },
];

export default function Projects() {
  return (
    <section id="proyectos" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">

        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Nuestros Proyectos
          </h2>

          <p className="text-gray-600 mt-4 text-lg">
            Conoce algunos de nuestros trabajos realizados y soluciones
            metálicas desarrolladas para nuestros clientes.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300"
            >
              <div
                className="w-full h-56 bg-cover bg-center"
                style={{
                  backgroundImage: `url(${project.image})`,
                }}
              />

              <div className="p-5">
                <h3 className="text-xl font-bold text-gray-800 text-center">
                  {project.title}
                </h3>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}