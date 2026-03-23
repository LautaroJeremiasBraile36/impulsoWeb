export default function Testimonios() {
  return (
    <section className="testimonios" id="testimonios">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag reveal">Resultados reales</span>
          <h2 className="reveal reveal-delay-1">Lo que dicen nuestros clientes</h2>
        </div>

        <div className="reveal reveal-delay-2">
          <div className="testimonio-card">
            <div className="testimonio-stars">★★★★★</div>
            <p className="testimonio-text">
              "Desde que lanzamos la landing page, dejamos de depender solo de
              Instagram para conseguir reservas. Ahora los turistas nos encuentran
              en Google y llegan con mucho más intención de reservar. El diseño
              transmite exactamente la experiencia que ofrecemos!"
            </p>
            <div className="testimonio-author">
              <div className="testimonio-avatar">GR</div>
              <div className="testimonio-meta">
                <strong>Glacier Route</strong>
                <span>Emprendimiento turístico · Patagonia</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
