export default function MissionVision() {
  return (
    <section id="mision-vision" className="py-16 bg-gray-50">
      <div className="container mx-auto px-6">

        <div className="grid md:grid-cols-2 gap-8">

          {/* Misión */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-5">
              Nuestra Misión
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Brindar soluciones en estructuras metálicas con altos estándares
              de calidad, seguridad y resistencia, satisfaciendo las necesidades
              de nuestros clientes mediante trabajos personalizados, eficientes
              y confiables.
            </p>
          </div>


          {/* Visión */}
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-5">
              Nuestra Visión
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              Ser una empresa reconocida en el sector metalmecánico por la
              calidad de nuestros trabajos, innovación en soluciones metálicas
              y compromiso con cada proyecto, logrando la confianza de nuestros
              clientes.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
}