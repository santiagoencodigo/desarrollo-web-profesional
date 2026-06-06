# 🛍️ Santiagoencodigo's AnimeShop

**Donde el anime se encuentra con el desarrollo web.**

![AnimeShop](https://img.shields.io/badge/status-active-brightgreen) ![HTML5](https://img.shields.io/badge/HTML5-E34F26?logo=html5&logoColor=white) ![CSS3](https://img.shields.io/badge/CSS3-1572B6?logo=css3&logoColor=white) ![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black) ![Bootstrap](https://img.shields.io/badge/Bootstrap-7952B3?logo=bootstrap&logoColor=white)

**AnimeShop** es un proyecto personal de frontend que simula una tienda temática inspirada en los universos de **One Piece** y **Naruto**. Más que una tienda real, esta landing page es un laboratorio de aprendizaje, una evidencia de habilidades y una pieza de portafolio profesional.

---

## Tabla de Contenidos

- [Historia y Contexto de Aprendizaje](#historia-y-contexto-de-aprendizaje)
- [Filosofía](#filosofía)
- [Características Implementadas](#características-implementadas)
- [Diseño e Identidad Visual](#diseño-e-identidad-visual)
- [Catálogo de Productos](#catálogo-de-productos)
- [Decisiones de Desarrollo](#decisiones-de-desarrollo)
- [Capturas de Pantalla](#capturas-de-pantalla)
- [Tecnologías Utilizadas](#tecnologías-utilizadas)

---

## Historia y Contexto de Aprendizaje

Este proyecto nace de la combinación de dos cursos de [Platzi](https://platzi.com/):

- **Curso de Frontend Developer**: fundamentos de HTML, CSS, Flexbox, Grid, responsive design y arquitecturas CSS.
- **Curso Práctico de Frontend Developer**: construcción de interfaces ecommerce como login, registro, carrito, órdenes, etc.

El ejercicio original proponía replicar múltiples pantallas independientes (login, recuperación de contraseña, mis órdenes…). Sin embargo, tomé la decisión de **reinterpretar el desafío**: en lugar de dispersarme en muchas vistas, construí una **landing page robusta** con identidad propia, donde pudiera aplicar los mismos conceptos enseñados pero dentro de un proyecto significativo para mí.

Así nació **Santiagoencodigo's AnimeShop**, una tienda ficticia que encapsula mi aprendizaje y mi estilo como desarrollador.

---

## Filosofía

- **Aprender haciendo**: cada línea de código fue una oportunidad para reforzar conocimientos.
- **Calidad sobre cantidad**: mejor una página bien pulida que diez vistas mediocres.
- **Identidad única**: no quería otra tienda genérica. AnimeShop debía reflejar mis intereses y mi marca personal.
- **Escalabilidad**: aunque hoy es un frontend estático, la arquitectura está pensada para crecer con backend y base de datos.

---

## Características Implementadas

### Hero Interactivo
Un fondo animado con partículas estelares generadas mediante Canvas y JavaScript. Sobre él, un texto dinámico con efecto de escritura (typewriter) que alterna entre frases alusivas a las colecciones y mi nombre.

### Branding Dinámico en el Header
El nombre del sitio rota suavemente entre tres versiones: el nombre completo, “AnimeShop by santiagoencodigo” y “Built with HTML, CSS, JavaScript” (con los colores representativos de cada tecnología).

### Carrusel de Productos Destacados
Implementado con Bootstrap, muestra cinco productos seleccionados automáticamente. Incluye controles, indicadores y transiciones suaves.

### Sistema de Productos y Catálogo
Doce productos ficticios se renderizan dinámicamente con JavaScript Vanilla. Cada tarjeta contiene imagen, nombre, categoría, precio y botones de acción (“Ver Producto” y “Agregar al Carrito”).

### Filtros y Ordenamiento
El catálogo permite filtrar por categoría (Todos, One Piece, Naruto) y ordenar por precio (ascendente/descendente) o nombre (A–Z). Un contador se actualiza en tiempo real.

### Navegación con Scroll Suave
Los enlaces del menú principal desplazan suavemente a las secciones correspondientes y resaltan la sección activa según la posición del scroll.

###  Acciones de Header
- **Búsqueda**: campo expandible con animación.
- **Carrito**: contador visual que se incrementa al agregar productos (con feedback emergente).
- **Menú de usuario**: dropdown con opciones simuladas (Mi Perfil, Pedidos, Iniciar Sesión).

### Sección “Más que una tienda”
Un carrusel temático con dos slides (One Piece y Naruto) que mezcla imágenes, descripciones emocionales y botones de exploración.

### Newsletter Temático (“Únete a la Aventura”)
Formulario con validación de email, dos bloques visuales (Piratas / Aldeas Shinobi) y mensaje de éxito aleatorio inspirado en el anime.

### Footer Completo
Incluye enlaces de navegación, proyecto (GitHub, documentación, portafolio) y copyright con mención a las tecnologías usadas.

---

## Diseño e Identidad Visual

### Paleta de Colores
| Color         | Código HEX |
|---------------|------------|
| Cream         | `#FDEB9E`  |
| Mint          | `#7AE2CF`  |
| Teal          | `#077A7D`  |
| Navy          | `#06202B`  |
| Deep Teal     | `#007979`  |
| Cyan          | `#24B1B1`  |
| Warm White    | `#FFF0E4`  |
| Peach         | `#FFE0C5`  |

### Tipografías
- **Títulos**: [Silkscreen](https://fonts.google.com/specimen/Silkscreen) (estilo pixel/retro que evoca videojuegos y cultura geek).
- **Cuerpo de texto**: [Space Grotesk](https://fonts.google.com/specimen/Space+Grotesk) (legibilidad moderna, excelente para interfaces limpias).

La combinación busca un equilibrio entre personalidad y profesionalismo, alejándose de lo infantil pero manteniendo un guiño a la cultura anime/gamer.

### Inspiración Visual
El diseño bebe de referencias como Stripe, Linear, Vercel y Shopify: minimalismo, alto contraste, sombras suaves y transiciones elegantes. Nada de recargos ni estridencias.

---

## Catálogo de Productos

Los productos son **ficticios** y fueron generados exclusivamente para este proyecto. Representan figuras, réplicas y coleccionables inspirados en ambas franquicias.

**Colección One Piece** (6 productos): Luffy, Zoro, Going Merry, Sombrero de Paja, Ace, Thousand Sunny.  
**Colección Naruto** (6 productos): Naruto, Sasuke, Kakashi, Itachi, Símbolo de Konoha, Kurama.

Todas las imágenes están alojadas en `Assets/` y se cargan dinámicamente desde JavaScript.

---

## Decisiones de Desarrollo

1. **Landing page sobre múltiples vistas**: preferí concentrar el esfuerzo en una sola página de alto impacto que demostrara dominio de múltiples conceptos a la vez.
2. **JavaScript Vanilla sin frameworks**: no necesitaba React o Vue para este alcance; quería reforzar mis bases.
3. **Bootstrap como aliado, no como muleta**: usé su grid, carrusel y utilidades, pero todo el diseño visual está personalizado con CSS.
4. **HTML semántico obligatorio**: evité `<div>` innecesarios; cada sección usa etiquetas como `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.
5. **SEO y accesibilidad desde el día uno**: metadatos, atributos `aria`, roles, textos alternativos y contraste adecuado.
6. **CSS con variables globales**: facilita cambios futuros y promueve consistencia.

---

## Capturas de Pantalla

> Son algunas secciones.

### Hero

<img src="../Assets/img/00-AnimeShop/01-hero.png">

### Productos Destacados

<img src="../Assets/img/00-AnimeShop/02-productos-destacados.PNG">

### Newsletter

<img src="../Assets/img/00-AnimeShop/03-newsletter.PNG">

---

## Tecnologías Utilizadas

| Tecnología | Uso |
|------------|-----|
| HTML5      | Estructura semántica del contenido |
| CSS3       | Diseño visual, animaciones, responsive |
| JavaScript (ES6+) | Lógica de catálogo, carrito, typewriter, partículas |
| Bootstrap 5 | Sistema de grid, carruseles y componentes accesibles |
| Google Fonts | Tipografías Silkscreen y Space Grotesk |

---

> Gracias por leer.