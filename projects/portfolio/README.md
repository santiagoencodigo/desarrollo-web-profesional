# Fundamentos de CSS

Para consultar el código fuente, ejemplos y ejercicios de este documento, visita los siguientes enlaces:

* [Repositorio - Documento CSS](https://github.com/santiagoencodigo/desarrollo-web-profesional/blob/main/pages/02-fundamentos-css/styles.css) 

* [Repositorio - Documento HTML](https://github.com/santiagoencodigo/desarrollo-web-profesional/blob/main/pagesd/02-fundamentos-css/index.html)

* [Proyecto](https://santiagoencodigo.github.io/desarrollo-web-profesional/pages/02-fundamentos-css/index.html)

<img src="../../Assets/img/9. Proyecto - Portafolio - Santiagoencodigo.png">

Dominar CSS para transformar ideas en interfaces modernas, legibles, responsivas y escalables con Flexbox y Grid. Aplica tipografía, color y variables para un diseño visual consistente, y organiza tu código con buenas prácticas que te preparan para construir proyectos web profesionales en la industria.

## De la idea al estilo con CSS

Temario de lo que vamos a ver:

+ Modelo de caja: Entender cómo se define y controla el tamaño de los elementos, ajustar espaciados internos y externos con precisión, Lograr interfaces coherentes al alinear componentes.

+ Layouts Adaptables: Diseño Responsive, usar layouts con Flexbox para distribuir y alinear elementos con flexibilidad, emplear Grid para estructuras más complejas y responsivas, Diseñar proyectos 100 % responsive pensados desde mobile.

+ Herencia: Permite que estilos del contenedor padre afecten a los hijos de forma controlada.

+ Variables: Sirven para centralizar colores, tamaños y tipografias, evita repertir estilos en múltiples archivos, cambiar el valor y actualizar una interfaz de forma consistente.

+ Especificidad: Es la manera mediante la cual los navegadores deciden qué valores de una propiedad CSS son más relevantes para un elemento

+ Flexbox: Es un módulo de CSS que permite alinear y distribuir el espacio entre los elementos dentro de un contenedor.

+ Grid: El grid layout permite a un autor alinear elementos en columnas y filas.

>Profesor: Diego de Granda

>Proyecto: Un portafolio 100% responsive listo para agregar proyectos.

---

## CSS: qué es y formas de aplicar estilos en HTML

CSS significa Cascade Style Sheets, La cascada implica que los estilos se aplican de arriba hacia abajo. Esto quiere decir que los ultimos estilos que se agreguen en el documento seran los que más se tengan en cuenta. 

<!-- cuáles son las tres formas de aplicar estilos en HTML. -->

¿Cómo agregar estilos a el elemento HTML?

Se hace con sistema de atributos en donde a un elemento HTML, era lo que se hacia en el pasado pero no era sostenible.

    <p style="color:red;">
        Hola, soy santiagoencodigo un desarrollador junior
    </p>

Otra forma era dentro de la etiqueta HTML "HEAD" agregar el elemento STYLE e ir modificando el texto. Pero igualmente sigue sin ser sostenible para proyectos grandes.

    <style>
        h1{
            color: blue;
        }
        h2{
            color:green;
        }
    </style>

La forma sostenible es crear un archivo independiente. Usualmente se le guarda con el nombre "styles.css" 

la diferencia en estas tres es las ventajas de mantenimiento y consistencia.

---

## Selectores y Especificidad

¿Cómo ser más específico: selectores descendientes y contenedores?

selector: Es la forma en la que llamamos a un elemento del HTML al CSS, puede ser directamente desde el elemento HTML, con clases y con ID

Selector descendiente: se escribe con un espacio entre el contenedor y el elemento objetivo.

>Cuando quieres agregarle un atributo a un elemento y este elemento se repite varias veces en el codigo, tambien se van a modificar estos elementos y a eso se le conoce como probemas de especificidad.

Selector de etiqueta: afecta todas las etiquetas del mismo nombre.


class: Son genericas, en donde cualquier elemento o más de uno pueden tener el mismo nombre de clase. se invoca con punto y puede repetirse en varios elementos.

    <p class="parrafo">Generico</p>
    <p class="parrafo">Generico</p>
    <p class="parrafo">Generico</p>

id: Cuando quieres agregarle caracteristicas a un elemento en especifico. se invoca con numeral y solo debe existir una vez.

    <p id="unico">Unico</p>

descendencia: Cuando quieres agregar caracteristicas a un elemento en especifico sin crear una nueva clase o ID, generalmente se le nombra a partir de un elemento padre.

    <div class="contenedor">
        <p>Generico</p>
    </div>

pseudoclases: se encuentran en CSS y son como el hover

hover: "Cuando yo paso por encima de algún elemento algo debe pasar"

prioridad de CSS con el agregar estilos

elemento (h1, p, div): 0, 0, 0, 1

clase (.rojo .contenedor): 0, 0, 1, 0

id (#unico): 0, 1, 0, 0

inline style ( * ): 1, 0, 0, 0

!important: Gana Siempre.

los elementos padre pueden heredarles ciertas propiades a sus hijos. Heredando cualquier caracteristica de tipografia como color, familia tipográfica, tamaño de fuente, alineación de texto y estilos de fuente., pero no se heredan margin, padding, border, background, width, height, position..

>Evita estilos en línea como práctica habitual: tienen demasiado peso y complican el mantenimiento.

>Las pseudoclases cambian estilos según el estado de un elemento. Útiles para indicar interacción visual como el hover en enlaces y botones. Además, conocer la especificidad y la herencia evita conflictos al crecer el proyecto.

> hover: aplica estilos cuando el puntero pasa encima.

> link: aplica a enlaces no visitados.

> visits: aplica a enlaces ya visitados.

---

## Pseudo-clases y Elementos

>speudo-clases: permiten apuntar a estados específicos del DOM.

>speudo-elementos: generan contenido que no existe en el HTML.

:focus - estiliza el elemento enfocado.

:first-child - representa el primer elemento entre un grupo de elementos hermanos.

:last-child -
:nth-child(even) -
::before y ::after -

    li:first-child {
    color: green;
    font-weight: bold;
    }

    li:last-child {
    color: red;
    font-weight: bold;
    }

¿Cómo usar ::before y ::after con content?

+ ::before y ::after se escriben con doble dos puntos.

+ content inserta el texto (por ejemplo, comillas) al inicio o al final.

+ El estilo del contenido se controla como cualquier nodo: color, tamaño, etc.

Lectura recomendada: https://webdesign.tutsplus.com/the-30-css-selectors-you-must-memorize--net-16048t

---

## Box Model

<!-- Nos ayudara mucho a ahorrarnos problemas. -->

Domina el modelo de caja en CSS para evitar sorpresas en el layout: entender cómo se combinan contenido, padding, borde y margin, y cuándo usar box-sizing te da control real de las dimensiones. 

La forma en la que funciona CSS, es en donde toma todos los elementos como cajas. Como cuando se visualiza desde las DEV TOOLS el espacio que ocupa cada elemento, se ve como todo se compone con cuadros/rectangulos incluyendo si es texto.

A partir de eso nosotros podemos manipular los estilos que existen.

Por medio de  las DEV TOOLS (al final) encontramos una caja que contiene margin, padding, border y asi vemos cual es el modelo de caja que contiene cada uno de los elementos.

>El margin: espacio externo para separar contenedores. Un margin de 20 píxeles separa bloques que, sin esto, quedan encimados.

>El borde puede ser un ejemplo visual de donde se encuentra el contenedor, línea que rodea el contenedor y ocupa píxeles. Útil para visualizar dimensiones y posición.

>El padding: espacio interno entre contenedor y contenido. Al quitarlo, el contenido se pega al borde.

box sizing: viene por default 

box-sizing: content-box; Podemos tener un margin, padding, border y cualquier atributo por separado, pero el navegador suma todos estos atributos haciendolos pasar por el tamaño o espacio total de cada elemento.

box-sizing: border-box; Podemos tener control de todas las dimensiones.

Generalmente todos los elementos vienen con unos estilos por default. (User Agent Stylesheet).

En conclusión: **Usar un selector  *  que aplique a todos los elementos para hacer reset garantiza que los espacios sean exactamente los que defines tú.**

todo esto es para evitar sorpresas en el layout.

---

## Position CSS

Mejoran la maquetación, el control del scroll y el orden visual de los elementos.

Cada uno de los elementos tiene una posicion al momento de rendirarse en el navegador. 

### position:relative;

    position:relative;
    top:20px;
    left:30px;

permite mover un elemento desde su posición original utilizando elementos como top, left. Todo esto sin afectar a los otros elementos.

### position:absolute;

    .contenedor-padre {
        position:relative;
        height:100px;
    }

    .elemento-hijo{
        position:absolute;
        top:10px;
        right:10px;
    }

El elemento padre debe tener un position por default para que el elemento hijo pueda moverse con toda la libertad dentro de su contenedor. Afecta a la posición de los otros.

Con absolute, el elemento sale del flujo y no reserva espacio. Se posiciona respecto al primer ancestro con position configurado (comúnmente relative en el padre).

### position:fixed;

    position:fixed;
    bottom: 30px;
    right: 30px;

No importa si su contenedor padre tenga una position, el FIXED se quedará en un mismo lugar.

Una vez se le agregue el atributo fixed, el elemento va a estar fijo en la pantalla sin importarle el scroll que se realice.

Una vez se le agregue ese atributo, hay que añadirle unas coordinadas botom, right, top, left para darle una posición en la pantalla.

Fixed ignora el contenedor y se ancla a la pantalla. Permite botones persistentes durante el scroll.

### position:sticky;

    .contenedor-scroll {
        height: 150px; --> Limite de tamaño.
        overflow-y:auto; --> SCROLL al añadir limite
    }

    position:sticky;
    top:0px;

se comporta como relative mientras este en cualquier lado más abajo del limite hacia arriba en scroll y hay comenzará a comportarse como como fixed.

Sticky combina lo mejor de relative y fixed según el scroll. Por su parte, z-index resuelve qué capa se ve al frente cuando varias se superponen.

Un ejemplo es la barra de navegación.

### position:z-index;

    .contenedor{
        positin: relative;
        height: 150px;
    }

    .capa {
        position: absolute;
        width: 80px;
        height: 80px;
    }

    .capa-1{
        top: 20px;
        left: 20px;
        background-color: blue;
        z-index:1;
    }

    .capa-2{ --> Se pondrá por encima de la capa 1
        top:40px;
        left:40px;
        background-color: red;
        z-index:2;
    }

No es como un position, pero sirve para posicionar al frente de otros elementos (capas), 

Qué contenedor o elemento necesito que se ponga delante de qué elemento o contenedor. Controla qué elemento queda por encima cuando se superponen.

---

## Organización BEM

Es importante entender que cuando hay un proyecto cada vez más grande, hay un problema con la especificidad, por lo que existen metodologias para evitar que los estilos se pisen entre ellos.

BEM en CSS te permite escalar estilos sin conflictos al nombrar clases con una estructura clara. Con bloques, elementos y modificadores bien definidos, los estilos dejan de “pisarse” y el código se vuelve predecible, mantenible y fácil de leer.

BEM: Block Element Modifier

Ejemplo: Tarjeta de producto

    Block: <div class="card">
    Element:    <h2 class="card__title">Laptop Pro</h2>
    Element:    <p class="card__price">$999</p>
    Modifier:   <button class="card__button card__button--disabled">Comprar</button>
           <div>

La idea central: cada clase indica su rol y alcance. Un bloque agrupa una pieza independiente de interfaz; un elemento es una parte del bloque; un modificador expresa un estado o variante.

Bloque: representa un componente como una tarjeta, por ejemplo, card.

Elemento: se nombra con doble guion bajo: card__title, card__price, card__button, card__badge.

Modificador: se nombra con doble guion: card--feature, card__button--disable.

>La tarjeta funciona como bloque principal. Dentro, se definen elementos para el título, el precio, los botones y un badge. Luego se aplican modificadores para estados específicos. 

>Se trabaja primero el contenedor para visualizarlo con claridad: borde, espaciados y ancho máximo y se aplican estilos puntuales a cada elemento, sin afectar otros bloques.

>Los modificadores expresan variaciones: uno para el bloque completo (feature) y otro para el botón deshabilitado (disable). Separar estado de estructura mantiene el CSS limpio y predecible.

>max-width: 300px; es el maximo tamaño que se le define a un elemento.

>cursor: not-allowed; da apariencia al boton de inactivo.

---

## Unidades de medida

Elegir la unidad correcta en CSS es clave para lograr un diseño responsive, accesible y controlado.

Elegir bien evita comportamientos inesperados y mejora la accesibilidad.

**pixel** es una unidad de medida fija, por lo que nunca va cambiar. si defines un contenedor de 200px, se mantendrá así sin importar el tamaño de pantalla.Esto puede obligar a hacer scroll si el contenido es más ancho que el viewport. (Determinante para el responsive)

**%**: El porcentaje se calcula con base en el contenedor padre. Si ese padre tiene dimensiones, tu caja puede adaptarse. Por ejemplo, 50% tomará la mitad del ancho disponible del padre, y se mantendrá proporcional al redimensionar la ventana.

**REM**: Un rem equivale siempre al font-size del documento base (HTML), que por defecto es 16 píxeles.recomendable principalmente para fuentes(Accesibilidad). Cambia de acuerdo al tamaño de fuente del dispositivo .

**EM**: 1em = 16px(por defecto)saca su  tamaño a partir del font-size del contendor padre, puede generar problema para tener medidas exactas -  El problema: es acumulativo.

vw (view width) y vh (view height) miden en función del viewport: 1vw es 1% del ancho de la pantalla; 1vh es 1% de la altura. Útiles para resolver alturas relativas antes complejas en CSS.

**VW**:Será el porcentaje de la pantalla, es decir al agregar 30vw será el 30% del view width.

    width:30vw;

**VH**: Antes era un problema definir tamaño en height que se adaptara al tamaño de la pantalla.

    height:30vh;

---

## Proyecto final: portafolio profesional con HTML y CSS

a

---

## Fuentes Web

Elegir y configurar fuentes web en CSS define la legibilidad y el estilo de una interfaz. 

El navegador agrega una fuente por defecto siendo de la familia Serif. 

Las tipografías se agrupan en cinco familias que todo navegador reconoce por defecto.

1. Serif (Con remates): Con "Decoraciones" al final de los trazos. Ejemplo típico: Times New Roman. Da un aire editorial. --> Formal

2. Sans-Serif (Sin remates): Sin decoraciones. Ejemplos comunes: Arial, Helvetica. Se percibe como moderno. --> Lectura para pantallas y neutro.

3. Monospace (Ancho Fijo): Ancho fijo en cada carácter. Ideal para mostrar código. --> Todos los caracteres ocupan el mismo ancho.

4. Cursive: Simula escritura a mano

5. Fantasy: Más decorativa y expresiva.

>Font Stack
>Texto con inter de Google

En el CSS se agrega con:

    font-familiy: serif;

Define font-size consistente para jerarquía y lectura. Se edita el tamaño del texto con:

    font-size:1px;

### Fallback

Las fuentes son universales y se encuentran en cualquier tipo de dispositivo o sistema operativo.

Pueden haber fuentes que si sean especificamente de algún sistema operativo, por lo que se toman las otras familias que se tengan en codigo (Accesibilidad)

Compatibilidad: algunas fuentes existen solo en ciertos sistemas (Mac OS o iOS) y no en Windows. El fallback evita inconsistencias.

Es buena practica agregar una fuente alterna. **Pues tambien se puede caer la pagina de fuentes de google**

Un font stack es la lista ordenada de fuentes en font-family. El navegador intenta la primera; si no existe en el sistema, usa la siguiente.

    font-family: monospace, serif, sans-serif;

Ejemplo de codigo:

    .serif {
        font-family: serif;
        font-size: 20px;
    }

    .sans {
        font-family: sans-serif;
        font-size:20px;
    }

    .monospace {
        font-family: monospace;
        font-size:20px;
        background: #f0f0f0;
        padding: 5px;
    }

Paginas Recomendadas:

+ [fonts-google.com](fonts-google.com "fonts-google.com")

---

## Propiedades Tipográficas

Estas propiedades nos ayudan a modificar estas fuentes. Con pequeños ajustes, el texto se vuelve más claro, cómodo y consistente en distintos dispositivos.

font-size: Tamaño de letra/Fuente

font-weight: Qué tan ancho o grueso se quiere que sea la fuente, Se puedes ir de 100 a 900, pero no todas las fuentes incluyen todos los pesos.

    .light {
        font-weight: 300;
    }

    .bold {
        font-weight: 900;
    }

line-height: Altura de interlinea, para aumentar la legibilidad

font-style: Tenemos 3 opciones que es normal, italic y oblique - Es como agregarle cursiva

---

## Control de Texto

Controlar la tipografía con presición usando propiedades clave con CSS para alinear, transfomrar, decorar e identar texto. Es fundamental para poder modificar a gusto este tipo de elementos.

¿Cómo posicionamos nuestro texto?

Muchas veces en el desarrollo, actividades que debemos realizar es cambiar en donde posicionamos nuestro texto. 

**Propiedad text-align:;**

Por defecto todo el texto se va hacia la izquierda.

Por lo que podemos acomodar el texto dependiendo de lo que estemos necesitando utilizando:

    text-align: left; --> Alineación por defecto a la izquierda.

    text-align: right; --> Alineación por defecto a la derecha.

    text-align: center; --> Centra el texto dentro del ancho disponible.

    text-align: justify; --> Distribuye espacios para ocupar el ancho completo en cada linea.

**Text-Tranform**        

Si deseamos hacer que un texto en nuestro HTML quede totalmente en mayuscula (uppercase), o por otro lado si queremos que quede totalmente en minuscula (lowercase), podemos editarlo desde nuestro CSS.

Esto sucede cuando el contenido llega en un formato y se necesita mostrarlo en otro.

    text-transform: uppercase; --> Convierte todo a mayúsculas

    text-transform: lowercase; --> Convierte todo a minúsculas.

Por otro lado si queremos que cada letra inicial de nuestro parrafo sea mayuscula podemos hacer:

    text-transform: capitalize;

**text-decoration**

Si queremos agregar que el texto en un parrafo tenga un subrayado podemos utilizar la propiedad:

    text-decoration:underline; --> Añade una línea inferiora a cualquier elemento.

Si queremos tachar el texto en un parrafo podemos utilizar la propiedad:

    text-decoration:through; --> Tacha el texto.

Si al contrario no queremos nada en nuestras etiquetas, podemos utilizar la propiedad:

    text-decoration:none; --> Elimina el subrayado, sirve para etiquetas <a> cuando se deasea modificarlas.

**ident**

Para una maquetación editorial, si queremos agregar un interlineado al inicio de nuestro parrafo, especificamente en la primera linea de este. Podemos utilizar esta propiedad.

    text-ident:2rem;

---

<!-- Colores -->

## Sistemas de Color

Formatos de color

HEX - Hexadecimal, generalmente se utiliza con el simbolo # y se le acompaña con F siendo el maximo valor. Estan los numeros de a pares 00 (rojo) 00 (verde) 00 (azul), es decir valores 0–9 y A–F. Dos dígitos por canal. Empieza con numeral. 000000 es negro. FFFFFF es blanco:

    background-color: #ff5733;

RGB - tres valores del 0 al 255 por canal. 0 apaga el canal, 255 lo lleva al máximo, teniendo 3 espacios para determinar el color:

    background-color: rgb(0,0,0);

HSL - Va del 0 al 360, siendo una secuencia de 3 numeros diferentes. tono en grados 0–360, saturación 0–100 %, luminosidad 0–100 %.

    background-color: hsl(0, 50%, 50%);

RGBA - la ultima A quiere decir ALFA, que se refiere a que trasparente queremos que sea el color. En donde 0 es totalmente trasparente y 1 es solido. Por lo que podemos hacer:

    background-color: rgba(231, 76, 60, 0.25);

El ultimo formato de color es en donde directamente se le agrega el nombre del color:

    color: gold;
    color: green;
    color: white;


## Variables CSS

Las variables de CSS son la forma más simple y robusta de asegurar consistencia visual

>Funcional para acelerar cambios globales y evitar repetir código.

Son totalmente importanes cuando el proyecto empieza a ser muy grande. Podemos utilizar variables para no tener que replicar codigo y si vamos a hacer cambios, no tendriamos que realizar el cambio en cada uno de los elementos modificados si no solamente en la variable.

es por medio de un pseudoselector:

    :root {
        --(nombre-de-la-variable): #2eecc61
        --color-primary: #414144
        --color-secundary: #3498db
        --space: 20px;
    }

    para ejecutar estas variables:

    .example { 
        background: var(--color-secundary)
    }

    .button-primary { background: var(--color-primary); }


## Degradados

De arriba hacia abajo:

    background: linear-gradient(#3498db, #9d59d6)

Si queremos ajustar la dirección del color

    background: linear-gradient(to right, #134940, #103494);

De forma diagonal

    background: linear-gradient(to bottom right, #134141, #564678);

Ahora si lo quermos de forma circular

    background: radial-gradient(circle, #f39c12, #e74c33);

Ahora si queremos de arriba hacia la izquierda

    background: radial-gradient(at top left, #912414 #415155)

Pero entonce si ahora si queremos varios colores

    background: linear-gradient(to right, red, green, pink, orange, blue);

## Sombras y Bordes

Generalmente utilizamos los bordes para mirar qué espacio estan ocupando los elementos. Las sombras y los bordes pueden tener más usos (dar un nivel visual diferente).

>con min-width el elemento se hará tan chiquito a medida de la pantalla hasta cierto tamaño.

Sombra Externa: 

    box-shadow: 5px 5px #888;

Sombra Interna:

    box-shadow: inset 0 0 10px #888;

¿Cómo agregarle sombra a los textos?

    text-shadow: 2px 2px 5px #888;

Al hacer más ciruclares algunas tarjetas y aumentar su estilo de forma moderna

    border: 1px solid black;
    border-radius:5px;

    border-radius: 15px; Es más circular

    border-radius: 50%; Deja el elemento totalmente circular

>Usa display: inline-block para que, si hay espacio, se coloquen en línea.

---

## Introducción Flexbox

configura el contenedor con display: flex, centra el contenido, controla el crecimiento con flex-grow y el atajo flex, y alinea elementos con align-self.

La alineación en CSS dejó de ser un dolor de cabeza. Nos ayudara a posicionar el contenido en los contenedores.

Flexbox simplifica la tarea de posicionar contenido dentro de los contenedores.

El primer paso para utilizar esta herramienta es activar el display flex por lo que:

    display:flex;

La propiedad de justify content controla la alienación y distribución del item.

Controla la alineación y distribución a lo largo del eje principal del contenedor.

centra los items en el eje transversal

aling-items:center;

---

## Flexbox Avanzado

text-align: centra el texto de su contenedor

flex-grow permite que los items crezcan para ocuparlo. Así controlas la proporción de crecimiento entre elementos vecinos de forma simple.

0: no crece para ocupar espacio extra.
1: crece proporcionalmente al resto que también tiene 1.
2: crece el doble respecto a los que tienen 1.

    flex:1;
    flex:2;
    flex:3;


align-self

---

## GRID

Con CSS Grid puedes posicionar contenido en dos ejes a la vez de forma clara y escalable. Activa el modelo con display: grid, define columnas con grid-template-columns usando fracciones fr, automatiza con la función repeat() y controla el espacio interno con gap. Verás un grid 2×2, cómo repartir 1fr 2fr 1fr, y cuándo preferir gap en lugar de margin.

CSS Grid organiza elementos en columnas y filas simultáneamente, mientras que flexbox trabaja en un eje a la vez (horizontal o vertical). 

* Grid se ocuparia para posisionar las etiquetas contenedoras como, header, main, footer.

* Flex se ocuparia para posicionar el contenido que este dentro de las etiquetas contenedoras.

Nos va a ayudar a posicionar de mejor forma, flex nos permitia orientar un mismo contenido

    display:grid;

    grid-template-columns:1fr 1fr 1fr;

>La unidad fr es exclusiva de Grid pues representa una fracción del espacio disponible del contenedor.

    grid-template-columns: repeat (1,2fr);

    gap

---

## Grid Avanzado

Aprende a dominar CSS Grid con tres técnicas clave que simplifican la maquetación: grid areas, span y grid lines.

>Con estos patrones se puede definir un layout completo

    .grid-areas {
        display: grid;
        grid-template-areas:
            "header header"
            "sidebar content"
            "footer footer";
        grid-template-columns: 200px 1fr;
        gap: 10px;
        margin-bottom: 20px;
    }

    /* Estilos base compartidos */
        header, .sidebar, .content, footer {
        padding: 20px;
        text-align: center;
        color: white;
    }

* display: grid activa el modelo de cuadrícula.

* grid-template-areas dibuja el layout con nombres de áreas.

* grid-template-columns define anchos (ej: 200px y 1fr).

* gap y margin-bottom mejoran la separación visual.

* grid-area enlaza cada bloque con su área del template.


## ¿Qué son las grid lines y cómo posicionar por líneas?

Las grid lines son las líneas delimitadoras de columnas y filas. En lugar de pensar en fracciones o span, defines desde qué línea hasta cuál colocar el elemento, tanto en columnas como en filas.

    .grid-lines {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        gap: 10px;
        margin-bottom: 20px;
    }

    /* Posicionar por columnas: de la línea 1 a la 3 */

    .box-1 {
    grid-column: 1 / 3;
    background: red;
    }

    /* Posicionar por filas: de la línea 1 a la 3 */

    .box-2 {
    grid-row: 1 / 3;
    background: green;
    }

>grid-column: 1 / 3 ocupa desde la línea 1 hasta la 3 (dos columnas de ancho).

>grid-row: 1 / 3 ocupa desde la línea 1 hasta la 3 (dos filas de alto).


---

## Media Queries / Viewport

Ya empezamos con el tema de responsividad, muchas veces en el computador las vistas son buenas, pero puede que en tablets, celulares y en dispositivos con pantallas más pequeñas no se vea de la mejor forma.

La idea es desarrollar interfaces que se vean bien en cualquier pantalla con responsive design en CSS.

A partir de un enfoque mobile first, para priorizar contenido, usar flexbox y configurar media queries con puntos de quiebre claros para tablet y desktop. Es importante el ajuste tipografías con rem y controlar la visibilidad por dispositivo sin perder accesibilidad.

No se puede navegar de la misma forma.

Mobile First: Es una técnica que utilizaremos para pensar en el diseño primero para el celular y luego para desktop

Metodo para agregarlo:

    @media (min-width: 768px) {
        .container {
            flex-direction: column;
        }
    }

    @media (max-width: 768px) {
        .container {
            flex-direction: column;
        }
    }

En donde dentro del {} se puede agregar el pedazo de código el cual queremos que se active para los dispositivos con cierto tamaño de pantalla en adelante por eso los 768px

Dentro del { } principal, puedes agregar.

> Responsive design: adaptar la UI al dispositivo para una buena lectura y navegación.

> Mobile first: definir primero estilos base para móvil y escalar a tablet/desktop.

> Viewport: ancho visible que guía cuándo activar cambios con media queries.

> Accesibilidad con rem: tipografías que respetan ajustes del usuario.

> Habilidades trabajadas: configurar flexbox, definir puntos de quiebre con min-width, gestionar > 
visibilidad con display, depurar con el inspector del navegador.

**La estrategia es clara:** estilos base para móvil y, con media queries, reacomodar layout y visibilidad según el tamaño del viewport. **Se usan puntos de quiebre en 768 px para tablet y 1024 px para desktop.**

Un ejemplo de código puede ser: 

    @media (min-width: 768px) {
        .container { flex-direction: row; }
        .box { flex: 1; }
        .nav-list { flex-direction: row; }

        .mobile { display: none; }
        .tablet {
            display: block;
            background: #F39C12;
            color: white;
            padding: 10px;
        }

        .responsive.title { font-size: 2rem; }
    }  

* Ajustar jerarquía tipográfica: 1.5rem en móvil, 2rem en tablet y 3rem en desktop para el título

---

## Diseño Fluido

Se tiene que programar de forma que dentro de los media querie se agrege un diseño flexible en donde se pueda adaptar a los diferentes tamaños dentro del rango del media querie. Por lo que a esto se le denomina diseño fluido

* La pantalla movil más pequeña en el mercado es de 320px

    width: 90%; respecto al body
    max-width:
    min-width:
    margin: 0 auto; para que se centr automaticamente

display: 
grid; grid-template-columns: repeat (auto-fit, minmax (250px, 1fr));

    .fluid-container {
        width: 90%;
        max-width: 1000px;
        min-width: 320px;
        margin: 0 auto;
        padding: 20px;
        background: blue;
        color: white;
    }

Si el viewport baja de 320 px, aparece scroll horizontal. - Al superar 1000 px, el contenido queda centrado gracias a margin: 0 auto. - Entre 320 y 1000 px, el bloque usa siempre el 90% del contenedor padre.

**GRID FOR RESPONSIVE**

Para un layout flexible sin media queries, grid ofrece patrones adaptables y las imágenes y fuentes requieren reglas específicas para mantener foco y legibilidad.

on grid-template-columns y repeat(auto-fit, minmax()) logras columnas que se reacomodan según el espacio. El mínimo asegura legibilidad; el máximo reparte el espacio disponible con 1fr.

    .fluids-grid {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
        gap: 20px;
        margin-bottom: 20px;
    }

> auto-fit: ajusta el número de columnas según el ancho disponible.

> minmax(250px, 1fr): cada tarjeta mide mínimo 250 px y crece equitativamente.

> gap: separa elementos y mejora el ritmo visual.


**¿Cómo hacer una imagen flexible dentro de su contenedor?**

Limita el contenedor con max-width y céntralo. Se debe hacer que la caja de imagen ocupe el 100% del ancho y una altura para que sea visible.

    .image-contained {
        width: 100%;
        max-width: 800px;
        margin: 0 auto;
    }


**¿Cómo escalar tipografía con la función clamp?**

La función clamp() define un mínimo, un valor ideal relativo y un máximo. Así el texto crece suave con el viewport y se detiene donde conviene.

    .titulo_fluido {
        font-size: clamp(1.5rem, 4vw, 3rem);
        margin-bottom: 10px;
    }

> Mínimo: 1.5rem para móviles.

> Ideal relativo: 4vw para crecer con el ancho.

> Máximo: 3rem para desktop grandes.




---




## Mobile First

Con toda la información anterior vista, ya se puede hacer un proyecto totalmente responsivo. Entonces se debe tener en cuenta los siguentes principios:

**Empezar por mobile ayuda a no sobrecargar.** Los dispositivos móviles no tienen la misma potencia de cómputo que desktop, así que conviene cargar solo lo esencial y sumar elementos conforme crece el espacio hacia tablet y desktop.

* Priorizar el contenido. Define el objetivo clave y muéstralo sin distracciones.

* Aplicar mejoras progresivas. Agrega características según las capacidades reales de los dispositivos de tus usuarios.

1. Cargar primero sólo lo de movil debido a que en el computador se puede agregar bastante contenido que no será tan facil agregarlo a movil
2. Hay que forzar las decisiones sobre qué es lo más importante para mostrar
3. Mejora progresiva, a medida que se va agregando tamaño de pantalla, agregarle más contenido o complejidad
4. Touch Friendly: Las areas de touch deben ser minimo 44x44

---

**¿Cómo manejar la navegación progresiva?**

Usar icono de hamburguesa cuando el espacio se reduce.
* Alternar visibilidad con CSS y JavaScript: display: none / display: block.

* Quitar “basura” visual en pantallas pequeñas y dejar solo lo necesario para interactuar.

---

**¿Cómo adaptar el hero por tamaño de pantalla?**

Cambiar el layout con grid o flex según el espacio disponible.

* Si en mobile la imagen del hero no aporta al objetivo, se puede omitir.

* Mantener siempre visible el contenido clave con el que el usuario interactúa.

---

**¿Cómo adaptar cartas y formularios con CSS flexible?**

El contenido debe fluir y reacomodarse según el ancho. Las cartas y los formularios son grandes candidatos para layouts que cambian cuando hay espacio suficiente.

* Hacer contenido flexible.

* Formularios adaptables. 

* En pantallas amplias pueden ir campos lado a lado; en mobile, conviene columna para evitar toques fallidos.

* Cuidar el espacio entre inputs. 

* Aumenta márgenes

* Separaciones para mejorar la interacción táctil.

---

**¿Qué tamaños y espaciados touch garantizan buena usabilidad?**

* Touch targets: área mínima de 44 x 44 px para botones y elementos interactivos.

* Fuentes: mínimo de 6 px (1 rem) para asegurar legibilidad.

* Saltos de línea: 1.6 de interlineado para lectura cómoda en bloques de texto extensos.

---





## Transformaciones

Las transformaciones en CSS nos permiten cambiar la forma, tamaño, posición o inclinación de un elemento sin afectar el resto de la página, con ellas podemos rotar, escalar, mover o inclinar objetos de manera muy visual y dinámica. Además, se pueden combinar varias transformaciones a la vez para crear efectos más llamativos

* mover

* rotar

* escalar

**¿Cómo suavizar cambios con transition en transform?**:Añade transition - transform 0.3s para evitar saltos bruscos pues mejora la percepción del movimiento y la interacción.

¿Qué hace translateX y translateY en hover?

translateX(30px) mueve 30 píxeles en horizontal.
translateY(-30px) mueve 30 píxeles hacia arriba con valor negativo.

    .translate-x:hover { transform: translateX(30px); }
    .translate-y:hover { transform: translateY(-30px); }

**¿Cómo mover en diagonal con translate?**: Pasa dos valores: x, y.
Un ejemplo común: translate(20px, 20px) para ir a la derecha y abajo.

    .translate-xy:hover { transform: translate(20px, 20px); }

Recuerda: el trigger es hover, pero puedes usar otros según la interacción deseada.




---



**Cómo rotar y escalar con rotate y scale?**: rotate gira el elemento desde su centro por defecto (puedes cambiarlo con transform-origin). scale modifica el tamaño relativo sin romper el flujo.

Define el ángulo en grados: 45deg, 90deg, 180deg.

    .rotate-45:hover { transform: rotate(45deg); }

    .rotate-90:hover { transform: rotate(90deg); }

    .rotate-180:hover { transform: rotate(180deg); }


**¿Cómo reducir o ampliar con scale?**: 

* scale(0.5) reduce a la mitad.

* scale(1.5) aumenta 1.5 veces.

* scale(2) duplica el tamaño.

    .scale-small:hover { transform: scale(0.5); }
    .scale-medium:hover { transform: scale(1.5); }
    .scale-2x:hover { transform: scale(2); }




---


## Transiciones

Las transiciones en CSS mejoran la experiencia visual: suavizan cambios de color, tamaño y posición sin brusquedades.

Se pueden hacer cosas como:

* Transition a botones y cajas
* Combinar cambios con transform
* Controlar la velocidad con linear, ease y ease-in-out

**¿Por qué usar transiciones en CSS?**

Las transiciones hacen que los cambios se sientan suaves y naturales. Evitan saltos abruptos al pasar el hover y aportan claridad visual.

**¿Cómo aplicar transiciones en botones con hover?**

La clave está en declarar la propiedad a animar, la duración y la función de aceleración. Así, el cambio no se ve brusco.

    /* Transición del color de fondo */

    .button-color {
    transition: background-color 0.3s ease;
    }
    .button-color:hover {
    background-color: #E74C3C; /* rojo suave */
    }

¿Cómo hacer que el botón crezca?

Si buscas un efecto de crecimiento, anima transform con scale.

    /* Transición de tamaño */
    .button-size {
    transition: transform 0.3s ease;
    }
    .button-size:hover {
    transform: scale(1.1);
    }

¿Cómo combinar color, sombra y escala en un botón?

Cuando un mismo elemento cambia varias propiedades, puedes usar all para cubrirlas. Evita declarar múltiples transform separados.

    /* Botón con varios cambios al hover */
    .button-all {
    transition: all 0.3s ease;
    }
    .button-all:hover {
    background-color: #2ECC71; /* verde */
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.3);
    transform: scale(1.1); /* se decidió escalar y no trasladar */
    }

* No declares dos reglas de transform en el mismo selector al mismo tiempo: una pisará a la otra.

    /* Variantes de timing */
    
    .timing-linear { transition: transform 1s linear; } -
    .timing-ease { transition: transform 1s ease; } - 
    .timing-ease-in-out { transition: transform 1s ease-in-out; }

    /* Disparador común */
    .box:hover { transform: translateX(200px); }

linear: velocidad uniforme todo el tiempo.
ease: aceleración natural, empieza lento y acelera.
ease-in-out: suave al inicio y al final, rápido en medio.




---



## Animaciones 

Las animaciones en CSS permiten mover, escalar y rotar elementos sin depender de un disparador como hover. Se aplican con keyframes, transform, la duración en fracciones de segundo, y finalmente la repetición.

¿Cómo funcionan las animaciones en CSS y en qué se diferencian de las transiciones?

A diferencia de las transiciones, que necesitan un trigger (por ejemplo, hover), las animaciones se ejecutan por sí mismas al declararlas con keyframes y aplicarlas con la propiedad animation. No hay eventos adicionales: el ciclo inicia y se repite según lo configurado.

* @keyframes define estados en 0 %, intermedios y 100 %.

* animation controla nombre, duración, curva de tiempo y repetición.

* transform aplica efectos como scale, rotate y translateY.

* Timing functions: ease-in-out suaviza inicio y final; linear mantiene velocidad constante.

* Repetición: infinite mantiene la animación corriendo sin parar.

    .box {
    width: 100px;
    height: 100px;
    background: #3498DB;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 20px;
    border-radius: 10px;
    }

---

¿Cómo crear un efecto pulse con transform: scale?

    @keyframes pulse {
    0% { transform: scale(1); }
    50% { transform: scale(1.2); }
    100% { transform: scale(1); }
    }

    .box.pulse {
    animation: pulse 2s ease-in-out infinite;
    }

scale(1.2): aumento aproximado del 20 % del tamaño.
ease-in-out: entrada y salida suaves.
infinite: se repite continuamente.

---

¿Cómo rotar con rotate en una animación continua?

    @keyframes rotate {
    0% { transform: rotate(0deg); }
    100% { transform: rotate(360deg); }
    }

    .box.rotate {
    animation: rotate 3s linear infinite;
    }

linear: velocidad uniforme durante todo el ciclo.
360deg: vuelta completa.

---

¿Cómo simular un rebote con translateY?

    @keyframes bounce {
    0%, 100% { transform: translateY(0); }
    25% { transform: translateY(-30px); }
    50% { transform: translateY(-15px); }
    75% { transform: translateY(-5px); }
    }

    .box.bounce {
    animation: bounce 2s ease infinite;
    }

Secuencia con 0 %, 25 %, 50 %, 75 % y 100 %.
translateY negativo: simula la subida del salto.
Pasos decrecientes: sensación de amortiguación.

---

¿Cómo crear un spinner de loading solo con CSS?

Un anillo con borde superior coloreado que rota de forma continua. Ideal para indicar carga hasta que con JavaScript ocultes el spinner y muestres el contenido.

.spinner {
  width: 50px;
  height: 50px;
  border: 5px solid #f3f3f3;
  border-top: 5px solid #3498DB;
  border-radius: 50%;
  margin: 20px;
  animation: spin 1s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}

border-top coloreado: crea el efecto de giro visible.
1s linear infinite: giro constante y fluido.
50% de border-radius: círculo perfecto.

¿Qué diferencia hay frente a un sitio estático?
Las animaciones y transiciones básicas aportan movimiento y ritmo. El resultado es un proyecto más atractivo visualmente y con mejor lectura de estados.

---

## Conclusión

Este documento reúne mis apuntes y prácticas del curso Fundamentos de CSS, donde aprendí a manejar la tipografía, los colores, los layouts modernos, las animaciones y el diseño responsivo. Con estos conocimientos, puedo construir interfaces visualmente atractivas, legibles y adaptables a cualquier dispositivo.

> Gracias por leer.