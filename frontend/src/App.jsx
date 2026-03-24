import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Problema from "./components/Problema";
import Solucion from "./components/Solucion";
import Servicios from "./components/Servicios";
import Planes from "./components/Planes";
import Testimonios from "./components/Testimonios";
import SobreMi from "./components/SobreMi";
import Formulario from "./components/Formulario";
import CTA from "./components/CTA";
import Footer from "./components/Footer";
import WhatsAppFloat from "./components/WhatsAppFloat";
import "./styles.css";

function App() {
  // Scroll reveal — Intersection Observer (mínimo JS)
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
          }
        });
      },
      { threshold: 0.12 }
    );

    document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <Problema />
      <Solucion />
      <Servicios />
      <Planes />
      <Testimonios />
      <SobreMi />
      <Formulario /> 
      <CTA />
      <Footer />
      <WhatsAppFloat />
    </>
  );
}

export default App;
