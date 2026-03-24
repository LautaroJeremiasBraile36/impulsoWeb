import { Router } from "express";
import Contacto from "../models/Contacto.model.js";

const router = Router();

// POST /api/contacto
router.post("/", async (req, res) => {
  try {
    const { nombre, email, whatsapp, negocio, plan, mensaje } =
      req.body;

    // Validación mínima server-side (el schema de Mongoose también valida)
    if (
      !nombre?.trim() ||
      !email?.trim() ||
      !negocio?.trim() ||
      !plan?.trim()
    ) {
      return res
        .status(400)
        .json({ error: "Faltan campos requeridos." });
    }

    const contacto = await Contacto.create({
      nombre: nombre.trim(),
      email: email.toLowerCase().trim(),
      whatsapp: whatsapp?.trim(),
      negocio: negocio.trim(),
      plan,
      mensaje: mensaje?.trim(),
    });

    console.log(
      `📬 Nuevo contacto: ${nombre} — ${email} — Plan: ${plan}`,
    );

    return res.status(201).json({
      message: "Contacto guardado correctamente.",
      id: contacto._id,
    });
  } catch (error) {
    // Error de validación de Mongoose
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map(
        (e) => e.message,
      );
      return res.status(400).json({ error: messages.join(" | ") });
    }
    console.error("Error en POST /api/contacto:", error);
    return res
      .status(500)
      .json({ error: "Error al guardar el contacto." });
  }
});

// GET /api/contacto  →  listar todos (útil para vos como admin)
router.get("/", async (req, res) => {
  try {
    const contactos = await Contacto.find().sort({ createdAt: -1 });
    res.json(contactos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener contactos." });
  }
});

export default router;
