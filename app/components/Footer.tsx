export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8">
          {/* Empresa */}
          <div>
            <h3 className="text-2xl font-bold mb-4">
              Estructuras Metálicas LUCHO
            </h3>

            <p className="text-gray-400 leading-relaxed">
              Soluciones metálicas con calidad, seguridad y resistencia para
              proyectos industriales, comerciales y residenciales.
            </p>
          </div>

          {/* Enlaces */}
          <div>
            <h3 className="text-xl font-bold mb-4">Enlaces</h3>

            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="#nosotros"
                  className="hover:text-yellow-400 transition"
                >
                  Nosotros
                </a>
              </li>

              <li>
                <a
                  href="#servicios"
                  className="hover:text-yellow-400 transition"
                >
                  Servicios
                </a>
              </li>

              <li>
                <a
                  href="#proyectos"
                  className="hover:text-yellow-400 transition"
                >
                  Proyectos
                </a>
              </li>

              <li>
                <a
                  href="#contacto"
                  className="hover:text-yellow-400 transition"
                >
                  Contacto
                </a>
              </li>
            </ul>
          </div>

          {/* Redes Sociales */}
          <div>
            <h3 className="text-xl font-bold mb-4">Síguenos</h3>

            <p className="text-gray-400 mb-4">
              Conoce nuestros trabajos y contáctanos.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href="https://www.facebook.com/share/1XqLEGFR8Q/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition"
              >
                📘 Facebook
              </a>

              <a
                href="https://wa.me/51941353821"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-600 hover:bg-green-700 px-4 py-2 rounded-lg transition"
              >
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-gray-400">
          <p>
            © {new Date().getFullYear()} Estructuras Metálicas LUCHO. Todos los
            derechos reservados.
          </p>
        </div>
      </div>
    </footer>
  );
}
