# Programación Básica: Mokepon

> Actualmente este documento aun esta en construcción.

## Tabla de Contenido

1. [Optimizacion del Código JavaScript con Clases y Objetos](#optimizacion-del-código-javascript-con-clases-y-objetos)

2. [Optimización de Código JavaScript: Variables y Funciones](#optimización-de-código-javascript-variables-y-funciones)

3. [Optimización de Código JavaScript con Clases y Objetos 2](#optimización-de-código-javascript-con-clases-y-objetos-2)

4. [Construcción de Clases y Objetos en JavaScript](#construcción-de-clases-y-objetos-en-javascript)

5. [Uso de Arreglos para Almacenar Objetos en JavaScript](#uso-de-arreglos-para-almacenar-objetos-en-javascript)

6. [Agregar ataques a Objetos en JavaScript](#agregar-ataques-a-objetos-en-javascript)

7. [Renderizado Dinámico de Objetos HTML con JavaScript](#renderizado-dinámico-de-objetos-en-html-con-javascript)

8. [Solución de errores en variables y elementos HTML en JavaScript](#solución-de-errores-en-variables-y-elementos-html-en-javascript)

9. [Uso de Objetos para Centralizar Información en JavaScript](#uso-de-objetos-para-centralizar-información-en-javascript)

10. [Selección de Mascota Aleatoria en JavaScript](#selección-de-mascota-aleatoria-en-javascript)

11. [Iteración de Arreglos y Manipulación del DOM en JavaScript](#iteración-de-arreglos-y-manipulación-del-dom-en-javascript)

12. [Crear Función "mostrarAtaques" en JavaScript para Juegos](#crear-función-mostrarataques-en-javascript-para-juegos)

13. [Eventos de Clic en Botones con JavaScript](#eventos-de-clic-en-botones-con-javascript)

14. [Secuencia de Ataques y Validación de Resultados en JavaScript](#secuencia-de-ataques-y-validación-de-resultados-en-javascript)

15. [Implementación de Lógica de Combate en Juego JavaScript](#implementación-de-lógica-de-combate-en-juego-javascript)



---






# Optimizacion del Código












## Optimizacion del Código JavaScript con Clases y Objetos

Tenemos ya nuestro código HTML, CSS y JavaScript. A continuación trabajaremos todo el módulo de optimización de código que está enfocado en JavaScript, siendo asi diferentes aportaciones al código haciendolo más profesional.

Ya tenemos nuestros personajes, pero **¿Y si nos pidieran crear 1.000 personajes?** Harias un copy-paste de todo el código cambiando las variables? Esto no es lo ideal porque gastaría demasiado tiempo.

Haremos una nueva función de JavaScript para la cual, si necesitamos agregar más personajes, no se tenga que hacer de forma manual sino poder **automatizar más este proceso**.

Asi entonces, aprenderemos unos nuevos conceptos:

* ¿Qué son las clases? by MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

* ¿Qué son los objetos? by MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects

> Y como puedo hacer que la interacción de mis objetos puedan interactuar con el DOM?

---

A continuación vamos a revisar el código verificando entonces, el funcionamiento de nuestro código y la busqueda de oportunidades de integración de nuestra nueva idea.

> Hemos visto entonces, el código de forma muy simplificada... Ahora lo que sigue es hacerlo mejor. (Puede que sea código más complejo.)

En nuestro HTML tenemos lo siguente:

    <input type="radio" name="mascota" id="hipodoge" />
    <label class="tarjeta-mokepon" for="hipodoge">
        <p>Hipodoge</p>
    <img src="../pages/04-programacion-basica/02-mokepon/assets/hipodoge.png">
    </label>

Eso quiere decir que tenemos por cada mascota, tener que escribir esto. Además de tener que modificar el JavaScript para poder incorporarlo en las funciones. En el CSS realmente no hay que agregar mayor trabajo debido a que gracias a las **clases** ya con escribir la class="tarjeta-mokepon" se nos permite que utilice esos estilos generales establecidos en esa clase.

<img src="https://cdn-wcsm.alura.com.br/2025/04/oop-car-methods-and-attributes.png">

*Imagen Tomada De: https://www.aluracursos.com/blog/poo-que-es-la-programacion-orientada-a-objetos*

Pero aun asi es un problema con el HTML y el JS debido a todo el trabajo manual que debemos hacer para incorporar una nueva mascota o peor si son varias.

Esto implica mucho tiempo y por ende no es lo ideal.

Eventualmente estaremos mejorando ese aspecto para ayudar en los tiempos de desarrollo.

Además... lo mismo sucede con nuestros ataques, si quisieramos incorporar nuevos ataques tendriamos que hacer bastante trabajo manual. ¿Cómo podemos mejorar ese aspecto?

Por otro lado, como incorporamos que esos ataques sean aptos para unos personajes y no para otros? Pues actualmente todos los personajes tienen los mismos 3 ataques.

---

Por otro lado, en el HTML nuestra etiqueta script no deberia ir en el head sino en el body pues generamos un bloqueo porque cuando el navegador empieza a leer nuestro código empieza a leer el CSS, el HTML y si se encuentra JavaScript, deja de lado todo lo que estaba haciendo. Siendo asi un bloqueo y por ende malas practicas.

Entonces asi, se debe cambiar su posición del head hacia donde justo antes de que termine la etiqueta body.

Por ende el navegador va a leer primero el HTML, los Estilos y finalmente el código JavaScript. Si nosotros trabajamos en JavaScript es para nosotros agregarle interacción asi que... Si no podemos mirar nuestra página tampoco importa que podamos ver nuestra interacción siendo asi mejor agregar el vinculo al JS al final. 

Por lo que de esta forma aseguramos mirar nuestra página y luego cargar toda su interacción y asi mejoramos el performance o velocidad de nuestra página.

* Pregunta de Reddit - ¿Se debe poner la etiqueta **script** en la etiqueta **head** o justo antes del cierre de la etiqueta **body**? : https://www.reddit.com/r/webdev/comments/v8zdoo/should_the_script_tag_be_placed_in_the_head_tag/

---

Al mirar el código JavaScript tenemos variables y funciones, y dentro de funciones hay variables y hay algunas variables que se repiten en varias funciones.

En el código es muy importante el "No te repitas cuando haces código" o "Don´t repeat yourself" = DRY

* DRY by Wikipedia: https://es.wikipedia.org/wiki/No_te_repitas

Por ende hay mucho código que estamos repitiendo en las funciones, asi que cómo hacemos para que en una línea de código no nos repitamos? Entonces para aprender mucho más, es importante mirar tu código y pensar **¿Cómo puedo mejorarlo?**

Como por ejemplo:

* En el JavaScript repetimos muchas veces las declaraciones de los botones. Siendo asi la misma línea de código.

Es muy importante primero realizar el código y que sea funcional, eventualmente se mira y verifica si se puede mejorar.










---










## Optimización de Código JavaScript: Variables y Funciones

En el codigo no siempre la misma solución tiene que ser la solución pues podemos llegar a diferentes soluciones y si funciona, esta bien hecho.

* Se puede usar el atajo control + alt + flecha hacia arriba o hacia abajo dependiendo de donde se quiere la multiple opción de escribir.

* Si se mantiene la tecla control y se oprime alguna flecha de dirección hacia arriba o hacia abajo, se estará navegando en el documento. (Opción para no usar el la rueda de scroll que tiene un mouse.)

Cuando inicia el HTML y se lee el JavaScript iniciamos con la función **iniciarJuego()** que contiene muchas declaraciones de variables y muy posiblemente son elementos que estaremos re utilizando para las diferentes 
funciones.

Por lo que se selecciona cada una de las declaraciones... Siendo asi:

    let (nombreVariable) = document.getElementById('(id del elemento HTML)')

Se corta y se pega en lo más arriba del código llevandonos asi cada una de las declaraciones de las variables en nuestra función iniciarJuego().

La razón del por qué fueron todas las variables, es porque son elementos HTML. Estos jamás van a variar y los estaremos utilizando a lo largo de nuestro código si queremos ir agregando nuevas funcionalidades a nuestro programa.

Es importante limpiar los espacios y que aun asi sea legible el código. Entre menos espacio mejor porque mejora el performance de nuestra página pero a su vez puede ser un poco más complicado para nosotros visualizar nuestro código.

Es importante que cada cierto grupo de modificaciones, revisar el programa para verificar que no se ha "roto" nada.

Es un problema cuando una variable se repite, pues incluso aparecerá en la consola en rojo ['(el nombre de la variable)' has already been declared] 

Por ende, se va a revisar función por función cada una de las declaraciones siendo asi, los elementos HTML trasladados hacia el inicio del documento. Por como fuimos trabajando, hay demasiadas funciones en las que se repiten las mismas líneas de código declarando variables que identifican elementos HTML.

<img src="https://static.platzi.com/media/user_upload/js-1b0cd1e0-9843-474f-996f-4da9d76977fa.jpg">

*Imagen Tomada De: https://platzi.com/cursos/programacion-basica/dont-repeat-yourself-dry/*

---

Hay tipos de variables:

* const en JS by MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/const

* let en JS by MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/let

En donde las variables let son todas las variables que pueden variar en donde si tenemos un valor y luego se valor cambia, lo podemos hacer.

Pero hay otra forma de declarar variables y es por medio de const, que son constantes. Esto quiere decir que no puede cambiar su valor una vez que se crea. En consecuencia todos los elementos HTML declarados en el JS, los cambiaremos de let a const debido a que no van a cambiar su valor.

<img src="https://media2.dev.to/dynamic/image/width=1000,height=420,fit=cover,gravity=auto,format=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fi%2Fiun7rdwubbb4eivzb4r8.jpeg">

*Imagen Tomada De: https://dev.to/duxtech/scope-en-javascript-var-let-y-const-5eh2*











---











## Optimización de Código JavaScript con Clases y Objetos 2

Vamos a aprender dos nuevos conceptos que nos van a ayudar muchisimo, a poder optimizar el código de nuestro juego. Esto son **las clases y los objetos.**

* ¿Qué son las clases? by MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

* ¿Qué son los objetos? by MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_objects

Cada uno de nuestros personajes se convierten al final en un objeto. ¿Cómo se puede replicar un objeto?, ¿De donde vienen los objetos? 

Son dos conceptos totalmente relacionados porque sin clases no habria objetos.

Cuando nosotros construimos una clase, construimos el template que vamos a popular despues con información para poder construir objetos. Cada vez que nosotros queremos construir una casa no podemos hacerlo sin esos planos.

Si nosotros ya tenemos los planos de una casa, entonces ya nosotros podemos replicar estos planos en cuanto a cuantas cosas vallamos a hacer. 

Las propiedades de las casas pueden variar pues podemos tener casas que son de diferente color, diferentes muebles, posiblemente en muchas veces diferentes distribuciones o algo muy particular por cada una de las casas, pero la base de todas las casas va a ser el mismo plano.

A este plano se le pueden hacer diferentes modificaciones para que las casas se puedan ver diferentes.

Si queremos construir otra casa, agarramos el plano y editamos su propiedad de color.

* Si queremos crear una nueva casa, necesitamos el plano de esa casa o el template. (Objeto)

* Nuestro template es donde el objeto tendrá nombre, color, y ciertas caracteristicas especiales.

<img src="https://static.platzi.com/media/user_upload/clases_objetos-3ea4bb56-938e-40fb-9c05-6a393d6608ba.jpg">

*Imagen Tomada De: https://platzi.com/cursos/programacion-basica/51966-clases-y-objetos/*

---

En nuestro juego tenemos a los mokepones que son nuestros personajes y estos personajes como objetos tienen ciertas propiedades que puede ser: El nombre, los ataques, la vida, el tipo de personaje (Fuego, Agua, Tierra).

Necesitamos entonces crear el plano de esas bases y construir diferentes personajes con diferente información en donde cada punto de información se convierten en las propiedades de los personajes.

Esto significa tener clases y objetos.

Construimos la clase o el template o el plano de nuestro objeto y ya con que nuestra clase este lista empezamos a construir cuantos objetos nosotros empecemos a necesitar con diferente información.

Será interesante ver como eso va a interactuar con nuestro HTML y ya no tener que hacer de forma manual cada uno de los personajes optimizandoa asi esa tarea.

---

Un objeto es Una colección de datos o propiedades relacionadas. El valor de una propiedad puede ser una variable o una función, en cuyo caso la propiedad es conocida como un método.

El objeto está dividido en dos partes:

Características o atributos: Las características son todo lo que representa al objeto. Por ejemplo, la cantidad de ruedas que tiene un vehículo, la marca del vehículo, el color, el tamaño, el número de placa, etc. A estos elementos se les llama atributos en el mundo de la programación. Funcionalidades o métodos: Son todas las funcionalidades que tiene el objeto o los servicios que ofrece. Por ejemplo, el vehículo nos ofrece el servicio de transportarnos, de escuchar música, de tener aire acondicionado, etc. A esto se le llama método en el mundo de la programación.

Para entenderlo mejor:

<img src="https://static.platzi.com/media/user_upload/clases%20y%20objetos-83fb1bcd-4764-4fb6-89ab-67654a831aa1.jpg">

*Imagen Tomada De: https://platzi.com/cursos/programacion-basica/51966-clases-y-objetos/*











---











## Construcción de Clases y Objetos en JavaScript

Ya entendiendo entonces el concepto de clases y objetos, vamos a modificar nuestro código JavaScript para construir nuestra clase mokepones y los objetos de cada uno de ellos.

Para crear la primera clase, se va a utilizar la palabra reservada "class" esto sólo se usa para construir clases y despues cual va a ser el nombre de la clase que en este caso va a ser Mokepon. La única regla de las clases es que su nombre debe iniciar con mayusculas. Siendo esta la variación entre las variables y las clases.

* Clases by MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes

Se abren corchetes {} en donde la primera palabra que se va a escribir es otra palabra reservada que es **constructor()** definiendo asi, ¿Qué voy a construir? por lo que ahí voy a poner todas las propiedades que van a llevar mis objetos.

* constructor en JS by MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/constructor

Las propiedades recordemos que puede ser nombre, la vida, la fotografía, la foto, la imagen que sea directamente de nuestro objeto.

Esto puede ser digamos, si hablamos de carros: Pueden ser puertas, color y todo tipo de elementos o cosas especificas de este objeto.

Dentro de **constructor()** tiene en los () cada uno de los parametros, que en nuestra clase será entonces cada propiedad/atributo que va a tener.

Dentro de estos atributos tendremos entonces el nombre de nuestra mascota, la foto de esta y la vida de la mascota.

> Este trabajo se realiza si en tal caso el juego llega a escalar y que quiere crear un montón de mascotas más o si se quiere agregar una serie de nuevos atributos a cada mascota.

Despues de definir los parametros del constructor se agrega nuevamente { } y entonces agregamos una nueva palabra reservada siendo **this** en donde hace referencia a "esto mismo" siendo la clase misma, por lo que dice digamos: El nombre del mokepon corresponde a este nombre: **this.nombre = nombre** siendo esta la forma de declaración de las variables/parametros de esta clase.

* this en JS by MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this

De esta misma forma tambien agrego **this.foto = foto**, **this.vida = vida**

    class Mokepon {
        constructor(nombre, foto, vida) {
            this.nombre = nombre
            this.foto = foto
            this.vida = vida
        }
    }

---

Entonces ahora ya teniendo esto, nosotros podemos crear nuestros objetos.

Creamos nuestro objeto declarando su variable primero, en donde será **= new**, que se refiere a un nuevo objeto por lo que de una clase que ya existe, vamos a construir un nuevo objeto.

* new en JS by MDN: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/new

y despues de new, agregaremos entonces el nombre de nuestra clase que en este caso es Mokepon. Y esto espera entonces ciertos valores. Que serian los mismos parametros de nuestra clase = nombre, foto, vida.

**por lo que:**

    let hipodoge = new Mokepon('Hipodoge', '/./assets/hipodoge.png', 5)

Si nosotros escribimos console.log(Hipodoge) imprimiendo asi a nuestro objeto en la consola, va a aparecer toda esta información que tiene en sus atributos. Definiendo incluso su prototipo o ¿Qué tipo de elemento es? Que en este caso es un objeto.

> A continuación un ejemplo de esto por parte de Pablo Alejandro Figueroa

<img src="https://static.platzi.com/media/user_upload/Captura%20de%20pantalla%202023-02-20%20002140-df6f38bf-2f68-4ac5-81f0-a02a832d2aff.jpg">

*Imagen Tomada De: https://platzi.com/cursos/programacion-basica/clases-y-objetos-de-mokepon/*

Asi mismo entonces, creamos los otros dos objetos que son nuestras otras dos mascotas entonces.

    let capipepo = new Mokepon('Capipepo', './assets/capipepo.png', 5)

    let ratigueya = new Mokepon('Ratigueya', './assets/ratigueya.png', 5)

Siendo asi, hemos programado nuestro constructor y nuestros 3 objetos que son nuestras mascotas

> A continuación la imagen es el comentario del usuario Pablo Alejandro Figueroa

<img src="https://static.platzi.com/media/user_upload/Captura%20de%20pantalla%202023-02-20%20002119-8cbb9b5b-0e34-49a2-971d-0ef10e49499a.jpg">

*Imagen Tomada De: https://platzi.com/cursos/programacion-basica/clases-y-objetos-de-mokepon/*










---










## Uso de Arreglos para Almacenar Objetos en JavaScript

> Como preguntas para reflexionar: ¿Qué es un arreglo?, ¿Qué quiere decir Almacenar Objetos?

Ya sabemos construir clases y a partir de esas clases, construir objetos.

Ahora vamos a ver arreglos o arrays que son un tipo de variables distintas en donde podemos hacer que una variable declarada con **let** pueda ser un contador y que va guardando un digito y ese dígito es variable por lo que va cambiando, pero sólo podemos ponerle el digito. No le podemos poner 2, 3 dígitos porque no los va a guardar.

Si hablamos de las **const** de igual forma, sólo puede guardar un valor que no cambia.

¿Qué pasa si en una variable yo quiero poner varios valores?, diferentes nombres por ejemplo.

En donde por ejemplo si tengo una clase alumnos y quiero guardar los nombres de 5 alumnos.

* Los arreglos son un tipo de variable en donde puedo guardar varios valores. Y cuando llame a esa variable, me va a mostrar todos los valores que existen en esta.

Lo interesante de los arreglos es que no solamente puedo llamar nombres sino que puedo generar una combinación de valores como letras, números u objetos.

> Pareciera entonces, a una lista en python.

Por lo que vamos a crear una variable que se llame mokepones pues ¿Y si se quiere integrar los 3 objetos, cual es la mejor forma de hacerlo? Lo ideal es crear una variable que pueda guardar los tres y si en algún momento tengo que crear otros mil, que esa variable me pueda guardar esos otros mil. Para esto entonces, se usa un array.

array en JS by MDN: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array

Siendo asi, para crear nuestra variable:

    let mokepones = []

Los [ ] significan que por dentro la variable se puede ir agregando cada uno de los valores de nuestro interes. Que en nuestro caso es cada uno de los objetos que ya construimos. y si van a venir más vamos a meter cada uno de los objetos que iremos construyendo a raiz de nuestra clase Mokepon.

Ya despues utilizamos .push que es como decir "Empuja" o "Inyecta"

    mokepones.push(Hipodoge, Capipepo, Ratigueya)

Entonces, si el día de mañana yo quiero más mokepones, gasta que pone a la indicada.

El método .push() en JavaScript se utiliza para añadir uno o más elementos al final de un array existente, modificando su longitud original.

* .push() en JS by MDN: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/push

<img src="https://media2.dev.to/dynamic/image/width=800%2Cheight=%2Cfit=scale-down%2Cgravity=auto%2Cformat=auto/https%3A%2F%2Fdev-to-uploads.s3.amazonaws.com%2Fuploads%2Farticles%2Fm28vi4f62mvduofxun0q.png">

*Imagen Tomada De: https://dev.to/gastondanielsen/25-metodos-de-arrays-en-javascript-que-todo-desarrollador-debe-conocer-4a2d*











---











## Agregar ataques a Objetos en JavaScript

> Para reflexionar, preguntese: ¿Entiende qué es un Objeto? y ¿Entiende qué es un arreglo?

Falta una propiedad en nuestros objetos, son los ataques. Y como son muchos ataques tenemos que poder guardarlos y además, puede que hallan mascotas que puedan usar 10 ataques.

por ende en la clase Mokepon añadimos la propiedad ataques como un arreglo, por ende:

    class Mokepon {
        constructor(nombre, imagen, vida) {
            this.nombre = nombre
            this.imagen = imagen
            this.vida = vida
            this.ataque = []
        }
    }

Aun nos falta popularlo, pero eso lo haremos mediante un push.

Si nosotros ponemos console.log(el nombre de nuestro objeto) que en nuestro caso seria console.log(hipodoge) fuera de cualquier función, si miramos las devtools miraremos toda la información de nuestro objeto. (Puede ser Hipodoge, Capipepo, Ratigueya)

¿Cómo por medio de nuestros objetos podemos agregar información al arreglo ataque de nuestra clase Mokepon?

Si yo quiero mirar una información en especifico de mi objeto en la consola puedo poner el nombre de mi objeto, un . y despues el nombre de mi propiedad... Digamos:

    console.log(hipodoge.ataques)

Es interesante entonces probar con las diferentes propiedades. En este momento si lo hacemos con ataques, nos mostrará un arreglo vacio y por ende: **[ ]**

Entonces ya sabemos como llegar a los ataques, ya sabemos como inyectar cosas a un array por medio de push. Por ende:

1. Llamo a mi objeto

2. Agrego un . y la propiedad (.ataques)

3. Agrego .push para poder inyectarle información

Para insertarle ataques, se va a crear otro pequeño objeto. Estos objetos que se conocen como objetos literales en donde sólo voy a poner información de cierto objeto.

* En los objetos instancias que vienen de una clase, como hipodoge, capipepo y ratigueya en el código JS, sólo hay que insertarles las propiedades en su espacio para parametros ()

* Los objetos literarios yo tengo que construirlos desde cero y no tengo clases para poderlo hacer, solo guardan información: Que en este caso necesitamos ugardar la información de nuestros ataques.

**Lecturas Recomendadas:**

* Diferencia entre un objeto literal y un objeto de POO by fidelp27 (Usuario de Platzi): https://platzi.com/blog/diferencia-entre-un-objeto-literal-y-un-objeto-de-programacion-orientada-a-objetos-poo/

* Objeto Instancia by Wikipedia: https://es.wikipedia.org/wiki/Objeto_(programaci%C3%B3n)#:~:text=En%20un%20lenguaje%20en%20el,programaci%C3%B3n:%20C++%20y%20Python.

Por ende dentro de ese push, agregando una estructura en donde encierro mi contenido con ( ) y le inserto propiedades y valores dentro de { } cada una, siendo cada contenido dentro del {} un arreglo literario.

**por ejemplo:**

    hipodoge.ataques.push(
        {nombre: '🌊', id: 'boton-agua'},
        {nombre: '🌊', id: 'boton-agua'},
        {nombre: '🌊', id: 'boton-agua'},
        {nombre: '🔥', id: 'boton-fuego'},
        {nombre: '🌱', id: 'boton-tierra'},
    )

Siendo asi, automaticamente se guarda la información y por ende si miramos la consola ya va a aparecer todos nuestros ataques para nuestra mascota hipodoge (objeto).

* Se debe hacer lo mismo con cada uno de los objetos.

> Esto ya es más difícil. Pues por medio de esto, haremos que nuestros mokepones tengan más de 3 ataques cada uno.

Ahora surge una nueva duda: Si entonces, cada mascota tiene un ataque diferente disponible. ¿Cómo integramos eso? o como popularlo teniendo en cuenta que en nuestro HTML sólo tenemos 3 ataques?

Por lo que tenemos que popular esa información en nuestro JS para que ya no tengamos que copiar y pegar en nuestro HTML, por ende tenemos que manipular el DOM con relación a los datos de nuestros objetos.

> Aporte de Miguel David Lòpez Mèndez

<img src="https://i.imgur.com/bMDb6xw.png">

*Imagen Tomada De: https://platzi.com/cursos/programacion-basica/objetos-vs-arreglos/*












---












## Renderizado Dinámico de Objetos en HTML con JavaScript

> Reflexione: ¿Entiende qué quiere decir Renderizado Dinámico?

Ya sabriamos entonces usar arrays, teniendo uno que guarda todos los objetos de nuestros mokepones. Ahora tenemos que llevar esa información a que directamente interactue con nuestro HTML. Pues si vamos a crear otros 1.000 mokepones, que se puedan renderizar automaticamente en nuestro HTML facilmente. (Nosotros no tengamos que hacer ese trabajo de forma manual)

Un buen programador automatiza su propio trabajo a ese punto, en donde se ahorra incluso nuevas posibles líneas de código.

Si miramos a nuestro HTML, tenemos a cada una de nuestras mascotas de forma manual en una estructura ya definida. Pero entonces qué pasa cuando queremos dejar de utilizar esos 3 personajes y empezamos a usar otros nuevos...  Tendriamos que borrar los que ya estan y crear una estructura similar por cada uno de los nuevos mokepones que se van a usar con información diferente de cada mascota.

Tendriamos un problema muy similar con cada uno de los botones de ataque pues cada mascota tiene un grupo de ataques distinto que no son los que estan en nuestra estructura de nuestro HTML.

Para solucionar este problema, tenemos que absorber esta información de nuestro arreglo para poder popular ese HTML con esa información.

* El término "popular" se refiere a llenar o añadir elementos a una estructura de datos, como un arreglo.

Por ende vamos a agregar en la función **iniciarJuego()** esto, debido a que una vez cargue todo el sistema... Necesitamos que renderize cada una de nuestras mascotas.

Asi haciendo entonces justo debajo de:

    sectionSeleccionarAtaque.style.display = 'none'

Que es la primera línea una vez inicia la función **iniciarJuego()**.

1. llamamos entonces a nuestros mokepones

2. Usamos un nuevo método para iterar o recorrer cada uno de nuestros objetos para asi poder abstraer información y poder inyectarlo en el HTML. Este metodo es **forEach()** que literalmente dice "Por cada uno".                                                

4. Dentro de los parentesis habrá toda la información de nuestro código

4. Dentro de los parentesis, creamos otros parentesis para definir nuestra clase.

Siendo asi:

    mokepones.forEach((Mokepon)=>{

    })

Esta línea de código lo que dice es, por cada mokepon que existe en nuestro array de mokepones haz lo siguente...

* Los objetos en JavaScript son los diccionarios en Python.

Dentro de los corchetes empezaremos a tomar la información de cada uno de nuestros objetos para empezar a inyectarlo en nuestro HTML.

Podemos probar imprimiendo primero cada uno de los objetos. Dentro del código, podemos usar console.log(mokepon). Si revisamos la consola podemos observar como nos regresa cada uno de nuestros objetos. Recordemos tambien, que si queremos mirar algo en especifico podemos hacer console.log(mokepon.nombre).

De esta forma podremos observar nuestros objetos y cada una de sus propiedades.

* Array.prototype.forEach() en JS by MDN: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach

---

**Ahora, ¿Cómo hacemos para mostrar esa información en nuestro HTML?**

Tenemos que asignar una variable para poder guardar ahí toda la estructura del HTML que vamos a hacer en JavaScript, para luego poder insertar esa llave con estructura de valor directamente en nuestro HTML.

Toca entonces generar una nueva variable.

Por ende, se declara la variable OpcionDeMokepones por medio de un let, en donde se declaran estas variables. Lo dejamos vacio porque lo vamos a utilizar abajo para poder inyectarle un valor. 

Por lo que dentro de forEach, vamos a agregar un template literario que lo usaremos para implementar HTML con algunos de los valores de nuestras variables para que podamos hacer un mix de ambas cosas.

Para poder utilizar estos templates literarios tenemos que usar la comilla invertida **``**, se puede hacer por medio de alt+96, la otra forma puede ser oprimiendo altgr + }

Dentro de estas ´´ vamos a insertar nuestro código HTML de forma que sea generalizada con variables. Pues en nuestro HTML cada uno de los inputs, es el siguente:

    <input type="radio" name="mascota" id = "hipodoge" />
    <label class="tarjeta-de-mokepon" for = "hipodoge">
        <p>hipodoge</p>
        <img src="./assets/mokepones/hipodoge.png" alt ="hipodoge">
    </label>

Por ende, vamos a copiar esa misma estructura y la pondremos dentro de las comillas invertidas en JS. Se podrá observar este código como string. Entonces ahora, ¿Cómo hacemos para integrarle información de cada uno de nuestros objetos?

Entonces hay que pensar, de mis objetos respecto al renderizado del HTML ¿Qué información es unica por objeto?, ¿Qué valores de ciertas propiedades necesito? 

A nosotros nos interesa:

1. El nombre de nuestra mascota (objeto): Esto lo utilizamos en los atributos HTML id, for, la etiqueta p, y en el alt de la imagen.

2. Valor o URL de donde está la imagen.

Para inyectar información de cada una de las propiedades:

* . Se integra el signo pesos justo donde ira la variable y luego los signos corchetes para determinar cual es la variable que nos interesa para poder extraer su valor. Pues siendo asi, se inserta mokepon.atributo para determinar muchas de estas acciones. En nuestro caso siempre será mokepon.

Siendo asi el siguente template literario:

    mokepones.forEach((mokepon) => {
    opcionDeMokepones =`
    <input type="radio" name="mascota" id=${mokepon.nombre} />
    <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
        <p>${mokepon.nombre}</p>
        <img src=${mokepon.foto}
        alt=${mokepon.nombre}>
    </label>)
    ` /* las comillas se hacen con alt gr y } */

Como llevamos trabajando nuestro JavaScript con IDs al div con class "tarjetas" le insertaremos el atributo id con el valor "contenedorTarjetas", este nombre es el adecuado porque es ahí el lugar que recibira todas nuestras tarjetas pues puede que hoy tengamos 3 mascotas, pero mañana puede que tengamos mil.

* Esta idea me gusta relacionarla mucho de mas o menos el cómo seria react, del cómo esto sirve para una ecommerce de lo que sea ya que estos pueden ser perfectamente tarjetas de productos. Y de hecho estoy pensando en hacer un proyecto que sea esto mismo, haria que por medio del código, el proyecto sea totalmente escalable.

> Algo como mejora es incorporar un mismo estilo para nombrar las variables, id y clases. Pues tengo varias estilo nombre-variable y otras estilo nombreVariable.

Y entonces creamos una nueva variable constante por parte del HTML, siendo este contenedor tarjetas.

Ya una vez definida, la vamos a insertar justo debajo de nuestro forEach con elementos HTML por dentro siendo asi el contenedorTarjetas. Le agregamos la propiedad .innerHTML que sea igual a opcionDeMokepones (el forEach que recorre cada objeto para determinar sus elementos HTML), es de tenerse en cuenta que tenemos 3 elementos por lo que si usamos:

    contenedorTarjeta.innerHTML = opcionDeMokepones

Sólo se va a imprimir uno, entonces para imprimir cada uno de los elementos por medio de la iteración de cada uno de nuestros objetos (forEach), le vamos a agregar un + justo antes del =

siendo asi:

    contenedorTarjeta.innerHTML += opcionDeMokepones

Por lo que ahora sí, va a aparecer cada uno de nuestros objetos y por ende las tarjetas de los mokepones como si estuvieran en el HTML.

De esta forma integramos HTML con JS, por lo que ya dependiendo de la cantidad de arreglos. Estos se van a imprimir ahí. Asi se manejarian las ecommerce o tiendas virtuales.

Si tenemos la información en una base de datos que se convierta en un JSON que seria como un objeto podremos imprimir cuantos productos existan en nuestra base de datos y asi nosotros ahorramos muchisimo tiempo.

En JS estamos inyectando el valor de ciertas variables, que por medio de la modificación del DOM van a aparecer y por ende seran renderizadas. Automatizamos un proceso que se podria o normalmente se realizaria cada elemento por el HTML. (Diferencias entre junior y senior).

Me parece muy agradable esto, porque si agregamos 50 mokepones a nuestro array, 50 mokepones se van a renderizar en nuestro HTML y asi estariamos iterando a traves de los objetos.

> Ya estamos manipulando JavaScript y HTML: Estamos pasando de una página estatica a una dinamica. Ten en cuenta que una página estatica es la que tiene todo su código de forma estatica. La dinamica es que con relación al JS va a ir cambiando. Asi es como la industria actual funciona.

Con esto todavia no se termina de resolver algunos de los problemas que existen.

Es muy importante para el aprendizaje leer y re leer el código buscando entender cada expresión usada en la sintaxis, duplicar el código, craer un proyecto paralelo sería muy interesante.










---










## Solución de errores en variables y elementos HTML en JavaScript

Nuestro juego esta parcialmente roto, todo aparenta bien si miramos la consola. Pero entonces si seleccionamos a una mascota podremos observar que en la consola va a aparecer:

    Uncaught TypeError: Cannot read properties of null (reading 'checked') at HTMLButtonElement.seleccionarMascotaJugador

Que en otras palabras es como si un input no existiera, no nos va a aparecer el nombre de la mascota que seleccionamos justo debajo de las vidas.

Ahora, como anteriormente nosotros bajamos nuestro script pues primero se lee el HTML y luego sí el JavaScript por lo que nuestro navegador renderiza primero todo los elementos HTML. Una vez llega a lo ultimo del documento para leer el código JS, revisa el documento JS de arriba hacia abajo de la misma forma. Entonces, pensando de esa forma en nuestro código JS el navegador va a leer primero las variables declaradas al inicio de todo.

> Ligamos variables a un elemento HTML mediante IDs

El problema de nuestro código es que como se lee de ultimas el JavaScript, y por nuestro template literario... Los IDs de nuestras mascotas y su selección no existian una vez finalizaba el HTML. Esto es asi, hasta que inicia la función de **iniciarJuego()** que es donde todo se empieza a inyectar.

Eso quiere decir, que inicialmente no se encuentran el valor de esas variables quedando asi nulas hasta que se ejecuta la función. 

Vamos a borrar las constantes que identificaban a cada una de nuestras mascotas: Hipodoge, Capipepo, Ratigueya.

Estas variables las vamos a insertar dentro de nuestro template literario. Sólo que quitandoles su declaración como CONST o como LET dejando asi:

    inputHipodoge = document.getElementById('hipodoge')
    inputCapipepo = document.getElementById("capipepo")
    inputRatigueya = document.getElementById("ratigueya")

Por lo que asi, ahora se generan primero los elementos HTML y luego ligamos con del ID a nuestras variables.

Ahora si volvemos a seleccionar nuestra mascota, el error habrá cambiado apareciendo asi:

    Uncaught TypeError: Cannot read properties of null (reading 'checked') at HTMLButtonElement.seleccionarMascotaJugador    

Este error es básico.

Si observamos el cómo estan escritas nuestras variables de boton de mascota, veremos que hay una diferencia en donde nuestros objetos (mokepones) cada vez que son declarados en los parametros del objeto, esta con mayuscula inicial por cada nombre de cada mascota.

Siendo asi, un problema en donde el ID no coincide con el valor de la propiedad. Por lo que de forma muy rápida para solucionar esto es escribiendo la primera mayuscula inicial :

    inputHipodoge = document.getElementById('Hipodoge')
    inputCapipepo = document.getElementById("Capipepo")
    inputRatigueya = document.getElementById("Ratigueya")

Ahora podemos seguir iterando entonces.

Como reflexión a lo largo de la carrera nos podremos encontrar mucho con errores de tipografia. Estos errores son frustrantes porque muchas veces todo puede aparentar estar bien. Y sí, en la lógica pero no en la información.

> Foto de Template Literario de: Bryan Andres Vera Garcia

<img src="https://static.platzi.com/media/user_upload/2022-09-29_19h58_51-58fbbaf9-1118-428c-9477-cc7abac57639.jpg">

<img src="https://static.platzi.com/media/user_upload/2022-09-29_20h00_43-564ddb77-b37f-4c13-83a7-41ceee33e903.jpg">

*Imagen Tomada De: https://platzi.com/cursos/programacion-basica/declaracion-lenta-de-variables/*










---










## Uso de Objetos para Centralizar Información en JavaScript

> Hace un año, yo estaba realizando este curso y no lo finalice. Entonces de ahora en adelante, hay información de la cual yo no sabia nada y por ende empece a aprender y a escribir código nuevo: Me siento bastante feliz de llegar a este punto.

Vamos a manipular otra de las funciones, tenemos que manejar una sola fuente de verdad: Toda la información que existe en nuestros objetos asi que todas las funciones que tengan información manual, que nosotros escribimos. La vamos a iterar para que sea información que existe en nuestros objetos.

En la función seleccionarMascotaJugador() hay una validación en donde un elemento HTML que esta vacio le inyectamos información. Esa información está escrita a mano: Mire el siguente código:

```javascript
    function seleccionarMascota(){
        sectionSeleccionarMascota.style.display = 'none'

        // sectionSeleccionarAtaque.style.display = 'block'
        sectionSeleccionarAtaque.style.display = 'flex'

        //Esto es una forma de modificación del DOM

        if (inputHipodoge.checked) {
            SpanMascotaJugador.innerHTML = 'Hipodoge '
        } else if (inputCapipepo.checked) {
            SpanMascotaJugador.innerHTML = 'Capipepo '
        } else if (inputRatigueya.checked) {
            SpanMascotaJugador.innerHTML = 'Ratigueya '
        } else {
            alert("Debes seleccionar tu mascota")
        }

        SeleccionarMascotaEnemigo()
    }
```

Tenemos que quitar esto. Y empezar a usar nuestra fuente de verdad: La información de nuestros objetos.

Cada input en ese código esta ligado a un elemento HTML, le pusimos información importante.

Intente escribir inputHipodoge en la consola de las devtools del navegador. Reflexione: ¿Qué aparece? 
Yo observo la información que populamos anteriormente de nuestros objetos a cada input. Es interesante porque no aparece en el HTML, pero al realizar la modificación del DOM mediante JavaScript este aparece común y corriente.

> Lo importante de la información de nuestro input es el ID.

Inserte en la consola **typeof(inputCapipepo)** y observará que inputCapipepo es un objeto. **typeof()** es un método para definir qué tipo de elemento es el elemento que se encuentra en su parametro.

* typeof en JS by MDN: https://developer.mozilla.org/es/docs/Web/JavaScript/Reference/Operators/typeof

Ya sabemos que si queremos llegar al metodo ID de nuestro elemento, como es un objeto pues mando a nombrar mi objeto y luego de un . agrego el atributo que deseo ver, es decir: inputCapipepo.id

Esto escrito en la consola me regresa su valor ID: Capipepo

De esta forma, abstraimos información de un método de un objeto.

Esta información me sirve totalmente para la información de mi programa.

Decidimos entonces, no dejar ese string por mascota sino el metodo de ese objeto. Siendo entonces:

En vez de que nuestro código sea:

```javascript
    if (inputHipodoge.checked) {
            SpanMascotaJugador.innerHTML = 'Hipodoge'
    }
```

Nuestro código va a ser:

```javascript
    if (inputHipodoge.checked) {
            SpanMascotaJugador.innerHTML = inputHipodoge.id
    }
```

remplazando asi, cada uno de nuestros inputs. Remplazando información manual por dinamica. Por lo que nuestro código quedo asi:

```javascript
    if (inputHipodoge.checked) {
        SpanMascotaJugador.innerHTML = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        SpanMascotaJugador.innerHTML = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        SpanMascotaJugador.innerHTML = inputRatigueya.id
    } else {
        alert("Debes seleccionar tu mascota")
    }
```

Comprobemos entonces en nuestro programa, si probamos y miramos el span estará funcionando completamente pasando efectivamente lo que nosotros esperamos que llegue a pasar y por medio de la consola nos aparecera lo mismo que en la anterior busqueda, pero esta vez tenemos una sóla fuente de verdad.

Pues si un día vamos a agregar más mascotas, no vamos a observar validación por validación para mirar donde pusimos los nombres pues ya con esto podemos asegurar que se va a cambiar dinamicamente lo que nos interesante y esto es una fuente de verdad.

Tienes una variable que tiene la información que se va a utilizar repetidamente en todo el programa.

Single Source of Truth By Wikipedia: https://en.wikipedia.org/wiki/Single_source_of_truth









---









## Selección de Mascota Aleatoria en JavaScript

Vamos a manipular la función **SeleccionarMascotaDelEnemigo()** esta es la función donde se va a seleccionar la mascota de nuestro enemigo en donde tenemos información, asi como en el anterior título de forma manual y queremos quitar esta información manual.

Reflexione: ¿Qué pasaria si quisieramos agregar más mascotas y cómo haria entonces la función de selección de la mascota del enemigo? Tendriamos que escribir eso de forma manual, no es código sostenible ni escalable a proyectos grandes pues "¿Y si quisieramos 1000 mascotas?, ¿Cómo sucede con LOL?"

Nuestro enemigo va a seleccionar algún personaje que se encuentre en nuestros objetos.

A continuación observe el código como se encuentra:

```javascript
    function SeleccionarMascotaEnemigo(){
        let MascotaAleatoria = aleatorio(1,3)

        if (MascotaAleatoria == 1){
            SpanMascotaEnemigo.innerHTML = 'Hipodoge '
        } else if (MascotaAleatoria == 2) {
            SpanMascotaEnemigo.innerHTML = 'Capipepo '
        } else {
            SpanMascotaEnemigo.innerHTML = 'Ratigueya '
        }
    
    }
```

La función que se invoca **aleatorio(1,3)** esta funcionando en parametros con un mínimo y un máximo. Esto quiere decir que asi como la manejamos esta escrita para 3 mascotas. ¿Y si incorporaramos más mascotas? Esto quiere decir que si incorporaramos una nueva mascota, tendriamos que ir cambiando este número y asi cada vez que se incorpore una mascota nueva. Esto no es optimo.

> Asi sea un segundo, algo pequeño, puede ser facilmente olvidado además de que debe ser iterado e irse manteniendo por el programador. Hagamos que esto sea autosostenible.

Para tener una sola fuente de verdad, vamos a usar nuestro arreglo de mokepones.

Revisemos **mokepones** en la consola: (3) [Mokepon, Mokepon, Mokepon]

Hay una forma de abrirlo y nos aparecera, la longitud es igual a un número siendo el número de elementos que existen dentro del array. Podemos usar este número, pues si este arreglo empieza a crecer, este número tambien. 

Podemos usar este número sin tener que modificar manualmente cualquier cosa.

Por lo que podemos usar entonces: mokepones.length siendo asi la longitud de mokepones, o cada uno de los elementos de este array.

Por lo que el código quedaria como:

```javascript
    function SeleccionarMascotaEnemigo(){
        let MascotaAleatoria = aleatorio(0, mokepones.length - 1)

        if (MascotaAleatoria == 1){
            SpanMascotaEnemigo.innerHTML = 'Hipodoge '
        } else if (MascotaAleatoria == 2) {
            SpanMascotaEnemigo.innerHTML = 'Capipepo '
        } else {
            SpanMascotaEnemigo.innerHTML = 'Ratigueya '
        } 
    }
```

Por lo que actualmente como tenemos 3 mascotas en nuestro array de mokepones que son inyectados por medio de un .push... De esta forma siempre será dinamico.

Pero entonces ahora tenemos un problema.

El min es 1 y el maximo son 3, porque 1 más 3 son 4 por lo que tendremos que restarle 1  asi que tendriamos que restarle uno para que nos de el resultado como es.

> No entendí el razonamiento de 1 más 3 da 4 y por ende restarle 1 para que de 3.

Y remplazamos el 1 por un 0.

Por lo que de esta forma iniciamos desde 0 y la lista se contará de 0, 1, 2 (Del 0 al número de elementos) siendo asi un rango de números de personajes que se pueden seleccionar.

Asi entonces, nosotros nos ahorramos tener que modificar este número cada cierto tiempo de acuerdo a qué mascotas agregamos o eliminamos.

---

Ahora, se piensa que dentro de la función seria bueno eliminar la validación quedandonos solo con la variable spanMascotaEnemigo debido a que este contiene información de la mascota que va a usar nuestro enemigo.

Fijese entonces, la estructura de control dentro de la función **SeleccionarMascotaEnemigo()** el cual se ira editando.

```javascript
    if (MascotaAleatoria == 1){
        SpanMascotaEnemigo.innerHTML = 'Hipodoge '
    } else if (MascotaAleatoria == 2) {
        SpanMascotaEnemigo.innerHTML = 'Capipepo '
    } else {
        SpanMascotaEnemigo.innerHTML = 'Ratigueya '
    }
```

Se modifico entonces la estructura a: spanMascotaEnemigo = mokepones[MascotaAleatoria]

Tenemos nosotros nuestro arreglo mokepones. 

* Pruebe consultar mokepones en la consola con las dev tools. Se observará el indice de cada uno de los mokepones

* El elemento 1 de una lista en programación es el 0

Si nosotros usamos mokepones[1] nos va a aparecer el mokepon 0 es decir Capipepo y su información. Asi mismo si lo usamos con los otros indices del 0, al 2. Entonces: Si nosotros usamos la variable MascotaAleatoria que trae un número aleatorio, traera un indice diferente y por ende la identificación de ese objeto. (Mokepon) Siendo de esta forma la selección que el enemigo va a usar.

> Me gusta bastante que sea cada vez más profesional.

Siendo asi, la función quedo asi:

```javascript
    function SeleccionarMascotaEnemigo(){
        let MascotaAleatoria = aleatorio(1, mokepones.length)

        SpanMascotaEnemigo = mokepones[MascotaAleatoria]
    }
```

Surge entonces un nuevo problema, no aparece el nombre de la mascota del enemigo una vez es seleccionada al iniciar la sección de ataques. Esto sucede porque estamos alterando una variable que esta ligada a un elemento HTML (spanMascotaEnemigo).

Nosotros necesitamos que se imprima el nombre de nuestro objeto/personaje/mascota:

*   Se agrega entonces en el arreglo .nombre (metodo de nuestro objeto)

*   Se agrega a la variable spanMascotaEnemigo la propiedad .innerHTML

Siendo de esa forma nuestra función:

```javascript
    function SeleccionarMascotaEnemigo(){
        let MascotaAleatoria = aleatorio(1, mokepones.length)

        SpanMascotaEnemigo.innerHTML = mokepones[MascotaAleatoria].nombre
    }
```

Por ende seguimos implementando nuestra unica fuente de verdad, ya no tenemos que seguir pensando en las validaciones ni tener que incorporar esto de forma manual. Simplemente usamos los objetos que ya tenemos.









---









## Iteración de Arreglos y Manipulación del DOM en JavaScript

Tenemos un nuevo problema en nuestro programa, el tema de los ataques. Pues tenemos 3 botones en nuestro HTML, pero ahora ya no nos sirve porque nuestros personajes ahora tienen más ataques y sus ataques son distintos.

Se invita a intentar resolver este problema de forma individual: Recordemos que se deben quitar los botones del HTML y nosotros ya tenemos un arreglo dentro de nuestro objeto donde tenemos cada uno de los elementos que vamos nosotros a renderizar asi que se tendria que iterar a traves de ese arreglo para poder mostrar los botones, algo muy similar a lo que se hizo con las tarjetas de los mokepones.

> Al intentar hacerlo, me quede pensando en: ¿Donde debo incorporar el nuevo código?, ¿Debo remplazar el código HTML mediante el JS iterando por el array de ataque dentro de la clase Mokepon?, ¿Cómo será la lógica de combate?

Antes de tocar el código, se debe entender bien ¿Qué vamos a hacer?

Sabemos el problema base: En nuestro HTML tenemos la estructura de los botones, pero esto no nos sirve(Aunque será la estructura que vamos a utilizar). Vamos a hacer lo mismo que hicimos con nuestras tarjetas, pero con un paso extra:

* Estamos usando un objeto que tiene una propiedad, que es un arreglo que son sus poderes/ataques.

¿Cómo llegamos a esa propiedad?

Sabemos que si agregamos el nombre de una propiedad, luego un . y luego el atributo, es decir: mokepon.ataques nos va a salir directamente ese arreglo y tenemos que iterar sobre ese arreglo.

* Tenemos una nueva pregunta: ¿Cómo llegamos a los ataques del personaje que seleccionamos?

Podemos generar una nueva variable que valla a guardar el nombre de ese personaje para despues poder buscar cual es ese personaje, cuales son sus ataques y guardar los ataques para generar la iteración que hicimos anteriormente.

De aqui podemos sacar dos funciones:

* La función para abstraer los ataques del personaje que ya seleccionamos.

---

Vamos a crear entonces una nueva variable llamada MascotaJugador:

```javascript
    let MascotaJugador
```

Esta variable me va a guardar la información que se genera dentro de la función **seleccionarMascota()**:

```javascript
    function seleccionarMascota(){
        sectionSeleccionarMascota.style.display = 'none'

        // sectionSeleccionarAtaque.style.display = 'block'
        sectionSeleccionarAtaque.style.display = 'flex'

        //Esto es una forma de modificación del DOM

        if (inputHipodoge.checked) {
            SpanMascotaJugador.innerHTML = inputHipodoge.id
        } else if (inputCapipepo.checked) {
            SpanMascotaJugador.innerHTML = inputCapipepo.id
        } else if (inputRatigueya.checked) {
            SpanMascotaJugador.innerHTML = inputRatigueya.id
        } else {
            alert("Debes seleccionar tu mascota")
        }

        SeleccionarMascotaEnemigo()
    }
```

Hacemos que dentro de cada condicional la variable mascotaJugador tome el valor de los inputs para asi poder abstraer esa información, nosotros despues esa variable la utilizamos para buscar ese nombre en nuestros objetos para abstraer directamente los ataques.

por ende nuestro código queda:

```javascript
    if (inputHipodoge.checked) {
        SpanMascotaJugador.innerHTML = inputHipodoge.id
        mascotaJugador = inputHipodoge.id
    } else if (inputCapipepo.checked) {
        SpanMascotaJugador.innerHTML = inputCapipepo.id
        mascotaJugador = inputCapipepo.id
    } else if (inputRatigueya.checked) {
        SpanMascotaJugador.innerHTML = inputRatigueya.id
        mascotaJugador = inputRatigueya.id
    } else {
        alert("Debes seleccionar tu mascota")
    }
```

Siendo de esta forma, guardamos en una variable cual es la mascota del jugador. Esto es porque lo necesitamos en otra función para extraer los ataques, necesitamos el nombre del personaje para encontrar los ataques y poder usarlos en otra función y asi imprimirlos en HTML.

Por ende se crea la función **extraerAtaques()** justo debajo de las condicionales de nuestra función.

Esta función va a llevar un parametro, el cual va a ser la variable mascotaJugador. La vamos a manejar como variable interna:

```javascript
    extraerAtaques(mascotaJugador)
```

Se crea justo debajo entonces, la función y por ende:

¿Cómo hacemos para abstraer los ataques?, ¿Cómo crees que podemos llegar al personaje que acabamos de seleccionar?, ese mismo personaje que es nuestro objeto.

Crearemos otra variable interna que llamaremos ataques porque ya una vez tengamos los ataques, debemos guardarlos para poder utilizarlos. Esta variable se puede convertir en un arreglo o puede guardar como tal tags de arreglos.

Vamos a crear una pequeña iteración, un loop mediante FOR para movernos por cada uno de los personajes que tenemos actualmente para encontrar el que sea igual al que nosotros ya tenemos guardado en la variable.

Se ingresa la sentencia FOR y se deja que visual studio code complete el ciclo (Autocompletado por sintaxis, se debe seleccionar for - loop) Esto lo que hace es iterar por cada uno de los elementos que existe directamente en un arreglo

```javascript
    function extraerAtaques(mascotaJugador) {
        let ataques
        for (let index = 0; index < array.length; index++) {
            const element = array[index];            
        }
    }
```

Vamos a remplazar las variables index por variables i (Muy común y normal en el mundo de la programación para iteraciones). Por cada iteración va a agregar un valor por ende incialmente i va a ser igual a 0.

El nombre de nuestro arreglo es mokepones.

Y mientras nuestra iteración sea menor a la longitud de nuestro arreglo va a ejecutar el código que se encuentra abajo o dentro de las { }

```javascript
    function extraerAtaques(mascotaJugador) {
        let ataques
        for (let i = 0; i < mokepones.length; i++) {
            const element = mokepones[i];
            
        }
    }
```

Ahora vamos a validar el nombre que guarda la variable mascotaJugador por cada uno de los objetos que va a recorrer (Nuestros mokepones) Entonces generamos una validación (Escriba la sentencia IF y deje que se autocomplete selecciondo condición) en la que vamos a comprar nuestra variable respecto a nuestro arreglo.

```javascript
    if (mascotaJugador === mokepones[i])
```

Recordemos que si a nuestro arreglo le agregamos [ ] y un número, ese número representa el indice de nuestro arreglo pudiendo asi navegar entre cada uno de nuestros objetos.

Por ende nos regresa el objeto en ese indice. Y finalmente, como de ese arreglo queremos llegar al nombre, agregamos . para seleccionar un atributo y ponemos nombre, siendo asi:

```javascript
    if (mascotaJugador === mokepones[i].nombre)
```

Siendo de esta forma nuestra validación.

Ahora agregaremos el código en donde se cumpla la condición.

Al ser iguales nuestros id de los inputs y el nombre de nuestros arreglos, haremos que ejecute la condicional agregandole asi, a la variable ataques el valor de los ataques de nuestro arreglo.

```javascript
    ataques = mokepones[i].ataques
```

Es recomendable insertar console.log(ataques) para mirar qué aparece en la consola. 

De esta forma entonces, tenemos guardada la información de nuestros ataques para poder usarlo eventualmente. Ya tenemos nuestro arreglo listo y ya sólo es iterar sobre nuestro arreglo para inyectar en cada uno de nuestros elementos HTML.

> Se invita a realizarlo pues ya se sabe como imprimirlo en HTML.

Se crea una nueva función que reciba el valor de la variable ataques.

Resultado:

```javascript
    function extraerAtaques(mascotaJugador) {
        let ataques
        for (let i = 0; i < mokepones.length; i++) {
            if (mascotaJugador === mokepones[i].nombre) {
                ataques = mokepones[i].ataques
            }
        
        }
        // console.log(ataques)
        mostrarAtaques(ataques)
    }
```












---












## Crear Función "mostrarAtaques" en JavaScript para Juegos

Vamos a crear la función mostrarAtaques() que es invocada en extraerAtaques().

> Reflexione primero ¿Qué deberia hacer esta función?

Ahora, hay que tener en cuenta que nuestro DIV que contiene los botones en el HTML pasa a ser nuestro contenedor, no necesitamos que tenga los botones sino que estos aparezcan de acuerdo a la mascota.

```html
    <div class = "tarjetas-ataques">
        <button id="boton-fuego" class="boton-de-ataque">Fuego 🔥</button>
        <button id="boton-agua" class="boton-de-ataque">Agua 🌊</button>
        <button id="boton-tierra" class="boton-de-ataque">Tierra 🌱</button>
    </div>
```

Por lo que a este DIV le agregaremos un atributo id que tenga le mismo nombre que la nomenclatura que hemos estado utilizando en nuestro HTML (contenedorTarjetas)y por ende:

```html
    <div id = "ContenedorAtaques" class = "tarjetas-ataques"></div>
```

Ya entonces, definimos en la parte de variables en nuestro JavaScript este nuevo elemento HTML. Esta variable se define con un const porque al ser un elemento HTML, este nunca va a cambiar.

```javascript
    const ContenedorAtaques = document.getElementById("contenedorAtaques")
```

Y entonces tambien creamos una variable la cual se le pueda editar su valor, que va a contener la información de los ataques de nuestros mokepones. Siendo los ataques del personaje que seleccionamos.

```javascript
    let ataquesMokepon
```

Nos dirijimos ya a la función que estamos creando, siendo asi mostrarAtaques():

```javascript
    function mostrarAtaques(ataques) { }
```

En donde usaremos entonces, la variable ataques y el metodo forEach que tendrá como parametro cada ataque.

> Por cada ataque que exista en el arreglo de ataques "haz algo"

```javascript
    ataques.forEach((ataque) => {
        // 
    })
```

Es de razonar entonces, ¿Qué queremos hacer? Queremos hacer una estructura en HTML que remplace los botones, necesitamos que se inyecte información de nuestros ataques. Esto es justo lo que vamos a necesitar para poder popular nuestra información.

Entonces dentro de la variable ataquesMokepon será igual a (abrimos comillas invertidas) `` que se puede usar mediante **alt + 96** o tambien mediante **alt + }** separandolo entonces de forma:

```javascript
    ataquesMokepon = `
    
    `
```

En donde entonces, aprovecharemos esto para insertar la estructura de nuestro HTML para cada uno de los botones siendo asi: 

```html
    <button id="boton-tierra" class="boton-de-ataque">Tierra 🌱</button>
```

En donde modificaremos entonces el nombre del id haciendolo por medio de el signo ${} siendo de esa forma la propiedad de ataque.id

Recordemos entonces que el funcionamiento de este bloque es de acuerdo a lo que insertamos anteriormente en el arreglo de nuestros ataques por medio del metodo .push().

En donde de acuerdo al mokepon, ya sea capipepo, hipodoge o ratigueya. (Objetos/Templates Literarios) Cada uno de estos tiene una serie de ataques diferentes con su nombre y id correspondientes por ejemplo:

```javascript
    hipodoge.ataques.push(
        {nombre: '🌊', id: 'boton-agua'},
        {nombre: '🌊', id: 'boton-agua'},
        {nombre: '🌊', id: 'boton-agua'},
        {nombre: '🔥', id: 'boton-fuego'},
        {nombre: '🌱', id: 'boton-tierra'},
    )
```

Y el texto que nombra a nuestro ataque lo modificamos con ${ataque.nombre} siendo asi:

```javascript
    <button id="${ataque.id}" class="boton-de-ataque">${ataque.nombre}</button>
```

Ya una vez esto decidido, tendremos que inyectar abajo dentro de la función el mokepon en nuestro HTML dentro de algún elemento contenedor (Nuestro div) que en este caso es nuestro div con id contenedorAtaques.

Por lo que lo nombramos por medio de nuestra variable ya creada y por medio del metodo .innerHTML y usamos el += para asi remplazar el valor de nuestro elemento por el valor de nuestra variable ataquesMokepon (Teniendo esta por dentro la estructura de nuestro boton HTML por cada uno de nuestros objetos mokepones que por dentro tienen su arreglo de ataques.):

> Me parece increible como es que el código se estructura en funciones y una función depende totalmente de otra función para poder ser funcional.

```javascript
    contenedorAtaques.innerHTML += ataquesMokepon
```

Ya en nuestro HTML borramos cada uno de nuestros botones porque ya no son los ataques de nuestros personajes.

Entonces ya una vez hecho esto solo queda verificar que nuestra función realmente es funcional:

A mi personalmente me salió: 

```javascript
    Uncaught TypeError: Cannot read properties of null (reading 'addEventListener')
    at iniciarJuego (mokepon.js:137:16)
```

y si selecciono un personaje me aparece:

```javascript
    mokepon.js:186 Uncaught TypeError: Cannot read properties of null (reading 'innerHTML')
        at mokepon.js:186:9
        at Array.forEach (<anonymous>)
        at mostrarAtaques (mokepon.js:181:13)
        at extraerAtaques (mokepon.js:177:5)
        at HTMLButtonElement.seleccionarMascota (mokepon.js:164:5)
```

En donde a mi no me apareció ningún boton.

**¿Qué esta sucediendo?**

Recordemos que nosotros estamos nombrando unas variables en la parte superior de nuestro documento JavaScript en el cual el JavaScript tenia la información de nuestros elementos HTML que ahora en este momento ya no existen porque los borramos (Ya no existen los botones.) Y entonces mucho más abajo estamos creando estos elementos por lo que simplemente tenemos que bajar esas variables.

Por ende seleccionaremos nuestros botones HTML cortandolos y les quitamos el const a por un let y entonces le quitamos su valor como variable debido a que en ese momento del documento, todavia no existen esos elementos en el HTML.

Anteriormente:

```javascript
    const botonFuego = document.getElementById('boton-fuego')
    const botonAgua = document.getElementById('boton-agua')
    const botonTierra = document.getElementById('boton-tierra')
```

Ahora se bajaron hacia las variables let:

```javascript
    let botonFuego
    let botonAgua
    let botonTierra
```

y dentro de nuestra función a los botones les agregamos ese valor siendo asi dentro de nuestra función:

```javascript
    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')
```

Por lo que a esa altura del documento nuestros botones ya existen ligandolos asi a los IDs y dandole su funcionalidad con cada una de las funciones que tengamos debajo de ese punto en donde le agregamos valor a estas variables.

Entonces, ahora si nuevamente observamos la consola al iniciar el programa y seleccionar una mascota se matienen los mismos errores.

Acabamos de ligar esas variables con un elemento HTML con cierto ID pues a ese nivel del documento esos elementos HTML son inyectados, pero entonces si observamos arriba de nuestro código tenemos cierta función que agrega el escuchador de eventos click a cada uno de estos botones para que pueda hacer algo que en estos casos es ejecutar cierta función.

Es decir que al estar arriba y no abajo, estas variables a las cuales le estan dando el escuchador de eventos no existen.

```javascript
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
```

Por lo que vamos a trasladar esos elementos de nuestro código de la función iniciarJuego() hacia mostrarAtaques() en donde ya existen mis botones/variables con estos elementos HTML. Por ende ahí puedo agregar esos elementos para que hagan disparar ciertas funciones que tenemos justo debajo de nuestra función.

Ya solo nos queda un pequeño problema que lo resolvemos en el siguente título en donde tenemos 2 botones más que corresponden a una mascota, por ejemplo Hipodoge tiene 3 veces el ataque de Agua y sólo le funciona el primer boton de agua, mientras que los otros dos botones de agua sólo se muestran mas no tienen funcionalidad.

Nuestra función quedo:

```javascript
    function mostrarAtaques(ataques) {
        ataques.forEach((ataque) => {
            ataquesMokepon = `
                <button id="${ataque.id}" class="boton-de-ataque">${ataque.nombre}</button>
            `

            ContenedorAtaques.innerHTML += ataquesMokepon
        })        

        botonFuego = document.getElementById('boton-fuego')
        botonAgua = document.getElementById('boton-agua')
        botonTierra = document.getElementById('boton-tierra')

        botonFuego.addEventListener('click', ataqueFuego)
        botonAgua.addEventListener('click', ataqueAgua)
        botonTierra.addEventListener('click', ataqueTierra)
    }
```

> La función mostrarAtaques() convierte la información (datos en el arreglo) en elementos visuales e interactivos dentro del juego. Es el puente entre la lógica del programa y la interfaz del jugador.










---










## Eventos de Clic en Botones con JavaScript

> Me parece curioso que varias personas concuerdan en que "Asi es como va aumentando la dificultad del curso: Freddy: dificultad nivel 1 Juan: dificultad nivel 3 Estefany: dificultad nivel 5 Diego: dificultad nivel 1847 pero no me rendiré..", "Nuevo Curso de Programación Básica es el Dark Souls de los cursos básicos de programación"

En esta sección vamos a solucionar el problema de click de nuestros botones (Los que se repiten), crearemos entonces una nueva función en donde por cada uno de los botones que se genere, se les valla agregando su evento de click asi entonces nosotros lograremos que por cada uno de los eventos que se valla creando sin importar el número, tengan una función que haga algo.

Tendremos que crear un nuevo arreglo en donde este va a contener cada uno de los nuevos botones que se va a agregar.

Vamos a editar en el código que inyectamos código HTML desde el JavaScript para nuestros botones dentro de la función **MostrarAtaques(ataques)** 

```javascript
    <button id="${ataque.id}" class="boton-de-ataque">${ataque.nombre}</button>
```

En donde le agregaremos una nueva clase, la cual será BAtaque y por ende:

```javascript
    <button id="${ataque.id}" class="boton-de-ataque BAtaque">${ataque.nombre}</button>
```

Vamos a definir la variable botones el cual será un arreglo y estará ubicado en donde los demás LET de nuestro JS (arriba) y por ende:

```javascript
    let botones = []
```

Vamos ya nuevamente a nuestra función y vamos a popular información a nuestro array directamente por lo que justo debajo donde nosotros declaramos nuestras variables vamos a asignarle un valor a nuestra variable botones.

En donde va a seleccionar todos los elementos que tengan cierta clase. Por ende, aprovecharemos esto porque cada boton que generemos va a tener esta clase. Por ende nos puede traer todos los elementos que traigan esa misma clase.

No lo hacemos con el ID porque este no puede repetirse. (Es muy mala practica si no es tratado como tal.)

```javascript
    botones = document.querySelectorAll('.BAtaque')
```

Pruebe escribir 

```javascript
    console.log(botones)
```

Ya luego mirando la consola en las dev tools veremos entonces una **node list = lista de nodos** en donde si la observamos, esta estará vacia.

Una vez se consulte puede aparecer: 

```javascript
    NodeList(5) [button#boton-tierra.boton-de-ataque.BAtaque, button#boton-tierra.boton-de-ataque.BAtaque, button#boton-tierra.boton-de-ataque.BAtaque, button#boton-agua.boton-de-ataque.BAtaque, button#boton-fuego.boton-de-ataque.BAtaque]
```

Esto es una lista de Nodos, es un arreglo []. Una vez hecho esto, ya podemos utilizar la variable de botones en otras funciones para poder iterar sobre los ataques y entonces agregar un evento de click por cada uno de los botones que tendremos adentro de este arreglo.

---

Vamos a generar una nueva función que la vamos a llamar **secuenciaAtaques():**

```javascript
    function secuenciaAtaques(){}
```

> Lo invito a reflexionar ¿Por qué esta función?

Vamos a cambiar un poco la lógica del juego. Actualmente el juego se mueve por 3 vidas, nosotros podemos jugar más de 3 veces porque pueden haber momentos en donde el enemigo y el jugador puedan tener muchos empates por lo que existe la posibilidad de poder jugar de 6 a 8 veces en una sola partida.

Asi mismo nosotros contamos con 3 ataques.

Queremos generar una secuencia de 5 ataques en la que se den solo 5 rondas de ataques y que gane el que halla ganado más veces.

Por lo que cambiaremos vidas por victorias por lo que modificaremos bastantes cosas que nos ayuden a llegar a esa lógica.

De inicio cada uno de nuestros botones debe tener una función de click para que se realice algo en particular.

Será muy similar a las funciones que tenemos para nuestros ataques:

```javascript
    function ataqueFuego(){
        ataqueJugador = 'Fuego 🔥'
        ataqueAleatorioEnemigo()
    }
    function ataqueAgua(){
        ataqueJugador = 'Agua 🌊'
        ataqueAleatorioEnemigo()
    }
    function ataqueTierra(){
        ataqueJugador = 'Tierra 🌱'
        ataqueAleatorioEnemigo()
    }
```

En donde cada una de las funciones nos agrega un valor ya sea fuego, agua, tierra. Por lo que haremos que cada uno de los botones, una vez se halla seleccionado ya no se pueda volver a seleccionar.

* Visualmente cambiaremos un boton para que se vea que ya fue seleccionado por lo que en vez de 5 ataques, te quedarian 4, y asi sucesivamente hasta llegar a las victorais correspondientes.

* Asi mismo haremos que se valla guardando en otro arreglo cual es la secuencia de ataques con la que tu quieres jugar y con la cual va a jugar el enemigo.

Por lo que entonces dentro de la función **secuenciaAtaques()** la variable de botones y agregamos el metodo .forEach para generar una pequeña nueva iteración en donde por cada boton que exista en el arreglo de botones "haz algo":

Ese algo va a ser agregarle el evento de click y validar cual es el evento que estamos seleccionando nosotros para poder jugar con el.

Por lo que cada boton va a tener el metodo .addEventListener en donde este tendrá el evento de click. Y directamente veremos que nos regresa.

Esto es porque cada boton tendrá un addEventListener en donde cada que yo de click, la e significa el evento mismo por ende me regresará el evento que esta sucediendo en el momento.

> Es importante llamar la función para que pueda ejecutarse

Dentro de la función **SeleccionarMascotaEnemigo()** porque una vez seleccionada la mascota del enemigo se podra entonces ejecutar la secuencia en donde se van a mostrar los botones.

```javascript
    SeleccionarMascotaEnemigo() {
        // Todo el código agregado
        secuenciaAtaque()
    }
```

Y dentro de la función secuenciaAtaque:

```javascript
    botones.forEach((boton) => {
        boton.addEventListener('click', (e) => {
            console.log(e)
        })
    })
```


Por lo que le sugiero ya con el siguente código, revisar la consola mediante las devtools que ofrece el navegador una vez seleccionada una mascota y un ataque.

Una vez hecho esto, le aparecerá algo como:

```javascript
    PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}
```

Es de recordar que la e hace referencia directa al evento mismo por lo que nosotros podemos encontrar a donde dimos el click que es lo que nos interesa. Esto lo podemos hacer mediante el metodo target, que si lo revisamos en nuestro PointerEvent en la consola aparece algo como:

```javascript
    target:button#boton-tierra.boton-de-ataque.BAtaque
```

> Con leer esto, aparece bien las referencias de un boton. ¿Interesante No?

Seleccionamos el target y podremos mirar todas las propiedades del elemento.

> Analice uno por uno. (Por ahora no tan deep, pero sí ver cuanto tiene detras.)

Los elementos HTML se convierten en objetos y pues el ID, las classes y demás son propiedades de este. En este caso estamos buscando una propiedad especifica llamada TEXTCONTENT siendo este, el contenido de texto que tiene el elemento.

Por lo que nosotros podemos llamar a ese objeto con el click y le daremos al .target para poder acceder a toda esta info (Propiedades de este boton) y seguido, textContent para obtener el valor de texto que contienen.

Por lo que recordemos que queremos darle la función de click a cada uno de nuestros botones para validar cual es el ataque que se esta seleccionando.

Que como tal es:

* Fuego = 🔥

* Agua = 💧

* Tierra = 🌱

Y asi entonces podremos validar ciertas cosas a partir de ese valor. Por esta razón nos interesa el elemento e en nuestra iteración. Siendo este el **'elemento perse'** por lo que a partir de esta forma podremos llegar al valor de texto de nuestros objetos.

Por ende dentro de nuestra función agregaremos una condición en donde si el evento es e.target.textContent = 🔥

```javascript
    if (e.target.textContent === '🔥') {

    }
```

Con esto nos interesa es generar una secuencia de ataques en donde, pues por ahora que tenemos pensado en cinco ataques, haremos un arreglo que nos permita hacer una secuencia de los cinco ataques y haga un recuento de todos los ataques que realizamos y cual es el ultimo ataque.

Esta secuencia se va a guardar y con esto vamos a jugar.

Para que esto pueda funcionar, tenemos que hacer una variable (array) que le pondremos de nombre AtaqueJugador y le haremos el PUSH para que valla guardando la información.

```javascript
    let AtaqueJugador = []
```

Por lo que iremos a nuestra función y pondremos entonces que nuestra variable y le agregare entonces la función de PUSH con el parametro del nombre del ataque dentro de la condición IF. 

Y haremos que nuestro boton cambie de estilo y que vea el cambio una vez ya fue seleccionado

```javascript
    function secuenciaAtaque(){
    botones.forEach((boton) => {
            boton.addEventListener('click', (e) => {
                // console.log(e)
                if (e.target.textContent === '🔥') {
                    AtaqueJugador.push('Fuego')
                    // Para mirar nosotros que ataques se guardan en las devtools
                    console.log(AtaqueJugador)
                    boton.style.background = '#112f58'
                }
            })
        })
    }
```

Para hacer un recuento, estamos generando una validación en donde se verifica si el contenido de texto del elemento que fue seleccionado y que sea igual al emogi de fuego, va a realizar un push del elemento fuego al arreglo de ArrayAtaqueJugador, se podrá ver este arreglo por medio de la consola y el boton que fue seleccionado, se va a cambiar de color para que se sienta que ya fue seleccionado.

Entonces continuaremos con la estructura de condiciones:

Vamos a validar practicamente lo mismo solo que con otro elemento en esta ocación. Probemos esta vez con agua.

```javascript
    else if (e.target.textContent === '🌊') {
        AtaqueJugador.push('Agua')        
        console.log(AtaqueJugador)
        boton.style.background = '#112f58'
    } else {
        AtaqueJugador.push('Tierra')        
        console.log(AtaqueJugador)
        boton.style.background = '#112f58'
    }
```

Con esto aparentemente tenemos ya todos los eventos de click para cada uno de nuestros botones que se van a renderizar en nuestro HTML, podremos ver a cual es el evento que le vamos a estar dando click, poder imprimir eso directamente en la consola, guardar el valor en nuestra variable. Por lo que vamos entonces a mirar nuestro resultado:

> Será normal que salgan errores en la consola y es importante poder identificarlos

De ahí verifique justo debajo si se encuentran las siguentes funciones y eliminelas:

```javascript
    function ataqueFuego(){
        ataqueJugador = 'Fuego 🔥'
        ataqueAleatorioEnemigo()
    }
    function ataqueAgua(){
        ataqueJugador = 'Agua 🌊'
        ataqueAleatorioEnemigo()
    }
    function ataqueTierra(){
        ataqueJugador = 'Tierra 🌱'
        ataqueAleatorioEnemigo()
    }
```

y puede que le salga un error en consola como:

```javascript
    Uncaught ReferenceError: ataqueFuego is not defined
    at mostrarAtaques (mokepon.js:198:42)
    at extraerAtaques (mokepon.js:180:5)
    at HTMLButtonElement.seleccionarMascota (mokepon.js:167:5)
```

Por lo que tendremos que ir tambien a la función de arriba [mostrarAtaques(ataques)], donde definimos por variable el addEventListener y eliminarlo tambien.

```javascript
    botonFuego.addEventListener('click', ataqueFuego)
    botonAgua.addEventListener('click', ataqueAgua)
    botonTierra.addEventListener('click', ataqueTierra)
```

En donde ahora si damos click, veremos entonces como el boton fue seleccionado y se va guardando el nombre del ataque en el arreglo y asi, entonces podremos llegar a mirar en la consola algo como:

```javascript
    ['Fuego']
    mokepon.js:210 (2) ['Fuego', 'Agua']
    mokepon.js:214 (3) ['Fuego', 'Agua', 'Tierra']
    mokepon.js:214 (4) ['Fuego', 'Agua', 'Tierra', 'Tierra']
    mokepon.js:214 (5) ['Fuego', 'Agua', 'Tierra', 'Tierra', 'Tierra']
```

Siendo esta la secuencia con la que yo podría jugar, ahora tenemos que seleccionar entonces la secuencia de ataques del enemigo para que ya una vez con ambas secuencias determinar quien gana y que solo podamos jugar 5 veces.

> Como todavia no se ha solucionado lo de que si no se selecciona una mascota, igual sigue... El juego se rompe, no funciona nada porque no obtiene los ataques.









---









## Secuencia de Ataques y Validación de Resultados en JavaScript

> Una persona comenta que no considera que el curso sea de programación básica, otras personas dicen que ya se han perdido con el contenido y la estructura de lo que estamos haciendo. "Entre más clases, más confuso se pone."

> Personalmente considero que sí esta dificil, pero por el hecho de escribir todo por este medio se me permite organizar pensamientos y definir cada elemento en la sintaxis que se escribe. Por ende, me gusta.

*Foto Publicada Por Juan Omar Palma álvarez*

<img src="https://static.platzi.com/media/user_upload/32b6bdc3-0366-4294-b436-c224750c89e6-322d7be6-1622-420c-8181-6f2642606f06.jpg">

*Imagen Tomada De: https://platzi.com/cursos/programacion-basica/secuencia-de-ataques-del-enemigo/*

> Si miramos esta imagen, podemos determinar la dificultad con la que se pueden presentar algunas personas.

---

Vamos a continuar entonces con el desarrollo de nuestro juego.

* En el anterior título remplazamos las tres funciones que ya existian por una sóla. 

* Recordemos tambien que borramos todos nuestros botones y estos funcionan desde nuestro JavaScript

Asi que hicimos una sóla función donde por cada boton que se agregue un evento y pueda hacer algo. Ya una vez el boton renderizado en el HTML extraemos el emoji y con eso ya sabemos que ataque se va a realizar. Tenemos entonces tambien una función que nos ayuda a guardar estos valores y generar asi una secuencia de ataques que es con la que nosotros vamos a estar jugando.

Vamos a trabajar en este título la secuencia de ataques del enemigo.

Asi entonces podremos validar quién gana qué.

* Es importante recordar que ya no vamos a trabajar con las vidas, en donde eran tres vidas para el jugador y tres vidas para el enemigo. Ahora vamos a trabajar por numeros de victorias. Como por ahora tenemos cinco botones vamos a tener cinco opciones para ver quién gana. La forma de validar esto es determinando quién tiene más victorias.

Entonces tambien puede que en mi partida | secuencia me gane 3 partidas de 5 siendo asi que la máquina se gane 2 por ende entonces será el jugador o yo quien va a ganar. A no ser entonces que tambien se genere un empate de 2 ganas, 2 perdidas y un empate en una secuencia de 5 ataques.

Por lo que el orden será:

1. Generar los ataques del enemigo

2. Validar a partir de los ataques del jugador y de los ataques del enemigo quién ganó determinando el número de victorias.

Primero, vamos a insertar la función  ataqueAleatorioEnemigo() justo antes de terminar nuestra función pues necesitamos que pase ahí para que el enemigo tambien pueda escojer un ataque y asi nos vayamos alternando.

* Nuestra idea principal es que podamos hacer comparaciones entre dos arreglos para asi generar la validación y por ende definir quien gana y quien pierde.

Si miramos el trabajo que hicimos en el anterior título que fue la función secuenciaAtaque():

```javascript
    function secuenciaAtaque(){
        botones.forEach((boton) => {
                boton.addEventListener('click', (e) => {
                    // console.log(e)
                    if (e.target.textContent === '🔥') {
                        ataqueJugador.push('Fuego')
                        console.log(ataqueJugador)
                        boton.style.background = '#112f58'
                    } else if (e.target.textContent === '🌊') {
                        ataqueJugador.push('Agua')        
                        console.log(ataqueJugador)
                        boton.style.background = '#112f58'
                    } else {
                        ataqueJugador.push('Tierra')        
                        console.log(ataqueJugador)
                        boton.style.background = '#112f58'                                    
                    }
                })        
            })
            ataqueAleatorioEnemigo()
    }
```

Vamos a aplicar la misma logica a la secuencia de nuestro enemigo.

Si miramos lo que tenemos de nuestro enemigo, podremos observar que tenemos:

1. Función seleccionarMascotaEnemigo()

```javascript
    function SeleccionarMascotaEnemigo(){
        let MascotaAleatoria = aleatorio(1, mokepones.length -1)

        SpanMascotaEnemigo.innerHTML = mokepones[MascotaAleatoria].nombre

        secuenciaAtaque()
    }
```

2. Función ataqueAleatorioEnemigo()

> Si observamos bien, esta es la que hay que editar. Y por otro lado, se puede observar tambien que la invocamos en nuestra función secuenciaAtaque() que esta justo arriba de la función que esta encima de este parrafo.

> Recordemos que si tenemos una función que no invocamos/llamamos simplemente no va a hacer nada.

```javascript
    function ataqueAleatorioEnemigo(){
        let ataqueAleatorio = aleatorio(1,3)

        if(ataqueAleatorio == 1) {
            ataqueEnemigo = 'Fuego 🔥'
        } else if(ataqueAleatorio == 2) {
            ataqueEnemigo = 'Agua 🌊'
        } else {
            ataqueEnemigo = 'Tierra 🌱'
        }
        
        combate()
    }
```

Esta es la función que tenemos para los ataques aleatorios de nuestro enemigo, si observamos en la variable ataqueAleatorio que es igual a la función aleatorio tenemos un hardcore de 3, que recordemos que como no nos vamos a quedar solamente con 3 mascotas, tenemos que automatizar este apartado... Pues si pensamos ahora ya no tenemos 3 ataques sino 5. 

Podemos basarnos en la función SeleccionarMascotaEnemigo() pues si observamos:

```javascript
    SpanMascotaEnemigo.innerHTML = mokepones[MascotaAleatoria].nombre
```

Estamos jalando la información del nombre de la mascota aleatoria en nuestros mokepones. Eso quiere decir que tambien podemos traer el número de ataque que nuestro enemigo tiene y por ende:

* Tenga en cuenta que de ahora en adelante estaremos trabajando dentro de la función **ataqueAleatorioEnemigo()**

```javascript
    ataquesMokeponEnemigo = mokepones[MascotaAleatoria].ataques
```

y tenemos que ir a la parte de donde nosotros definimos nuestras variables y hacer que la variable exista:

```javascript
    ataquesMokeponEnemigo = mokepones[MascotaAleatoria].ataques
```

solo nos faltaria obtener la longitud de esa variable y ya tendriamos nuestro valor.

```javascript
    let ataqueAleatorio = aleatorio(0, ataquesMokeponEnemigo.length-1)
```

Entonces asi si de repente mañana ya nuestra lista de ataques de nuestros mokepones no son 5 sino 6, o 7, o 8 o como sea que se presente la situación ya esto se actualizará solo.

---

Ahora si seguimos mirando dentro de nuestra función tenemos:

```js
    if(ataqueAleatorio == 1) {
        ataqueEnemigo = 'Fuego 🔥'
    } else if(ataqueAleatorio == 2) {
        ataqueEnemigo = 'Agua 🌊'
    } else {
        ataqueEnemigo = 'Tierra 🌱'
    }
```

Como tal es una variable que guarda un valor, pero que estos se sustituyen como tal y esta información no se guarda en ningún array.

Entonces vamos a camiar su estructura:

```js
    if(ataqueAleatorio == 1) {
        ataqueEnemigo.push('Fuego 🔥')
    } else if(ataqueAleatorio == 2) {
        ataqueEnemigo.push('Agua 🌊')
    } else {
        ataqueEnemigo.push('Tierra 🌱')
    }
```

Aun nuestra validación esta incompleta pues si observamos, nuestros mokepones tienen 5 ataques y ahí sólo estamos validando tres opciones de acuerdo al número que hala sido elegido. Además de que si miramos cómo se selecciona nuestro enemigo, vemos que el minimo inicia con un 0 y por ende si el número aleatorio termina siendo 0 pues no se va a seleccionar nada.

```js
    if(ataqueAleatorio == 0 || ataqueAleatorio == 1 ) {
            ataqueEnemigo.push('Fuego 🔥')
    } else if(ataqueAleatorio == 2 || ataqueAleatorio == 4 ) {
        ataqueEnemigo.push('Agua 🌊')
    } else {
        ataqueEnemigo.push('Tierra 🌱')
    }
```

y ahora para poder visualizar los ataques del enemigo y mirar su secuencia vamos a usar nuestro confiable:

```js
    console.log(ataqueEnemigo)
```

y vamos a nuestro navegador a observar qué sucede. Entonces salió un nuevo error:

```js
    mokepon.js:240 Uncaught TypeError: Cannot read properties of undefined (reading 'push')
        at ataqueAleatorioEnemigo (mokepon.js:240:23)
        at secuenciaAtaque (mokepon.js:222:9)
        at SeleccionarMascotaEnemigo (mokepon.js:231:5)
        at HTMLButtonElement.seleccionarMascota (mokepon.js:171:5)
```

> Vamos a leer este error a ver qué dice: No puede leer el metodo de push porque se encuentra como **undefined** | indefinido.

Por lo que miremos el código a observar qué esta pasando. Como el error esta en el push, esta relacionado con la variable de ataqueEnemigo pues tenemos nuestra variable y usamos el método push para agregar información, este lo utilizamos en variables que son arreglos. Por lo que en pocas palabras a nuestra variable arriba hay que acomodarla como un array.

```js
    let ataqueEnemigo = []
```

Por ende volvemos a observar qué sucede en consola:

* Aparece directamente en consola como si hubiera seleccionado agua una vez seleccionada la mascota y aun no haber seleccionado algún ataque.

Esto quiere decir que la función entro antes que directamente el console.log por lo que en otras palabras la mascota del enemigo ya fue seleccionada mientras que la mascota del jugador aun no. No esta directamente mal e incluso podria ser algo que se llegara a necesitar. Pero la lógica de mi juego es que primero se seleccione el jugador y ahí sí despues el enemigo. 

Por lo que se tiene que buscar donde la estamos llamando, que en este caso es en **secuenciaAtaque()**:

* Dentro de esta función tenemos un forEach con un evento de click, entonces se ejecutan en las demas condicionales un click de forma automática y luego invoca a la función generando que se seleccioné el enemigo por ende la vamos a agregar al flujo de nuestras condicionales siendo de esta forma:

```javascript
    function secuenciaAtaque(){
        botones.forEach((boton) => {
                boton.addEventListener('click', (e) => {
                    // console.log(e)
                    if (e.target.textContent === '🔥') {
                        ataqueJugador.push('Fuego')
                        console.log(ataqueJugador)
                        boton.style.background = '#112f58'
                    } else if (e.target.textContent === '🌊') {
                        ataqueJugador.push('Agua')        
                        console.log(ataqueJugador)
                        boton.style.background = '#112f58'
                    } else {
                        ataqueJugador.push('Tierra')        
                        console.log(ataqueJugador)
                        boton.style.background = '#112f58'                                    
                    }
                    ataqueAleatorioEnemigo()
                })        
            })            
    }
```

Por lo que ahora:

1. Al ejecutarse la función ingresa al forEach

2. Existe cada boton y a cada boton le agrega el click.

3. Cuando yo le haga click a un boton, selecciono un ataque.

4. Despues entra la función de ataqueAleatorioEnemigo()

5. Si hago otro click, selecciono otro ataque y por ende se ejecuta la función ataqueAleatorioEnemigo

> Y asi se repetirá este flujo de trabajo sin limites.

Volvemos a mirar nuestro navegador y ya entonces va a aparecer el registro de 2 secuencias.

```js
    ['Fuego']
    mokepon.js:250 ['Fuego 🔥']
    mokepon.js:216 (2) ['Fuego', 'Agua']
    mokepon.js:250 (2) ['Fuego 🔥', 'Agua 🌊']
    mokepon.js:220 (3) ['Fuego', 'Agua', 'Tierra']
    mokepon.js:250 (3) ['Fuego 🔥', 'Agua 🌊', 'Tierra 🌱']
    mokepon.js:220 (4) ['Fuego', 'Agua', 'Tierra', 'Tierra']
    mokepon.js:250 (4) ['Fuego 🔥', 'Agua 🌊', 'Tierra 🌱', 'Fuego 🔥']
    mokepon.js:220 (5) ['Fuego', 'Agua', 'Tierra', 'Tierra', 'Tierra']
    mokepon.js:250 (5) ['Fuego 🔥', 'Agua 🌊', 'Tierra 🌱', 'Fuego 🔥', 'Agua 🌊']
```

> Aun hay demasiadas cosas por corregir, pero hay vamos.

> Podemos mirar mas o menos como se ve el flujo de trabajo gracias al comentario de Jonathan Rafael Petit Rojas

<img src="https://static.platzi.com/media/user_upload/Screenshot_1-b4da2f1b-e443-4ec7-ad7a-af9c7ab63154.jpg">

*Imagen Tomada De: https://platzi.com/cursos/programacion-basica/secuencia-de-ataques-del-enemigo/*










---










## Implementación de Lógica de Combate en Juego JavaScript

> Comenta un usuario que comenta que nunca se realizo un diagrama de flujo para el juego, pues a medida del tiempo se cambiando el funcionamiento del juego y por ende puede afectar totalmente al como se aprende. Es fundamental saber en qué parte del procedimiento estás y cómo vas a trabajar como tal.

> Otro usuario critica que el profesor muchas veces escribe algo y no explica qué esta modificando.

> Se recomienda mucho repetir y repasar el funcionamiento del código de uno.

> Se percibio un error en la enseñanza del profesor, pero se dejo la clase con ese error. Me dí cuenta por leer el comentario.

> Se comenta bastante que el nivel de dificultad para el aprendizaje subió demasiado.

> Versión de Mokepon del Usuario Miguel Ángel Bolaños Quiñonez

<img src="https://static.platzi.com/media/user_upload/Screenshot%202022-09-02%20154410-74b0fc41-eebc-4e26-a68e-6c1fb7e72519.jpg">

*Imagen Tomada De: https://platzi.com/cursos/programacion-basica/iniciando-el-combate/*

Ahora sí, vamos a iniciar con el juego.

Hasta ahora hemos hecho ciertas modificaciones como permitir agregar nuestros objetos de nuestros personajes y sus ataques al HTML.

Pero como tal, todavia no hemos iniciado ningún juego. Pues todavia no estamos usando la secuencia de lo que son nuestros ataques