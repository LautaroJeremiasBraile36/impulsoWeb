import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { connectDB } from "./db.js";
import contactoRouter from "./routes/contacto.route.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;

// ── Middlewares ─────────────────────────────────────────────────────────
const allowedOrigins = [
  "http://localhost:5173",
  "https://impulso-web-delta.vercel.app",
];

app.use(
  cors({
    origin: function (origin, callback) {
      if (!origin) return callback(null, true); // Postman o server-to-server

      if (allowedOrigins.includes(origin)) {
        return callback(null, true);
      } else {
        return callback(new Error("CORS no permitido"));
      }
    },
    methods: ["GET", "POST"],
  }),
);
app.use(express.json());

// ── Rutas ───────────────────────────────────────────────────────────────
app.get("/", (req, res) =>
  res.json({ status: "ImpulsoWeb API running ✅" }),
);
app.use("/api/contacto", contactoRouter);

// ── 404 handler ─────────────────────────────────────────────────────────
app.use((req, res) =>
  res.status(404).json({ error: "Ruta no encontrada" }),
);

// ── Error handler ────────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error("❌ Error:", err.message);
  res.status(500).json({ error: "Error interno del servidor" });
});

// ── Arranque ─────────────────────────────────────────────────────────────
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Servidor corriendo en http://localhost:${PORT}`);
  });
});
