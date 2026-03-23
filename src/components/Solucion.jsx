export default function Solucion() {
  return (
    <section className="solucion" id="solucion">
      <div className="section-inner">
        <div className="solucion-layout">
          {/* Texto */}
          <div className="solucion-text">
            <span className="section-tag reveal">La solución</span>
            <h2 className="reveal reveal-delay-1">
              Tu vendedor
              <br />
              digital 24/7
            </h2>
            <p className="reveal reveal-delay-2">
              Una landing page bien estructurada guía al cliente desde que entra
              hasta que te escribe. Sin fricciones, sin confusión.
            </p>
            <p className="reveal reveal-delay-3">
              No es una web cualquiera — es una máquina de generar consultas
              diseñada para convertir visitantes en clientes reales.
            </p>

            <div className="solucion-stat-row reveal reveal-delay-4">
              <div className="solucion-stat">
                <strong>3x</strong>
                <span>más consultas</span>
              </div>
              <div className="solucion-stat">
                <strong>24/7</strong>
                <span>trabajando</span>
              </div>
              <div className="solucion-stat">
                <strong>100%</strong>
                <span>tuya</span>
              </div>
            </div>
          </div>

          {/* Mockup visual */}
          <div className="solucion-visual reveal reveal-delay-2">
            <div className="solucion-mockup">
              <div className="mockup-bar">
                <div className="mockup-dot" />
                <div className="mockup-dot" />
                <div className="mockup-dot" />
                <div className="mockup-url">impulsoweb.com/tu-negocio</div>
              </div>
              <div className="mockup-body">
                <div className="mockup-hero-block">
                  <div className="mockup-title">Tu Negocio Online</div>
                  <div className="mockup-sub">Profesional · Claro · Que convierte</div>
                  <div className="mockup-btn">Contactar ahora →</div>
                </div>
                <div className="mockup-cards">
                  <div className="mockup-card-mini">
                    <div className="mockup-icon">🎨</div>
                    <div className="mockup-label">Diseño</div>
                  </div>
                  <div className="mockup-card-mini">
                    <div className="mockup-icon">📱</div>
                    <div className="mockup-label">Mobile</div>
                  </div>
                  <div className="mockup-card-mini">
                    <div className="mockup-icon">⚡</div>
                    <div className="mockup-label">Rápido</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="sobre-accent-line" />
          </div>
        </div>
      </div>
    </section>
  );
}
