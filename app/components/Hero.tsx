export default function Hero() {
  return (
    <section
      id="inicio"
      style={{
        minHeight: "100vh",
        backgroundImage:
          "url('https://images.unsplash.com/photo-1518709414768-a88981a4515d?q=80&w=2000&auto=format&fit=crop')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        position: "relative",
        display: "flex",
        alignItems: "center",
        color: "white",
        paddingTop: "100px",
      }}
    >
      {/* Capa oscura */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background:
            "linear-gradient(90deg, rgba(0,0,0,0.88) 0%, rgba(0,0,0,0.72) 45%, rgba(0,0,0,0.35) 100%)",
        }}
      />

      {/* Línea roja decorativa */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: "35%",
          width: "6px",
          height: "180px",
          background: "#c1121f",
        }}
      />

      {/* Contenido */}
      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "900px",
          padding: "60px",
        }}
      >
        {/* Etiqueta */}
        <div
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: "10px",
            marginBottom: "25px",
            padding: "9px 16px",
            borderLeft: "4px solid #c1121f",
            background: "rgba(255,255,255,0.08)",
            fontSize: "14px",
            fontWeight: 700,
            letterSpacing: "1px",
            textTransform: "uppercase",
          }}
        >
          NIVALSU Proyectos y Servicios
        </div>

        <h1
          style={{
            fontSize: "clamp(44px, 5vw, 72px)",
            lineHeight: "1.05",
            marginBottom: "25px",
            fontWeight: 900,
            letterSpacing: "-2px",
          }}
        >
          Soluciones que
          <br />
          construyen
          <br />
          <span style={{ color: "#c1121f" }}>proyectos sólidos.</span>
        </h1>

        <p
          style={{
            fontSize: "20px",
            lineHeight: "1.7",
            marginBottom: "38px",
            maxWidth: "760px",
            color: "#eeeeee",
          }}
        >
          Desarrollamos soluciones en estructuras metálicas, fabricación,
          instalación y servicios generales para proyectos industriales,
          comerciales, educativos y residenciales.
        </p>

        {/* Botones */}
        <div
          style={{
            display: "flex",
            gap: "15px",
            flexWrap: "wrap",
          }}
        >
          <a
            href="#contacto"
            style={{
              background: "#c1121f",
              color: "#ffffff",
              padding: "16px 30px",
              borderRadius: "5px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "16px",
              boxShadow: "0 8px 20px rgba(193,18,31,0.3)",
            }}
          >
            Solicitar cotización
          </a>

          <a
            href="#proyectos"
            style={{
              background: "transparent",
              color: "#ffffff",
              padding: "15px 30px",
              borderRadius: "5px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "16px",
              border: "1px solid rgba(255,255,255,0.6)",
            }}
          >
            Ver nuestros proyectos
          </a>
        </div>

        {/* Indicadores */}
        <div
          style={{
            display: "flex",
            gap: "35px",
            marginTop: "55px",
            flexWrap: "wrap",
          }}
        >
          <div>
            <strong
              style={{
                display: "block",
                fontSize: "15px",
                color: "#ffffff",
              }}
            >
              FABRICACIÓN
            </strong>

            <span
              style={{
                fontSize: "13px",
                color: "#bbbbbb",
              }}
            >
              Soluciones a medida
            </span>
          </div>

          <div>
            <strong
              style={{
                display: "block",
                fontSize: "15px",
                color: "#ffffff",
              }}
            >
              INSTALACIÓN
            </strong>

            <span
              style={{
                fontSize: "13px",
                color: "#bbbbbb",
              }}
            >
              Montaje profesional
            </span>
          </div>

          <div>
            <strong
              style={{
                display: "block",
                fontSize: "15px",
                color: "#ffffff",
              }}
            >
              SERVICIOS
            </strong>

            <span
              style={{
                fontSize: "13px",
                color: "#bbbbbb",
              }}
            >
              Atención integral
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}