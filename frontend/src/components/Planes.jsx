const planes = [
  {
    name: "Básico",
    tagline: "Para tener presencia online",
    price: "$119",
    currency: "USD · pago único",
    badge: null,
    features: [
      { text: "1 sección hero + contacto", active: true },
      { text: "Diseño profesional responsive", active: true },
      { text: "Botón de WhatsApp", active: true },
      { text: "Entrega en 3 días hábiles", active: true },
      { text: "Copywriting incluido", active: false },
      { text: "SEO básico", active: false },
      { text: "Google Analytics", active: false },
      { text: "Revisiones ilimitadas", active: false },
    ],
  },
  {
    name: "Pro",
    tagline: "Landing pensada para generar clientes",
    price: "$179",
    currency: "USD · pago único",
    badge: "Más elegido",
    features: [
      { text: "Landing page completa (5-7 secciones)", active: true },
      { text: "Diseño profesional responsive", active: true },
      { text: "Botón de WhatsApp", active: true },
      { text: "Entrega en 5 días hábiles", active: true },
      { text: "Copywriting estratégico incluido", active: true },
      { text: "SEO básico configurado", active: true },
      { text: "Google Analytics", active: false },
      { text: "Revisiones ilimitadas", active: false },
    ],
  },
  {
    name: "Premium",
    tagline: "Sistema completo de ventas online",
    price: "$399",
    currency: "USD · pago único",
    badge: null,
    features: [
      { text: "Landing page completa (7+ secciones)", active: true },
      { text: "Diseño profesional responsive", active: true },
      { text: "Botón de WhatsApp", active: true },
      { text: "Entrega en 7 días hábiles", active: true },
      { text: "Copywriting estratégico incluido", active: true },
      { text: "SEO básico + metadatos avanzados", active: true },
      { text: "Google Analytics configurado", active: true },
      { text: "Revisiones ilimitadas por 30 días", active: true },
    ],
  },
];

export default function Planes() {
  return (
    <section className="planes" id="planes">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag reveal">Inversión</span>
          <h2 className="reveal reveal-delay-1">Planes</h2>
          <p className="reveal reveal-delay-2">
            Precios transparentes. Sin sorpresas. Elegís según tus
            objetivos.
          </p>
        </div>

        <div className="planes-grid">
          {planes.map((plan, i) => (
            <div
              className={`plan-card reveal reveal-delay-${i + 1} ${plan.badge ? "destacado" : ""}`}
              key={i}
            >
              {plan.badge && (
                <div className="plan-badge">{plan.badge}</div>
              )}

              <div className="plan-name">{plan.name}</div>
              <div className="plan-tagline">{plan.tagline}</div>

              <div className="plan-price">
                <strong>{plan.price}</strong>
                <span>{plan.currency}</span>
              </div>

              <ul className="plan-features">
                {plan.features.map((f, j) => (
                  <li key={j} className={f.active ? "" : "disabled"}>
                    {f.text}
                  </li>
                ))}
              </ul>

              <a
                href={`https://wa.me/5491131096630?text=Hola%2C%20quiero%20el%20plan%20${plan.name}`}
                className={`btn ${plan.badge ? "" : "btn-outline"}`}
                style={{ width: "100%", justifyContent: "center" }}
              >
                Quiero este plan
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
