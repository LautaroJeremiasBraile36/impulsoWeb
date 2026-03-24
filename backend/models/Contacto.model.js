import mongoose from "mongoose";

const contactoSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      required: [true, "El nombre es requerido"],
      trim: true,
      maxlength: [100, "Nombre demasiado largo"],
    },
    email: {
      type: String,
      required: [true, "El email es requerido"],
      trim: true,
      lowercase: true,
      match: [/\S+@\S+\.\S+/, "Email inválido"],
    },
    whatsapp: {
      type: String,
      trim: true,
      default: "",
    },
    negocio: {
      type: String,
      required: [true, "El rubro del negocio es requerido"],
      trim: true,
      maxlength: [300, "Descripción demasiado larga"],
    },
    plan: {
      type: String,
      required: [true, "El plan es requerido"],
      enum: ["Básico", "Pro", "Premium", "No lo sé aún"],
    },
    mensaje: {
      type: String,
      trim: true,
      maxlength: [1000, "Mensaje demasiado largo"],
      default: "",
    },
    leido: {
      type: Boolean,
      default: false,   // útil para marcar consultas nuevas en el futuro
    },
  },
  {
    timestamps: true,   // crea createdAt y updatedAt automáticamente
  }
);

export default mongoose.model("Contacto", contactoSchema);
