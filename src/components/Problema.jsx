const problemas = [
  {
    icon: "🚫",
    title: "Sin presencia web clara",
    desc: "Perdés clientes potenciales que no entienden qué hacés ni cómo contactarte.",
  },
  {
    icon: "📱",
    title: "Atado a Instagram",
    desc: "Si el algoritmo cambia o la cuenta falla, perdés todo tu canal de ventas.",
  },
  {
    icon: "💬",
    title: "Consultas desordenadas",
    desc: "Sin un proceso claro, cada consulta llega diferente y la conversión baja.",
  },
  {
    icon: "😐",
    title: "Falta de profesionalismo",
    desc: "Sin una web sólida, es difícil transmitir confianza ante nuevos clientes.",
  },
];

export default function Problema() {
  return (
    <section className="problema" id="problema">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag reveal">¿Te identificás?</span>
          <h2 className="reveal reveal-delay-1">¿Te pasa esto?</h2>
          <p className="reveal reveal-delay-2">
            Si alguno de estos puntos te suena familiar, tenés una oportunidad enorme de crecer.
          </p>
        </div>

        <div className="problema-grid">
          {problemas.map((p, i) => (
            <div
              className={`problema-card reveal reveal-delay-${i + 1}`}
              key={i}
            >
              <div className="problema-icon">{p.icon}</div>
              <h3>{p.title}</h3>
              <p>{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
