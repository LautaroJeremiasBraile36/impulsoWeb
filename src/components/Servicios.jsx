const servicios = [
  {
    icon: "🎨",
    title: "Diseño profesional",
    desc: "Interfaces modernas y atractivas que transmiten credibilidad desde el primer segundo.",
  },
  {
    icon: "📱",
    title: "Optimizado para celular",
    desc: "Más del 80% de las visitas vienen desde el celular. Tu landing se ve perfecta en cualquier pantalla.",
  },
  {
    icon: "✍️",
    title: "Copywriting estratégico",
    desc: "Textos pensados para convencer, no solo para informar. Cada palabra tiene un propósito.",
  },
  {
    icon: "💬",
    title: "Botón directo a WhatsApp",
    desc: "El camino más corto entre tu cliente y vos. Sin formularios complejos ni fricciones.",
  },
  {
    icon: "🔍",
    title: "SEO básico incluido",
    desc: "Tu página aparece en Google. Configuración de metadatos y estructura semántica optimizada.",
  },
  {
    icon: "⚡",
    title: "Carga ultrarrápida",
    desc: "Código limpio y optimizado para que ningún visitante se vaya por la lentitud de la página.",
  },
];

export default function Servicios() {
  return (
    <section className="servicios" id="servicios">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag reveal">Incluido en cada proyecto</span>
          <h2 className="reveal reveal-delay-1">¿Qué recibís?</h2>
          <p className="reveal reveal-delay-2">
            Cada landing que desarrollamos incluye todo lo necesario para convertir desde el día uno.
          </p>
        </div>

        <div className="servicios-grid">
          {servicios.map((s, i) => (
            <div
              className={`servicio-card reveal reveal-delay-${(i % 4) + 1}`}
              key={i}
            >
              <div className="servicio-icon-wrap">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
