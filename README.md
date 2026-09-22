# La Cocina De La Turca

Sitio web de La Cocina De La Turca — comida árabe y judía casera (Buenos Aires, Escobar y zona norte).

HTML + SCSS puro, sin frameworks ni build tools pesados. Las animaciones de scroll usan [AOS](https://michalsnik.github.io/aos/) por CDN.

## Estructura del proyecto

```
├── index.html                # Home
├── paginas/
│   ├── carta.html             # Galería de la carta (menú)
│   ├── recetas.html           # Galería de recetas / catálogo
│   ├── pedidosonline.html     # Cómo pedir (WhatsApp / Instagram)
│   └── contacto.html          # Zona de envíos + mapa + redes
├── css/
│   └── estilos.css            # CSS compilado — NO editar a mano, se genera desde scss/
├── scss/
│   ├── estilos.scss           # Punto de entrada: solo importa los partials
│   ├── _variables.scss        # Colores, radios, sombras, breakpoints
│   ├── _mixins.scss           # Mixins de breakpoints y tarjeta
│   ├── _base.scss             # Reset, tipografía base, keyframes
│   ├── _header.scss           # Header, marca, menú (incl. hamburguesa mobile)
│   ├── _hero.scss             # Sección de bienvenida del index
│   ├── _galeria.scss          # Galerías de carta.html / recetas.html
│   ├── _contenido.scss        # pedidosonline.html / contacto.html
│   ├── _footer.scss           # Pie de página + formulario de comentarios
│   └── _flotantes.scss        # Botones flotantes de WhatsApp / Instagram
├── js/
│   └── main.js                # Menú hamburguesa, init de AOS, envío del formulario
├── imagenes/
│   ├── marca/                 # Logo
│   ├── iconos/                # WhatsApp, Instagram, teléfono, mapa
│   ├── inicio/                # Foto de la home
│   ├── carta/                 # Fotos de la carta (menu1/2/3)
│   └── recetas/                # Fotos de recetas + catálogo
└── package.json
```

## Cómo editar los estilos

**No edites `css/estilos.css` directamente** — se pisa cada vez que se compila el SCSS. Editá los archivos en `scss/` y compilá:

```bash
npm install          # instala sass (una sola vez)
npm run build:css    # compila scss/estilos.scss -> css/estilos.css
npm run watch:css    # recompila automáticamente mientras trabajás
```

## Convenciones

- **Mobile-first**: los estilos base son para mobile; los `@include bp-sm/bp-md/bp-lg` (definidos en `_mixins.scss`) agregan las mejoras para pantallas más grandes.
- **Sin `position: absolute` para maquetar**: el layout usa Flexbox y CSS Grid.
- **Colores/sombras/radios** centralizados en `_variables.scss` — si hay que cambiar el color principal de la marca, se cambia en un solo lugar.
- Los formularios de "Contanos tu experiencia" no tienen backend: `js/main.js` sólo evita que la página recargue y muestra un mensaje de agradecimiento. Si en algún momento se conecta a un servicio real (Formspree, un backend propio, etc.), ese es el lugar para engancharlo.

## Páginas y sus enlaces de contacto

El número de WhatsApp (+54 9 11 6283-3618) e Instagram (@lacocina_delaturca) están repetidos en cada página (botón flotante + botón dentro del contenido + footer). Si cambian, conviene actualizar todas las coincidencias de una:

```bash
grep -rn "541162833618\|lacocina_delaturca" --include="*.html" .
```
