export default function Navbar() {
  return (
    <header
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        background: "#ffffff",
        color: "#111111",
        padding: "16px 50px",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        zIndex: 1000,
        boxShadow: "0 2px 15px rgba(0,0,0,0.12)",
        borderBottom: "1px solid #eeeeee",
      }}
    >
      {/* Marca */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          lineHeight: 1,
        }}
      >
        <span
          style={{
            color: "#c1121f",
            fontSize: "30px",
            fontWeight: 900,
            letterSpacing: "-1px",
          }}
        >
          NIVALSU
        </span>

        <span
          style={{
            color: "#222222",
            fontSize: "11px",
            fontWeight: 700,
            letterSpacing: "2px",
            marginTop: "5px",
          }}
        >
          PROYECTOS Y SERVICIOS
        </span>
      </div>

      {/* Navegación */}
      <nav
        style={{
          display: "flex",
          gap: "30px",
          alignItems: "center",
        }}
      >
        <a href="#inicio" style={link}>
          Inicio
        </a>

        <a href="#nosotros" style={link}>
          Nosotros
        </a>

        <a href="#servicios" style={link}>
          Servicios
        </a>

        <a href="#proyectos" style={link}>
          Proyectos
        </a>

        <a href="#contacto" style={link}>
          Contacto
        </a>

        <a
          href="https://wa.me/51922610983"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            background: "#c1121f",
            color: "#ffffff",
            padding: "12px 22px",
            borderRadius: "5px",
            textDecoration: "none",
            fontWeight: 700,
            fontSize: "15px",
            boxShadow: "0 4px 10px rgba(193,18,31,0.25)",
          }}
        >
          Solicitar cotización
        </a>
      </nav>
    </header>
  );
}

const link = {
  color: "#222222",
  textDecoration: "none",
  fontWeight: 600,
  fontSize: "15px",
};