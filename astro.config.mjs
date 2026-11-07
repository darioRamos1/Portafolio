// @ts-check
import { defineConfig } from 'astro/config';

// El sitio se publica en GitHub Pages desde el repositorio `Portafolio`, así que vive
// bajo /Portafolio/. Si algún día pasa a darioRamos1.github.io o a un dominio propio,
// cambia `site` y quita `base`.
export default defineConfig({
  site: 'https://darioramos1.github.io',
  base: '/Portafolio/',
});
