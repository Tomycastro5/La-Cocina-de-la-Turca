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
