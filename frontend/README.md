<div align="center">

# ⚡ ImpulsoWeb

### Landing page profesional para servicios de desarrollo web

[![React](https://img.shields.io/badge/React-18-61DAFB?style=for-the-badge&logo=react&logoColor=white)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-5-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![CSS3](https://img.shields.io/badge/CSS3-Custom-FF4D00?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![Deploy](https://img.shields.io/badge/Deploy-GitHub%20Pages-181717?style=for-the-badge&logo=github&logoColor=white)](https://pages.github.com/)

<br/>

> **Convertí visitas en clientes.**  
> Landing page orientada a conversión, diseño dark premium, mobile-first y lista para producción.

<br/>

![Preview Hero](https://placehold.co/900x420/0a0a0f/FF4D00?text=ImpulsoWeb+·+Landing+Preview&font=raleway)

</div>

---

## 📋 Tabla de contenidos

- [Vista previa](#-vista-previa)
- [Tecnologías](#-tecnologías)
- [Estructura del proyecto](#-estructura-del-proyecto)
- [Componentes](#-componentes)
- [Instalación y uso](#-instalación-y-uso)
- [Deploy en GitHub Pages](#-deploy-en-github-pages)
- [Personalización](#-personalización)
- [Roadmap](#-roadmap)

---

## 🖼 Vista previa

| Mobile | Desktop |
|:------:|:-------:|
| ![Mobile](https://placehold.co/280x500/13131c/FF4D00?text=Mobile&font=raleway) | ![Desktop](https://placehold.co/560x380/13131c/FF4D00?text=Desktop&font=raleway) |

### Secciones incluidas

| # | Sección | Descripción |
|---|---------|-------------|
| 1 | 🚀 **Hero** | Título animado, subtítulo, CTA doble, scroll hint con parallax |
| 2 | ❓ **Problema** | 4 pain points del cliente en cards con hover interactivo |
| 3 | 💡 **Solución** | Layout 2 columnas + mockup de browser animado + stats |
| 4 | ✅ **Servicios** | 6 cards de lo que incluye cada landing |
| 5 | 💰 **Planes** | 3 tiers con precios, features y CTA individual |
| 6 | ⭐ **Testimonios** | Card de testimonio real con rating |
| 7 | 👤 **Sobre mí** | Bio + foto + skill pills |
| 8 | 📲 **CTA Final** | Llamado a la acción con trust signals |

---

## 🛠 Tecnologías

```
React 18        →  UI por componentes
Vite 5          →  Build tool ultrarrápido
CSS3 puro       →  Sin frameworks de UI, control total
Google Fonts    →  Bebas Neue + Outfit
Intersection    →  Scroll reveal sin librerías
Observer API
```

**Sin dependencias de animación externas.** Todo el movimiento corre sobre CSS keyframes e `IntersectionObserver` nativo.

---

## 📁 Estructura del proyecto

```
impulso-web/
│
├── public/
│   └── favicon.ico
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx          # Navbar fija con glassmorphism al scroll
│   │   ├── Hero.jsx            # Hero con parallax y animaciones de entrada
│   │   ├── Problema.jsx        # Cards de pain points
│   │   ├── Solucion.jsx        # Layout split + mockup visual
│   │   ├── Servicios.jsx       # Grid de 6 servicios
│   │   ├── Planes.jsx          # Pricing cards con features
│   │   ├── Testimonios.jsx     # Testimonio destacado
│   │   ├── SobreMi.jsx         # Bio personal + skills
│   │   ├── CTA.jsx             # Sección final de conversión
│   │   ├── Footer.jsx          # Footer simple
│   │   └── WhatsAppFloat.jsx   # Botón flotante de WhatsApp
│   │
│   ├── App.jsx                 # Raíz: renderiza componentes + scroll reveal
│   ├── main.jsx                # Entry point
│   └── styles.css              # Todo el CSS (variables, layout, responsive)
│
├── index.html
├── vite.config.js
├── package.json
└── README.md
```

---

## 🧩 Componentes

### `Navbar`
Barra de navegación fija. Detecta scroll con `useState` + `useEffect` y aplica glassmorphism (`backdrop-filter: blur`) una vez que el usuario baja más de 40px.

### `Hero`
Sección principal con:
- Animaciones de entrada escalonadas via CSS `animation-delay`
- Efecto **parallax** en el fondo con `transform: translateY` al scroll
- Grid de líneas + radial glow naranja + noise texture overlay
- Scroll hint animado

### `App` — Scroll Reveal
```js
// IntersectionObserver: activa .visible cuando el elemento entra al viewport
const observer = new IntersectionObserver(
  (entries) => entries.forEach(e => e.isIntersecting && e.target.classList.add("visible")),
  { threshold: 0.12 }
);
document.querySelectorAll(".reveal").forEach(el => observer.observe(el));
```

Cada componente usa las clases `.reveal` y `.reveal-delay-{1-4}` para efectos escalonados.

---

## ⚙️ Instalación y uso

### Requisitos
- Node.js `>= 18`
- npm o pnpm

### Pasos

```bash
# 1. Clonar el repositorio
git clone https://github.com/tu-usuario/impulso-web.git
cd impulso-web

# 2. Instalar dependencias
npm install

# 3. Iniciar servidor de desarrollo
npm run dev
```

Abrí `http://localhost:5173` en tu navegador.

```bash
# Build de producción
npm run build

# Preview del build
npm run preview
```

---

## 🚀 Deploy en GitHub Pages

### Opción A — Deploy manual (recomendado para empezar)

```bash
# 1. Instalar gh-pages
npm install --save-dev gh-pages

# 2. Agregar en package.json:
#    "homepage": "https://tu-usuario.github.io/impulso-web"
#    "predeploy": "npm run build"
#    "deploy": "gh-pages -d dist"

# 3. Deployar
npm run deploy
```

### Opción B — GitHub Actions (CI/CD automático)

Creá el archivo `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20

      - run: npm install
      - run: npm run build

      - uses: peaceiris/actions-gh-pages@v4
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./dist
```

> Con esta config, cada `git push` a `main` despliega automáticamente. 🎉

### Configuración de Vite para subdirectorio

Si el repo **no** es `tu-usuario.github.io` (dominio raíz), agregá esto en `vite.config.js`:

```js
export default defineConfig({
  base: '/impulso-web/',   // nombre exacto del repo
  plugins: [react()],
})
```

---

## 🎨 Personalización

### Variables CSS — `src/styles.css`

```css
:root {
  --accent:       #ff4d00;   /* Color naranja principal */
  --bg-dark:      #0a0a0f;   /* Fondo oscuro */
  --bg-card:      #13131c;   /* Fondo de cards */
  --text-primary: #f0ede8;   /* Texto principal */
  --text-muted:   #8a8a9a;   /* Texto secundario */
}
```

### Número de WhatsApp

Buscá y reemplazá `549XXXXXXXXXX` en todos los componentes con tu número real:

```
549 → código de Argentina
11 → código de área (sin 0)
XXXXXXXX → tu número (sin 15)

Ejemplo: 5491134567890
```

### Foto de perfil — `SobreMi.jsx`

```jsx
// Reemplazá el placeholder por:
<img src="/tu-foto.jpg" alt="Tu nombre" />

// Copiá la foto a /public/tu-foto.jpg
```

### Precios — `Planes.jsx`

Los precios están en el array `planes[]` al inicio del archivo. Modificá `price`, `currency` y el array `features` según necesites.

---

## 🗺 Roadmap

- [ ] Agregar logo SVG en Navbar
- [ ] Sección de portfolio / trabajos anteriores
- [ ] Formulario de contacto con EmailJS o Formspree
- [ ] Más testimonios (slider con Embla o Swiper)
- [ ] Animación de texto rotativo en el Hero
- [ ] Google Analytics / Meta Pixel
- [ ] Dominio personalizado

---

## 📄 Licencia

Este proyecto es de uso personal. Si te inspira para tu propio proyecto, ¡adelante!  
Para uso comercial o redistribución, contactame.

---

<div align="center">

Hecho con 🧡 por **ImpulsoWeb**

[📲 WhatsApp](https://wa.me/549XXXXXXXXXX) · [🌐 impulsoweb.com](https://impulsoweb.com)

</div>