# Programación Básica: Mokepon

## Tabla de Contenido

1. [Estilos CSS: Selectores, Propiedades y Valores](#estilos-css-selectores-propiedades-y-valores)

2. [Tipos de Visualización en CSS: Display Block, Inline e Inline Block](#tipos-de-visualización-en-css-display-block-inline-e-inline-block)

3. [Alineación de Elementos con Flexbox en CSS](#alineación-de-elementos-con-flexbox-en-css)

4. [Modelo de Caja en CSS: Espaciado y Bordes](#modelo-de-caja-en-css-espaciado-y-bordes)

5. [Diseño y Estilo de Páginas Web con HTML y CSS](#diseño-y-estilo-de-páginas-web-con-html-y-css)

6. [Estilos CSS para Botones en Juegos: Diseño de Pantallas Interactivas](#estilos-css-para-botones-en-juegos-diseño-de-pantallas-interactivas)

7. [Estilos CSS para Mejorar la Interfaz del Juego](#estilos-css-para-mejorar-la-interfaz-del-juego)

8. [Estilizado de Pantallas de Juego con CSS y Flexbox](#estilizado-de-pantallas-de-juego-con-css-y-flexbox)

9. [Separación de Mensajes y estilos en JavaScript y HTML](#separación-de-mensajes-y-estilos-en-javascript-y-html)

10. [CSS GRID: Organiza Elementos en Rejillas Bidimensionales](#css-grid-organiza-elementos-en-rejillas-bidimensionales)

11. [Diseño Responsivo con CSS: Media Queries y Flexbox](#diseño-responsivo-con-css-media-queries-y-flexbox)

12. [Pseudoclases en CSS: Mejora la Interacción del Usuario](#pseudoclases-en-css-mejora-la-interacción-del-usuario)

---







# Estilos con CSS










## Estilos CSS: Selectores, Propiedades y Valores

De ahora en adelante vamos a aprender CSS, un lenguaje de estilos el cual es la herramienta que usaremos para estilizar nuestro Mokepon. Hasta ahora nuestro juego tiene HTML y JavaScript. Por lo que a continuación vamos a ver:

* Cómo cambiar el color de nuestros títulos.

* Cómo cambiar nuestro color de fondo.

* Como cambiar el posicionamiento de nuestros elementos.

> **[Si deseas mirar el código CSS puedes hacer click en este vinculo!](https://github.com/santiagoencodigo/Desarrollo-Web-Profesional/blob/main/pages/04-programacion-basica/02-mokepon/mokepon.css)**

Por lo que en la carpeta de nuestra carpeta de mokepon, vamos a crear un nuevo archivo asi como fue con el de JavaScript, por ende creamos un archivo style.css y lo importamos en nuestro HTML mediante la etiqueta link dentro de la etiqueta head.

Por lo que:

    <link rel = "stylesheet" href="./style.css">

* link en HTML by MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/link

Existen selectores, es el como nombranos nuestras etiquetas HTML asi como lo estabamos haciendo con ID en JavaScript. Y una vez escrito el selector dentro de las { } se insertaran las propiedades que son las caracteristicas que vamos a modificar y el valor, que es en la forma que vamos a modificar esa propiedad o caracteristica.

* selectores en CSS by MDN: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Basic_selectors

por ejemplo:

    h1 {
        color: blue;
    }

CSS trabaja muy de la mano con HTML. 

> Decidimos que cualquier etiqueta h1 quede de color blue.

Por ende estamos creando un vinculo entre el archivo CSS y el HTML, esto se hace por medio de selectores en donde en el ejemplo de arriba, el selector es el h1.

Hay varios tipos de selectores en CSS

* Selector de tipo: Nombra de forma general cada etiqueta como h1, p, body, y como tal cualquier etiqueta HTML.

* Selector de clase: A ciertas etiquetas HTML se les agrega clases, para que a ese conjunto de etiquetas se les de esa misma clase de estilos y se ven como por ejemplo: h1 class="titulo", p class="parrafo-uno" (El nombre de la clase, lo decidimos nosotros como programadores.)
 
* Selector de ID: Similar al de JavaScript en donde se identifica a un sólo elemento con un ID o Identificador.

Despues de seleccionar el vinculo, abrimos unas llaves { } asi como en las funciones de JavaScript, en donde dentro de estas llaves en CSS vamos a declarar los estilos que tendra esa etiqueta o ese selector en especifico.

Dentro de las { } vamos a encontrar entonces las propiedades como background-color, margin, color, padding, etc... Y luego de : de la propiedad, sigue el valor.

como por ejemplo:

    margin: 0px;
    color: yellow;
    background-color: black;

* Las propiedades son las caracteristicas que le podemos agregar a ese elemento HTML: Como color, alto, ancho, posición.

* Los valores corresponde a la propiedad, como el color, pues puede ser negro, blanco y todos los colores que existan. Y si es margin, el tamaño en pixeles como 1px, 1rem, 1vh, etc... (Sistemas de medidas).

**A continuación una página recomendada para mirar las propiedades y textos en general:**

* cssrefence: https://cssreference.io/

Esta página es muy recomendada para mirar todas las propiedades que tenemos disponibles en CSS.

---

**A continuación una página recomendada para mirar todos los colores que tenemos disponibles en CSS:**

* htmlcolorcodes: https://htmlcolorcodes.com/es/

> A continuación una versión de Mokepon con un diseño interesante por parte de la estudiante Camila Fernanda Torres Parra

<img src="https://static.platzi.com/media/user_upload/upload-3b77ba87-c539-426e-aa80-30a6b906ac9a.png">

> La siguente imagen es una versión muy completa por parte del estudiante Raúl Adolfo Sánchez Rodríguez

<img src="https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExZDR5ZXYyc215ZHkzMjF0bncxZzhnem1zN2JnMHBlODhiMWlvOHAzeSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/EJkKEllHIhTVHA5glU/giphy.gif">

*Imagenes Tomadas De: https://platzi.com/cursos/programacion-basica/anatomia-de-css/*











---











## Tipos de Visualización en CSS: Display Block, Inline e Inline Block

Los tipos de visualización tambien son conocidos como tipos de display, vamos a ver los 3 más importantes:

Display Block, Inline, Inline Block.

* display en CSS by MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/display

Pensemos de cada elemento HTML como una caja, una visualización tipo block es la que utiliza el 100% de el with y lo que necesite de height. Pero el inline sólo ocupa lo que necesita.

Es recomendable probar qué sucede con cada elemento una vez cambias en sus propiedades el width y el height.

<img src="https://static.platzi.com/media/user_upload/upload-a7fb8929-2359-435f-a302-1ec6a87d1521.png">

*Imagen Tomada De: https://platzi.com/cursos/programacion-basica/tipos-de-display/*











---











## Alineación de Elementos con Flexbox en CSS

Anteriormente habia un problema con el posicionamiento en CSS debido a que era muy complicado, ahora por medio de flex es mucho más facil.

Con Flexbox podemos alinear nuestros elementos de forma vertical, horizontal, podemos mover elementos como hacia la izquierda todos, a la derecha todos, etc... 

Necesitamos contenedores/padre y elementos/hijos.

* Los contenedores o padres: Son esas etiquetas HTML que contienen varios elementos por dentro como las etiquetas form, section, div, body, main, header.

* Los elementos o hijos: Son esas etiquetas HTML que son elementos, como las etiquetas img, p, h1, input, label, etc...

> Aunque P tambien puede ser un elemento o un contenedor.

<img src="https://static.platzi.com/media/user_upload/Flexbox%20CSS-08adf878-9636-4f82-bc82-d4de000dda4f.jpg">

*Imagen Tomada De: https://platzi.com/cursos/programacion-basica/flexbox/*

---

**Página Recomendada:**

CSS TRICKS: https://css-tricks.com/

Tiene diversas guias en inglés con información sobre CSS en general, como por ejemplo:

* flexbox guide by CSS TRICKS: https://css-tricks.com/snippets/css/a-guide-to-flexbox/

---

Nosotros para centrar nuestro contenido del juego y alinearlo a como se nos de la gana, podemos usar flexbox por medio de la propiedad display y el valor flex, siendo asi:

    display:flex;

y una vez hecho, vamos a determinar en qué dirección o ubicación queremos nuestros elementos. Digamos, en la siguente imagen esta en columna. Por medio de la propiedad flex-direction: column; por lo que:

    display: flex;
    flex-direction: column;

y por otro lado, si queremos el contenido centrado. Ya una vez hecho el display:flex; Podemos usar justify-content para alinear nuestros elementos de forma horizontal.

Y para poder alinear de forma central en la dimension vertical, podemos usar align-items: center;

Entonces:

    .seleccionar-mascota {
        display: flex;
        flex-direction: column;

        justify-content: center;
        align-items: center;
    }

<img src="https://static.platzi.com/media/user_upload/flexbox-e2bdaa04-3120-4d05-b85b-c31268fbd488.jpg">

*Imagen Tomada De: https://platzi.com/cursos/programacion-basica/flexbox/*













---













## Modelo de Caja en CSS: Espaciado y Bordes

Hay cierto espacio externo e interno dentro de cada elemento ya sea etiqueta padre o etiqueta hijo, podemos pensar de cada elemento HTML como una caja.

* Modelo de Caja en CSS by MDN: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/Styling_basics/Box_model

El modelo de caja consiste en que cada elemento contiene los siguentes elementos de espaciado:

* Margin

* Border

* Padding

* Content

<img src="https://media.gcflearnfree.org/content/5ef2084faaf0ac46dc9c10be_06_23_2020/box_model.png">

*Imagen Tomada De: https://platzi.com/cursos/programacion-basica/modelo-de-caja/*

En donde cada elemento, tiene un tamaño como tal. Y si agregamos un padding, esas dimensiones se van a alterar adquiriendo ese nuevo tamaño tambien.

> Cada una de estas son propiedades CSS.

Si no queremos que se nos modifique las dimensiones de nuestra caja podemos utilizar la propiedad

    box-sizing: border-box;

Por lo que nuestra caja no se va a crecer por el padding o border que lleguemos a agregar.

* box sizing: border box en CSS by midudev: https://midu.dev/que-es-y-para-que-sirve-box-sizing-border-box/

* box sizing en CSS by MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/box-sizing

Gracias a esto, entonces por cada label vamos a agregar estas caracteristicas para hacer esos elementos más grandes y más vistozos. 

Además en el input agregaremos la propiedad y el valor **display: none;** para que asi desaparezcan los circulos o los inputs type radio y asi quedará solamente la caja del label y aun asi, funcionará común y corriente debido a la relación de cada label con su respectivo input.

* Display en CSS by MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/display

Ya con los principios que hemos visto de CSS se nos permite poder realizar un diseño bonito y agradable para la vista. Por lo que a continuación diferentes versiones de varios usuarios.

> Versión de Jafet Alvaro Antonio

<img src="https://static.platzi.com/media/user_upload/Captura-471ded36-3756-4224-8546-0946e3568d6c.jpg">

> Versión de Jaime Saul Romero Lezama

<img src="https://static.platzi.com/media/user_upload/mokemon-inicio-48428304-0716-4cf5-aa7f-4a3342c245e2.jpg">

> Versión de Anyela Paola Gil

<img src="https://static.platzi.com/media/user_upload/mokepon-0dacd3b6-0479-4c49-a3ba-87ed808aefb9.jpg">

> Versión de Diana Clabel

<img src="https://static.platzi.com/media/user_upload/kawaiipon-2a356b3f-1ecf-4a5b-b7a7-b3f0d88b0aa4.jpg">

> Versión de Steve Calderón Sánchez

<img src="https://static.platzi.com/media/user_upload/Captura%20de%20Pantalla%202022-08-15%20a%20la%28s%29%208.47.14%20p.m.-50aeb031-b992-474b-a546-8112741493ee.jpg">

> Versión de Daniel Ardila

<img src="https://static.platzi.com/media/user_upload/Captura-0faa0314-7ee5-4c86-a9a5-dad05693177d.jpg">

> Versión de alan david González guzmán

<img src="https://static.platzi.com/media/user_upload/Captura%20de%20pantalla%202023-03-12%20145216-8ecbeed9-03c5-41f3-8d63-49fe5dd3ef1a.jpg">

> Versión de Sofía Geisel

<img src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExNzhtMzc3cGdxd3c5ZGh2aGNvMzlkM2RpOW83ZnNmbXdtMWFmd3NseCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/aroksyHpBpYpJYPU5j/giphy.gif">











---











## Diseño y Estilo de Páginas Web con HTML y CSS

Antes de programar, se piensa mucho en el diseño de una página web y es importante usar herramientas para poder inspirarse. Una página recomendada es:

* Pinterest: https://co.pinterest.com/

Es muy recomendable revisar esta página, hacer su login y buscar páginas web. Muy interesante las busquedas que pueden salir debido a que muchos diseñadores publican sus trabajos aqui. Como por ejemplo, algunos de los elementos que me he encontrado:

<img src="https://i.pinimg.com/736x/ac/7a/62/ac7a628b7e492f74b35c4c8c6a0e7c19.jpg">

*Imagen Tomada De: https://co.pinterest.com/pin/770960030004116941/*

<img src="https://i.pinimg.com/736x/72/20/49/722049f5f5d1b680b4accb9265e6eac5.jpg">

*Imagen Tomada De: https://co.pinterest.com/pin/31032684928135750/*

He incluso ya diseños muy avanzados como el siguente: https://co.pinterest.com/pin/770960030004116959/

Tambien se pueden hacer busquedas de Diseño Web, Diseño de App.

---

Por otro lado, otra herramienta muy recomendable es:

* colorhunt: https://colorhunt.co/

Es para revisar todo tipo de paleta de colores, importante para cuando estas buscando combinaciones de colores, paletas de colores, etc...

<img src="https://colorhunt.co/img/color-hunt-og.png">

*Imagen Tomada De: https://colorhunt.co/*

---

Mirando el lado de la tipografía, tenemos las fuentes, el tipo de letra. Para esto es muy recomendable:

* googlefonts: https://fonts.google.com/

> Pienso que sería muy interesante, realizar la documentación con diferentes tipografias, trabajos y muchas explicaciones jugando con todo tipo de diseños de este estilo.

Es una buena practica que los estilos que se editan en el CSS esten en el orden que uno leeria el HTML.

Entonces. Mirar una paleta de colores, mirar diseños interesantes para inspirarse, utilizar diferentes tipos de fuentes, son unas cuantas herramientas que podemos utilizar para ayudarnos con ese diseño.

A continuación una serie de versiones de mokepon aplicando muchas de estas recomendaciones entre paleta de colores, diseño, fuentes.

> Versión de Benjamin Santos Sanchez

<img src="https://static.platzi.com/media/user_upload/upload-a38660fd-80bc-4642-b591-fba40c4bca43.png">

> Versión de Mauricio Franco

<img src="https://static.platzi.com/media/user_upload/upload-43e9f37b-4bf9-4f23-bf33-ecacfb50bd5c.png">

*Imagenes Tomadas De: https://platzi.com/cursos/programacion-basica/imagenes-para-los-mokepones/*










---










## Estilos CSS para Botones en Juegos: Diseño de Pantallas Interactivas

Para un boton es agradable ponerle un width y un height, para que no sea un cuadrado es bonito ponerle la propiedad y valor border-radius: 5px; y entre más px, más circular. Ajustarle los colores background, border en relación al fondo de la página, es importante mirar qué contraste se hacen los colores. 

Finalmente para separar el boton de cualquier elemento es bueno usar la propiedad margin.

> Versión de Johan Nicolás Díaz Cárdena

<img src="https://static.platzi.com/media/user_upload/upload-48ec60c9-edca-45a5-94f1-aea75a74e832.png">

*Imagen Tomada De: https://platzi.com/cursos/programacion-basica/estilos-del-boton/*










---










## Estilos CSS para Mejorar la Interfaz del Juego

Para pensar en una interfaz, es muy recomendable realizar dibujos y luego revisar el HTML, CSS y JS para verificar qué se tiene y cuáles son los cambios que se tiene que realizar. Asi estructuramos antes de escribir código haciendo mucho más facil su desarrollo pues cómo hacemos algo que realmente todavia no tenemos tan claro.

> Por esto mismo tambien es importante tomar referencias de páginas como pinterest.

Por lo que en conclusión es tener bien definido en la página cuáles son los elementos padre y los elementos hijo. Asi entonces podremos crear divs o usar html semántico para tener contenedores los cuales tienen elementos que podremos distribuir al 100% de nuestro gusto.

* HTML semántico by Wikipedia: https://es.wikipedia.org/wiki/HTML_sem%C3%A1ntico

* Elementos Semánticos by freecodecamp: https://www.freecodecamp.org/espanol/news/elementos-semanticos-html5-explicados/

* div en HTML by MDN: https://developer.mozilla.org/en-US/docs/Web/HTML/Reference/Elements/div

Las formas de distribución es de las diferentes combinaciones que tenemos entre:

* display en CSS by MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/display

* align-items en CSS by MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/align-items

* justify-content en CSS by MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Properties/justify-content

<img src="https://maquetadoraweb.wordpress.com/wp-content/uploads/2011/12/boceto.png">

*Imagen Tomada De: https://maquetadoraweb.wordpress.com/2011/12/05/curso-de-css-y-html-pasos-iniciales-para-una-correcta-maquetacion/*










---










## Estilizado de Pantallas de Juego con CSS y Flexbox

Como recomendaciones para estilización, primero es pensar de la pagina como cajas pequeñas que son contenidas en cajas grandes. Esto es importante para tener mucha facilidad al momento de trabajar con el diseño en el CSS.

La segunda recomendación es primero estilizar lo más grande y luego hasta lo más pequeño. (Esto facilita bastante el trabajo.)

En ese orden vamos a trabajar primero con el gran contenedor, luego el título, luego el subtítulo y luego nuestras cajas de selección de mascota o la de selección de ataque.

Si nosotros editamos nuestra sección de seleccionar ataque, el contenedor principal. No vamos a ver ningún cambio en el diseño, esto es debido a que anteriormente en nuestro JavaScript nosotros usamos que al momento de darle al boton de seleccionar-mascota, hay un método addEventListener el cual pone en display none la sección seleccionar mascota y en display block en nuestra sección seleccionar mascota.

Por lo que se cruza en el código el display block en JS y el display flex en CSS, pero la jerarquia prioriza el JS por lo que tenemos que cambiar el display block por un display flex en JS.

Por lo que si miramos nuestra sección seleccionar-ataque, ya veremos los elementos uno al lado de otro estilo fila siendo asi el flex mostrandose.

* Usaremos flex-direction: column; para tener nuestros estilos de arriba hacia abajo.

* Usamos align-items: center; para tener todo nuestro contenido centrado.

Siendo asi editado nuestra caja contenedora.

**A continuación habran apuntes del cómo podría realizarse el diseño.**

Es muy recomendable para elementos que son similares como los botones de ataque, que en su HTML se le agregue un atributo clase para editarlos de forma simultanea en el CSS y no uno por uno.

En el momento de editar los botones, es recomendable siempre agregarle un padding (espacio interno), un box-sizing:border-box; para que siempre mantenga su tamaño sin importar el border, padding y demás tamaños internos que afecten al tamaño final. Y si se quiere, se puede agregarle un border-radius: 5px; (Entre más pixeles del 1 al 100, más circular.) si es de su gusto que el boton quede como circular o con los bordes circulares.

Por otro lado, en los botones la tipografía que se halla puesto en el padre contenedor, no la toma. Por ende si se desea que el boton por dentro tenga una tipografía diferente, es necesario atribuirle la propiedad y valor font-family: (familia que se desea o encontrada e importada de google fonts); 

> Versión de Anyela Paola Gil

<img src="https://static.platzi.com/media/user_upload/2-53fe937e-47cc-46ea-8faa-421fce7214a0.jpg">

*Imagen Tomada De: https://platzi.com/cursos/programacion-basica/layout-titulo-y-ataques/*














---














## Separación de Mensajes y estilos en JavaScript y HTML

En el desarrollo de interfaces web modernas es fundamental estructurar el contenido utilizando contenedores semánticos. Estos consisten en elementos HTML que no solo agrupan contenido visualmente, sino que también aportan significado tanto al navegador como a los motores de búsqueda y a las tecnologías de accesibilidad.

Algunos ejemplos de contenedores semánticos son **header**, **main**, **section**, **article**, **nav** y **footer**. Su función principal es separar lógicamente las diferentes secciones de una aplicación o sitio web, facilitando la lectura del código, el mantenimiento del proyecto y la comprensión de la jerarquía del contenido.

<footer>. Su función principal es separar lógicamente las diferentes secciones de una aplicación o sitio web, facilitando la lectura del código, el mantenimiento del proyecto y la comprensión de la jerarquía del contenido.

El uso adecuado de estos elementos mejora:

* La accesibilidad, ya que los lectores de pantalla interpretan mejor la estructura.

* El SEO, al permitir que los motores de búsqueda comprendan el propósito de cada sección.

* La escalabilidad del proyecto, al hacer el código más ordenado y predecible.

Una práctica altamente recomendada durante el desarrollo frontend es el uso de las herramientas de desarrollo del navegador (DevTools). Estas herramientas permiten inspeccionar el HTML y CSS que se está renderizando en tiempo real.

**Al inspeccionar un elemento específico dentro de la página, el navegador muestra:**

* La estructura HTML correspondiente.

* Las reglas CSS aplicadas, indicando su origen, especificidad y posibles sobrescrituras.

Esta metodología permite realizar modificaciones directamente desde el panel de CSS del inspector, lo que resulta especialmente útil para:

* Probar estilos visuales sin alterar el código fuente.

* Ajustar márgenes, tamaños, colores y posiciones en tiempo real.

* Detectar conflictos entre reglas CSS.

Una vez obtenidos los resultados deseados, el código puede ser trasladado manualmente al archivo CSS del proyecto, garantizando así que los cambios sean persistentes.

La razón del por qué se mencionan estas etiquetas es que en el HTML, tenemos varias secciones que se podrian separar en varios. Como por ejemplo, separar las secciones de ataques tanto de nuestro enemigo como de nuestro jugador y asi no tenerlo en un sólo parrafo de texto asi como lo estabamos haciendo anteriormente con un nuevo appendChild que como tal era una frase de concatenacion entre las variables que guardaban el ataque de nuestro jugador y del enemigo y si gano o perdio.

A continuación una serie de ejemplos de esto:

> Versión de: Felipe Moreno en donde separo los ataques del jugador de los ataques del enemigo.

<img src="https://i.imgur.com/n5Gtv89.png">

> Versión de: Esteban Chica en donde agrego diferentes imagenes y solamente el ataque enunciando abajo si se gano o perdió además de que menciona una revancha y no un "reiniciar".

<img src="https://static.platzi.com/media/user_upload/Error%20solucionado-340ebb2c-9fe8-4f39-8862-ffc69fa054bb.jpg">

*Imagen Tomada De: https://platzi.com/cursos/programacion-basica/51972-editando-javascript/*

---

A continuación un nuevo atajo que sirve un monton!

A medida que un proyecto crece, el código HTML y CSS puede volverse extenso. En este contexto, el uso de atajos como Ctrl + F (o Cmd + F en macOS) se convierte en una herramienta esencial.

Esta funcionalidad permite:

* Localizar rápidamente etiquetas HTML específicas.

* Buscar clases (class) o identificadores (id) dentro del código.

* Identificar propiedades CSS concretas o valores específicos.












---












## CSS GRID: Organiza Elementos en Rejillas Bidimensionales

con Flexbox solo podemos tener una dimensión pues dependemos de las celdas por asi decirlo, en el elemento contenedor que tenemos para poder ubicar nuestra etiqueta.

CSS GRID permite tener dos dimensiones siendo asi filas y columnas pues esta tecnologia divide lo que tenemos en nuestra pantalla por secciones o fracciones. Esto permite hacer un diseño mucho más complejo.

Esto permite diseños como el siguente:

> Versión de David Logreira

<img src="https://static.platzi.com/media/user_upload/Screenshot%202022-09-28%20201434-21485c62-2dce-4079-b1a4-a4477544dd3c.jpg">

> Versión de Raul Arias

<img src="https://static.platzi.com/media/user_upload/Captura%20de%20pantalla%202022-08-29%20143127-45d6b9eb-6dce-40d5-b815-f26fdcc0e5ff.jpg">

*Imagenes Tomadas De: https://platzi.com/cursos/programacion-basica/css-grid/*

* CSS GRID by CSS TRICKS: https://css-tricks.com/css-grid-layout-guide/

* cssgridgarden: https://cssgridgarden.com/#es

* flexbox froggy: https://flexboxfroggy.com/#es












---












## Diseño Responsivo con CSS: Media Queries y Flexbox

Como desarrollador frontend no solamente trabajamos para dispositivos web o desktop sino tambien para dispositivos moviles o pequeños. Es como ir a una página de una empresa reconocida, si la abres desde el celular veras la versión pequeña de esa página, o si la ves desde el computador veras una versión grande.

A esto se le conoce como diseño responsivo.

* Responsive Desing by MDN: https://developer.mozilla.org/en-US/docs/Learn_web_development/Core/CSS_layout/Responsive_Design

* Diseño Responsivo by IONOS: https://www.ionos.com/es-us/digitalguide/paginas-web/diseno-web/que-es-el-diseno-responsivo/

<img src="https://upload.wikimedia.org/wikipedia/commons/e/e7/Diseno-web-responsive-design.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Dise%C3%B1o_web_adaptable*

Cuando nosotros movemos el tamaño del inspector en una página web, nosotros podemos mirar el tamaño de la página en píxeles en donde inicialmente los celulares pequeños inician desde 360 píxeles de ancho. Si usamos nuestro juego web en un celular van a haber muchos elementos que la pantalla se va a comer o simplemente no tendrá visibilidad por su tamaño.

Es como tratar mirar un boton el cual tiene 700px de with mientras que un celular puede medir 350px por ende, solo se tendrá la mitad de la visibilidad del total del elemento.

Por lo que la solución es hacer que si el servidor de la pagina/la pagina, al detectar los pixeles del dispositivo (Algo que es normal, pues va en los metadatos al realizar una petición cuando ingresas a un dominio o a una dirección ip: Temas Vistos en [Fundamentos de la Ingenieria de Software](https://github.com/santiagoencodigo/Desarrollo-Web-Profesional/blob/main/docs/6-fundamentos-ingenieria-software.md "Fundamentos de Ingenieria de Software.md by Santiagoencodigo" )). 

En otras palabras, el mismo navegador de tu dispositivo envia datos de cuanto mide en pixeles la pantalla del dispositivo en el que buscas ir a una página.

Entonces para eso, podemos usar una herramienta llamada media querie. Permitiendonos asi organizar el contenido para dispositivos grandes o para dispositivos pequeños dependiendo del caso de uso que se necesite.

La forma de usarlo es insertando en el código CSS:

> @media (tamaño del dispotivio)

    @media (max-width: 360px) {
        .tarjetas {
            flex-direction: column;
        }
    }

> Captura de Edwin Romero

<img src="https://static.platzi.com/media/user_upload/photo_4920268097567435459_y-f55761d2-4b19-4de1-b020-5564e7fe3e72.jpg">

*Imagen Tomada De: https://platzi.com/cursos/programacion-basica/responsive-design/*











---











## Pseudoclases en CSS: Mejora la Interacción del Usuario

Tras dominar un conjunto amplio de propiedades de CSS y tecnologías fundamentales como Flexbox, CSS Grid y Media Queries, damos un paso más hacia la creación de interfaces dinámicas, intuitivas y centradas en la experiencia del usuario mediante el uso de las pseudoclases.

Las pseudoclases son palabras clave que se añaden a los selectores CSS para definir un estado especial de un elemento. A diferencia de las clases tradicionales, no se declaran directamente en el HTML, sino que representan condiciones dinámicas que dependen de la interacción del usuario, del estado del documento o de la posición del elemento dentro del DOM.

Sintácticamente, una pseudoclase se define utilizando dos puntos (:) después del selector:

    selector:pseudoclase {
    propiedad: valor;
    }

Las pseudoclases permiten modificar la apariencia de un elemento sin necesidad de JavaScript, lo que contribuye a un código más limpio, eficiente y mantenible.

Importancia de las pseudoclases en la experiencia de usuario (UX)

Desde el punto de vista de UX (User Experience), las pseudoclases cumplen un rol clave al:

* Proporcionar retroalimentación visual inmediata.

* Guiar al usuario durante la navegación.

* Comunicar estados como disponibilidad, selección o foco.

* Incrementar la sensación de respuesta e interactividad del sistema.

* Un sitio web sin pseudoclases suele percibirse como estático o poco intuitivo.

Digamos, en la imagen a continuación de la interfaz de mi proyecto. Se puede visualizar los 3 estados de los botones de selección de mascota donde Capipepo esta normal sin ningún estado, Hipodoge esta checked, y Ratigueya esta Hover.

<img src="https://static.platzi.com/media/user_upload/upload-cb8714c2-71fe-43a2-857c-0c78c79e26a6.png">

**Lecturas Recomendadas:**

* Pseudo clases en CSS by MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-classes

* Pseudo Clases by w3schools: https://www.w3schools.com/css/css_pseudo_classes.asp

* Pseudo Elementos by MDN: https://developer.mozilla.org/en-US/docs/Web/CSS/Reference/Selectors/Pseudo-elements

* Pseudo Elementos by w3schools: https://www.w3schools.com/css/css_pseudo_elements.asp

<img src="https://lenguajecss.com/css/pseudoclases/que-son/sintaxis-pseudoclases.png">

*Imagen Tomada De: https://lenguajecss.com/css/pseudoclases/que-son/*


> Gracias por leer.