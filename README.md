# Portafolio de Darío Ramos Cañas

Sitio personal hecho con [Astro](https://astro.build) y publicado en GitHub Pages.

## Trabajar en local

Necesitas Node.js 22.23 o superior.

```powershell
npm install
npm run dev       # http://localhost:4321/Portafolio/
npm run build     # genera el sitio en dist/
npm run preview   # sirve dist/ para revisarlo
```

## Dónde cambiar cada cosa

| Qué | Archivo |
| --- | --- |
| Textos, experiencia, habilidades, enlaces | `src/data/perfil.ts` |
| Textos y enlaces de proyectos | `src/data/proyectos.ts` |
| Vistas previas y capturas | `src/components/Proyectos.astro` y `src/assets/proyectos/` |
| Colores y tipografía | `src/styles/global.css` |
| Foto | `src/assets/foto.png` |
| CV descargable | `public/CV-Dario-Ramos-Canas.pdf` |

Las capturas de Druse usan una base de ejemplo con datos ficticios.

## Publicar en GitHub Pages

El repositorio es [darioRamos1/Portafolio](https://github.com/darioRamos1/Portafolio).
Cada `push` a `main` ejecuta `.github/workflows/deploy.yml`, que construye y publica
el sitio en https://darioramos1.github.io/Portafolio/

En **Settings → Pages**, la opción **Source** debe estar en **GitHub Actions**.

Para que la dirección sea https://darioramos1.github.io sin `/Portafolio`, renombra el
repositorio a `darioRamos1.github.io` y quita `base` de `astro.config.mjs`.
