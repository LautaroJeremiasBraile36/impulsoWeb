import { useEffect, useState } from "react";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-logo">
        Impulso<span>Web</span>
      </div>
      <a
        href="https://wa.me/5491131096630?text=Hola%2C%20quiero%20más%20info%20sobre%20las%20landing%20pages"
        className="btn navbar-cta"
      >
        Hablemos
      </a>
    </nav>
  );
}
