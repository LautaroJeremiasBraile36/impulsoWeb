import { useState } from "react";

const INITIAL_STATE = {
  nombre: "",
  email: "",
  whatsapp: "",
  negocio: "",
  plan: "",
  mensaje: "",
};

const PLANES = ["Básico", "Pro", "Premium", "No lo sé aún"];

export default function Formulario() {
  const [form, setForm] = useState(INITIAL_STATE);
  const [status, setStatus] = useState("idle"); // idle | loading | success | error
  const [errors, setErrors] = useState({});

  // ── Validación ──────────────────────────────────────────────────────────
  const validate = () => {
    const e = {};
    if (!form.nombre.trim())              e.nombre   = "Tu nombre es requerido.";
    if (!form.email.trim())               e.email    = "El email es requerido.";
    else if (!/\S+@\S+\.\S+/.test(form.email)) e.email = "Email inválido.";
    if (!form.negocio.trim())             e.negocio  = "Contanos de tu negocio.";
    if (!form.plan)                       e.plan     = "Elegí un plan.";
    return e;
  };

  // ── Handlers ────────────────────────────────────────────────────────────
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validation = validate();
    if (Object.keys(validation).length) {
      setErrors(validation);
      return;
    }

    setStatus("loading");

    try {
      const res = await fetch(
        `${import.meta.env.VITE_API_URL || "http://localhost:4000"}/api/contacto`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(form),
        }
      );

      if (!res.ok) throw new Error("Error del servidor");

      setStatus("success");
      setForm(INITIAL_STATE);
    } catch {
      setStatus("error");
    }
  };

  // ── Render ───────────────────────────────────────────────────────────────
  return (
    <section className="formulario-section" id="contacto-form">
      <div className="section-inner">
        <div className="section-header">
          <span className="section-tag reveal">Contacto</span>
          <h2 className="reveal reveal-delay-1">Empecemos a trabajar</h2>
          <p className="reveal reveal-delay-2">
            Completá el formulario y te respondo en menos de 24 hs con una
            propuesta personalizada.
          </p>
        </div>

        <div className="formulario-wrapper reveal reveal-delay-2">
          {/* ── Estado: éxito ── */}
          {status === "success" ? (
            <div className="form-success">
              <div className="form-success-icon">✅</div>
              <h3>¡Mensaje enviado!</h3>
              <p>
                Gracias <strong>{form.nombre || "por escribirme"}</strong>. Te
                contacto en las próximas 24 hs.
              </p>
              <button
                className="btn"
                onClick={() => setStatus("idle")}
              >
                Enviar otro mensaje
              </button>
            </div>
          ) : (
            <form className="formulario" onSubmit={handleSubmit} noValidate>
              {/* Fila 1 */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="nombre">
                    Nombre <span className="form-required">*</span>
                  </label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    placeholder="Tu nombre"
                    value={form.nombre}
                    onChange={handleChange}
                    className={errors.nombre ? "input-error" : ""}
                    autoComplete="name"
                  />
                  {errors.nombre && (
                    <span className="form-error-msg">{errors.nombre}</span>
                  )}
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    Email <span className="form-required">*</span>
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="tu@email.com"
                    value={form.email}
                    onChange={handleChange}
                    className={errors.email ? "input-error" : ""}
                    autoComplete="email"
                  />
                  {errors.email && (
                    <span className="form-error-msg">{errors.email}</span>
                  )}
                </div>
              </div>

              {/* Fila 2 */}
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="whatsapp">WhatsApp</label>
                  <input
                    id="whatsapp"
                    name="whatsapp"
                    type="tel"
                    placeholder="+54 9 11 XXXX XXXX"
                    value={form.whatsapp}
                    onChange={handleChange}
                    autoComplete="tel"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="plan">
                    Plan de interés <span className="form-required">*</span>
                  </label>
                  <select
                    id="plan"
                    name="plan"
                    value={form.plan}
                    onChange={handleChange}
                    className={errors.plan ? "input-error" : ""}
                  >
                    <option value="" disabled>
                      Elegí un plan
                    </option>
                    {PLANES.map((p) => (
                      <option key={p} value={p}>
                        {p}
                      </option>
                    ))}
                  </select>
                  {errors.plan && (
                    <span className="form-error-msg">{errors.plan}</span>
                  )}
                </div>
              </div>

              {/* Fila 3 */}
              <div className="form-group">
                <label htmlFor="negocio">
                  ¿A qué se dedica tu negocio?{" "}
                  <span className="form-required">*</span>
                </label>
                <input
                  id="negocio"
                  name="negocio"
                  type="text"
                  placeholder="Ej: Vendo ropa online, soy nutricionista, tengo un estudio de tatuajes..."
                  value={form.negocio}
                  onChange={handleChange}
                  className={errors.negocio ? "input-error" : ""}
                />
                {errors.negocio && (
                  <span className="form-error-msg">{errors.negocio}</span>
                )}
              </div>

              {/* Fila 4 */}
              <div className="form-group">
                <label htmlFor="mensaje">¿Algo más que quieras contarme?</label>
                <textarea
                  id="mensaje"
                  name="mensaje"
                  rows={4}
                  placeholder="Contame tu situación, tus objetivos, cualquier detalle que te parezca relevante..."
                  value={form.mensaje}
                  onChange={handleChange}
                />
              </div>

              {/* Error global */}
              {status === "error" && (
                <div className="form-global-error">
                  ⚠️ Hubo un problema al enviar. Intentá de nuevo o escribime
                  directamente por WhatsApp.
                </div>
              )}

              {/* Submit */}
              <button
                type="submit"
                className="btn form-submit"
                disabled={status === "loading"}
              >
                {status === "loading" ? (
                  <>
                    <span className="form-spinner" />
                    Enviando...
                  </>
                ) : (
                  "Enviar mensaje →"
                )}
              </button>

              <p className="form-disclaimer">
                🔒 Tu información es privada. No spam, nunca.
              </p>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
