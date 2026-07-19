# Programación Básica: Mokepon

### Desarrollando un juego con HTML y JavaScript

1. [Manipulación del DOM y Eventos en JavaScript para Juegos Web](#manipulación-del-dom-y-eventos-en-javascript-para-juegos-web)

2. [Maquetación de Páginas Web para Videojuegos en HTML](#maquetación-de-páginas-web-para-videojuegos-en-html)

3. [Selección de Mascotas en HTML para Juegos Interactivos](#selección-de-mascotas-en-html-para-juegos-interactivos)

4. [Programar eventos de click en botones HTML con JavaScript](#programar-eventos-de-click-en-botones-html-con-javascript)

5. [Eventos de Carga en JavaScript: Iniciar Juego y Seleccionar Mascota](#eventos-de-carga-en-javascript-iniciar-juego-y-seleccionar-mascota)

6. [Selección de Mascota en JavaScript: Implementación y Validación](#selección-de-mascota-en-javascript-implementación-y-validación)

7. [Manipulación del DOM con JavaScript para mostrar mascota seleccionada](#manipulación-del-dom-con-javascript-para-mostrar-mascota-seleccionada)

8. [Selección Aleatoria de Mascota Enemiga en JavaScript](#selección-aleatoria-de-mascota-enemiga-en-javascript)

9. [Eventos de clic y lógica de ataque en JavaScript](#eventos-de-clic-y-lógica-de-ataque-en-javascript)

10. [Ataques Aleatorios para Mascotas Enemigas en JavaScript](#ataques-aleatorios-para-mascotas-enemigas-en-javascript)

11. [Creación de Mensajes Dinámicos en Combate HTML y JavaScript](#creación-de-mensajes-dinámicos-en-combate-html-y-javascript)

12. [Lógica de Combate en JavaScript para juego Mokepon](#lógica-de-combate-en-javascript-para-juego-mokepon)

13. [Operadores Lógicos en Programación: AND, OR y NOT](#operadores-lógicos-en-programación-and-or-y-not)

14. [Actualización de Vidas en Juego de Combate con JavaScript](#actualización-de-vidas-en-juego-de-combate-con-javascript)

15. [Validación de Vidas y Mensaje Final en Juegos](#validación-de-vidas-y-mensaje-final-en-juegos)

16. [Funcionalidad de Reinicio y Desactivación de Botones en Juego](#funcionalidad-de-reinicio-y-desactivación-de-botones-en-juego)

17. [Mostrar y Ocultar secciones en HTML con JavaScript](#mostrar-y-ocultar-secciones-en-html-con-javascript)


---


## Manipulación del DOM y Eventos en JavaScript para Juegos Web

Cuando se ingresa a un sitio web, ocurren múltiples procesos internos.
Antes de mostrarse el contenido, el navegador interpreta el código y prepara la estructura visual y lógica de la página.

Durante la carga inicial, el sitio web pasa por un estado en el que el contenido aún no es visible.
Este proceso ocurre tan rápido que normalmente el usuario no percibe la transición desde una pantalla en blanco.

Durante la carga inicial, el sitio web pasa por un estado en el que el contenido aún no es visible.
Este proceso ocurre tan rápido que normalmente el usuario no percibe la transición desde una pantalla en blanco.

**Lecturas Recomendadas:**

* Introducción a los eventos en JS by MDN: https://developer.mozilla.org/es/docs/Learn_web_development/Core/Scripting/Events

* Eventos en JS by w3schools: https://www.w3schools.com/js/js_events.asp

* Programación Dirigida por Eventos by Wikipedia: https://es.wikipedia.org/wiki/Programaci%C3%B3n_dirigida_por_eventos

Como programador, se define qué acción se ejecuta cuando ocurre un evento específico.
Este control permite crear interactividad y comportamiento dinámico en una aplicación web.

<img src="https://personales.unican.es/corcuerp/sistinf/tecweb/Slides/images/figure_3_event.png">

*Imagen Tomada De: https://byspel.com/eventos-en-javascript/*

El DOM es una representación estructurada del documento HTML que el navegador crea en memoria.
Permite acceder, modificar y manipular los elementos de la página usando JavaScript.

**Lecturas Recomendadas:**

* Qué es el DOM by freecodecamp: https://www.freecodecamp.org/espanol/news/que-es-el-dom-el-significado-del-modelo-de-objeto-de-documento-en-javascript/

* DOM by Wikipedia: https://es.wikipedia.org/wiki/Document_Object_Model

* DOM by MDN: https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model

<img src="https://www.ionos.com/es-us/digitalguide/fileadmin/DigitalGuide/Schaubilder/representacion-grafica-de-un-dom-tree.png">

*Imagen Tomada De: https://www.ionos.com/es-us/digitalguide/paginas-web/desarrollo-web/presentacion-de-document-object-model-dom/*

Window es el objeto global que representa la ventana del navegador.
Desde este objeto se puede acceder a funcionalidades del navegador y al documento cargado.

* Window concept by MDN: https://developer.mozilla.org/es/docs/Web/API/Window

Dentro del objeto Window se encuentra el objeto Document.
Document representa el contenido HTML, es decir, lo que está dentro de la etiqueta (html).

* Document concept by MDN: https://developer.mozilla.org/es/docs/Web/API/Document

addEventListener es un método que permite escuchar eventos y ejecutar una función cuando ocurren.
Es una forma flexible y estándar de manejar eventos en JavaScript.

* addEventListener by MDN: https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener

Si el tamaño del navegador cambia, se puede detectar este evento y ejecutar una acción específica.
Esto es útil para adaptar el diseño o comportamiento de la página.

El scaffolding o andamiaje es la estructura base de un proyecto.
Define carpetas, archivos y organización inicial antes de desarrollar funcionalidades complejas.

* Andiamaje by Wikipedia: https://es.wikipedia.org/wiki/Andamiaje_(programaci%C3%B3n)

---

Finalmente se crea una carpeta llamada mokepon.

Se crea un documento HTML con la estructura mínima necesaria para iniciar el proyecto del juego.
Esta base permite ir agregando elementos visuales y lógicos progresivamente.

Mokepon es un juego basado en tres monstruos con habilidades de fuego, agua y tierra.
Cada tipo tiene fortalezas y debilidades frente a los demás.

---

La etiqueta (button) se utiliza para crear botones interactivos en una página web.
Estos botones son elementos clave para disparar eventos en juegos web.

* https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/button

Es una buena práctica colocar la etiqueta (button) dentro de una etiqueta contenedora.
Esto mejora la organización del HTML y facilita el manejo de estilos y eventos.












---












## Maquetación de Páginas Web para Videojuegos en HTML

A continuación si desea mirar lo que se esta desarrollando:

* [Proyecto](https://santiagoencodigo.github.io/Desarrollo-Web-Profesional/pages/04-programacion-basica/02-mokepon/mokepon.html "Mokepon - Demo en vivo by Santiagoencodigo")

* [Código HTML](https://github.com/santiagoencodigo/Desarrollo-Web-Profesional/blob/main/pages/04-programacion-basica/02-mokepon/mokepon.html)

* [Código JavaScript](https://github.com/santiagoencodigo/Desarrollo-Web-Profesional/blob/main/pages/04-programacion-basica/02-mokepon/js/mokepon.js)

* [Código CSS](https://github.com/santiagoencodigo/Desarrollo-Web-Profesional/blob/main/pages/04-programacion-basica/02-mokepon/mokepon.css)

---

La maquetación es el proceso de organizar y estructurar visualmente los elementos de una página web.
Define cómo se distribuyen los componentes en pantalla antes de aplicar estilos o lógica avanzada.

* Maquetación by Wikipedia: https://es.wikipedia.org/wiki/Maquetaci%C3%B3n

El juego requiere que el usuario primero seleccione una mascota por medio de botones y, posteriormente, pueda elegir entre distintos ataques.
Este flujo define el orden lógico de interacción dentro del juego.

Se crean tres botones que representan los ataques disponibles: Fuego, Agua y Tierra.
Estos botones permiten al usuario interactuar con el juego y ejecutar acciones específicas.

* Button en HTML by MDN: https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/button

La etiqueta (section) se utiliza para dividir una página en secciones semánticas.
Cada sección representa un bloque de contenido con un propósito específico.

Una section agrupa contenido relacionado dentro del documento.
Su uso mejora la legibilidad del código y la organización estructural de la página.

* Section en HTML by MDN: https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/section

El atributo id="" permite identificar un elemento de forma única dentro del documento HTML.
Es fundamental para poder acceder a elementos desde CSS o JavaScript.

En los nombres de id no se permiten espacios.
Se recomienda usar guiones (-), guiones bajos (_) o notación camelCase, como SeleccionarMascota.

* ID en HTML by MDN: https://developer.mozilla.org/es/docs/Web/HTML/Reference/Global_attributes/id

* ID en HTML by w3schools: https://www.w3schools.com/html/html_id.asp

Se crea una sección con id seleccionar-mascota que contiene un título y los elementos necesarios para elegir una mascota.
Incluye un botón que confirma la selección del jugador.

Se crea una sección con id seleccionar-ataque que contiene un título (h2) con el texto “Elige tu ataque”.
En esta sección se encuentran los botones de ataque disponibles.

El juego incluye un sistema de vidas tanto para el jugador como para el enemigo.
Cada uno comienza con 3 vidas, las cuales disminuyen según el resultado de los ataques.

* Una página dinámica es aquella cuyo contenido puede cambiar durante la ejecución, normalmente mediante JavaScript.
Los valores no están definidos de forma fija en el HTML.

* Una página estática muestra contenido fijo que no cambia durante la ejecución.
El contenido está definido directamente en el archivo HTML.

La etiqueta (span) es un contenedor en línea utilizado para envolver pequeñas porciones de texto.
No tiene significado visual propio, pero es muy útil para manipulación con JavaScript.

Los (span) se utilizan para mostrar valores que pueden cambiar, como vidas del jugador o del enemigo.
JavaScript puede modificar su contenido sin recargar la página.

El mensaje puede mostrar información como:
“El jugador atacó con Fuego, el enemigo atacó con Tierra — ganaste”.
Este contenido no se define en el HTML, sino que se genera dinámicamente.

* span en HTML by MDN: https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/span

La etiqueta (h1) debe utilizarse una sola vez por página.
Representa el título principal del documento y mejora la accesibilidad y el SEO.

Se crea una sección con id mensajes que contiene un párrafo dinámico.
El texto de este párrafo se actualiza mediante JavaScript según el resultado de cada combate.

Se crea una sección con id reiniciar que contiene un botón para reiniciar el juego.
Este botón permite volver al estado inicial sin recargar la página.

<img src="https://i1.wp.com/css-tricks.com/wp-content/uploads/2019/06/sections-diagram.png?resize=1024%2C656&ssl=1">

*Imagen Tomada De: https://css-tricks.com/how-to-section-your-html/*










---










## Selección de Mascotas en HTML para Juegos Interactivos

El juego presenta distintas mascotas, cada una con uno o dos poderes elementales.
Hipodoge utiliza el poder de Agua, Capipepo el poder de Tierra y Ratigueya el poder de Fuego.
También existen combinaciones de poderes como Langostelvis (Agua y Fuego), Tucapalma (Agua y Tierra) y Pydos (Tierra y Fuego).

La etiqueta (input) permite recibir información del usuario.
Es uno de los elementos fundamentales para la interacción en páginas web.

Existen diferentes tipos de (input), cada uno diseñado para un propósito específico.
El comportamiento del input depende del valor asignado a su atributo type.

El input type text es el tipo de entrada por defecto.
Se utiliza para que el usuario ingrese texto libre.

El input type checkbox permite seleccionar una o varias opciones.
Es comúnmente usado para aceptar términos y condiciones.

* input en HTML by MDN: https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/input

El input type radio permite seleccionar una sola opción dentro de un grupo.
Es ideal para elecciones exclusivas, como seleccionar una única mascota.

Al asignar el mismo valor al atributo name="mascota", el navegador entiende que los inputs radio pertenecen al mismo grupo.
Esto garantiza que solo una mascota pueda ser seleccionada a la vez.

* name en inputs en HTML by MDN: https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/input#name

Cada input radio recibe un id único basado en el nombre de la mascota, como Hipodoge, Capipepo o Ratigueya.
El id permite referenciar el input de forma precisa.

La etiqueta (label) se utiliza para describir un input y mejorar la accesibilidad.
Indica visualmente a qué corresponde cada campo de selección.

* label en HTML by MDN: https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/label

Al agregar el atributo for al (label) con el mismo valor del id del input, ambos quedan vinculados.
Esto permite seleccionar la opción haciendo clic sobre el texto, no solo sobre el círculo del radio.

La vinculación entre (label) e (input) mejora la usabilidad y claridad del formulario.
El usuario puede identificar y seleccionar fácilmente la mascota deseada.

<img src="https://static.platzi.com/media/user_upload/Captura%20de%20pantalla%20%284%29-c01e9eb1-b05f-4758-9742-7c6eb933c127.jpg">

*Imagen Tomada De: https://platzi.com/cursos/programacion-basica/51993-maquetacion-elegir-mascota/*












---












## Programar eventos de click en botones HTML con JavaScript

Aunque los inputs y botones estén presentes en el HTML, **por sí solos no ejecutan ninguna acción.**
Para que respondan a la interacción del usuario es necesario programar su comportamiento con JavaScript.

El código JavaScript se vincula al documento HTML mediante la etiqueta (script) utilizando el atributo src.
Esta práctica permite mantener una estructura más profesional separando la lógica del contenido.

* script en HTML by w3school: https://www.w3schools.com/tags/att_script_src.asp

* script by freecodecamp: https://www.freecodecamp.org/espanol/news/como-enlazar-a-un-documento-javascript-en-html/

En las rutas de archivos, el símbolo . indica que el archivo se encuentra en la misma carpeta que el archivo actual.
Es comúnmente utilizado para rutas relativas.

El símbolo / se utiliza para acceder a carpetas dentro de una ruta.
Permite navegar por la estructura de directorios del proyecto.

Se crea una carpeta llamada js dentro del proyecto Mokepon.
Dentro de esta carpeta se crea el archivo mokepon.js, donde se escribe toda la lógica del juego.

Cada botón del HTML recibe un id único para poder ser identificado desde JavaScript.
Esto incluye el botón de selección de mascota, los botones de ataque y el botón de reinicio.

El objeto document representa el contenido HTML cargado en el navegador.
Permite acceder y manipular los elementos de la página.

* Document en JS by MDN: https://developer.mozilla.org/es/docs/Web/API/Document

El objeto document incluye múltiples métodos para interactuar con el DOM.
Uno de los más utilizados es getElementById.

El método getElementById permite obtener un elemento del HTML a partir de su id.
Devuelve una referencia que puede ser almacenada en una variable.

* getElementById en JS by MDN: https://developer.mozilla.org/es/docs/Web/API/Document/getElementById

Los elementos del DOM se almacenan en variables para facilitar su uso posterior.
Esto permite trabajar con ellos de forma clara y organizada.

Una vez identificado un elemento, se puede asignar un evento que escuche una acción específica del usuario.
En este caso, el evento será un clic.

El método addEventListener permite escuchar un evento y ejecutar una función cuando ocurre.
Es una forma estándar y flexible de manejar interacciones.

* addEventListener en JS by MDN: https://developer.mozilla.org/es/docs/Web/API/EventTarget/addEventListener

La función seleccionarMascotaJugador se ejecuta cuando el usuario hace clic en el botón.
Esta función contiene la lógica que se desea ejecutar tras la interacción.

Los argumentos son valores que se envían a una función cuando es invocada.
Permiten que la función trabaje con información externa.

Cuando ocurre un error, es una buena práctica abrir la consola del navegador desde las herramientas de inspección.
La consola permite identificar errores y entender qué está fallando en el código.

Si el (script) se carga antes de que los elementos HTML existan, JavaScript no podrá encontrarlos.
Por esta razón, se recomienda colocar la etiqueta (script) justo antes de que termine el (body).

    let BotonMascotaSeleccionar = document.getElementById('boton-seccionar-mascota')
    BotonMascotaSeleccionar.addEventListener('click', seleccionarMascota)

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a1/Linux_kernel_INPUT_OUPUT_evdev_gem_USB_framebuffer.svg/500px-Linux_kernel_INPUT_OUPUT_evdev_gem_USB_framebuffer.svg.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Interfaz_de_usuario*













---













## Eventos de Carga en JavaScript: Iniciar Juego y Seleccionar Mascota

Existen distintas formas de manejar la carga de JavaScript en un documento HTML.
Cuando el (script) se coloca en el (head), el navegador ejecuta el código JavaScript antes de que los elementos del (body) hayan sido creados.

Si el JavaScript se ejecuta antes de que el HTML del (body) exista, el código no puede acceder a botones, inputs u otros elementos.
Esto ocurre porque, en ese momento, el documento HTML aún está vacío.

Para solucionar este problema, se utiliza el objeto window junto con eventos de carga.
De esta manera, el código JavaScript se ejecuta únicamente cuando toda la página ha sido cargada.

* window en JS by MDN: https://developer.mozilla.org/es/docs/Web/API/Window

El método addEventListener permite escuchar eventos del navegador.
Al usar el evento load, se garantiza que el código se ejecute solo cuando el HTML, CSS y demás recursos ya estén disponibles.

* load en JS by MDN: https://developer.mozilla.org/en-US/docs/Web/API/Window/load_event

Se registra un evento de carga utilizando **window.addEventListener('load', iniciarJuego)**.
Esto indica que, cuando la página termine de cargar, se ejecutará la función iniciarJuego.

<img src="https://storage.googleapis.com/hwhistlr.appspot.com/og/understanding-load.png">

*Imagen Tomada De: https://samthor.au/2020/understanding-load/*

* window es el objeto global que representa la ventana del navegador.
Desde este objeto se puede acceder a eventos, dimensiones de la pantalla y al documento cargado.

* El evento load se dispara cuando el navegador termina de cargar completamente la página.
Incluye el HTML, los estilos, imágenes y scripts vinculados.

En la parte superior del archivo JavaScript se define la función iniciarJuego().
Dentro de esta función se coloca todo el código que depende de que el HTML esté completamente cargado.

Dentro de iniciarJuego() se crean las variables que almacenan los botones e inputs del DOM utilizando document.getElementById.
También se asignan los eventos correspondientes mediante addEventListener.










---










## Selección de Mascota en JavaScript: Implementación y Validación

Para saber qué mascota seleccionó el usuario, se accede a cada input de tipo radio.
Se crean variables como inputHipodoge, inputCapipepo e inputRatigueya, cada una referenciando su respectivo input.

Al hacer clic en el botón de seleccionar mascota, se evalúa cada input mediante condicionales.
Si un input está seleccionado, se asigna el nombre de la mascota a una variable.

<img src="https://static.platzi.com/media/user_upload/selecciona%20una%20mascota-99ad234c-40c8-439d-999d-77161db08c3f.jpg">

*Imagen Tomada De: https://platzi.com/cursos/programacion-basica/addeventlistener/*

En el desarrollo de aplicaciones interactivas es fundamental ser minucioso con la lógica del programa.
Cada posible acción del usuario debe estar contemplada para evitar comportamientos inesperados.

Cuando el usuario no selecciona ninguna mascota y aun así intenta continuar, el sistema debe responder de forma clara.
Si no se valida este escenario, el usuario puede interpretar que la aplicación está fallando o se encuentra rota.

Un mensaje de validación permite informar al usuario que debe seleccionar una mascota antes de avanzar.
Esta retroalimentación mejora la experiencia de uso y reduce la confusión.

La validación de entradas no solo previene errores lógicos, sino que también demuestra un diseño cuidadoso y profesional.
Anticiparse a los posibles errores del usuario es parte esencial del desarrollo de software.

Al exigir una selección válida, se garantiza que el flujo del juego continúe únicamente cuando se cumplan las condiciones necesarias.

> Esto asegura coherencia en la lógica y estabilidad en la ejecución del programa.

La propiedad .checked permite saber si un input de tipo radio o checkbox está seleccionado.
Devuelve un valor booleano que puede utilizarse directamente en una condición.

* https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/input/checkbox

> Booleano: False or True

<img src="https://media.geeksforgeeks.org/wp-content/uploads/20240516103412/HTML-input-type=radio-2.gif">

*Imagen Tomada De: https://www.geeksforgeeks.org/html/html-input-typeradio/*












---












## Manipulación del DOM con JavaScript para mostrar mascota seleccionada

La manipulación del DOM (Document Object Model) consiste en acceder y modificar dinámicamente los elementos HTML de una página web utilizando JavaScript.
Esto permite actualizar el contenido, la estructura o el estilo de la interfaz sin necesidad de recargar la página.

* Qué es el DOM by MDN: https://developer.mozilla.org/es/docs/Web/API/Document_Object_Model

<img src="https://www.freecodecamp.org/news/content/images/2021/09/Document.jpg">

*Imagen Tomada De: https://www.freecodecamp.org/espanol/news/que-es-el-dom-el-significado-del-modelo-de-objeto-de-documento-en-javascript/

Para mostrar la mascota seleccionada por el jugador, se agrega una etiqueta span dentro del texto informativo:

    “Tu mascota <span> tiene 3 vidas”

* span en HTML by MDN: https://developer.mozilla.org/es/docs/Web/HTML/Reference/Elements/span

A este **span** se le asigna el identificador mascota-jugador, lo que permite acceder a él desde JavaScript y modificar su contenido dinámicamente.

**Para esto se usara el método innerHTML:**

innerHTML es una propiedad de los elementos del DOM que permite obtener o modificar el contenido HTML interno de un elemento.
Mediante esta propiedad, es posible cambiar texto o insertar etiquetas HTML de forma dinámica.

* innerHTML by MDN: https://developer.mozilla.org/es/docs/Web/API/Element/innerHTML

En lugar de mostrar un alert, se utiliza innerHTML para actualizar directamente el contenido del span según la mascota seleccionada por el jugador.

>Esto aporta mayor dinamismo y mejora la experiencia de usuario.

Dentro de las condicionales que verifican qué mascota fue seleccionada, se asigna el nombre correspondiente al span:

    if (inputHipodoge.checked) {
        SpanMascotaJugador.innerHTML = 'Hipodoge'
    } else if (inputCapipepo.checked) {
        SpanMascotaJugador.innerHTML = 'Capipepo'
    } else if (inputRatigueya.checked) {
        SpanMascotaJugador.innerHTML = 'Ratigueya'
    } else {
        alert("Debes seleccionar tu mascota")
    }

Este enfoque permite reflejar la elección del jugador directamente en la interfaz.

---

MDN (Mozilla Developer Network) es una de las fuentes oficiales y más confiables de documentación para desarrollo web.
Proporciona información detallada, ejemplos y buenas prácticas sobre HTML, CSS y JavaScript.

Consultar MDN es una práctica recomendada para:

* Comprender propiedades y métodos del DOM

* Ver ejemplos actualizados

* Aprender estándares web

<img src="https://i.blogs.es/1b8066/moz_blog_header_mdn-intro/1366_2000.webp">

*Imagen Tomada De: https://www.genbeta.com/desarrollo/web-referencia-mozilla-para-desarrolladores-web-se-redisena-anuncia-mdn-plus-suscripcion-servicios-extra*

---

La actualización dinámica del contenido mediante **innerHTML es una de las formas más comunes de manipulación del DOM**.
En este caso, permite mostrar la mascota seleccionada según la decisión del jugador, reforzando la interacción y el control visual del estado del juego.











---











## Selección Aleatoria de Mascota Enemiga en JavaScript

Para trabajar de forma más eficiente en Visual Studio Code, se utiliza el atajo Ctrl + O, el cual permite abrir rápidamente archivos del proyecto sin necesidad de buscarlos manualmente en el explorador.

Para seleccionar la mascota del enemigo de forma aleatoria, se utiliza una función basada en Math.random() y Math.floor():

* Math.random() genera un número decimal aleatorio entre 0 y 1.

* Math.floor() redondea el número hacia abajo, obteniendo un valor entero.

La fórmula utilizada es:

    Math.floor(Math.random() * (max - min + 1) + min)

Esta lógica permite generar un número entero aleatorio dentro de un rango definido, en este caso entre 1 y 3, representando cada una de las posibles mascotas enemigas.

La función **seleccionarMascotaEnemigo()** se invoca dentro de la función encargada de seleccionar la mascota del jugador.
De esta forma, una vez el jugador elige su mascota, automáticamente se asigna una mascota aleatoria al enemigo, manteniendo el flujo del juego.

Se define la función **seleccionarMascotaEnemigo()**, dentro de la cual se obtiene un número aleatorio:

Se crea la variable mascotaAleatoria usando la función aleatorio(1,3).

Según el valor obtenido, se utilizan condicionales para determinar la mascota correspondiente:

* 1 → Hipodoge

* 2 → Capipepo

* 3 → Ratigueya

Dependiendo del valor generado, se modifica el contenido del elemento spanMascotaEnemigo utilizando innerHTML, mostrando en pantalla la mascota seleccionada para el enemigo.

Este proceso permite:

* Automatizar la elección del enemigo

* Mantener la lógica clara y organizada

* Aumentar el dinamismo del juego sin interacción adicional del usuario

La selección aleatoria de la mascota enemiga es una aplicación práctica del uso de números aleatorios en JavaScript y de la manipulación del DOM.
Este enfoque mejora la experiencia del jugador y refuerza conceptos clave como funciones, condicionales y flujo de ejecución del programa.

<img src="https://static.platzi.com/media/user_upload/html-aaa0b435-499f-4259-a6ac-fe94877a3d87.jpg">

<img src="https://static.platzi.com/media/user_upload/javascript-c1bcbee3-cb98-475d-b548-dd1aa197857d.jpg">

*Imagenes Tomadas De:https://platzi.com/cursos/programacion-basica/51998-enemigos-aleatorios/*










---










## Eventos de clic y lógica de ataque en JavaScript

En esta etapa del desarrollo se comienza a programar la lógica de combate entre las mascotas, específicamente la selección de ataques por parte del jugador.

Dentro de la función **iniciarJuego()** se crean variables que representan los botones de Fuego, Agua y Tierra definidos previamente en el HTML.

Estas variables se obtienen utilizando document.getElementById(), enlazando cada botón con su respectivo identificador.
Posteriormente, a cada botón se le asigna un evento de clic que ejecuta una función específica:

* Botón Fuego → ataqueFuego()

* Botón Agua → ataqueAgua()

* Botón Tierra → ataqueTierra()

De esta forma, cada acción del usuario queda correctamente asociada a una lógica concreta.

> De esta forma, cada acción del usuario queda correctamente asociada a una lógica concreta.

En JavaScript, cuando se crea una función, las variables declaradas dentro de ella solo existen en ese ámbito, es decir, no pueden ser utilizadas fuera de la función.

Para compartir información entre diferentes funciones, se utilizan variables globales (o compartidas), las cuales se declaran fuera de las funciones o en un ámbito accesible para todas.

En este caso, se crea la variable:

    let ataqueJugador

Esta variable permitirá almacenar el ataque seleccionado por el jugador y será utilizada posteriormente para comparar ataques con el enemigo.

Al trabajar con funciones, es posible ocultar (colapsar) el contenido de una función en el editor usando el botón que aparece junto al número de la línea donde inicia la función.
Esto ayuda a tener una vista más limpia del código y facilita la navegación en archivos grandes.

Dentro de cada función de ataque (ataqueFuego, ataqueAgua, ataqueTierra), se modifica el valor de la variable ataqueJugador, asignándole un string según el botón presionado:

* 'fuego'

* 'agua'

* 'tierra'

De esta manera, el programa guarda la elección del jugador y prepara la información necesaria para ejecutar la lógica del combate.

> La siguente imagen es una versión alterna de mokepon, en donde un usuario modificó el input type radio a uno de selección por el usuario y creo otros poderes por cada mascota.

<img src="https://i.imgur.com/X9qseVj.gif">

*Imagen Tomada De: https://platzi.com/cursos/programacion-basica/ataques-aleatorios-del-enemigo/*










---










## Ataques Aleatorios para Mascotas Enemigas en JavaScript

En la etapa anterior se programaron los ataques del jugador. El siguiente paso es implementar el comportamiento del enemigo, el cual debe seleccionar su ataque de manera aleatoria.

Para lograr esto, se crea una nueva función encargada exclusivamente de generar el ataque enemigo.

Dentro de cada una de las funciones de ataque del jugador (ataqueFuego(), ataqueAgua(), ataqueTierra()), se agrega la invocación a la función:

    ataqueAleatorioEnemigo()

De esta manera, cada vez que el jugador realiza un ataque, el enemigo responde automáticamente con uno propio.

Se define una variable global:

    let ataqueEnemigo

Esta variable se declara sin valor inicial, ya que su contenido se asignará dinámicamente cuando se ejecute la función que determina el ataque del enemigo.

El uso de una variable global permite que el valor del ataque enemigo pueda ser utilizado posteriormente en la lógica de combate.

Se crea la función ataqueAleatorioEnemigo(), dentro de la cual se genera un número aleatorio utilizando la función aleatorio(1, 3).

A partir del número generado, se implementa una serie de condicionales que determinan el ataque del enemigo:

Si el número es 1, el ataque será fuego

Si el número es 2, el ataque será agua

Si el número es 3, el ataque será tierra

Según el resultado, la variable ataqueEnemigo se asigna con el valor correspondiente.

Con esta lógica, el enemigo obtiene un ataque aleatorio cada vez que el jugador ataca, lo que permite avanzar hacia la implementación completa del sistema de combate y la comparación de ataques.

<img src="https://static.platzi.com/media/user_upload/Captura-a852589c-7cf5-45e6-b5b9-a6d465ebe547.jpg">

*Imagen Tomada De: https://platzi.com/cursos/programacion-basica/52000-ataques-en-javascript/*

---

## Creación de Mensajes Dinámicos en Combate HTML y JavaScript

Ya tenemos definidos los ataques del jugador y del enemigo en JavaScript.
Ahora el objetivo es mostrar en la página web, de forma dinámica, qué ataque realizó cada mascota en cada turno.

Para esto, necesitamos crear un mensaje nuevo por cada ataque, en lugar de reemplazar siempre el mismo contenido.
Por esta razón, innerHTML ya no es suficiente y debemos usar nuevos métodos de manipulación del DOM.

JavaScript nos permite crear etiquetas HTML directamente desde el código usando el método:

    document.createElement()

Este método crea un elemento HTML en memoria, sin insertarlo todavía en el documento.

* createElement en JS by MDN: https://developer.mozilla.org/es/docs/Web/API/Document/createElement

Se crea una nueva función llamada crearMensaje(), la cual será la encargada de generar un mensaje por cada ataque.

Esta función se invoca después de que el enemigo selecciona su ataque, ya que en ese momento ya conocemos:

* El ataque del jugador

* El ataque del enemigo

Dentro de la función crearMensaje():

Se crea una variable: let parrafo = document.createElement('p')

> Esto genera una nueva etiqueta (p).

A este párrafo se le asigna contenido usando innerHTML, concatenando la información de los ataques:

* Ataque del jugador

* Ataque del enemigo

De esta forma, cada combate genera su propio texto independiente.

Una vez creado el párrafo, surge la pregunta:

**¿Dónde se coloca este nuevo elemento dentro del HTML?**

Para resolver esto, utilizamos otro método del DOM.

El método appendChild() permite insertar un elemento como hijo dentro de otro, colocándolo al final.

* appendChild en JS by MDN: https://developer.mozilla.org/es/docs/Web/API/Node/appendChild

Se obtiene una referencia a una (section) del HTML que contendrá los mensajes:

sectionMensajes, identificada por su id

Se inserta el párrafo creado usando:

    sectionMensajes.appendChild(parrafo)

Esto provoca que cada nuevo mensaje se agregue al final de la sección, sin borrar los mensajes anteriores.

Por lo que:

Cada vez que el jugador presiona un botón de ataque:

1. Se ejecuta el ataque del jugador

2. Se genera el ataque aleatorio del enemigo

3. Se crea un nuevo párrafo con el resultado

4. El mensaje se añade dinámicamente al HTML

Esto permite mostrar un historial completo de ataques, haciendo el juego más claro, dinámico y profesional.

<img src="https://static.platzi.com/media/user_upload/asdfdsaf-b3b39650-f596-4657-8bd6-eadf914f4719.jpg">

*Imagen Tomada De: https://platzi.com/cursos/programacion-basica/imprimiendo-ataques-enemigo/*











---











## Lógica de Combate en JavaScript para juego Mokepon

Hasta este punto, el juego ya muestra en pantalla:

* El ataque seleccionado por el jugador

* El ataque seleccionado por el enemigo

El siguiente paso es determinar el resultado del combate, es decir, saber si el jugador: Gana, Pierde o Empata.

La lógica del combate en Mokepon es muy similar a la utilizada anteriormente en el juego de Piedra, Papel o Tijera.

---

**La diferencia principal es que:**

* Antes se trabajaba con valores numéricos

* Ahora se trabaja con strings ('fuego', 'agua', 'tierra')

Aun así, el principio es exactamente el mismo:

* Un ataque vence a otro

* Uno pierde contra otro

* Y si ambos son iguales, hay empate

> Reutilización de Código

---

Se crea una nueva función llamada **combate()**, cuya responsabilidad es: comparar el ataque del jugador (ataqueJugador),comparar el ataque del enemigo (ataqueEnemigo), determinar el resultado del enfrentamiento.

Dentro de la función combate() se implementa una serie de condicionales (if, else if, else) utilizando el operador lógico && para evaluar múltiples condiciones al mismo tiempo.

Ejemplos de situaciones de victoria:

* Fuego vence a Tierra

* Agua vence a Fuego

* Tierra vence a Agua

Si ambos ataques son iguales, el resultado es empate.
En cualquier otro caso, el jugador pierde.

La lógica sigue el mismo patrón que el ejercicio clásico de Piedra, Papel o Tijera.

> La siguiente imagen muestra un ejemplo claro de esta lógica de combate:

<img src="https://static.platzi.com/media/user_upload/Logica%20del%20combate-e723aa58-7249-44cc-979b-9b84e9574370.jpg">

*Imagen Tomada De: https://platzi.com/cursos/programacion-basica/52002-ganaste-perdiste-o-empataste/*

Una vez determinado el resultado del combate dentro de combate():

* Se genera un valor como 'GANASTE', 'PERDISTE' o 'EMPATE'

Este valor se envía como argumento a la función crearMensaje()

De esta forma:

* combate() se encarga de la lógica

* crearMensaje(resultado) se encarga de mostrar el mensaje en el HTML

**Flujo general del combate**

1. El jugador elige un ataque

2. El enemigo elige un ataque aleatorio

3. Se ejecuta la función combate()

4. Se determina el resultado

5. Se llama a crearMensaje(resultado)

6. El resultado se muestra dinámicamente en pantalla












---












## Operadores Lógicos en Programación: AND, OR y NOT

Antes de profundizar en estructuras de control más avanzadas, es importante comprender los fundamentos lógicos que dieron origen a la programación moderna. Estos conceptos no solo explican cómo funcionan los lenguajes de programación, sino también cómo opera internamente una computadora.

En la función **combate()** se utilizó el operador lógico &&. Para entender de dónde proviene este operador, es necesario remontarnos a los principios básicos de la computación.

Las computadoras trabajan con un sistema binario, compuesto únicamente por dos valores:

* 1 → Verdadero

* 0 → Falso

Una analogía común es la de un bombillo:

Bombillo encendido → 1 → Verdadero

Bombillo apagado → 0 → Falso

<img src="https://cdn-icons-gif.flaticon.com/12511/12511260.gif">

*Imagen Tomada De: https://www.flaticon.es/icono-animado-gratis/bombilla_12511260*

Este modelo binario es la base sobre la cual funcionan los circuitos electrónicos y, por extensión, todos los programas que se ejecutan en un computador.

A partir de este sistema binario surgen los valores booleanos, que representan estados de verdad:

* true

* false

Por esta razón, en representaciones populares de la computación (como películas sobre hackers o ciencia ficción) es común ver secuencias de 1 y 0, ya que simbolizan el lenguaje más básico de las máquinas.

Para un análisis más profundo de estos conceptos, [se puede consultar el documento Fundamentos de Ingeniería de Software, disponible en este mismo repositorio.](https://github.com/santiagoencodigo/Desarrollo-Web-Profesional/blob/main/docs/6-fundamentos-ingenieria-software.md "Fundamentos Ingeniería de Software - Desarrollo Web Profesional by Santiagoencodigo")

El entendimiento de los valores booleanos permite introducir un concepto fundamental en programación: [las tablas de verdad.](https://es.wikipedia.org/wiki/Tabla_de_verdad "Tablas de Verdad by Wikipedia")

Las tablas de verdad describen el comportamiento de los operadores lógicos cuando se evalúan una o más condiciones. Esto es especialmente importante cuando se trabaja con condicionales complejas, como ocurre en el algoritmo **combate()**, donde no se evalúa una sola condición, sino múltiples al mismo tiempo.

---

El operador AND se utiliza cuando todas las condiciones deben cumplirse para que el resultado sea verdadero.

* Una expresión con AND es verdadera únicamente si ambas condiciones son verdaderas.

---

El operador OR se utiliza cuando al menos una de las condiciones debe cumplirse para que el resultado sea verdadero.

* Si una condición es verdadera, el resultado será verdadero.

* Solo será falso si todas las condiciones son falsas.

Este operador es útil cuando existen múltiples caminos válidos para que una acción se ejecute.

---

El operador NOT se utiliza para invertir el valor lógico de una expresión.

* true se convierte en false

* false se convierte en true

Este operador es especialmente útil cuando se desea evaluar la negación de una condición existente.

---

<img src="https://logicautem.wordpress.com/wp-content/uploads/2016/03/tablas-de-verdad.jpg">

*Imagen Tomada De: https://logicautem.wordpress.com/2016/03/05/tablas-de-verdad/*

En el algoritmo combate() estos operadores permiten:

* Evaluar múltiples condiciones simultáneamente

* Representar reglas del juego de forma clara y estructurada

* Traducir reglas del mundo real en decisiones lógicas precisas

> Gracias al uso de operadores lógicos, el programa puede tomar decisiones complejas de manera consistente y predecible.

Este conocimiento es fundamental no solo para videojuegos, sino para cualquier sistema que requiera toma de decisiones, validaciones, seguridad o automatización de procesos.












---












## Actualización de Vidas en Juego de Combate con JavaScript

Hasta este punto del proyecto ya contamos con:

* Selección de la mascota

* Ataques del jugador y del enemigo

* Creación y visualización de mensajes de combate

Sin embargo, aunque los ataques ya funcionan, las vidas del jugador y del enemigo aún no cambian, sin importar cuántos ataques se realicen. Por eso, en esta sección vamos a implementar el contador de vidas.

> ♥ ♥ ♥

Como ya sabíamos que las vidas no debían ser dinámicas por sí solas, las encapsulamos dentro de una etiqueta **span**. Lo único que faltaba era asignarles un id para poder modificarlas desde JavaScript.

Los IDs que utilizaremos son:

* vidas-jugador

* vidas-enemigo

En JavaScript, accedemos a estos elementos usando: document.getElementById()

Además, vamos a invocar la función revisarVidas() dentro de la función combate(), ya que es allí donde se determina el resultado de cada enfrentamiento.

let spanVidasJugador (la misma lógica se aplicará luego para el enemigo).

Para poder controlar correctamente las vidas, necesitamos llevar el conteo desde JavaScript, así que creamos dos variables globales:

* let vidasJugador

* let vidasEnemigo

Cuando el jugador pierde un combate, dentro de la condicional correspondiente, simplemente restamos una vida usando el operador --:

    vidasJugador--

Este operador se encarga de disminuir el valor en 1.

* Expresiones y Operadores en JS by MDN: https://developer.mozilla.org/es/docs/Web/JavaScript/Guide/Expressions_and_operators

Luego, actualizamos el contenido del span usando innerHTML:

spanVidasJugador.innerHTML = vidasJugador

La misma lógica se repite para el enemigo:

* Si el jugador gana, se restan vidas al enemigo

* Se actualiza el **span** correspondiente con innerHTML

De esta forma, las vidas se van reflejando correctamente en pantalla después de cada combate.

En este punto surge un detalle importante:
podemos seguir atacando incluso cuando las vidas llegan a cero, lo que provoca que aparezcan valores negativos.

En el siguiente título vamos a solucionar este problema, evitando que el combate continúe cuando alguno de los dos personajes ya no tenga vidas.

<img src="https://static.platzi.com/media/user_upload/Captura%20de%20pantalla%202022-08-09%20161731-17cf0661-6a4a-4fc2-aed6-31459b10c26f.jpg">

*Imagen Tomada De: https://platzi.com/cursos/programacion-basica/contador-de-vidas/*










---










## Validación de Vidas y Mensaje Final en Juegos

Ya contamos con la lógica de vidas por lo que el siguiente paso es determinar quién gana la batalla y mostrar el mensaje final correspondiente.

Dentro de la función combate(), una vez finalizado el intercambio de ataques, se invoca la función **revisarVidas()** en donde esta se encarga de evaluar las vidas del jugador y del enemigo.

Dentro de esta función se utilizan condicionales para determinar el resultado del combate:

* Si las vidas del enemigo llegan a cero, el jugador gana.

* Si las vidas del jugador llegan a cero, el enemigo gana.

Dependiendo del resultado se altera al parametro de la función crearMensajeFinal(resultadoFinal)

Por ende la función crearMensajeFinal esta esperando un parametro, el cual se define dentro de las condicionales de revisarVidas() siendo asi, esta parte del código la que se encarga de mostrar el mensaje final del juego: Victoria o Derrota.

        function revisarVidas() {
            if (vidasEnemigo == 0) {
                crearMensajeFinal("Ganaste")
            } else if (vidasJugador == 0) {
                crearMensajeFinal("Perdiste")
            }
        }

Con esta estructura ya podemos determinar claramente quién ganó y quién perdió y se genera un mensaje final dependiendo del estado del combate.

Dentro de la función crearMensajeFinal() se crea entonces la variable de sectionMensajes la cual identifica un div dentro del HTML y por medio de document.createElement('p') se crea un parrafo el cual se inserta al sectionMensajes mediante un appendChild.

Siendo asi:

    sectionMensajes.appendChild(parrafo)

<img src="https://static.platzi.com/media/user_upload/MOKEPON-ebf6e1a2-52ca-4bc0-bc9d-70508c00243a.jpg">

*Imagen Tomadada De: https://platzi.com/cursos/programacion-basica/52005-quien-gano-el-juego/*










---










## Funcionalidad de Reinicio y Desactivación de Botones en Juego

Ya tenemos toda la funcionalidad de los mensajes y de las vidas una vez se pierde o gana. Ahora debemos hacer funcionar que nuestro boton HTML de reiniciar funcione para poder realizar una revancha o jugar varias veces de forma seguida.

En este momento estamos en: Si escojemos una mascota y luego seleccionamos ataques, perderemos o ganaremos hasta que el jugador o el enemigo llegue a 0 vidas. El problema es que siguen activados los botones de todos los ataques y por ende se seguiran restando vidas.

> Hay que realizar esa validación.

* Debemos hacer que los botones de ataques no funcionen una vez se halla perdido o ganado la batalla.

* Debemos hacer funcional el boton de reiniciar para volver a iniciar el juego una vez decidido el estado de la batalla.

---

**Funcionalidad de Boton Reiniciar**

Dentro de la función iniciarJuego() hemos estado agregando cada uno de los botones con su respectivo addEventListener.

* Aqui se encuentran las declaraciones de las variables de los botones: seleccionar mascota, ataque fuego, ataque agua, ataque tierra, y ahora **se crea la nueva variable botonReiniciar**. De la misma forma como todos los botones que hemos trabajado.

Este nuevo boton tendrá su respectivo addEventListener y una vez el escuchador click sea identificado, ejecute la función reiniciarJuego()

Entonces ahora vamos a crear esa función.

Se crea la función reiniciarJuego() y dentro de esta vamos a usar:

**location**: Un objeto especial asi como window y document y se refiere a la ubicación en donde se encuentra el usuario respecto a la página, es decir la URL. 

* location en JS by MDN: https://developer.mozilla.org/en-US/docs/Web/API/Location

Y location tiene un método el cual es .reload() el cual recarga la página llevandola al punto inicial. 

* location.reload en JS by MDN: https://developer.mozilla.org/en-US/docs/Web/API/Location/reload

Esto nos sirve al 100% debido a que limpia el contenido de la sección mensajes con cada uno de los appendChild que le hemos insertado en las funciones de combate(), crearMensaje() y crearMensajeFinal().

por ende la función es muy sencilla:

    function reiniciarJuego(){
        location.reload()
    }

---

**Deshabilitación botones de ataque**

Ahora, en este punto igualmente seguimos con el problema de la validación de las vidas una vez se llega a cero pues se pueden seguir realizando ataques y llegar a números negativos como -4 vidas del enemigo.

Por ende, en el momento que el enemigo o el jugador lleguen a 0 vidas vamos a deshabilitar estos botones.

Existe el atributo disabled en HTML, en donde si se lo insertados a un boton: Este boton deja de recibir el click y sus estilos quedan como trasparentes reflejando que ya no tiene funcionalidad.

* disabled en HTML by MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Attributes/disabled

Asi que una vez llegue nuestro mensaje final en la función crearMensajeFinal vamos a deshabilitar cada uno de los botones por medio de JavaScript.

* disabled en JS by w3schools: https://www.w3schools.com/jsref/prop_text_disabled.asp

> A continuación una imagen sobre un fragmento de código JavaScript con una solución alternativa por medio de una nueva función bloquearAtaques() que sigue las mismas dinamicas que nuestra función crearMensajeFinal().

<img src="https://static.platzi.com/media/user_upload/codigo2-cea942c2-71b9-47d7-b8d5-fac85f85c373.jpg">

*Imagen Tomada De: https://platzi.com/cursos/programacion-basica/52006-reiniciando-el-juego/*

A cada una de las variables que declaran nuestros botones, vamos a copiarlas y pegarlas en la función crearMensajeFinal() y en vez de tener un addEventListener vamos a hacer que cada boton tenga el atributo disabled en true, es decir:

    botonFuego = document.getElementById('boton-fuego')
    botonFuego.disabled = True

Y lo mismo aplica para cada boton. Y esto hace lo mismo que agregarle el atributo disabled a nuestra etiqueta boton en HTML.

Por lo que ahora ya no podemos lanzar ni recibir ataques una vez una mascota halla "muerto" o simplemente que halla quedado con cero vidas, por lo que ya implementamos una nueva validación para nuestro juego Mokepon. Y además, ya podemos usar el boton de reiniciar que aparece una vez el combate ya esta decidido.

> A continuación una captura que describe la situación.

<img src="https://static.platzi.com/media/user_upload/image-cf25a5fb-c1d0-4074-b9c1-185b24374cbd.jpg">

*Imagen Tomada De: https://platzi.com/cursos/programacion-basica/52006-reiniciando-el-juego/*












---












## Mostrar y Ocultar secciones en HTML con JavaScript

En una página web no solamente tenemos al HTML, pues tambien tenemos a JavaScript y a CSS.

CSS nos ayuda a darle estilos a nuestro juego o página web: Cambiando los colores, los textos, la ubicación e incluso podemos darle animaciones a nuestros elementos HTML.

> En el siguente módulo vamos a por eso.

<img src="https://www.cursosgis.com/wp-content/uploads/2017/06/lenguajes_1.png">

*Imagen Tomada De: https://www.cursosgis.com/como-integramos-los-lenguajes-html-css-y-javascript/*

En esta sección vamos a ocultar una sección HTML para que no aparezcan las de selección mascota ni las de selección de ataques juntas en la misma ventana, lo haremos por medio de JavaScript.

En este momento como aparecen las dos secciones en la misma ventana, nos podemos saltar la selección de la mascota y pasar directamente a los ataques. Además de que el boton de reiniciar siempre ha estado visible tambien por lo que se puede reiniciar la página por medio del boton todo el tiempo sin que esto realmente se requiera.

Por lo que tenemos que esconderlas en algunas funciones.

Requerimos que solo aparezca la sección de seleccionar mascota y que no aparezcan las de reiniciar y tampoco las de selección ataques. Por lo que vamos a la primera función que se ejecuta en nuestro JavaScript justo despues de cargar todo el HTML: **iniciarJuego()**

De forma semántica, nosotros tenemos separado cada una de estas secciones en el HTML mediante etiquetas **section**.

* section en HTML by MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/section

Por lo que dentro de la función **iniciarJuego()**:

Se declaran las variables que identifican a nuestras secciones

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'none'

usaremos las propiedades .style.display y le damos el valor 'none' a nuestra sección por ende esta sección no va a aparecer una vez se cargue la página.

* Estilos de elemento DOM HTML by w3schools: https://www.w3schools.com/jsref/prop_html_style.asp

* Estilos y Clases en JS by javascript.info: https://javascript.info/styles-and-classes

* .style.display en JS by w3schools: https://www.w3schools.com/Jsref/prop_style_display.asp

por defecto los elementos HTML tienen ciertas propiedades style, pues nosotros no decidimos el tamaño ni el color de algún elemento de nuestro HTML, por eso los títulos son de color negro, el texto es de color negro y nuestros botones como gris: Son estilos por defecto que han sido estandarizados para HTML.

> Todos estos estilos eventualmente se pueden modificar mediante CSS.

Ahora tenemos un nuevo problema, si le damos a nuestra mascota: Aun no aparece esta nueva sección porque sigue en none y no se ha programado cuando vuelve a aparecer.

Por lo que, recordemos en nuestra función iniciarJuego() cuando le damos click al boton seleccionar mascota, ejecuta la función seleccionarMascotaJugador(). Por lo que vamos a hacer que en el inicio de esta función, nuestra sección tenga otro valor que permita su visualización.

    let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
    sectionSeleccionarAtaque.style.display = 'block'

> Otro tipo de display

Ahora ya una vez seleccionada la mascota, ya no quiero que me aparezca esta sección de seleccionar mascota. Por ende vamos a poner el display none en nuestra sección seleccionarMascota declarando su variable dentro de la función **seleccionarMascotaJugador()**

    let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
    sectionSeleccionarMascota.style.display = 'none'

Como resultado entonces, una vez se ejecute nuestra función: 

* La sección seleccionar ataque va a aparecer.

* La sección seleccionar mascota va a desaparecer.

Ahora el único detalle que nos falta es el boton de reiniciar, pues aparece desde el inicio hasta el fin. En nuestro juego necesitamos que solo aparezca una vez se halla perdido o ganado la batalla.

por lo que en la función **iniciarJuego()** se crea una nueva variable:

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'none'

Por ende ya no nos encontraremos a nuestro boton de reiniciar al iniciar el documento. Pero entonces una vez seleccionada la mascota, seleccionados los ataques y haber perdido o ganado, todavia no va a aparecer nuestro boton por lo que en la función **crearMensajeFinal()**: En la misma función que mandamos a deshabilitar cada uno de los botones de ataque una vez el jugador o el enemigo llegan a 0 vidas.

por lo que en código:

    let sectionReiniciar = document.getElementById('reiniciar')
    sectionReiniciar.style.display = 'block'

Ya tenemos toda la lógica de nuestro juego, en el siguente módulo vamos a trabajar con todo el diseño por medio de CSS.

<img src="https://assets-v2.lottiefiles.com/a/35735896-1176-11ee-8649-af549fb59863/lsQS6q92QV.gif">

*Imagen Tomada De: https://lottiefiles.com/es/free-animations/css*