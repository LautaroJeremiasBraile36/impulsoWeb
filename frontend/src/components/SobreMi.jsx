const skills = [
  "Diseño web",
  "React & Vite",
  "Copywriting",
  "UX / UI",
  "SEO básico",
  "Acompañamiento terapéutico",
  "Comunicación empática",
  "Escucha activa",
];

export default function SobreMi() {
  return (
    <section className="sobre-mi" id="sobre-mi">
      <div className="section-inner">
        <div className="sobre-layout">
          {/* Foto */}
          <div className="sobre-image-wrap reveal">
            <div className="sobre-image">
              <img src="/img/logo-png.png" alt="Impulso Web" />
              {/* <div className="sobre-image-placeholder">👤</div> */}
            </div>
            <div className="sobre-accent-line" />
          </div>

          {/* Texto */}
          <div className="sobre-text">
            <span className="section-tag reveal">
              Quienes están detrás
            </span>
            <h2 className="reveal reveal-delay-1">Sobre nosotros</h2>
            <span className="sobre-role reveal reveal-delay-2">
              Desarrollo web · Diseño · Copywrite
            </span>

            <p className="reveal reveal-delay-2">
              Somos un equipo que combina el mundo técnico con una
              mirada humana. Entendemos que tu negocio no es solo un
              producto — es un proyecto de vida. Por eso diseño
              páginas que no solo se ven bien, sino que conectan con
              tu audiencia de verdad.
            </p>
            <p className="reveal reveal-delay-3">
              Tenemos formación en acompañamiento terapéutico lo que
              nos enseñó a escuchar antes de actuar. Eso se traduce en
              un proceso donde tus necesidades están en el centro de
              cada decisión de diseño.
            </p>

            <div className="sobre-skills reveal reveal-delay-4">
              {skills.map((s, i) => (
                <span className="skill-pill" key={i}>
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
