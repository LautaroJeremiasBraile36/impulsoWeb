import { useEffect, useRef } from "react";

export default function Hero() {
  const bgRef = useRef(null);

  // Parallax suave en el glow del fondo
  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        const y = window.scrollY;
        bgRef.current.style.transform = `translateY(${y * 0.3}px)`;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className="hero" id="inicio">
      <div className="hero-bg" ref={bgRef}>
        <div className="hero-grid" />
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow">
          <span />
          Diseño web · Conversión · Resultados
          <span />
        </div>

        <h1>
          Convertí visitas
          <br />
          en <span className="hero-accent-word">clientes</span>
        </h1>

        <p className="hero-subtitle">
          Desarrollamos landing pages pensadas para que tu negocio genere más
          consultas sin depender solo de redes sociales.
        </p>

        <div className="hero-cta-group">
          <a
            href="https://wa.me/5491131096630?text=Hola%2C%20quiero%20más%20info%20sobre%20las%20landing%20pages"
            className="btn"
          >
            Quiero más clientes
          </a>
          <a href="#planes" className="btn btn-outline">
            Ver planes
          </a>
        </div>
      </div>

      <div className="hero-scroll-hint">
        <div className="scroll-line" />
        Scroll
      </div>
    </section>
  );
}
