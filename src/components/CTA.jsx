export default function CTA() {
  return (
    <section className="cta-final" id="contacto">
      <div className="section-inner">
        <span className="section-tag reveal">¿Listo?</span>
        <h2 className="reveal reveal-delay-1">
          Es momento de
          <br />
          generar más clientes
        </h2>
        <p className="reveal reveal-delay-2">
          Escribime hoy y en menos de 24 hs te cuento cómo podemos hacer
          crecer tu negocio online.
        </p>

        <div className="reveal reveal-delay-3">
          <a
            href="https://wa.me/5491131096630?text=Hola%2C%20quiero%20más%20info%20sobre%20las%20landing%20pages"
            className="btn"
            style={{ fontSize: "1.1rem", padding: "16px 40px" }}
          >
            Escribinos por WhatsApp y cambialo todo →
          </a>
        </div>

        <div className="cta-trust reveal reveal-delay-4">
          <div className="cta-trust-item">
            <span>✅</span> Respuesta en menos de 24 hs
          </div>
          <div className="cta-trust-item">
            <span>💬</span> Sin compromisos
          </div>
          <div className="cta-trust-item">
            <span>🔒</span> Presupuesto sin cargo
          </div>
        </div>
      </div>
    </section>
  );
}
