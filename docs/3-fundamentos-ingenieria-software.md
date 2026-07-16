# Curso de Fundamentos de Ingeniería de Software

Cómo funciona Internet, las computadoras, los chips, la inteligencia artificial y los sistemas del mundo. Desde cero los fundamentos de la tecnología y el software moderno.

* <a href="https://github.com/santiagoencodigo/desarrollo-web-profesional/tree/main">Haz click aqui para volver al repositorio.</a>

## Tabla de Contenidos

### Computación Básica

- [1. Proceso de arranque y encendido de computadoras y móviles](#proceso-de-arranque-y-encendido-de-computadoras-y-móviles)

- [2. Cómo Funciona un Circuito Electrónico](#cómo-funciona-un-circuito-electrónico)

- [3. Qué es un bit y qué es un byte](#qué-es-un-bit-y-qué-es-un-byte)

- [4. Qué es un procesador (CPU) y la memoria  (RAM)](#qué-es-un-procesador-cpu-y-la-memoria-ram)

- [5. Qué es un Sistema Operativo](#qué-es-un-sistema-operativo)

- [6. Cómo Funciona Internet](#cómo-funciona-internet)

- [7. Cómo las Computadoras Guardan Datos](#cómo-las-computadoras-guardan-datos)

- [8. Cómo se Organizan los Archivos](#cómo-se-organizan-los-archivos)

- [9. Teléfonos y sus "System on a Chip" o SOC](#teléfonos-y-su-system-on-a-chip-o-soc)

- [10. GPUs: Procesadores Gráficos y de AI](#gpus-procesadores-gráficos-y-de-ai)

- [11. Qué es un Algoritmo y Qué es un Lenguaje de Programación](#qué-es-un-algoritmo-y-qué-es-un-lenguaje-de-programación)

### Redes e Internet

- [12. Direcciones IP y el protocolo de Internet](#direcciones-ip-y-el-protocolo-de-internet)

- [13. Nombres de Dominio, DNS y cómo obtener un .com](#nombres-de-dominio-dns-y-cómo-obtener-un-com)

- [14. Modelo Cliente/Servidor: ¿Cómo funciona un sitio web?](#modelo-clienteservidor-cómo-funciona-un-sitio-web)

### Sistemas Operativos y Almacenamiento

- [15. Diferencias entre Windows, Linux, MacOS](#diferencias-entre-windows-linux-macos)

- [16. Permisos, niveles de procesos y privilegios de ejecución](#permisos-niveles-de-procesos-y-privilegios-de-ejecución)

- [17. Archivos: Metadatos, cabeceras y extensiones](#archivos-metadatos-cabeceras-y-extensiones)

###  Archivos y estructuras de datos

- [18. Qué son las Bases de Datos](#qué-son-las-bases-de-datos)

- [19. Cómo funciona el formato JPG](#cómo-funciona-el-formato-jpg)

- [20. Videos: Contenedores, Codecs y Protocolos](#videos-contenedores-codecs-y-protocolos)

- [21. Cómo funciona un archivo .zip](#cómo-funciona-un-archivo-zip)

### Introducción a Blockchain e Inteligencia Artificial

- [22. Arquitectura y funcionamiento interno de Blockchain](#arquitectura-y-funcionamiento-interno-de-blockchain)

- [23. Qué es una Red Neuronal](#qué-es-una-red-neuronal)

- [24. Cómo funcionan los LLMs](#cómo-funcionan-los-llms)











---











# Computación Básica










## Proceso de arranque y encendido de computadoras y móviles

### Power On Computer

_Oprimes el boton de prender tu computadora, empieza a fluir energia de la bateria de la computadora pasando por medio de cable a la fuente de energia de la ciudad._

Esta energia fluye a traves de la tarjeta madre, la electricidad es una onda asi mismo como la luz o el sonido. Esas ondas se miden en pulsos (Altos, Bajos), cuando tenemos un pulso alto es lo que nosotros consideramos un 1 y un pulso bajo es un 0, esos 1 y 0 es lo que nosotros llamamos bits.

> Bit: Unidad mínima de información (0 o 1).

<div style="display:flex; justify-content:center;">
<img src="https://codeguppy.com/blog/why-are-there-8-bits-in-a-byte/img/bit_byte.png" width="500px" height="150px">
</div>

*Imagen Tomada de: https://codeguppy.com/blog/why-are-there-8-bits-in-a-byte/*

<br>

La señal viaja del boton de encedido, hacia la tarjeta madre. Esta tarjeta madre tiene un chip especial de arranque llamado [BIOS (Basic Input Output System)](https://es.wikipedia.org/wiki/BIOS "Wikipedia - BIOS") que es el nombre antiguo, ahora las computadoras modernas lo llaman: [UEFI (Unified Extensible Firmware Interface)](https://es.wikipedia.org/wiki/Unified_Extensible_Firmware_Interface "Wikipedia - UEFI")

En telefonos que tambien son computadoras esto tambien existe y se llama [Boot Loader.](https://es.wikipedia.org/wiki/Cargador_de_arranque "Wikipedia - Boot Loader / Gestor de Arranque")

>* En [Android](https://www.android.com/intl/es_es/ "android.com") el chip inicia un proceso llamado [PBL (Primary Boot Loader)](https://en.wikipedia.org/wiki/Booting_process_of_Android_devices "Wikipedia - Booting Process of Android Device")

>* En [Iphone](https://www.apple.com/co/iphone/ "apple.com/iphone") este mismo proceso se llama [Secure Rom.](https://support.apple.com/es-co/guide/security/secb3000f149/web "Explicación Proceso Arranque Iphone by Apple")


<!-- Especificación de Proceso de Encendido de un Dispositivo -->
---

### POST

Cuando cualquier boton de encendido es activado (Recibe Señal Electrica) activa un procedimiento interno que esta grabado en el Harware de los [transistores](https://es.wikipedia.org/wiki/Transistor "Wikipedia - Transistor") del chip, este proceso se llama **POST - (Power On Self Test)**

* **POST** prueba que todo en la computadora funcione y este conectado, enviando una señal de luz a todos los dispositivos 

>Dato Curioso: Cuanto al prender un dispositivo y este suene, puede ser el hardware avisando de fallos.

---

### DISK

Se busca en la memoria permantente del dispositivo las intrucciones de arranque que inicia el sistema operativo (Disco Duro)

* El disco duro en un computador común y corriente es una caja que puede ir por aparte mientras que en un celular es un chip que va al lado.

Dentro de este disco duro hay instrucciones hechas con 1 y  0 teniendo una lógica muy similar a la logica que se maneja en chip en atomos siendo la estructura atómica de los transistores siendo esto lo que nosotros conocemos como el codigo del software.

<img src="https://www.crucial.mx/content/dam/crucial/articles/pc-users/why-is-my-laptop-so-slow-/hard-disk-drive.jpg.transform/large-jpg/img.jpg" width="400px" height="280px;">

*Imagen Tomada de: https://www.crucial.mx/articles/pc-builders/what-is-a-hard-drive*

---

### Boot Loader

Una vez que el POST verifica el funcionamiento del componente en cada uno de los puertos (Teclado, mouse, pantalla, **hardware**, etc.), se inicia el sistema operativo.

>De un dispositivo todo lo que no sea con impulsos eléctricos de 1 y 0 es hardware, cuando ves 1 y 0 eso problemamente es software.

* HARDWARE - Hard = Duro = Tangible = Fisico

* SOFTWARE - Soft = Suave = No tangible = Digital = "Di" = 2 = (1, 0)

---

### Start the Operating System

El codigo esta organizado con 0 y 1 con un lenguaje que lo entiende uno de los circuitos electrónicos más importantes de la computadora, **la unidad central de procesamiento o CPU** 

La **CPU** es la que se encarga de realizar todos los procesos matemáticos que los BITS se conviertan en imagenes, sonidos  todos los procesos para los que utilizas tu telefono o computadora.

En la computadora es un chip independiente como el [Intel Core i7](https://www.intel.la/content/www/xl/es/products/sku/230490/intel-core-i713700-processor-30m-cache-up-to-5-20-ghz/specifications.html "Especificaciones Intel Core i7"), [AMD Ryzen](https://www.amd.com/es/products/processors/desktops/ryzen.html "amd.com/products"), [Apple M4](https://www.apple.com/co/newsroom/2024/05/apple-introduces-m4-chip/ "Newsroom chip M4 by Apple") - Estos son algunos nombres de chips de CPU. En los telefonos estos chips vienen integrados con otros chips que tiene en un mismo lugar: video, memoria, disco duro y hasta antenas.

Esto se le conoce como [System On A Chip = SOC](https://es.wikipedia.org/wiki/Sistema_en_un_chip "Wikipedia - SOC")

Ejemplos:

* [Snapdragon](https://es.wikipedia.org/wiki/Snapdragon "Wikipedia - Spandragon") diseñado y comercializado por [Qualcomm](https://www.qualcomm.com/snapdragon/overview "Overview Snapdragon by Qualcomm")

* [CHIP M1](https://es.wikipedia.org/wiki/Apple_M1 "Wikipedia - Apple M1") diseñado por [Apple](https://www.apple.com/co/newsroom/2020/11/apple-unleashes-m1/ "Newsroom about Apple M1 by Apple")

Son chips que contienen CPU y otros elementos alrededor y los dispositivos muy compactos asi como el [Mac Book Air](https://www.apple.com/co/macbook-air/ "Page Apple Macbook Air"), [Ray-Ban Meta Glasses](https://www.meta.com/us/es/ai-glasses/ray-ban-meta/ "Page Lentes con IA | Ray-Ban Meta") y otros dispositivos utilizan este tipo de chips.

Son estos 1 y 0 que salen del disco duro y llega a la CPU y empieza a ejecutar intrucciones matemáticas y ordenes de hardware que prenden el teclado, el mouse, la pantalla, etc...

**Son instrucciones nativas que interpreta un chip o CPU**, es un lenguaje que se le conoce como [Ensamblador o Assembler](https://es.wikipedia.org/wiki/Lenguaje_ensamblador "Lenguaje Ensamblador | Assembler") que son las intrucciones que utilizan los componentes internos de la CPU para mover los pulsos electricos de tal manera que genera imagen, voz, sonido.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Motorola_6800_Assembly_Language.png/500px-Motorola_6800_Assembly_Language.png">

*Imagen Tomada de: https://es.wikipedia.org/wiki/Lenguaje_ensamblador*

La CPU ejecuta entonces ese <u>sistema de arranque de sistema operativo</u> enviando las estructuras de instrucciones y su uso a una memoria temporal de muy alta velocidad que se le conoce como **[Memoria RAM](https://es.wikipedia.org/wiki/Memoria_de_acceso_aleatorio "Wikipedia - Memoria RAM")**.

>*"Esto es como armar una ciudad desde 0 con sus planos."*

---

### Kernel

Al corazón del sistema operativo se le conoce como [KERNEL](https://es.wikipedia.org/wiki/N%C3%BAcleo_(inform%C3%A1tica) "Wikipedia - Kernel | Nucleo") y es el codigo en SOFTWARE que primero interpreta la CPU, que estructura en la memoria RAM, y que funciona como intermediario entre el software y el hardware.

<img src="https://linuxtldr.com/wp-content/uploads/2022/12/Working-of-kernel-1024x419.webp">

*Imagen Tomada de: https://linuxtldr.com/kernel/*

Cada vez que haces un click, ves algo en la pantalla, es kernel el que se encarga de realizar la traducción de las instrucciones que los ingenieros en software le dan en código para que los usuarios pasen acciones de la computadora al mundo real.

El kernel arranca los procesos de seguridad en el sistema operativo, es de esa forma es que una computadora pueda tener datos con multiples dueños, que es el sistema usuarios y contraseñas que por medio de llaves y acceso que descifran los datos privados de los usuarios.

<img src="https://aprendelibvrefiles.blob.core.windows.net/aprendelibvre-container/course/como_usar_windows_10/image/wcuenta_xl.png">

*Imagen Tomada de: https://edu.gcfglobal.org/es/como-usar-windows-10/que-son-las-cuentas-de-usuario-en-windows-10/1/*

El kernel tambien busca en el sistema operativo el proceso de arranque de la pantalla, esta son matrices de luz, llamados pixeles.

* [Procesador Serial](https://www-sciencedirect-com.translate.goog/topics/computer-science/series-processor?_x_tr_sl=en&_x_tr_tl=es&_x_tr_hl=es&_x_tr_pto=tc "Definition of Procesadores en Serie By Sciencedirect") que no es ideal para generar graficos, pero sí para realizar calculos matematicos.

* [Procesador Paralelo](https://en.wikipedia.org/wiki/Parallel_computing "Wikipedia - Computación Paralela") = GPU - Que rinde bastante bien con los graficos y que sirve para la inteligencia artificial y otros procesos especiales.

Las pantallas con cuadriculas de puntos de millones de puntos de luz y el sistema operativo decide de qué color es cada punto a una inmensa velocidad.

<img src="https://riverdi.com/wp-content/uploads/2019/05/What-determines-the-resolution-of-Riverdi-Displays-lcd-close-up.png">

*Imagen Tomada de: https://riverdi.com/es/blog/que-determina-la-resolucion-de-las-pantallas-riverdi*

Debido a la diversidad de lo que pueden ser los dispositivos debido a que se pueden utilizar por medio de trackpack, mouse, teclado, tactil y demas... Los creadores de hardware crearon un manual de uso para todos los dispositivos en general y ese manual se expresa en codigo y a ese software se conoce como **[DRIVERS](https://es.wikipedia.org/wiki/Controlador_de_dispositivo "Wikipedia - Drivers")**, todos los dispositivos suelen tener una gran cantidad de drivers ya preinstalados.

La tecla ENTER envia una señal de luz en donde la CPU busca la orden dentro del sistema operativo en donde encuentra en el disco duro un proceso [criptografico](https://es.wikipedia.org/wiki/Criptograf%C3%ADa "Wikipedia - Criptografía") matemático que descrifa el acceso con tu contraseña y eso le da al kernel el acceso a tus datos privados. Asi es como funciona la seguridad en nuestros dispositivos, y lleva funcionando asi por más de 50 años. 

Todos los dispositivos o computadoras tienen estos sistemas de arranque, operativos, kerners, **todos los dispositivos funcionan exactamente igual**.

<img src="https://www.thenocgroup.com/wp-content/uploads/2023/03/dispositivos_ectronicos_thenoc.jpg">

*Imagen tomada de: https://www.thenocgroup.com/dispositivos-electronicos/*

<!-- Importante. -->

>Este conocimiento es totalmente importante para cualquier persona que quiera ser profesional que aspiran a desarrollar software, a ser ingenieros de software, a crear codigo, a crear su carrera en la industria de la tecnologia.

>¿Te imaginas crear código para construir código?

>¿Te imaginas el proceso para crear un sistema operativo?

**Por lo que en resumen:**

1. Power On Computer (Encendido): Al encender la computadora, la fuente de alimentación suministra energia a los componentes (CPU, RAM, placa base, etc.).

2. POST (Power On Self Test): La BIOS o UEFI ejecuta el POST, un diagnóstico que verifica el hardware básico y si encuentre errores (Ej: Ram Defectuosa) emite pitidos o códigos en la pantalla.

3. Bios busca en el disco (DISK): Una vez el POST es exitoso, la BIOS busca un dispositivo de arranque (disco duro, USD, USB) según el orden configurado en el Boot Priority. Todo esto para encontrar el Boot Loader.

4. Carga del Boot Loader en RAM: La BIOS carga el Boot Loader (ej: Windows Boot Manager) desde el disco a la RAM, ya que la GPU solo ejecuta intrucciones desde la RAM.

5. Carga del Sistema Operativo: El Boot Loader carga el nucleo (kernel) del sistema operativo desde el disco a la RAM, el sistema operativo toma control, inicializa los controladores (drivers) y lanza la interfaz de usuario.

<div style="display:flex; justify-content:center;">
<img src="https://static.platzi.com/media/user_upload/upload-d6b47c52-1ce8-4559-95fc-d6aff5f59134.png" width="400px" height="500px">
</div>











---











## Cómo Funciona un Circuito Electrónico

[Los circuitos electronicos](https://es.wikipedia.org/wiki/Circuito "Wikipedia - Circuito Electrónico/Electrico") son la base de nuestra tecnología moderna, funcionan controlando el [flujo de la electricidad](https://es.wikipedia.org/wiki/Corriente_el%C3%A9ctrica "Wikipedia - Flujo/Corriente de la Electricidad") siendo este el movimiento de electrones en un medio conductor, como un cable.

La energia se produce en plantas de energia y se transmite por cable hacia la casa de cada persona o se guarda en baterias.

<div style="display:flex; justify-content:center;">
<img src="https://electrolomas.com/wp-content/uploads/2023/02/Descubriendo-los-circuitos-electronicos-flexibles-Electrolomas.jpg" width="400px" height="300px">
</div>

>Podemos pensar del flujo de electricidad como el flujo de agua en un tubo. Y este fluye desde el polo negativo (-) hacia el polo positivo (+) 

* El [voltaje](https://es.wikipedia.org/wiki/Tensi%C3%B3n_(electricidad) "Wikipedia  Tensión | Voltaje") es equivalente a la presión del agua en un tubo y mide la cantidad de energia que fluye desde la fuente, una tipica bateria AA genera 1.5 Voltios, una Bateria de 9 Voltios... Genera 9 Voltios, los enchufes de hogar generan de 110 a 220 Voltios.

* [Amperaje](https://es.wikipedia.org/wiki/Amperio "Wikipedia - Amperaje") es equivalente a la cantidad de agua que pasa siendo distinto a la presión, por lo que dependiendo de esta puede cargar más rápido o no una bateria. **El voltaje hace que la electricidad fluya y ese flujo es el amperaje.**

La electricidad se puede convertir en luz con una lampara o tambien, con una pieza electronica llamada LED *(Se pueden sobrecalentar si reciben demasiada corriente)* Por lo que para controlar esa cantidad de voltaje, hay un componente electronico que podemos utilizar llamado [resistencia](https://es.wikipedia.org/wiki/Resistencia_el%C3%A9ctrica "Wikipedia - Resistencia Eléctrica").

La resistencia reduce el amperaje y absorbe esa energia, liberandola como calor. Por lo que, cuando un dispositivo se calienta es la resistencia y otros componentes electrónicos liberando un alto flujo de corriente.

La resistencia mide cuanto puede reducir del amperaje con una unidad de medida de oposición al paso de la corriente llamada [Ohmios](https://es.wikipedia.org/wiki/Ohmio "Wikipedia - Ohmio")

<div style="display:flex; justify-content:center;">
<img src="https://img.freepik.com/vector-premium/led-resistencia-serie-conectados-bateria-9v-circuito-electrico-sencillo-lecciones-fisica_786898-12.jpg" width="400px" height="300px">
</div>

<br>

**Imagina un motor eléctrico básico:**

1. colocamos un [imán](https://es.wikipedia.org/wiki/Im%C3%A1n "Wikipedia - Imán") permanente (o dos, para crear un campo magnético fuerte) y un [conductor](https://es.wikipedia.org/wiki/Conductor_el%C3%A9ctrico "Wikipedia - Conductor Eléctrico") (como un anillo o bobina de metal) que lleva corriente eléctrica.

2. Cuando la corriente fluye por el conductor, genera su propio campo magnético según la [ley de Ampère](https://es.wikipedia.org/wiki/Ley_de_Amp%C3%A8re "Wikipedia - Ley de Ampere"), convirtiéndolo en un electroimán temporal. 

3. Este campo interactúa con el del imán permanente, produciendo una [fuerza de Lorentz](https://es.wikipedia.org/wiki/Fuerza_de_Lorentz "Wikipedia - Fuerza de Lorentz") que causa repulsión o atracción entre ellos. Esta fuerza genera un torque (fuerza rotacional) que hace girar el anillo alrededor de un eje central.

4. Para mantener el movimiento continuo y evitar que se detenga al alinearse los campos, usamos un [conmutador](https://voltione.com/pages/que-es-conmutador "Qué es un conmutador by Voltione") (un interruptor rotatorio) que invierte la dirección de la corriente periódicamente. 

5. Así, capturamos ese movimiento circular en el eje, convirtiendo la energía eléctrica en mecánica y asi tenemos un motor eléctrico.

Las piezas moviles de un brazo electrico utilizan otro motor de presición llamado [SERVO](https://es.wikipedia.org/wiki/Servomotor "Wikipedia - Servomotor")

<div style="display:flex; justify-content:center;">
<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Rotterdam_Ahoy_Europort_2011_%2814%29.JPG/1200px-Rotterdam_Ahoy_Europort_2011_%2814%29.JPG" width="400px" height="300px">
</div>

*Imagen tomada de: https://es.wikipedia.org/wiki/Motor_el%C3%A9ctrico*

La electricidad se convierte en sonido cuando haces vibrar una membrana al ritmo de una onda electrica que esto se representa como un audio, a esas membranas las llamamos audifonos, parlantes, bocinas.

Un tocadiscos transforma la música grabada en un disco de vinilo que tiene tallado en forma de relieve la información sonora en patrones ondulados. Un brazo movido por un servo sostiene una aguja recorre el relieve del disco y los convierte en una honda electrica, que esto mismo es lo que mueve la membrana de un parlante, a la vez un LED que se enciende cuando el dispositivo esta encendido. Asi nosotros combinamos una serie de componentes para crear un producto asi como un [tocadiscos.](https://es.wikipedia.org/wiki/Tocadiscos "Wikipedia - Tocadiscos")

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7c/Tocadiscos.JPG/500px-Tocadiscos.JPG">

*Imagen Tomada de: https://es.wikipedia.org/wiki/Tocadiscos*

Un [NTC/PTC thermistor](https://www.youtube.com/watch?v=CHBDg1pOFzs "Video Explicación de NTC y PTC") es una resistencia que puede cambiar de acuerdo a la temperatura y asi funcionan los [termostatos](https://es.wikipedia.org/wiki/Termostato "Wikipedia - Termostato") y los [termometros digitales.](https://es.wikipedia.org/wiki/Term%C3%B3metro "Wikipedia - Termometro") 

Para prender un dispositivo utilizamos un [switch o un interruptor](https://es.wikipedia.org/wiki/Interruptor "Wikipedia - Switch | Interrumptor") que une dos fragmentos de cable con un pequeño punto de metal por el que el flujo de corriente puede fluir o no. Por lo que si necesitamos determinar que componentes encender de acuerdo a ciertas condiciones, necesitamos manipular los pasos de la corriente de forma automatica y eso lo hacen los **[transistores](https://es.wikipedia.org/wiki/Transistor "Wikipedia - Transistor")** que de acuerdo a ciertas condiciones estos deciden cuando encender o apagar otros componentes.

La combinación de un monton de transistores es lo que le dan a los procesadores o microchips la capacidad de hacer operaciones matematicas.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/Transistorer_%28cropped%29.jpg/500px-Transistorer_%28cropped%29.jpg">

*Imagen Tomada de: https://es.wikipedia.org/wiki/Transistor*

Si queremos guardar el resultado de estas operaciones, utilizamos una memoria, es un componente que almacena electricidad de forma temporal mientras halla un flujo de electricidad continua y a esto se le llama [condensador](https://es.wikipedia.org/wiki/Condensador_el%C3%A9ctrico "Wikipedia - Condensador Elétrico").

Y un grupo grande de condensadores es la forma en la que funciona la memoria RAM de una computadora, cuando apagas al computadora esa memoria desaparece.

<img src="https://concepto.de/wp-content/uploads/2018/09/RAM1-e1537470543923-800x400.jpg">

*Imagen Tomada de: https://concepto.de/memoria-ram/*

Si queremos que la memoria persista cuando la electricidad se va, utilizamos otros componentes que usan reacciones fisicas y magneticas de ciertos materiales para guardar información sin electricidad llamados discos duros. Lo más reconocidos hoy que no tienen partes moviles se les conoce como discos de estado solido = Solid State Drive = SSD

<img src="https://www.aurum-informatica.es/images/easyblog_articles/93/b2ap3_large_disco-duro-daado.jpg">

*Imagen Tomada de: https://www.aurum-informatica.es/blog/disco-duro-danado-alertan-fallos*

Lo que conocemos como USB, por dentro es un disco de estado solido.

En las memorias cuando un condensador esta lleno se le conoce como 1 y cuando esta vacio representa un 0. Es decir que los condensadores convierten la energia eléctrica en bits, estos BITS es la base del cómo representamos información de forma digital.

Estos 1 y 0 cuando se organizan en conjuntos o estructuras que los procesadores entienden y los convierten en instrucciones. A esto le llamamos Software.

Estos BITS almacenados en memoria viaja hacia el procesador a traves del circuito para ser ejecutado. Y como todo, entonces esto es la manipulación de flujo de electrones.


<img src="https://centros.edu.xunta.gal/cafi/aulavirtual/pluginfile.php/38354/mod_page/content/1/Tema_2/Imagenes/placabase.jpg">

*Imagen tomada de:https://centros.edu.xunta.gal/cafi/aulavirtual/mod/page/view.php?q=aulavirtual2%2fmod%2fpage%2fview%2ephp&id=24983*











---











## Qué es un bit y qué es un byte

### Ondas

La luz es una onda que fluctúa de arriba hacia abajo como la ecuación del coseno o el seno en [trigonometría](https://es.wikipedia.org/wiki/Trigonometr%C3%ADa "Wikipedia - Trigonometría") dependiendo de la longitud de esa honda la podemos ver o no.

<img src="https://upload.wikimedia.org/wikipedia/commons/1/1b/%E0%B8%A5%E0%B8%B9%E0%B8%81%E0%B8%95%E0%B8%B8%E0%B9%89%E0%B8%A1%E0%B8%98%E0%B8%A3%E0%B8%A3%E0%B8%A1%E0%B8%8A%E0%B8%B2%E0%B8%95%E0%B8%B4.gif">

*Imagen Tomada de: https://es.wikipedia.org/wiki/Frecuencia*

El mapa de longitudes de onda se le llama [espectro electromagéntico](https://es.wikipedia.org/wiki/Espectro_electromagn%C3%A9tico "Wikipedia - Espectro Electromagnético"). Las ondas de radio que utilizan los telefonos, los audifonos [bluetooth](https://es.wikipedia.org/wiki/Bluetooth "Wikipedia - Bluetooth"), el wifi o la señal del televisor, tambien es luz sólo que es invisible a nuestros ojos.

* La luz visible la detiene los objetos físicos

* La luz la refleja un espejo

* La luz traspasa el vidrio porque es trasparente.

Para las [ondas de radio](https://es.wikipedia.org/wiki/Ondas_de_radio "Wikipedia - Ondas de Radio"), algunas tienen una amplitud muy grande, por lo que muchos objetos resultan prácticamente trasparentes, permitiendo que sean atravesados. De esta manera, una antena puede captar una señal de radio incluso si está detrás de una pared, ya que estas ondas las atraviesan y luego el circuito convierte esta señal en electricidad.

<img src="https://conectad.es/images/2019/04/antenas-lte-4g.jpg">

*Imagen Tomada de: https://conectad.es/antenas-lte-4g/*

La humanidad descubrió que con esas [vibraciones](https://es.wikipedia.org/wiki/Vibraci%C3%B3n "Wikipedia - Vibraciones"), si las hacemos conectar con una membrana y la hacemos vibrar, la vibración de la membrana es equivalente a sonido. *Así mismo funcionan las radios.*

Podemos observar cómo se comporta una onda cuando le colocamos agua sobre la superficie de un parlante: al reproducir sonido, las vibraciones del aire se transmiten al agua, formando patrones visibles de movimiento.

Video Recomendado: https://www.youtube.com/watch?v=uENITui5_jU

---

### Bits

En un [circuito eléctrico](#cómo-funciona-un-circuito-electrónico), los bits son 0 y 1 que se representan utilizando niveles de[ voltaje](https://es.wikipedia.org/wiki/Tensi%C3%B3n_(electricidad) "Wikipedia - Voltaje | Tensión"). Un nivel alto de voltaje (5 voltios) representa un 1 y un nivel bajo de voltaje (0 voltios) representa un 0.

Este tipo de comunicación **no surgió de la nada:** fue el resultado de décadas de experimentación y comprensión de cómo controlar el flujo de electricidad.

Esas transiciones a través de niveles de voltaje van a ocurrir en intervalos de tiempo muy precisos ([Segundos](https://es.wikipedia.org/wiki/Segundo "Wikipedia - Segundo"), [Milisegundos](https://es.wikipedia.org/wiki/Milisegundo "Wikipedia - Milisegundos") e incluso [Nanosegundos](https://es.wikipedia.org/wiki/Nanosegundo "Wikipedia - Nanosegundo")) **el qué tan chiquito es este intervalo de tiempo depende de la velocidad del sistema.** Esta misma velocidad es la velocidad de los [procesadores](https://es.wikipedia.org/wiki/Unidad_central_de_procesamiento "Wikipedia - CPU | Unidad Central de Procesamiento").

<img src="https://upload.wikimedia.org/wikipedia/commons/d/d3/AnalogClockAnimation2_3hands_1h_in_realtime.gif">

*Imagen tomada de: https://es.wikipedia.org/wiki/Segundo*

El [telégrafo](https://es.wikipedia.org/wiki/Tel%C3%A9grafo "Wikipedia - Telégrafo") fue el primer sistema de la humanidad que utilizaba pulsos eléctricos para enviar un mensaje que en vez de 0 y 1, utilizaban una señal corta y otra más prologada, como un tono corto ( **.** ) y un tono largo ( **-** ) .

Todo esto con un código en donde cada letra correpondia a cierto grupo de tonos. A esto se le conoce como [código morse.](https://es.wikipedia.org/wiki/C%C3%B3digo_morse "Wikipedia - Código Morse")

<img src="https://upload.wikimedia.org/wikipedia/commons/e/e9/International_Morse_code.png">

*Imagen Tomada de: https://es.wikipedia.org/wiki/C%C3%B3digo_morse*

En una computadora que utiliza [micro chips](https://es.wikipedia.org/wiki/Micro_Chips "Wikipedia - Micro Chips") para procesar voltajes precisos que se representan en 0 y 1 se decidió crear un sistema en donde una serie de numeros corresponde a una serie de letras y a esto se le llama [la tabla ASCCI.](https://es.wikipedia.org/wiki/ASCII "Wikipedia - ASCCI")

>Anteriormente para escribir @ se tenia que escribir con alt + 64 pues el signo " @ " corresponde al numero 64 de la tabla ASCCI

>Visto en la lectura: [Como Funciona Internet y las computadoras](https://github.com/santiagoencodigo/Desarrollo-Web-Profesional/blob/main/Docs/1.%20Introducci%C3%B3n%20a%20la%20Web%20Historia%20y%20Funcionamiento%20de%20Internet.md#traducci%C3%B3n-de-texto-a-binario-usando-c%C3%B3digo-ascii)

**¿Cómo tranformamos los pulsos eléctricos en esas letras?**

Los seres humanos contamos en base 10 por una razón muy simple: tenemos 10 dedos en las manos. Desde niños aprendemos a contar del 1 al 9, y cuando se nos acaban los dedos, empezamos otra vez, agregando un nuevo digito, Así nacen el 10, el 11, el 12... y cuando llegamos al 20, repetimos el proceso (30, 40, 50...). Este ciclo se repite infinitamente.

Sin darnos cuenta, construimos todo un sistema númerico a partir de nuestras propias manos.

**Esto es tan normal que no pensamos que pueden haber alternativas**

En programación nosotros utilizamos varias bases por ejemplo:

* [Hexadecimal](https://es.wikipedia.org/wiki/Sistema_hexadecimal "Wikipedia - Hexadecimal"): Que son una serie de numeros que van del 0 al 15 en donde: 1, 2, 3, 4, 5, 6, 7, 8, 9, A, B, C, D, F = 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13,14, 15.

* [Binario](https://es.wikipedia.org/wiki/Sistema_binario "Wikipedia - Sistema Binario | Sistema Díatico"): es solamente 0 y 1, en donde a partir del orden que tenemos de estos numeros podemos representar grandes cantidades de datos.

un [BYTE](https://es.wikipedia.org/wiki/Byte "Wikipedia - Byte") es un conjunto de 8 numeros en donde cada uno de los numeros podemos pensarlo como una potencia:

    128, 64, 32, 16, 8, 4, 2, 1 = 1, 1, 1, 1, 1, 1, 1, 1 = 255

Por lo que tenemos 255 combinaciones diferentes de numeros, equivalentes con las 255 combinaciones de carácteres diferentes que se encuentran en la talba ASCCI e incluso tambien se representan carácteres que no son letras como el:

    00001101 = ENTER = Salto de interlinea en un archivo

Así mismo como estos BYTES representan letras, tambien pueden representar cálculos que debe hacer el procesador y es un estandar distinto que se le conoce como [Assembler | Ensamblador](https://es.wikipedia.org/wiki/Lenguaje_ensamblador "Wikipedia - Assembler | Ensamblador")

**¿Por qué un conjunto de 8 numeros y no 7, 6, 9?**

Hay muchas razones históricas relacionadas y conectadas directamente con una de las empresas que creo la computacion moderna llamada [IBM](https://www.ibm.com/mx-es "ibm.com"), pero en resumidas palabras los procesadores tienen 8 cables por dentro que hacen los calculos al mismo tiempo.

* Es la forma más barata y eficiente de prepararlos y esto es lo que hizo a que nos acostumbraramos a que fueran 8.

>Dato curioso: Los procesadores de la [unión soviética](https://es.wikipedia.org/wiki/Uni%C3%B3n_Sovi%C3%A9tica "Wikipedia - Unión Soviética") en los años 70 eran de 12 bits, 18 bits, 24 bits, o aveces 48 bits, [pero sus computadoras no eran compatibles con las de occidente.](https://es.wikipedia.org/wiki/Historia_de_la_inform%C3%A1tica_en_la_Uni%C3%B3n_Sovi%C3%A9tica "Wikipedia - Historia de la informática en la Unión Soviética")

---

Los bits estan en todas partes y posiblemente esten más presentes en nuestra vida de lo que usualmente creemos por ejemplo:

Una [dirección IP](https://es.wikipedia.org/wiki/Direcci%C3%B3n_IP "Wikipedia - Dirección IP") como 192.168.1.1 que es una combinación de 4 bytes para identifar una computadora dentro de una red y como cada uno de estos numeros esta dentro de un byte, no supera el numero del 255.

<img src="https://www.avg.com/hs-fs/hubfs/Blog_Content/Avg/Signal/AVG%20Signal%20Images/Public%20vs.%20local%20IP%20addresses%20(Signal)/Public-vs-local-IP-addresses.png?width=1320&name=Public-vs-local-IP-addresses.png">

Imagen Tomada de: https://www.avg.com/es/signal/public-vs-private-ip-address*

---

Una imagen es un grupo organizado de bytes en una cuadricula en donde cada punto de la cuadricula es un pixel en la pantalla. Por lo que los bytes determinan el color que tendra cada pixel y se define como la intensidad de brillo del color: Rojo, Verde y Azul que tiene cada pixel y asi se representa el color.

<img src = "https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pixeles_de_telefono.jpg/250px-Pixeles_de_telefono.jpg">

*Imagen Tomada de: https://es.wikipedia.org/wiki/P%C3%ADxel*

---

Los [emogis](https://es.piliapp.com/emoji/list/ "piliapp.com/emoji") tambien son bytes y requieren 4 de estos en la tabla ASCCI y se conoce como un estandar llamado UTF

👾👾👾🛡🛡💻⌨🖱😁👨‍💻🤍🖤👨‍🎓📃🤖👽🧠

UTF = Unicode Transformation Format

En donde:

* UTF - 8 que requiere de 8 bits
* UTF - 16 que requiere de 16 bits
* UTF - 32 que requiere de 32 bits

Hay un [consorsio](https://es.wikipedia.org/wiki/Consorcio "Wikipedia - Definición Consorcio") que se encarga del estandar de lo que representa el conjunto de bits que se llama [UNICODE STANDART CONSORSIUM](https://www.unicode.org/consortium/consort.html "unicode.org/consortium"), todos los fabricantes de electrónica deben respetarlo para que nuestros sistemas puedan interoperar.

por eso mismo un 😂 (smile) es el mismo en un pc, en un celular, en un iphone **y no puede ser otra cosa.**

Cuando programas en un lenguaje de programación todas estas instrucciones se traducen a bytes de assembler, que el procesador entiende para ejecutar las operaciones y eso es lo que hacen los compiladores.











---











## Qué es un procesador (CPU) y la memoria (RAM)

**Si un dispositivo tiene software se puede programar**, y si se puede programar tiene una CPU. Hay CPUs en todas partes: En computadores, televisores, telefonos, cajeros, pantallas de automoviles.

> En todo lo que tenga una pantalla con software programable, hay una CPU. Estos protagonistas tecnológicos permiten ejecutar operaciones matemáticas, almacenar y gestionar información gracias a transistores y circuitos electrónicos.

<img src="https://static.platzi.com/media/user_upload/image-6402ac31-034f-4d21-9019-11e9784fbc9b.jpg">

CPU = Unidad Central De Procesamiento

Las computadoras procesan datos mediante la CPU (Unidad Central de Procesamiento), y almacenan la información temporalmente en una memoria RAM, un ejemplo claro de esto ocurre cuando asignamos variables y realizamos una operación matemática:

    A = 1
    B = 2
    C = A + B

Cuando razonamos cuanto vale la variable C, nuestro cerebro realiza un proceso mental para sumar los valores de A y B, de forma similar se puede pensar como la CPU en un computador, y el lugar en donde se guarda esa información la podemos pensar como una RAM.

> De forma analogica: Cuando vas a hacer la operación en un papel, el proceso pasa por tu cabeza, y tu al escribirlo en el papel es hay donde se guarda la información y esto es equivalente a la RAM


---


Las empresas más famosas que fabrican CPU: 



* [INTEL](https://www.intel.la/content/www/xl/es/homepage.html) Con procesadores como: INTEL con los procesadores [Xeon](https://www.intel.la/content/www/xl/es/products/details/processors/xeon.html), [Intel Core i7](https://www.intel.la/content/www/xl/es/products/sku/230490/intel-core-i713700-processor-30m-cache-up-to-5-20-ghz/specifications.html)

* [AMD](https://www.amd.com/es.html "Home Page AMD"): Con procesadores [Ryzen](https://www.amd.com/es/products/processors/desktops/ryzen.html "Ryzen Processors by AMD")



---



**Tambien hay marcas de CPU moviles**

> Muy recomendable abrir cada uno de los vinculos a continuación, hay todo un mundo por explorar pues existe demasiada historia por leer.

* [Apple](https://www.apple.com/co/ "Apple.com") fabrica CPUs que tienen nombres como [M1](https://www.apple.com/co/newsroom/2020/11/apple-unleashes-m1/ "Newsroom M1 by Apple") o la A1 y la [M2](https://www.apple.com/co/newsroom/2022/06/apple-unveils-m2-with-breakthrough-performance-and-capabilities/ "Newsroom M2 by Apple"), [M3](https://www.apple.com/co/newsroom/2023/10/apple-unveils-m3-m3-pro-and-m3-max-the-most-advanced-chips-for-a-personal-computer/ "Newsroom M3 by Apple"), M4.

> Me pareció interesante que al buscar me encontre con un nuevo concepto: **Microarquitectura**

<img src = "https://www.apple.com/newsroom/images/live-action/wwdc-2022/Apple-WWDC22-M2-chip-M1-chip-2up-220606_big.jpg.large_2x.jpg">

*Imagen Tomada De: https://www.apple.com/co/newsroom/2022/06/apple-unveils-m2-with-breakthrough-performance-and-capabilities/*

> Se me genera una serie de dudas: ¿Cual será el grupo de trabajo que se encarga de descubrir nuevas versiones?, ¿Será un grupo de cientificos de la computación?, ¿Cómo es su proceso para crear nueva tecnología?, ¿Cómo programaron/crearon esas maquinas litograficas?, ¿Quienes seran los personajes influyentes en este topico?

* [Huawei](https://consumer.huawei.com/co/ "Huawei.com") tiene su propia marca de [procesadores](https://www.xatakamovil.com/tag/procesadores-huawei)

* Existe una marca llamada [Snapdragon](https://www.xataka.com/componentes/qualcomm-snapdragon-8-elite-caracteristicas-precio-ficha-tecnica "Ficha Técnica Snapdragon Elite 7 by Xataka")

> Existen muchas marcas de CPUs



---



Por dentro, una CPU es una serie de transistores, de circuitos electrónicos que ejecutan operaciones matemáticas como sumar, restar, multiplicar y tambien mueven datos de la memoria, en donde los guarda, modifica o borra información.

**Cada operación pasa por un ciclo** que es el paso de la eléctricidad por el circuito de la CPU y a esos ciclos del procesador los llamamos **[HERTZ](https://es.wikipedia.org/wiki/Hercio "Hercios Concepto by Wikipedia")** y es de esta forma que nosotros medimos la velocidad de una procesador que son los ciclos por segundo que una CPU puede usar para ejecutar esas operaciones.

Si una CPU tiene 1 Mhz quiere decir que puede usar 1.000.000 ciclos por segundo para ejecutar operaciones

* M de mega = Millon

Si una CPU tiene 1Ghz quiere decir que puede usar 1.000.000.000 ciclos por segundo para ejecutar operaciones

* G de Giga = Mil Millones

Por lo que a más Hertz más corriente electrica fluye por el procesador y a más corriente más calor. Y sí hay más calor se puede quemar el chip.

<img src="https://upload.wikimedia.org/wikipedia/commons/5/59/FrequencyAnimation.gif">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Hercio*

Cuando tienes un chip y lo pones en la tarjeta madre de tu computadora casi siempre por encima se le agrega un ventilador porque los limites térmicos del chip son los que determinan los limites de velocidad del procesador.

A más caliente menos velocidad.

A más frio más corriente y por ende más velocidad.



---



**Al diseñar un chip se tienen en cuenta muchas cosas como:**

* La estructura de los transistores

* Las instrucciones.

* La disipación térmica del calor para poder hacerlos más veloces.

Las CPU y en general todos los chips estan hechos del mismo átomo, el silicio.

El silicio es un átomo que tiene 14 protones en el nucleo y por ende el átomo #14 en la tabla periodica y este se encuentra en toda parte porque de hecho, de silicio esta hecha la arena.

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTSdTL-FF0b1CUCkihXYlSwr_rKvt37YFzgxw&s">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Silicio*

Si nosotros tomamos la arena del arena u otro tipo de arena especializada y la limpiamos, para fundirla en un sólo cristal. A Ese cristal nosotros lo conocemos como **Wafer de Silicio** que es arena cristalizada con la que construimos chips.

Para que la arena se convierta en chips, utilizamos la *herramienta más avanzada de la existencia humana*: **Lasers Litográficos**

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQq4OZVW4_5G0QGpDxPold1GRZC3EPSTpzgjw&s">

*Imagen Tomada De: https://heidelberg-instruments.com/es/tecnologias-basicas/litografia-laser-sin-mascara/*

> [Laser Litográfico extremo ultravioleta](https://www.youtube.com/watch?v=St6i1zcvPZ8 "") - Parece de ciencia ficción

El cristal de silicio en forma de circulo conocido como oblea/wafer de silicio entra a una maquina llamada Laser Litrográfico extremo de ultravioleta, que esta maquina por dentro tiene un vacio, vacio como el del espacio.

Una vez dentro, un laser le dispara a una pequeña microscopica gota de [estaño](https://es.wikipedia.org/wiki/Esta%C3%B1o "Estaño By Wikipedia"), generando asi una serie de reflejos de luz laser.

Que luego un sistema de espejos con un liso absoluto en una estructura increiblemente fina rebotan hasta llegar a un laser hiperenfocado (Esta es la parte Extremo Ultravioleta) que atraviesa una mascara fotográfica, (Como el negativo de una fotografia vieja, en la parte de atras tiene un mapa o que tiene como plantilla o mascara) que es la estructura de como deben estar organizados los atomos de silicio para convertirse en transistores de electricidad que componen un circuito.

<img src="https://www.mrjlaser.com/Content/uploads/2023138497/20230531110728ebc38f0dd401422ab28c5e46b2e07c22.png?size=678x0">

*Imagen Tomada De: https://www.mrjlaser.com/news/asml-s-euv-lithography-the-world-s-only-laser-68059321.html*

La mascara refleja sobre la oblea y durante varias pasadas, el laser empieza a dejar una marca de la mascara de la estructura de transistores, luego se le pasa por unos quimicos que limpian todos los residuos del proceso como si estuvieran relevando una fotografia y eso va construyendo las estructuras átomicas como si fueran un edificio que terminan componiendo miles de millones de transistores que hacen posible una CPU.

Por lo que en una CPU moderna la distancia de transistor entre transistor es de 25 atomos de silicio, por lo que **la humanidad es capaz de mover distancias atomicas**

Y no es un circuito plano, es un circuito tridimencional como si fuera un rasca cielos gigantesco de transistores, en donde de esa forma se peuden empacar más transistores en una CPU. Por eso, pese a que sea pequeño puede ser incluso algo pesado para su tamaño.

<img src="https://i.blogs.es/9a98dc/transistor/650_1200.jpeg">

*Imagen Tomada De: https://www.xataka.com/componentes/transistores-pequenos-jamas-creados-estas-soluciones-para-miniaturizar-electronica-alla-2-nanometros*

Esos millones de transistores dentro de un chip es lo que hace posible que correr navegadores como en el que estas viendo mis apuntes en este momento, video juegos, videos o inteligencia artificial.




---



Muchas empresas construyen estas maquinas, pero sólo una construye la más avanzada: El laser extremo ultravioleta y toda su integración que la hace una compañia de holanda llamada ASML.

Pagina de ASML: https://www.asml.com/en

Lectura Recomendable: https://es.wikipedia.org/wiki/ASML

---

Sabiendo esto, **¿Qué es lo qué hace que una CPU sea más veloz?**

Una forma es agregarle muchos más transistores por lo que si quiero meterle más transistores, debo hacerlos más chiquitos, eso quiere decir que necesito laseres mucho más enfocados, con más contraste y eso es lo que hace [ASML](https://www.asml.com/en "asml.com"), por eso es tan importante la distancia que hay entre átomo y átomo.

Otra forma es hacerle pasar más corriente al circuito, más electricidad, el problema es que a más corriente, más calor, entonces hay que hacer un diseño que tenga una disipación termica más efectiva o colocarle mejor enfriamiento.

Otra técnica es que con la misma arquitectura colocar más nucleos, más procesadores pegados uno al otro, en donde en vez de hacer un proceso al tiempo, pueda hacer 2, 4, 8 procesos al tiempo y eso es lo que nosotros conocemos como nucleos.

En un WAFER/OBLEA no todos los chips quedan bien, pues muchas veces estos procesadores son hechos con una distancia atomica y puede que no queden perfectamente alineados. Despues del proceso de litografia, se realizan unos TEST y algunos nucleos no funcionan perfectamente bien, lo que hacen es vender el chip más barato... Por lo que:

* El intel core i3, intel core i7, y el intel core i5 son el mismo chip... lo que sucede es que en los i3, algunos nucleos fallaron. Y en los i7 ningún nucleo falló... y es de esa forma como venden las CPUs dependiendo de qué tanto falla o triunfa el proceso litografico del laser.

<img src="https://acf.geeknetic.es/imgw/imagenes/auto/2021/1/1/sgs-intel-core-i7-11700k-geekbench.jpg?f=webp">

*Imagen Tomada De: https://www.geeknetic.es/Noticia/20833/El-Intel-Core-i7-11700K-supera-en-IPC-a-cualquier-AMD-hasta-la-fecha-segun-una-filtracion-en-Geekbench.html*

Los transistores de los procesadores ejecutan operaciones matemáticas, pero esos datos necesitan guardarlos en algún lugar como una memoria. Cuando diseñas un procesador tienes que balancear **¿Le pongo memoria o le pongo más procesamiento?** 

Necesitamos un minimo de memoria asi que la memoria chiquita que un procesador tiene por dentro se le conoce como registros o cache y son pequeños pedacitos de memoria que estan ahí, pero no es suficiente para cargar un sistema operativo pues para eso necesitas una memoria grande.

---

En la imagen a continuación se presenta la Memoria de Acceso Aleatorio o Random Access Memory = **RAM**

Estas se borran en el momento que el computador se reinicia y solamente funcionan cuando el computador tiene electricidad, la ventaja es que pueden ser muy veloces por lo que cuando la CPU necesita guardar datos, las guarda aqui.

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSCpiDvNZ_UMVXwmgA-CducSTuo1ema2bGNAQ&s">

*Imagen Tomada De: https://compubit.com.co/que-son-las-memorias-ram/*

Las memorias tienen una jerarquia a partir de cuan veloces son. Para que la cpu pueda acceder a un dato que se encuentra en el cache o en los registros que es la memoria que va dentro del chip del CPU, tomar ese dato toma de 1 a 20 nanosegundos a la CPU para acceder. Para dimensionar la cantidad de tiempo, **en un segundo hay mil millones de nano segundos.** 

> Por ende 20 nano segundos equivalen a 2 millonesimas de segundo, menos de un instante.

Para que la CPU tome un dato de la memoria RAM, le toma 70 nanosegundos por lo que puede ser de 2 a 3 veces más lenta que la memoria que se encuentra en la CPU. Toma mucho tiempo tomar de un disco duro un dato, pues si quieres tomar un archivo de un disco duro, lo que hace la CPU para interpretarlo es pasarlo del disco duro a la RAM.

<img src = "https://static.wikia.nocookie.net/wikihdd/images/d/dc/Jerarquia_almacenamiento.png/revision/latest?cb=20160317074959">

*Imagen Tomada De: https://wikihdd.fandom.com/wiki/Jerarquia_de_memorias*

---

La organización entre todos los componentes entre las instrucciones preprogramadas que tiene, su capacidad de realizar operaciones matemáticas, la memoria interna, los nucleos y la estructura de los transistores se le llama arquitectura.

Hay tres grandes arquitecturas que son la forma en la que diseñamos los procesadores:

* [X86](https://www.xataka.com/componentes/arquitectura-x86-una-historia-imprescindible-de-la-informatica "X86 Concept By Xataka")

* [RISC](https://es.wikipedia.org/wiki/Reduced_instruction_set_computing "Rics Concept By Wikipedia")

* [ARM](https://cloud.google.com/discover/what-are-arm-based-processors?hl=es-419 "ARM Concept By Google")

Los diseñadores de procesadores se dieron cuenta que los programadores repiten mucho los mismos procesos:

Abrir archivos, borrar archivos, hacer ciertas operaciones matemáticas. Se les ocurrió que en vez de hacer transistores de proposito general, seria más veloz si ciertas acciones repetitivas se realizaran en transistores especificamente diseñados para esas acciones que en vez de expresarlas en código y procesarlas en cada uno de los transistores genericos. A esto se le conoce como instrucciones, que estas mismas determinan una arquitectura.

Por ejemplo:

Los procesadores **X86** casi siempre estan corriendo windows que esta almacenado en transistores programados (se les define como quemados) en la estructura de transistores de un chip, a medida que los chips fue avanzando en complejidad de instrucciones, empezamos a notar que para ciertos casos de uso como por ejemplo correr muchos chips en servidores que realizan muchas operaciones distintas, era mejor tener chips más simples.

Esto dio nacimiento a cierto tipo de arquitectura que trinfuo mucho a medida de los 90 y 2000 conocida como **RISC = Reduce Instructions Set Computer** que es básicamente un chip con instrucciones más genericas mucho más versatil.

Con la explosión de la telefonia movil que es en esencia un computador en nuestros bolsillos nos dimos cuenta de que necesitabamos un chip que gastara mucho menos electricidad con una más alta capacidad de procesamiento y que se calentara mucho menos porque de esa manera la bateria dura mucho más, la arquitectura más conocida para esta se le conoce como **ARM**

El tipo de procesador que se produce más es el X86 que se van produciendo lentamente cada vez menos porque cada vez más las personas tienen computadoras portatiles en vez de tener computadoras de escritorio pues ARM es el caso ideal para estas computadoras, aun asi X86 sigue siendo muy popular en donde [INTEL](https://www.intel.la/content/www/xl/es/homepage.html) y [AMD](https://www.amd.com/es/support/download/drivers.html) son los principales productores de este tipo de arquitectura.

* Los dispositivos ANDROID y IPHONE son los que más consumen chips ARM

Un detalle muy interesante de los CHIPS es la **[Ejecución Especulativa](https://es.wikipedia.org/wiki/Ejecuci%C3%B3n_especulativa)** o tambien conocida como Ejecución Predictiva que consisten en que para ahorrar bateria y hacer más efectivos los procesadores, los procesadores tratan de predecir el código que van a correr, como por ejemplo: Si todos los días buscas una canción en spotify y la reproduces y pones a descodificar una canción, el procesador puede predecir eso y prepararse.

[Esta ejecución predictiva ha tenido muchas vulnerabilidades](https://support.apple.com/es-co/101886 "Acerca de las vulnerabilidades de la ejecución especulativa en las CPU con Intel y basadas en ARM By Apple") de seguridad informática y este ha sido la frontera para el diseño de un chip, es muy controversial.

Parte de la arquitectura de un procesador es el lenguaje de ensamble que es una serie de instrucciones que le explican al ser humano en un lenguaje muy cercano al humano; en letras y numeros... Cómo pedirle a la CPU hacer operaciones matemáticas. Es el lenguaje original con el que se hace el software, y cuando uno escribe código en lenguajes de programación normales y se hace un proceso de compilación, la compilación es convertir ese código en el lenguaje de ensamblado de la arquitectura de la CPU.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Motorola_6800_Assembly_Language.png/500px-Motorola_6800_Assembly_Language.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Lenguaje_ensamblador* 

En el pasado antes de los lenguajes de programación y la memoria, la forma de programar las CPU antes de las memorias era por medio de unas tarjetas a las que se les hacia unos huecos en donde al hueco representaba una instrucción en el lenguaje de ensamble o datos binarios como por ejemplo información númerica.

<img src="https://i.blogs.es/e625db/punch1/450_1000.jpg">

*Imagen Tomada De: https://www.xataka.com/historia-tecnologica/ser-programador-60-era-pequena-pesadilla-costaba-dinero-no-picabas-codigo-sino-que-usabas-tarjetas-perforadas*

A continuación un ejemplo:

    A = 1 
    B = 2
    C = A + B

    A, B, C son variables.
    1, 2 son valores
    A + B es un proceso

La CPU calcula el numero 1 como un BYTE y asigna a la memoria RAM un espacio a las que se accede por medio de **Direcciones de memoria**, por lo que al asignar 2 valores, se dejan esas dos variables en dos espacios de almacenamiento en la RAM por lo que estoy asignado que a ese espacio de almacenamiento que se va a llamar A o que se va a llamar B y que por dentro hay un 1 y un 2. 

Cuando declaro C, antes de hacer la operación matemática... reservo una dirección en la memoria a las que se les conoce como puntero o apuntadores. Por lo que se le solicita a la RAM cual es el valor de A y B en la posición de los apuntadores y en la CPU se suman los dos numeros para dar como resultado 3, que una vez generado se envia a la dirección de memoria que corresponde a la variable C. 

> Esto mismo ocurre cuando compilo cualquier lenguaje de programación a assembly language. ¿Cuanta información tiene que transcribirse?

**En la CPU se realizan las operaciones, en la RAM se guarda la información**

Casi todos los chips funcionan asi, aunque hay algunos chips que son especializados, asi como las CPU son unidades de procesamiento general. Tambien tenemos unos chips especializados llamados System on a chip que incluyen muchas otras funciones como las que tienen los telefonos, hay chips gráficos que se les conoce como GPU, hay CHIPS de inteligencia artificial que se les conoce como TPU.

> Quedo fascinado y me abruma un poco la cantidad de información a la cual hay que estudiar. Son tantos temas e historia por entender.

En un pequeño parrafo: La CPU, internamente, está compuesta por transistores, circuitos que realizan operaciones básicas como sumas, restas y multiplicaciones. Estos transistores también se encargan de mover, almacenar y modificar información.

Video Recomendados:

* https://www.youtube.com/watch?v=u71Du3nabXI

* https://www.youtube.com/watch?v=dX9CGRZwD-w

* https://www.youtube.com/watch?v=9RZreu5z_Gc











---











## Qué es un Sistema Operativo

Un sistema operativo (SO) actúa como ese intermediario clave en tu computadora o dispositivo móvil, traduciendo las instrucciones de las aplicaciones (software) al lenguaje que el hardware entiende.

Exiten muchos dispositivos que solo tienen una función, como por ejemplo unos audifonos... Que igualmente es un dispositivo complejo, se conecta vía [bluetooth](https://es.wikipedia.org/wiki/Bluetooth "Bluetooth Concept By Wikipedia") a un telefono, un televisor, a una computadora... Pero solo cumplen con una función y es ser audifonos, no necesitan software para programarse entonces sus funciones estan quemadas en el chip.

Por otro lado:

Un televisor, una computadora, un telefono e incluso un reloj inteligente van a tener diferentes funciones debido a las aplicaciones que corren... Eso quiere decir que hay Software que le habla al Hardware, cuando eso ocurren en el medio debe haber un traductor que gestione esas diferencias y le permite al desarrollador de software hablar con el hardware sin tener que crear funciones especificas para tener que hablar con cada entidad de hardware...

Es como pensar que un teclado es un hardware, pero hay una cantidad de teclados diferentes... Como el sensor de un reloj, siempre habrá un sensor diferente por cada reloj por lo que **necesitamos una forma estandar de comunicar el software con el hardware**.

Un sistema operativo es el intermediario fundamental entre el hardware y el software que **crea estándares** para que los programadores no tengan que preocuparse por las especificaciones técnicas de cada dispositivo físico. Su función principal es permitir que las aplicaciones se comuniquen con los componentes físicos de manera uniforme, independientemente de la variedad de hardware existente.

<img src ="https://preview.redd.it/esses-s%C3%A3o-todos-os-mouses-que-usei-nesses-3-anos-ama-v0-kmaudh9srhje1.png?width=640&crop=smart&auto=webp&s=ad242e6ccd137bfc762116eb49b4c643ebe530f3">

*Imagen Tomada De: https://www.reddit.com/r/hardwarebrasil/comments/1iqqum4/esses_s%C3%A3o_todos_os_mouses_que_usei_nesses_3_anos/?tl=es-419*

Cuando desarrollamos una aplicación que necesita acceder a la cámara, el teclado o cualquier otro dispositivo, no necesitamos programar específicamente para cada modelo de hardware gracias al sistema operativo.

Por lo que necesitamos que lo que el hardware detecta del mundo real, se envie en una versión de bits y bytes (Electronica Digital) al software. 

La comunicación entre software y hardware se realiza a través de dos componentes esenciales:

Esas aplicaciones que permiten comunicar el software con el hardware se llaman **[Drivers](https://es.wikipedia.org/wiki/Controlador_de_dispositivo "Drivers Concept by Wikipedia")** y la traen por defecto los sistemas operativos. Los sistemas operativos hablan con el software a traves de una conexión estandar preacordada de diferentes mecanismos de comunicación que se llaman **[APIs = Application Program Interface](https://aws.amazon.com/es/what-is/api/ "API Concept by AWS")**

> Drivers: son aplicaciones que vienen por defecto en los sistemas operativos y permiten la comunicación con hardware específico.

> APIs (Application Program Interface): son mecanismos estandarizados que permiten al software comunicarse con el sistema operativo.

> Entonces como buen software engineer, debo entender bien este tema: Drivers, APIs. Aunque al parecer es sencillo de manejar pues los actuales lenguajes de programación abstraen estos conceptos y hace que esto sea facil de procesar.

Como ejemplo práctico: Cuando se reproduce una canción en spotify al descodificar la canción, hay una API que envia cómo debe sonar o vibrar la membrana del parlante del dispositivo.

<img src="https://appmaster.io/api/_files/PqV7MuNwv89GrZvBd4LNNK/download/">

*Imagen Tomada De: https://appmaster.io/es/blog/apis-para-principiantes-como-utilizar-una-api-una-guia-completa*

Por otro lado el Sistema Operativo tambien gestiona como se usan los recursos del computador, pues generalmente se tienen varias aplicaciones abiertas y hay bastantes procesos que ocurren al tiempo como de mensajeria, musica o algo más que tengas conectado. Por lo que estos sistemas definen a quien debe enviar qué recursos por lo que el sistema operativo determina a quien le permite más recursos como por ejemplo:

    Abrir al tiempo un navegador, excel y word: El sistema operativo distribuye de manera equitativa los recursos para abrir estos 3 programas al tiempo.

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSZCiixdtv5Px0jx9oPpA5yxcHcVnhwgopl1A&s">

*Imagen Tomada de: https://www.xataka.com/basics/administrador-tareas-task-manager-windows-que-como-sacarle-maximo-partido*

---

Los sistemas operativos tienen la crucial tarea de administrar eficientemente los recursos disponibles entre múltiples aplicaciones que se ejecutan simultáneamente. Esta gestión incluye:

* Asignación de CPU

* Gestión de memoria RAM

* Manejo de interrupciones

* Recolección de basura

Las CPU ejecutan una sola cosa al tiempo por lo que el sistema operativo determina el corto lapso de tiempo que le dedica un poco a todo el proceso completo de algún trabajo. *"Un poco a este, un poco a este, otro poco a este..."* a una velocidad muy rápida que incluso se siente que se estuviera trabajando en esos procesos al mismo tiempo.

> En el caso de la multitarea, el sistema operativo distribuye los recursos entre diferentes aplicaciones, dando un poco de prioridad a cada una según sea necesario, creando la ilusión de que todas funcionan simultáneamente.

Cuando abres muchas pestañas en el navegador o cuando abres muchos archivos al tiempo, la computadora se pone lenta porque el sistema operativo empieza a ejecutar cada uno de estos archivos en la memoria RAM y aveces esta memoria se llena... Que sabemos que es muy rápida, pero si se llena igualmente tenemos que ejecutar lo que se esta buscando ejecutar por lo que el sistema operativo no se rinde por lo que abre un pedazo del disco duro que es más lento, para usarlo como memoria ram, a este concepto se le conoce como: **Memoria Virtual en Disco = SWAP**

<img src="https://empiezoinformatica.wordpress.com/wp-content/uploads/2015/05/swap.png?w=523">

*Imagen Tomada de: https://empiezoinformatica.wordpress.com/2015/05/08/swap-in-swap-outintercambio/*

Incluso haciendo esto puede que el sistema operativo se llene de procesos porque un proceso esta ocupando todo el espacio, en ese momento es cuando se traba la computadora y se cuelga, en ese caso el sistema operativo puede enviar una señal de cancelación total para "matar" el proceso porque esta "Matando" todo.

    Esto es en parte, las funciones de un sistema operativo.

Estos mecanismos de control se llaman Interrupciones y a veces son muy simples como por ejemplo: El funcionamiento del mouse nunca para. **Porque existe una jerarquia de procesos** y lo que tiene que ver con teclado y mouse, estan en el punto más alto de esta jerarquia porque eso te da la sensación de que la computadora va muy rápido. Porque aunque se rompa una aplicación, no se rompe el sistema operativo.

<img src="https://sistemasoperativos1web.wordpress.com/wp-content/uploads/2016/04/300px-figura11.jpg">

*Imagen Tomada de: https://sistemasoperativos1web.wordpress.com/2016/04/21/cuales-son-los-niveles-de-un-sistema-operativo/*

---

Tambien pasa que hay aplicaciones que dejan elementos en memoria, por lo que el sistema operativo tambien tiene como función verificar qué espacio de memoria lleva tiempo sin ser accedido por una aplicación y simplemente la elimina o en ocaciones la mueve al disco duro. Por esto a veces cuando buscas abrir una app que hace bastante tiempo no usabas, puede que tome un poco más de tiempo en arrancar que lo normal porque debe volver a traer información a la memoria RAM.

Esto es una serie de elementos que actualmente los programadores ya no tenemos que pensar porque el sistema operativo se encarga de esto de forma totalmente autonoma e independiente.

[Garbage Collection (Recolección de Basura)](https://en.wikipedia.org/wiki/Garbage_collection_(computer_science) "GC concept by Wikipedia"): Nivel más alto de privilegio: Donde se ejecuta el nucleo del sistema (KERNEL) con acceso total al hardware y recursos.

Tambien hay procesos que toman total control de todos los recursos de la computadora como por ejemplo los Videojuegos en donde tu quieres tener acción a tiempo real y que tengan maximo nivel de prioridad incluso teniendo multiples aplicaciones abiertas. Porque el sistema operativo gestiona mecanismos de multitarea en donde le da una prioridad estilo "Un poco a este, otro poquito a este y otro poco a este."

<img src="https://i.ytimg.com/vi/bNK0ahcdvqU/maxresdefault.jpg">

*Imagen Tomada De: https://www.youtube.com/watch?v=bNK0ahcdvqU*

---

Además de gestionar la estructura de almacenamiento, el sistema operativo implementa capas de seguridad que incluyen:

* Permisos de usuario

* Cifrado de archivos

* Gestión de llaves de seguridad

En la forma que se guarda la información en los discos duros, en la memoria permanente tambien depende del sistema operativo: Los diferentes sistemas operativos utilizan diferentes formatos y estructuras de almacenamiento:

* [Apple utiliza APFS](https://es.wikipedia.org/wiki/Apple_File_System "APFS concept by Wikipedia"): Optimizado para SSD, Cifrado Nativo, Spanshots.

* [Windows utiliza NTFS](https://es.wikipedia.org/wiki/NTFS "NTFS concept by Wikipedia"): Optimizado para Journaling, Compresión, Cifrado BitLocker.

* [Linux utiliza ext 3/4](https://es.wikipedia.org/wiki/Ext4 "ext 3/4 concept by Wikipedia"): Alta Escalabilidad, Journaling, extents.

La estructura de almacenamiento la decide el sistema operativo y tambien les agrega una capa de permisos porque el sistema operativo es donde tu guardas tus llaves de acceso; Tu nombre de usuario, tu contraseña, la forma en la que esa contraseña abre y cierra, la cabecera de tu sistema de archivos que tienes en tu pedacito de disco duro.

De esa forma se protegen tus archivos para que otros usuarios del mismo computador no puedan acceder y tu tampoco puedes acceder a los archivos de otros usuarios en tu computadora.

---

Algunos sistemas operativos son capaces de abrir archivos de otros sistemas operativos diferentes, para lograrlo deben tener preinstalado las reglas de estructura de archivos y del disco duro de ese otro sistema operativo, que eso asi como lo hemos hablado antes es un **Driver**, un software que tiene las reglas de interacción con otro tipo de hardware o otro tipo de archivo.

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSIcvfld3V6eQdvMutM9Ol5W1UcEusdR-yCJg&s">

*Imagen Tomada De: https://www.instagram.com/p/DP31RJKiJDn/*

La seguridad de archivos no solo depende de si el sistema permita o no darte acceso a un archivo aparte de tu nombre de usuario y contraseña, en ocaciones los sistemas de archivos tambien cifran el contenido de los archivos usando el nombre de usuario y contraseña en el sistema operativo, estos algoritmos de cifrado lo que hacen es que si no existe una presencia de una llave, de un password, entonces no se puede acceder a la estructura del sistema de archivos.

Por lo que si saco y me llevo tu disco duro y lo inserto en otro computador, no lo puedo abrir, porque esta cifrado, tiene encriptación en donde los sistemas operativos gestionan esta encriptación

Sistemas de Cifrados:

* [Filevault](https://support.apple.com/es-co/guide/mac-help/mh11785/mac "Filevault by Apple")

* [Bitlocker](https://support.microsoft.com/es-es/windows/buscar-la-clave-de-recuperaci%C3%B3n-de-bitlocker-6b71ad27-0b89-ea08-f143-056f5ab347d6 "Bitlocker by Microsoft")

* [LUKS](https://docs.redhat.com/es/documentation/red_hat_enterprise_linux/8/html/security_hardening/encrypting-block-devices-using-luks_security-hardening "Cifrado Lucks by Redhat")


Hay otras llaves de seguridad que los sistemas operativos gestionan, cuando tu abres tu banco porque tu quieres acceder al sitio web del banco o a la aplicación del banco en un telefono. Ese banco envia al sistema operativo una llave pública para que cifre los datos y tu le envias tu llave publica para que el banco cifre los datos.

Esas llaves se tienen que guardar en algún lado y un gestor típico de las llaves públicas y de tus propias llaves para el cifrado es el **sistema operativo**.

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTCg9QXOLpWQeJ_J461FoR27BX9pqfAPdbiQg&s">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Cifrado_%28criptograf%C3%ADa%29*

---

Los sistemas operativos modernos utilizan una **[arquitectura de anillos](https://es.wikipedia.org/wiki/Anillo_(seguridad_inform%C3%A1tica))** de seguridad para restringir el acceso:

* La memoria y el acceso al chip, al hardware, a los transistores de la CPU se restringe en el primer anillo de seguridad que es el **anillo 0 = ring 0** que es el nivel de privilegio más alto en la arquitectura de protección de un sistema operativo, donde se ejecuta el núcleo del sistema (kernel) con acceso directo al hardware y control total sobre todos los recursos del sistema

* Hay un segundo anillo en el cual históricamente se le conoce por correr las aplicaciones de los usuarios llamado **ring 1**.


**En el mundo moderno hay actualmente una arquitectura de 4 anillos en donde:**

1. El primer anillo es el kernel, el nucleo del sistema operativo que es el único que le puede hablar al hardware

2. luego tenemos el anillo 1 y 2 que es donde carga el software que traduce entre el hardware y las aplicaciones, esos son los anillos de dispositivos

3. Luego tenemos el anillo 3 que es donde carga el software normal; Excel, Word, Navegador, Juegos, Aplicaciones... En donde si una aplicación desea ingresar al hardware como por ejemplo spotify poner musica y que la musica suene en el parlante de tu dispositivo. Spotify en el anillo 3 tiene que hablarle al kernel en el anillo 0 a traves de los APIs que corren en el anillo 1 o 2 que en estos dos es donde se encuentran los drivers.

4. Entonces la API del sistema operativo recibe la señal de spotify ("Reproduzca esta musica), el sistema operativo le envia esta señal al kernel, en donde el kernel corre las instrucciones al parlante asi transformando esa señal digital en la vibración del parlante y asi es como escuchamos una canción.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Priv_rings.svg/500px-Priv_rings.svg.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Anillo_(seguridad_inform%C3%A1tica)*

---

Las [maquinas virtuales](https://es.wikipedia.org/wiki/M%C3%A1quina_virtual "Maquina Virtual concept by Wikipedia") son una nueva técnica para que no solo tengas diferentes usuarios en un sistema operativo sino para que en una computadora puedan correr multiples sistemas operativos de manera independiente como si fuera una computadora virtual.

> [Oracle VM VirtualBox Manager](https://www.oracle.com/es/virtualization/technologies/vm/downloads/virtualbox-downloads.html): es un software de virtualización gratuito y de código abierto que permite crear y ejecutar máquinas virtuales (VMs) dentro de un sistema operativo anfitrión (como Windows, macOS o Linux).

La forma en la que funciona es que en el anillo 0 sigue cargando el kernel del sistema operativo de la computadora y en el anillo 1 se encuentra una memoria virtual reservada que le hace creer a un sistema operativo que hay arranca el anillo 0 y tu puedes tener tantos de estos sistemas operativos como tu memoria ram o la memoria de tu disco duro puedan sostener.

> La virtualización permite optimizar recursos, ya que puedes utilizar solo una fracción de una computadora si es todo lo que necesitas, o expandirte a múltiples máquinas si requieres más capacidad.

A cada una de estas maquinas virtuales le es imposible acceder a la otra maquina virtual.

Esto es muy util en servidores, cuando tu tienes una computadora "en la nube" o cuando compras servidores en la "nube" realmente es una computadora de toda la vida, gigante metida en un [data center](https://es.wikipedia.org/wiki/Centro_de_procesamiento_de_datos "Data Center concept by Wikipedia") que lo que hace es dividirse en espacios virtuales para poder rentarte ese espacio y sí necesitas más aumenta la capacidad de recursos que usas de la computadora e incluso puede reclutar los recursos de otras computadoras y si depronto utilizas menos, puede que user una quinta parte de la computadora.

<img src ="https://upload.wikimedia.org/wikipedia/commons/a/a0/Datacenter-telecom.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Centro_de_procesamiento_de_datos*

Casi toda la nube y casi todo el negocio de los servidores funciona con maquinas virtuales.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/VirtualBox2.png/500px-VirtualBox2.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/M%C3%A1quina_virtual*

---

La estética de la interfaz gráfica tambien es dependiente de un sistema operativo.

Los botones en mac se ven diferente a los de windows y a los de linux, un iphone y un android tienen aplicaciones cuya interfaz gráfica se ve diferente, esas interfaces de usuario las define el sistema operativo aunque los desarrolladores de aplicaciones pueden hacer lo que quieran.

Por detras de las interfaces gráficas existen interfaces de línea de comandos o interfaces que son sólo texto, asi fue como empezaron los sistemas operativos, ONIX, OS y eventualmente linux. Estos se llaman **[CLI o Command Line Interfaces](https://es.wikipedia.org/wiki/Infraestructura_de_lenguaje_com%C3%BAn "CLI concept by Wikipedia")** 

<img src="https://i.blogs.es/ef71ca/comandos-diagnostico/650_1200.jpg">

*Imagen Tomada De: https://www.xataka.com/basics/comandos-basicos-para-dar-tus-primeros-pasos-consola-windows-cmd*

> Es un conocimiento fundamental para un Ingeniero de Software.

---

Hay todo tipo de sistemas operativos en el mundo de apple los MacBook, los IMAC corren con macOS, pero el iphone y el ipad corren con Ios, los relojes inteligentes corren con [Watch OS](https://www.apple.com/co/os/watchos/ "Watch OS by Apple").

Android es un tipo de linux, y linux puede ser un sistema operativo de escritorio, de servidores, asi como windows es un sistema operativo de escritorio o de servidores.

En el mundo de la realidad virtual (prácticamente un telefono), cuando uno se lo pone tiene una versión modificada de [Android](https://www.android.com/intl/es_es/ "Android.com") que fue fabricada por META, conocida como [Horizon OS](https://www.meta.com/es-es/help/quest/562419235163295/ "Horizon OS by META").

En apple, las apple vision pro usa [VisionOS](https://www.apple.com/os/visionos/ "VisionOS by Apple") y los dispositivos de android que usan realidad aumentada, tienen un sistema operativo llamado [android XR](https://www.android.com/intl/es_es/xr/ "Android XR by Android").

<img src="https://www.androidauthority.com/wp-content/uploads/2024/12/Android-XR-YouTube-TV-Interface-840w-472h.png.webp">

*Imagen Tomada De: https://www.androidauthority.com/android-xr-ui-first-look-3508760/*

---

Por ultimo estan los sistemas operativos especializados por ejemplo en sistemas medicos o en las pantallas de los automoviles corre un sistema operativo llamado [QNX](https://es.wikipedia.org/wiki/QNX "QNX concept by Wikipedia"), tambien usamos sistemas operativos para los cohetes que van al espacio, mientras use software que corre con el hardware de manera general hay un sistema operativo en medio.

En la actualidad los sistemas operativos determinan que aplicaciones pueden correr o no a traves de reglas, permisos e incluso **sistemas de verificación y aplicación**, en android o en [iOS](https://es.wikipedia.org/wiki/IOS "iOS concept by Wikipedia") usan las tiendas de aplicación en donde iOS tiene la [appstore](https://www.apple.com/co/app-store/ "appstore.com") y android tiene la [playstore](https://play.google.com/store/games?hl=es_CO "playstore.com").

<img src="https://www.enriquedans.com/wp-content/uploads/2019/07/App-Store-and-Play-Market-icons-768x476.jpg">

*Imagen Tomada De: https://www.enriquedans.com/2019/07/la-crisis-del-modelo-de-las-tiendas-de-aplicaciones.html*

> En los android de china, un telefono puede tener **quince tiendas diferentes tiendas de aplicaciones** mientras que el mundo occidental casi siempre hay una; La de google o la de Apple.

En los sistemas de escritorio como Mac o Window tambien hay tiendas de aplicaciones, pero en estos sistemas se puede correr cualquier tipo de aplicación que instales, sin embargo cuando empiezas a ejecutar tus propias aplicaciones es posible que el sistema operativo mande advertencias en donde la aplicación no tiene una llave de seguridad o no tiene una firma, o no tiene un certificado.

<img src="https://www.java.com/jcom/images/trusted_expired,0(5).jpg">

*Imagen Tomada De: https://www.java.com/es/download/help/appsecuritydialogs.html*

Esto sucede porque ahora los vendedores de sistemas operativos como [apple](https://www.apple.com/co/ "apple.com") y [microsoft](https://www.microsoft.com/es-co "microsoft.com") les pide a los desarrolladores de software que pasen un proceso de verificación para tener una llave de cifrado que les permite ejecutar una aplicación, eso antes no pasaba, este proceso hace que sea más seguro el desarrollo de una aplicación y sistemas. Porque entonces un virus no tiene esa llave y antes de ejecutarse, va a salir esa advertencia "Esta aplicación no está autorizada".

Ahora si quieres desarrollar una aplicación tienes que pedirle permiso a los desarrolladores de sistemas operativos y esto hace un poco más canson el desarrollo de aplicaciones de escritorio, pero mucho, mucho más seguro.










---










## Cómo Funciona Internet

Cuando envias un mensaje por [whatsapp](https://www.whatsapp.com/?lang=es "whatsapp.com") pasan muchas cosas más que solamente pasar un mensaje de un teléfono a otro teléfono pues ese mensaje:

1. se debe transformar en un [paquete (packet)](https://es.wikipedia.org/wiki/Paquete_de_red "Paquete de Red concept by Wikipedia")

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/WiFiMacLayerFrameLayOut.jpg/500px-WiFiMacLayerFrameLayOut.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Paquete_de_red*

2. Ese paquete llega a una antena

3. El mensaje en la antena llega a un provedor de Interent (ISP - Internet Service Provider) que se conecta a unos cables submarinos en donde los distrubuyen en servidores

4. Durante todo este proceso el mensaje debe ir cifrado, se hace trazamiento mediante unos elementos llamados IP - Protocolo de Internet

<img src="https://nocrd.com/images/2024/07/17/Network-Peering_large.png">

*Imagen Tomada De: https://nocrd.com/es/component/content/article/8-noticias/238-explicacion-que-es-el-peering-de-internet*

Debemos razonar que ese mensaje que se envia de un telefono a otro telefono es realmente de una computadora a otra computadora.

> Un telefono en esencia una computadora. 

Para que ese mensaje se pueda enviar debe primero transformarse en lenguaje que entienden las maquinas, lenguaje binario... Es decir bytes, conjuntos de 8 bits. En donde cada elemento de bit es 1 o es un 0 y estos elementos en conjunto se transmiten a traves de internet.

<img src="https://www.ionos.com/es-us/digitalguide/fileadmin/_processed_/a/d/csm_diversas-unidades-de-almacenamiento-en-relacion-con-el-bit_9be530a014.webp">

*Imagen Tomada De: https://www.ionos.com/es-us/digitalguide/paginas-web/desarrollo-web/que-es-un-bit/*

Pero internet no es simplemente de computadora a computadora, algo debe pasar para que entre cada una de estas computadoras se conecte a internet.

> Se vuelve a invitar a pensar de los celulares como unas computadoras porque en esencia lo son.

Tu computadora se conecta a internet mediante un sistema, un protocolo, una serie de reglas para mandar mensajes de manera inalambrica llamada wifi.

<img src="https://ccnadesdecero.es/wp-content/uploads/2023/05/Ejemplo-Diagrama-Red-Modem-Router.png">

*Imagen Tomada De: https://ccnadesdecero.es/ejemplo-diagrama-red-domestica/*

Si tu telefono no esta cerca de una red llamada wifi, se conectará a otra red llamada 4G y antes de 4G existia 3G, 2G que son otro tipo de redes, estos especificamente son redes de telefonia a los que se les agrego capacidad de transmitir datos digitales que es lo que conocemos como [internet](https://www.cloudflare.com/es-es/learning/network-layer/how-does-the-internet-work/ "Internet concept by Wikipedia").

<img src="https://www.movilzona.es/app/uploads-movilzona.es/2022/02/bandas-frecuencia-moviles.jpg">

*Imagen Tomada De: https://www.movilzona.es/tutoriales/conexiones/bandas-frecuencias-moviles/*

Pero si depronto tu computadora es de trabajo o tal vez en tu casa la computadora la conectan por medio de un cable, muy probablemente ese cable sea un cable de red que es conocido popularmente como un cable [ethernet](https://es.wikipedia.org/wiki/Ethernet "Ethernet concept by Wikipedia").

<img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/10baseT_jack.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Ethernet*

Sea como sea, sin importar si es una red de wifi, por cable... Todos estos son los medios por los cuales se va a llegar a una caja (internet) que se le llama un [módem](https://es.wikipedia.org/wiki/M%C3%B3dem "Módem concept by wikipedia")/[router](https://es.wikipedia.org/wiki/R%C3%BAter "Router concept by Wikipedia").

> Un módem y router no son lo mismo, aunque a menudo se combinan en un solo dispositivo (un "gateway") que tu proveedor de internet te entrega; el módem trae la señal de internet a tu casa desde tu ISP, mientras que el router toma esa señal y la comparte (vía Wi-Fi o cable) con todos tus dispositivos (PC, móviles, tablets). 

<img src="https://www.adslzone.net/app/uploads-adslzone.net/2020/02/Modem-router-e1726047677232.jpg?x=480&quality=80">

*Imagen Tomada De: https://www.adslzone.net/reportajes/internet/modem-vs-router/*

Este módem traduce todas las señales internas de la red privada de tu casa, que es la que tiene wifi o ethernet a las señales que tiene internet público del mundo y eso lo hace enviando la señal por un cable, que antes era el cable de telefono, pero hoy en día es casi siempre cables de **[fibra óptica](https://concables.cl/que-es-y-para-que-sirve-el-cable-de-fibra-optica/ "Fibra Óptica concept by concables")**.

La fibra óptica es una pequeña fibra de vidrio altamente elástica por la que un rayo laser va modulando un mensaje, que es el mensaje que envia todas las señales de internet en el mundo, pero esto no significa que de alguna u otra forma la computadora tuya se conecte con la computadora de tu amigo en el momento que envias un mensaje.

<img src="https://concables.cl/wp-content/uploads/2021/08/fiber-optic-cable-768x284.jpg">

*Imagen Tomada De: https://concables.cl/que-es-y-para-que-sirve-el-cable-de-fibra-optica/*

Para que ese mensaje llegue, debe saber cómo llegar y además de eso debe llegar de manera privada, entonces necesita un servidor intermedio que se acuerde que "Esta persona tiene en sus contactos a esta persona" y el mensaje debe ir cruzado. Estos servidores no son más que computadoras, grandes computadoras escondidas en lugares que nosotros llamamos datacenters que son edificios llenos de computadoras de una compañia para poder hacer esa transmisión.

Whatsapp es un producto creado por la misma empresa que creó facebook, esta empresa se llama meta. Por ende cuando tu envias un mensaje por whatsapp... Realmente estos llegan a los servidores de meta. 

<img src="https://assets-blog.hostgator.mx/wp-content/uploads/2021/06/Emisor.webp">

*Imagen Tomada De: https://www.hostgator.mx/blog/protocolo-tcp/*

Por otro lado tu no quieres que los mensajes que envias sean vistos por terceros, entonces existen tecnologías que se llaman [cifrado o encriptación](https://www.cloudflare.com/es-es/learning/ssl/what-is-encryption/ "Encriptación concept by Cloudfare"). 

Lo que hace estas tecnologías es que hacen el mensaje, secreto. Haciendolo indecifrable en tu computadora o en tu teléfono. En donde llega al servidor en donde este no sabe realmente qué es, sólo sabe que va para tu amiga (dirección receptora), en donde tu amiga lo recibe y por ende solamente la única persona que lo puede descifrar... Como si entre los dos tuvieran una contraseña secreta que sólo los dos conocen mandandose mensajes.

A estas tecnologías se les conoce como:

* **LLaves Públicas**
* **Llaves Privadas**

Ambas son una técnica de cifrado que usa matemáticas para agarrar un mensaje y tomando ese mensaje, se transforma en algo indescifrable. Esto lo que hace que sea indescifrable es lo que hace que sea tu llave pública en donde la puedes compartir con otros en donde esa llave pública sólo te corresponde a ti (Dirección Locutora), esta se guarda de manera secreta en tu computadora.

La Llave Privada solo sirve para descifrar mensajes que fueron cifrados con tu llave pública.

Cuando usas Whatsapp o cualquier sistema de mensajeria moderno. Lo que haces es que cuando guardas el contacto de una persona: Internamente y de manera automática le envia tu llave pública a tus contactos y cada contacto que te tiene a ti, te guardan en sus llaves públicas. 

Por ende cuando mires tu contactos en la aplicación de whatsapp tambien estas mirando una lista de cada una de tus llaves públicas para cifrar un mensaje con ellos por medio de esa llave y asi sólo enviar mensajes y recibir mensajes de ellos. 

Este intercambio de llaves públicas es a través del servidor, pero las llamas privadas no estan en los servidores de whatsapp, estas estan solamente en tu computadora.

De esta manera recibes y descifras mensajes en tu teléfono, siendo asi que no se pueda mirar en el servidor cual es el mensaje haciendo asi que el servidor solamente vea para quien es el mensaje.

El contenido del mensaje son los datos (El mensaje en si como por ejemplo: "Hola, cómo estas?"), pero la información extra del mensaje con los metadatos (Fecha y hora de envio, Fecha y hora de recibido).

<img src="https://www.redeszone.net/app/uploads-redeszone.net/2019/11/emisor-receptor.jpg">

*Imagen Tomada De: https://www.redeszone.net/tutoriales/seguridad/diferencias-cifrado-clave-publica-privada/*

Lectura Recomendada: https://es.wikipedia.org/wiki/Criptograf%C3%ADa_asim%C3%A9trica

---

Un mensaje cifrado es como meter un mensaje en una caja, en donde tu llave pública es la que cierra la caja y todo el mundo que te envie un mensaje tiene esa llave pública, la llave privada es la única que puede abrir esa caja y esa solamente tu la tienes.

El mensaje que tu envias tiene que convertirse en una cajita que será enviada en internet en donde a esta caja se le conoce como paquete y es un formato especial binario que guarda el mensaje y los metadatos.

Estos mensajes empaquetados son los que entienden los protocolos de comunicación como el 4G de las antenas de celular, el wifi, el ethernet.

Cada sistema de conexión a internet funciona de maneras ligeramente diferentes:

<img src="https://es.digi.com/getattachment/Blog/post/Private-Network-vs-Public-Network-5-Key-Difference/private_network_diagram-1200w.png?lang=en-US">

*Imagen Tomada De: https://es.digi.com/blog/post/private-network-vs-public-network*

Los estandares de telefonía como 4G son muchas antenas al rededor de todo el planeta que estan constantemente escuchando con señales de radio donde estan los teléfonos, por lo que probablemente tu teléfono constantemente esta viendo al rededor de 3, 4, 5 antenas al rededor del barrio donde vives porque siempre debe estar conectado a multiples antenas de tal manera que si vas conduciendo o caminando el teléfono va saltando de antena en antena para no perder conexión: Se puede pensar como una conexión a nivel wifi, pero a toda la ciudad.

<img src="https://www.wradio.com.co/resizer/v2/https%3A%2F%2Fcloudfront-us-east-1.images.arcpublishing.com%2Fprisaradioco%2FYGVYN4JMSND45HZOTLDFFQFLPM.jpg?auth=289cc4f1f8ceffc35a835ab6c88e640f6ae7cc1e3adebebbf67938c0c9c0f349&height=800&width=1200&quality=70&smart=true">

*Imagen Tomada De: https://www.wradio.com.co/2024/03/06/cobertura-5g-zonas-de-bogota-donde-ya-esta-disponible-como-activarla-en-su-dispositivo/*

En tu casa probablemente tienes un router/enrutador wifi que transformar esa señal de radio que es donde estan los empaquetadores de internet a una señal de cable que se conecta a un moden.

Esos paquetes llegan al módem o la antena 4g, estas dos los envian a un proveedor de internet, que es el proveedor de internet al cual tu le pagas. [(ISP -Internet Service Provider)](https://mintic.gov.co/micrositios/operadores-comunitarios-internet-isp/819/w3-channel.html "ISP concept by Ministerio de las TIC Colombia")

Hay demasiados de estos ISP y todos se conectan entre si a traves de cables gigantescos que estan alrededor de todo el planeta.

<img src="https://en.vcenter.ir/wp-content/uploads/2018/08/isp-internet-service-provider-definition.jpg">

*Imagen Tomada De: https://en.vcenter.ir/internet/isp-internet-service-provider-definition/*

Estos cables son una red gigante cables, que muchos de estos van por el oceano y nosotros estamos totalmente rodeados por estos cables. Son conocidos como cable submarino, aunque muchas veces tambien puede ir por tierra mediante tuneles en tubos como tuberia del agua o en postes de luz.

Toda esa red de cables al rededor de todo el mundo es lo que nosotros conocemos como internet, no son satelites, aunque algo de internet ocurre en satelites, la verdadera conexión ocurre entre estos cables.

<img src="https://content.nationalgeographic.com.es/medio/2019/03/12/cables-marinos_238e1e2a_1280x688.png">

*Imagen Tomada De: https://www.nationalgeographic.com.es/ciencia/internet-red-miles-cables-submarinos_13997*

Pero no es como si estos ISP se conecten directamente entre ellos, tienden a usar unos sistemas que centralizan la llegada de los cables y que distribuyen estos cables al rededor de un país, de un continente y del planeta entero se conocen como [IXP = Internet Exchange Point](https://www.cloudflare.com/es-es/learning/cdn/glossary/internet-exchange-point-ixp/ "IXP concept by Cloudflare").

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/Internet_Connectivity_Distribution_%26_Core.svg/500px-Internet_Connectivity_Distribution_%26_Core.svg.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Punto_neutro*

Lo que son es [datacenters](https://es.wikipedia.org/wiki/Centro_de_procesamiento_de_datos "Datacenters concept by Wikipedia"), edificios gigantescos llenos de computadoras que reciben todas las señales de cables, de las antenas, señales de satelite, pero sobre todo los cables submarinos y las redestribuyen para donde tienen que ir.

<img src="https://i.blogs.es/342f42/high-res-utah-data-center/450_1000.jpeg">

*Imagen Tomada De: https://www.xataka.com/pro/asi-cinco-cpds-grandes-mundo*

---

**¿Cómo Sabe un IXP a donde tiene que ir un paquete?**

En esos [metadatos](https://es.wikipedia.org/wiki/Metadatos "Metadatos concept by wikipedia") viene la dirección del servidor al que tengo que ir, cuando yo le envio un mensaje de whatsapp, yo digo este mensaje es para [whatsapp.com/](https://www.whatsapp.com/)...

Todo lo que tenga un .com, como por ejemplo [google.com](https://www.google.com/ "google.com"), [youtube.com](https://www.youtube.com/ "youtube.com"), [spotify.com](https://open.spotify.com/intl-es/ "spotify.com"), a todo esto se le conoce como el [dominio](https://es.wikipedia.org/wiki/Dominio_de_internet "Dominio concept by Wikipedia"): Es el nombre en texto que nosotros le ponemos a una dirección de un servidor. 

Pero las direcciones de los servidores no funcionan con nombres sino con números asi como que en la calle halla una dirección como la carrera 13 con calle 63 o la casa 143 en la avenida oregon, en internet tenemos un sistema de numeros que a partir de verlo nos indica por donde tiene que ir el paquete para encontrar su destino. 

Asi mismo entonces: Saber como sale desde tu computadora, va a cual proveedor de internet, a cual IXP, a cual proveedor de internet y a cual lugar.

Estos numeros se les conoce como direcciones de internet o direcciones IP: Protocolo de Internet / Internet Protocol

<img src="https://kinsta.com/es/wp-content/uploads/sites/8/2018/05/qu%C3%A9-es-dns.png">

*Imagen Tomada De: https://kinsta.com/es/blog/que-es-dns/*

Lectura Recomendada: https://aws.amazon.com/es/route53/what-is-dns/

---

**¿Cómo hacen las computadoras para tener una dirección IP a la cual enviar y recibir?**

La humanidad decidió sentarse y acordar una serie de estandares y entre todos acordaron que el estandar se iba a llamar [DNS = Domain Name System/ Sistema de Nombres de Dominio](https://www.ibm.com/mx-es/think/topics/dns "DNS concept by IBM").

Estas son bases de datos gigantescas en donde hay un monton de nombres como por ejemplo: whatsapp.com, google.com, youtube.com y por cada uno de estos nombres estan asignadas unas IP diciendo asi "Este nombre de dominio corresponde a esta dirección de ip" y estas bases de datos las clonan/copian por cada una de las IXP/ Internet Exchange Point, en ocasiones tambien estan copiadas en los ISP, en los servidores intermedios de corporaciones y muy probablemente en tu computadora y en tu teléfono hay una copia local de esa base de datos y cuando esa base de datos se actualiza, envia una señal a cada uno de los computadores que tiene una copia para que actualice a esa versión.

<img src="https://www.indusface.com/wp-content/uploads/2024/10/DNS-lookup-process-.png">

*Imagen Tomada De: https://www.indusface.com/learning/what-is-dns/*

Gracias a esos servidores de DNS y a esa distribución de bases de datos es como nosotros sabemos donde esta todo lo que hay en internet.

Una computadora normal no tiene que saber cuales son todas las direcciones de internet, sólo tiene que recordar las más comunes.

Entonces como por ejemplo: Si tienes que enviar un mensaje mediante whatsapp para que le llegue al otro telefono de tu conocido, en tu computadora cuando le das enter:

1. Ese mensaje se transforma en un paquete

2. Ese paquete se cifra con una llave pública

3. Ese paquete se va para el router wifi.

4. Del router/antena va para los datacenter del ISP que contrataste

5. El ISP sabe por el DNS del mensaje por donde enviar ese paquete y ese paquete fluira por internet hacia un IXP.

6. El IXP busca donde se encuentra el servidor, en este caso el servidor de whatsapp, siendo meta.

7. El servidor busca "¿Este paquete para quien es?" 

8. El servidor envia para quien es al IXP.

9. El IXP lo envia al ISP que contrató la persona a la cual tu enviaste el mensaje

10. El ISP envia el mensaje al módem/router o empresa de telefonía de esa persona

11. LLegando asi el mensaje a esa persona y aparecer como una notificación.

<img src="https://upload.wikimedia.org/wikipedia/commons/e/ef/ArchitectureCloudLinksSameSite.png">

*Imagen Tomad De: https://es.wikipedia.org/wiki/Comunicaci%C3%B3n_entre_procesos*

---

Cuando tu envias mensajes y usas ciertos comandos (Terminal y Línea de Comandos) se van a ver una serie de numeros IP, cuando un mensaje se envia pasa por una serie de numeros IP y a esto se le conoce como una [traza de ruta](https://www.xataka.com/basics/tracert-traceroute-que-como-funciona-como-se-utiliza "Traza de ruta IP concept by Xataka")

<img src="https://i.blogs.es/ef0fbb/trazado/450_1000.jpg">

*Imagen Tomada De: https://www.xataka.com/basics/tracert-traceroute-que-como-funciona-como-se-utiliza*

* Imagen de tabla de enrutamiento por enviar un mensaje. (Direcciones IP por las que un mensaje tuvo que viajar a la velocidad de la luz)

El tiempo que se demora un mensaje o un paquete de salir de una computadora y llegar a la otra se le conoce como [PING](https://es.wikipedia.org/wiki/Ping "PING concept by Wikipedia"), aunque hay algunos casos especiales por ejemplo si dos computadoras se encuentran en la misma red porque estan en la misma ciudad, en el mismo barrio... El mensaje no tiene que viajar a internet, muchas veces sólo rebota en el proveedor de internet local.

<img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/Cmd-ping.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Archivo:Cmd-ping.png*

O cuando miras un video en youtube, no estas llendo a los servidores de youtube de estados unidos exclusivamente, youtube que es muy inteligente al igual que muchas compañias genera copias de los videos en los servidores más cercanos dentro de cada país asi en vez de que el mensaje vuele por todo internet y que tenga que pasar por todos los protocolos de intercambio y por los IXP, solamente estan la red de internet local de la ciudad y a estos se les conoce como servidores de cache.

<img src="https://kinsta.com/wp-content/uploads/2020/03/How-Web-Cache-Works.png">

*Imagen Tomada De: https://kinsta.com/es/blog/que-es-la-cache/*

---

El internet satelital no es magia sino basicamente lo mismo, cuando una antena satelital se conecta a un satelite para conectarse a internet lo que realmente esta pasando es que esa antena satelital envia una señal de radio al satelite, pero el satelite esta conectado a un ISP en tierra, probablemente el más cercano a tu casa y ese ISP se encarga de enrutar el paquete en el internet de toda la vida.

Asi funciona [starlink](https://starlink.com/co).

<img src="https://i.blogs.es/abb225/starlink-satelites/650_1200.jpg">

*Imagen Tomada De: https://www.xataka.com/basics/que-starlink-como-funciona-cuanto-cuesta*

Lectura Recomendada: https://es.wikipedia.org/wiki/Starlink

> Internet es mucho más que esto, hay más protocolos, reglas, cifrado, técnicas especiales para el correo, las IP tienen ciertas reglas, ¿Por qué una IP tiene 4 números? ¿Por qué no 5 o por qué no 3?, ¿Por qué las IP van del 0 al 255?, ¿Cual es la diferencia entre IPv4 y la IPv6?, un DNS tiene muchas más cosas que simeplemente un nombre y una IP










---










## Cómo las computadoras guardan datos

Hay dos tipos de datos que existen en una computadora, los [datos persistentes](https://www.purestorage.com/la/knowledge/what-is-persistent-data.html "Datos Persistentes concept by purestorage.com") y los [volátiles](https://es.wikipedia.org/wiki/Memoria_vol%C3%A1til "Memoria Volátil by Wikipedia").

Un dato persistente es cuando apagas la computadora y el dato sigue ahí, que estos datos son los que se encuentran en el disco duro.

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQuf0kQodGIt7QB-RQTFb5i_Kg4JWLX9hRhbA&s">

*Imagen Tomada De: https://www.administracionderedes.com/sistemas-informaticos/disco-duro/*

Un dato volátil es que al apagarse la computadora desaparece el dato. Como cuando hay un archivo no guardado al apagar la computadora y estos se encuentran en la memoría RAM.

<img src ="https://gqinformatica.com/wp-content/uploads/2024/04/memoria-ram-2-gb-scaled.webp">

*Imagen Tomada De: https://gqinformatica.com/blog/informatica/memorias-ram-todo-lo-que-necesitas-saber/*

Por lo que: 

* Dato Guardado en el Disco Duro

* Dato en Acción en la Memoria RAM

> La memoria RAM no es la única memoria de tipo volatil sino que es la más común y más grande.

Dentro de las CPU hay memoria volátil que se llama [cache o registros](https://es.wikipedia.org/wiki/Cach%C3%A9_(inform%C3%A1tica) "Cache concept by Wikipedia") que son pequeñas memorias muy veloces dentro de la series de transistores que se encuentran en un chip de CPU.

Un disco duro es el formato de memoria persistente más común, que es cuando el dato se mantiene una vez se apaga la computadora. Pero no es la única, pues en las computadoras la [BIOS](https://es.wikipedia.org/wiki/BIOS "BIOS concept by Wikipedia") que es el chip que permite al sistema arrancar es una memoria persistente.

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWyGLBkvK709CzLn6KRFtDS8BIaYxHg-7XIw&s">

*Imagen Tomada De: https://es.wikipedia.org/wiki/BIOS*

Dentro de los CHIPS existen pequeñas herramientas de software que arrancan el chip que se conocen como el [firmware](https://es.wikipedia.org/wiki/Firmware "Firmware concept by Wikipedia").

---

Hay dos tipos de unidades para almacenar información de tipo persistente. 

1. [Los discos duros mecánicos](https://es.wikipedia.org/wiki/Unidad_de_disco_duro "Hard Disk Drive concept by Wikipedia")

2. [Los discos realmente no son discos sino unidades de estado sólido](https://es.wikipedia.org/wiki/Unidad_de_estado_s%C3%B3lido "Solid State Drive concept by Wikipedia")

    Los discos duros mecánicos son mecánicos porque tienen un disco por dentro que son básicamente discos magneticos que van dando vueltas y una cabeza de lectura los va leyendo.
    Estos platos mecánicos que son leidos por una cabeza de lectura se parecen a los vinilos y a los toca discos. 
    La lectura de estos discos depende totalmente de la velocidad de la rotación de estos platos.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c5/Hard_drive-es.svg/500px-Hard_drive-es.svg.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Unidad_de_disco_duro*

    Un disco de estado solido realmente no es un disco se les conoce como unidades de estado sólido porque no tienen partes mecánicas.
    Por dentro el disco tiene unos chips que se les conoce como celdas de memoria en donde la velocidad de estos discos es la velocidad con que la luz se mueve al rededor del circuito por eso son mucho más veloces sin partes mecánicas.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c6/MDL-MKNSSDCR120GB%2C_SN-MKN1139A0000025359%2C_FW-3.3.0.jpg/500px-MDL-MKNSSDCR120GB%2C_SN-MKN1139A0000025359%2C_FW-3.3.0.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Unidad_de_estado_s%C3%B3lido*

En inglés se les conoce como:

* Disco Duro = Hard Drive 

* Disco Sólido = SSD = Solid State Drive

En español casi no usamos DRIVE como palabra de unidad. Le llamamos disco a pesar de que por dentro no hay ningún disco.

<img src="https://compubit.com.co/wp-content/uploads/2023/09/62d97da689bf557dde504b8b-1-1024x576.jpg">

*Imagen Tomada De: https://compubit.com.co/diferencias-entre-discos-mecanicos-y-discos-solidos/*

---

Los discos duros guardan en su memoria los datos en un sistema de bloques, y ese formato del cómo se organizan los bloques se les conoce como formatos de memoria.

Lectura Recomendada: https://www.kingston.com/es/blog/personal-storage/understanding-file-systems

Hay 4 formatos de memoría (Lo más Reconocidos porque hay muchos más):

* [FAT 32](https://www.ionos.com/es-us/digitalguide/servidores/know-how/fat32/ "FAT 32 concept by ionos"): era el formato original de windows hace muchos años, hoy en día todavia se utiliza en algunas memorias USB, tiene ciertas limitaciones como que los archivos no pueden pesar más de 4GB (Tamaño máximo del bloque de tamaño), los archivos no tienen ningún tipo de seguridad y permisos. Todo el mundo lo soporta, se utiliza en cualquier lado y por eso es tan común en las memorias USB.

* [NTFS](https://es.wikipedia.org/wiki/NTFS "NTFS concept by Wikipedia"): Es el sistema que utilizan los sistemas windows modernos (2025), es más veloz, tiene seguridad y tiene permisos para acceder a los archivos.

* [APFS (Apple File System)](https://es.wikipedia.org/wiki/Apple_File_System "APFS concept by Wikipedia"): es el sistema de archivos moderno de Apple diseñado para unidades de estado sólido (SSD), optimizando rendimiento, seguridad y eficiencia en dispositivos Apple como Mac, iPhone, iPad y Apple Watch.

En linux hay una infinidad de sistemas de archivos, pero los más populares son:

* [Ext3](https://es.wikipedia.org/wiki/Ext3 "EXT3 concept by Wikipedia") o [Ext4](https://es.wikipedia.org/wiki/Ext4): Se definen con más altos o bajos sistemas de seguridad y permisos, para que de esa forma en la computadora un usuario no pueda ingresar a la información del otro usuario: Esto es muy importante si estas en un servidor (No te gustaria que fueran a tus archivos)

---

Como un disco es tan grande, el sistema operativo necesita una forma como un indice para saber de donde en el disco, empieza y termina un archivo

>tabla de particiones GPT o MBR

<img src="https://www.diskpart.com/screenshot/es/others/estructura-de-mbr-gpt.png">

*Imagen Tomada De: https://www.diskpart.com/es/articles/que-es-gpt-y-sus-ventajas.html*

Esta imagen es una cabezera de un mapa de archivos, en donde esta al inicio de los discos porque al acceder a esa cabezera, ese indice te muestra las carpetas: El sistema de archivos de una computadora.

<img src="https://support.microsoft.com/images/es-es/8d0f220d-c531-4601-b931-8e9d36d9b7f5?format=avif&w=640">

*Imagen Tomada De: https://support.microsoft.com/es-es/windows/explorador-de-archivos-en-windows-ef370130-1cca-9dc5-e0df-2f7416fe1cb1* 

---

**Tabla de particiones GPT o MBR**

Como un disco es tan grande, el sistema operativo necesita una forma como un indice para saber de donde en el disco, empieza y termina un archivo.

Para esto, el disco cuenta inicialmente con una tabla de particiones (MBR o GPT), ubicada al inicio del disco. Esta tabla no contiene archivos, sino información sobre cómo está dividido el disco en particiones.

Dentro de cada partición se encuentra un sistema de archivos (como NTFS, FAT32 o ext4), que actúa como un índice de archivos y carpetas. Gracias a este sistema, el sistema operativo puede localizar, leer y escribir datos de forma eficiente.

<img src="https://www.diskpart.com/screenshot/es/others/estructura-de-mbr-gpt.png">

*Imagen Tomada De: https://www.diskpart.com/es/articles/que-es-gpt-y-sus-ventajas.html*

Esta imagen es una cabezera de un mapa de archivos, en donde esta al inicio de los discos porque al acceder a esa cabezera, ese indice te muestra las carpetas: El sistema de archivos de una computadora.

<img src="https://support.microsoft.com/images/es-es/8d0f220d-c531-4601-b931-8e9d36d9b7f5?format=avif&w=640">

*Imagen Tomada De: https://support.microsoft.com/es-es/windows/explorador-de-archivos-en-windows-ef370130-1cca-9dc5-e0df-2f7416fe1cb1* 

> Primero: tabla de particiones (GPT o MBR), Después: dentro de cada partición, el sistema de archivos (NTFS, FAT32, ext4, etc.)

> El OS son los archivos.

---

**¿Qué pasa cuando borras un archivo?**

Pues ese espacio se libera: En el indice de la cabezera del disco, se borra el apuntador a ese bloque declarando a ese bloque como libre el cual se puede reescribir en donde los datos siguen hay, sólo que ya no estan correlacionados con el nombre de un archivo, siendo asi datos huérfanos para cuando entonces en la proxima un software o algún programa que estes utilizando y necesita dejar algo, busca esos bloques vacios.

Luego llega un momento en donde todos los bloques empiezan a desorganizarse debido a los archivos que se van moviendo y transcribiendo haciendo que el disco duro tenga los bloques separados. Esto hace que un disco duro se vuelva más lento.

En el pasado existia un proceso de defragmentación: En donde la defragmentación de un disco consistia en organizar los bloques para que estuvieran pegaditos archivo por archivo y hacer de esa forma el disco duro mucho más veloz.

<img src="https://hardzone.es/app/uploads-hardzone.es/2018/03/desfragmentacion-1024x640.jpeg">

*Imagen Tomada De: https://hardzone.es/2018/03/09/desfragmentacion-hdd/*

---

En un disco duro solido esto no sucede porque debido a la velocidad de la luz el proceso de defragmentación ocurre de manera automatica ya que no necesita de mover una pieza mecánica de lado a lado para organizar los archivos.

> El sistema operativo no hace que esos espacios sin relación a algún archivo se conviertan en bits con valor cero debido a que eso toma tiempo, mucho más que simplemente borrar la referencia en el indice de la cabezera del disco.

Estos discos se van degradando a medida del tiempo pues el proceso eléctrico que les permite guardar 0 y 1 de manera persistente no dura para toda la vida.

Cada vez que escribes y lees estas degradando un poco más tu disco, entre menos escritura hagas, más probable que dure tu disco duro.

Pero en otras palabras: **Todos los discos mueren**, ningún disco es para toda la vida y por ende hay que copiar en otros lados.

---

La información en un disco puede ser cifrada, es decir que se crea un algoritmo de encriptación o cifrado haciendo asi que los datos sean accesibles solamente por medio de una llave (Nombre de usuarios y contraseña en el OS)

Windows, MacOS, Linux, Android: Tienen mecanismos de cifrado de sus discos.

Entonces ¿Qué pasa cuando subes un archivo a la nube?

Entendiendo que la nube son computadoras en un data center de una empresa gigantesca.

Lo que se hace es copiar archivos de tu computadora a esas computadoras en un data center.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/14/Datacenter_de_ARSAT.jpg/2560px-Datacenter_de_ARSAT.jpg">

*Imagen Tomada De: https://en.wikipedia.org/wiki/Data_center*

---

Expertos en seguridad informática conocidos como forenses son capaces de utilizar software especializado para hacer un mapa estadistico de los bytes dentro de una computadora y reconstruir "Archivos Borrados" cuando no fueron realmente re escritos sino que simplemente se perdió su indice.

Lectura Recomendada: https://www.ibm.com/es-es/think/topics/computer-forensics

Asi es como en criminologia se pueden recuperar los datos borrados de los discos de criminales.

Ahora que entendemos la memoria programamos programas más veloces aprovechando la jerarquia de la memoria.

<img src="https://www.lazarus.com.ve/wp-content/uploads/2023/01/data-forensics-digital-forensic-investigator-at-MGNHQU3-1170x658-1-768x432.jpg">

*Imagen Tomada De: https://www.lazarus.com.ve/desafios-de-la-informatica-forense-y-manejo-de-las-evidencias-electronicas/

---

Entonces recordemos todos los temas vistos:

Todos los datos tienen que ser procesados por una CPU y la CPU tiene una memoria chiquita que es llamada cache o registros, a esa memoria se accede en un tiempo de 1 a 20 nanosegundos.

La RAM es muchismo más grande en su capacidad de almacenar datos que una CPU y a la CPU le toma 70 nanosegundos acceder a la memoria RAM

A la CPU acceder a un disco de estado solido/SSD le toma de 100 a 500 microsegundos, es decir de 100k a 500k nanosegundos.

Siendo asi a la memoria RAM 7000 veces más rápida que una SSD.

Un disco duro mecanico es 70 veces más lento que un disco de estado solido/SSD

1 Minutos = 60.000.000.000 Nanosegundos

1 Minutos = 60.000.000 Microsegundos

---

Cuando el sistema operativo intenta abrir un archivo o una serie de archivos que son más grandes de lo que cabe en la memoria RAM, lo que hacen es crear un espacio en el disco duro en donde usan el DISCO DURO como una [memoria RAM virtual](https://es.wikipedia.org/wiki/Memoria_virtual "RAM Virtual concept by Wikipedia") y a este proceso se le conoce como [SWAP](https://es.wikipedia.org/wiki/Espacio_de_intercambio "SWAP concept by Wikipedia") y es claramente lento asi que es mejor no hacerlo.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/32/Virtual_address_space_and_physical_address_space_relationship.svg/500px-Virtual_address_space_and_physical_address_space_relationship.svg.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Memoria_virtual

> ¿Cómo es el tema de esos anuncios que mencionan una RAM virtual?

Una RAM no se llena exclusivamente cuando se ocupa con archivos muy grandes sino tambien cuando no se libera la memoria RAM.

Si estas programando un software y utilizas grandes archivos y luego cuando el usuario no los necesita y no le dices a la CPU que libere ese espacio en la RAM, la RAM se empieza a llenar de basura.

Los procesadores modernos y algunos lenguajes de programación modernos crean un proceso automático para detectar cuando una información no es necesaria para borrarla la cual se llama [recolección de basura o garbage collection](https://es.wikipedia.org/wiki/Recolector_de_basura).

La mayoria de ingenieros de software no necesitan pensar en esto hoy en día, pero cuando desarrollas sistemas más complejos tienes que pensar en la **recolección de tu basura**.

<img src="https://upload.wikimedia.org/wikipedia/commons/3/3b/Garbage_collection.gif">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Recolector_de_basura

---

La tecnología avanza todo el tiempo: hay un nuevo tipo de componente electrico que descubrimos y lo empezamos a comercializar hace menos de dos decadas que se llama el **[Memristor](https://es.wikipedia.org/wiki/Memristor)** que es un transistor que puede hacer operaciones matemáticas y una memoria a la vez en donde puede guardar datos siendo asi una misma pieza eléctrica.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Two-terminal_non-linear_circuit_elements-es.png/500px-Two-terminal_non-linear_circuit_elements-es.png">

*Imagen Tomada De: https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Two-terminal_non-linear_circuit_elements-es.png/500px-Two-terminal_non-linear_circuit_elements-es.png*

Estos componentes electrónicos todavia siguen en su infancia y no se producen a gran escala, lo más cercano a esto son unos chips de intel que se llaman [OPTANE](https://www.lenovo.com/co/es/glosario/optane-memoria/) asi que por ahora no es una opción y no tenemos que pensar en ello, pero hay que tener presente que en el futuro muy posiblemente la CPU y la memoria RAM muy probablemente van a ser un sólo CHIP.

<img src="https://co-media.hptiendaenlinea.com/magefan_blog/Memoria_Intel_Optane_Qu_es_y_Por_Qu_la_Necesitas.jpg">

*Imagen Tomada De: https://www.hp.com/co-es/shop/tech-takes/memoria-intel-optane-que-es-y-por-que-la-necesitas*

Ya hay otras clases de chips que intentan integrar otros chips por dentro en diferentes nucleos y se llaman [System on a Chip](https://en.wikipedia.org/wiki/System_on_a_chip) y esto es lo que tienen por dentro por ejemplo: Celulares

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Samsung-Exynos-4412-Quad_SoC_used_in_I9300.jpg/500px-Samsung-Exynos-4412-Quad_SoC_used_in_I9300.jpg">

*Imagen Tomada De: https://en.wikipedia.org/wiki/System_on_a_chip*










---










## Cómo se Organizan los Archivos

Cuando la gente joven y la gente muy vieja van a un curso de desarrollo de software se estrellan con el [sistema de archivos](https://es.wikipedia.org/wiki/Sistema_de_archivos).

Un pequeño porcentaje de personas estan acostumbrados al sistema de carpetas.

Otras personas no estan acostumbrados a este sistema pues en un celular no existe un sistema de archivos ya que tu no miras las fotos como archivos sino que las encuentras en una galeria.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/21/FilesAndFolders.png/330px-FilesAndFolders.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Sistema_de_archivos*

Realmente todos los elementos (archivos) dependen de una app y generalmente si algo abre en una app, no abre en otra app.

Pero la computación nunca fue asi, pues la computación funciona con archivos que se pueden abrir en diferentes sistemas y que se pueden mover de una aplicación a otra aplicación.

De hecho, casi todos los sistemas educativos del mundo incluyendo la **[OCDE](https://www.oecd.org/en.html)** consideran que mover datos de una aplicación a otra aplicación como los fundamentos básicos minimos necesarios del [alfabetismo tecnológico](https://es.wikipedia.org/wiki/Alfabetismo_digital "Concept by Wikipedia"). 

> Es decir: Lo mínimo que necesitas para utilizar tecnología.

Tu has visto una estructura de carpetas en un sistema operativo siendo la forma en la que el OS organiza, guarda y accede a cada uno de los diferentes archivos.

> Unidad(C:) > Users > Santiago > Documents > Archivo

Unidad A: para el primer drive de diskettes de 5¼ o 3½ pulgadas

Unidad B: para un segundo drive de diskettes, a menudo de diferente tamaño (si la A: era de 5¼", la B: podía ser de 3½", o viceversa)

Unidad C: para el disco duro con el sistema operativo

Unidad D: típicamente asignada a unidades de CD/DVD cuando estas se volvieron comunes.

---

Probablemente tambien habrás visto algo como:

c:\Documentos\...

<img src="https://corderoinformaticos.com/wp-content/uploads/2022/06/direccion.png">

*Imagen Tomada De: https://corderoinformaticos.com/tutoriales/el-explorador-de-archivos-de-windows/* 



Siendo una dirección que indica donde encontrar el archivo para esto, tenemos que pensar **¿Cómo las computadoras guardan y piensan los archivos?**

Los piensan como si fuera una estructura de arbol siendo la raiz del arbol, dependiendo del sistema operativo: "Una cosa u otra"

**Por ejemplo:**

En Windows es **C:** Esto es la raiz del disco duro siendo C el nombre del disco duro el cual le puso windows (Tipicamente asi se llama.)

En los windows viejos existia A: siendo una unidad reservada para el discket que anteriormente era la forma estandar de pasar archivos entre computadoras siendo una tarjeta de plástico que básicamente ya no existe a excepto del boton de guardar 💾 siendo reconocido asi... Pues evidentemente por su historia. 

> Ya no utilizamos [disquete](https://es.wikipedia.org/wiki/Disquete)

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/Floppy_disk_2009_G1.jpg/500px-Floppy_disk_2009_G1.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Disquete*

Curiosamente lo mismo nos pasaba con los [CD = Compact Disc](https://es.wikipedia.org/wiki/Disco_compacto)

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/db/OD_Compact_disc.svg/330px-OD_Compact_disc.svg.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Disco_compacto*

La unidad de CD o de DVD tendia a llamarse D: o E: porque es lo que sigue despues de la C

> un CD y un DVD no son lo mismo, aunque tienen el mismo tamaño físico. La principal diferencia es que un DVD tiene mucha mayor capacidad de almacenamiento (4.7 GB o más) que un CD (700 MB), permitiéndole guardar videos y datos más grandes, mientras que el CD es ideal para audio, debido a que los DVDs usan un láser de diferente frecuencia y una estructura de capas más compleja para leer más información. 

---

En los sistemas de tipo [UNIX](https://es.wikipedia.org/wiki/Unix "unix concept by wikipedia") como por ejemplo [Linux](https://es.wikipedia.org/wiki/GNU/Linux "linux concept by wikipedia"), [Mac](https://es.wikipedia.org/wiki/Macintosh "mac concept by wikipedia"), [Android](https://es.wikipedia.org/wiki/Android "android concept by wikipedia"), [iOS](https://es.wikipedia.org/wiki/IOS "iOS concept by wikipedia") (Lo más comunes), la raiz no es el disco duro sino la raiz de los arhivos del sistema operativo y se le sconoce con un slash = /

<img src="https://rsg-ecuador.github.io/HerrCompBioinfo/_images/Linux_file_system.jpg">

*Imagen Tomada De: https://github.com/RSG-Ecuador/Grupo-De-Estudio-Linux-Bash/tree/main*

Siendo asi que todos los sistemas Derivados de Unix es el / en donde esta todo siendo asi pro ejemplo: La raiz de un disco en linux no es / sino /mnt/c o tambien puede ser /mnt/disco1 en donde el nombre del disco se puede cambiar.

mnt significa [MOUNT](https://tldp.org/LDP/Linux-Filesystem-Hierarchy/html/mnt.html "mnt concept by tldp.org") que es donde se monta el disco y es una particularidad de linux.

---

Entonces sea como sea, casi todos los OS funcionan asi:

Hay una raiz y tres tipos de carpetas:

1. Carpetas de Usuario: Hay una carpeta por cada usuario que el computador tenga

2. Carpetas de OS: Estan las subcarpetas de lo que necesita el sistema operativo para funcionar

3. Carpetas de Apps: Hay una carpeta por cada aplicación que instalas.

<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiHsCE_CyVYsc7ErRRPk8X6uvAxdSdeu-tsHh_8V1v2CczUJZXtzM_EK70vufOs2h885WF82gHMq_wrma3JNDgqJZGv9DWyhPRTI1QPyTZUSFBxoD1qSVhotiN8w4CxNsmz_0H4_G2GpE9M/w1200-h630-p-k-no-nu/ubicacion-carpetas-sistema-windows.jpg">

*Imagen Tomada De: https://adminformaticos.blogspot.com/2015/04/directorios-principales-de-windows.html*

---

Especificamente pa carpeta del sistema operativo tiene a tener 3 cosas.

Los [drivers](https://es.wikipedia.org/wiki/Controlador_de_dispositivo "drivers concept by wikipedia") que es la carpeta donde estan todas las aplicaciones de software, todos los sistemas que me permiten interactuar con el hardware por lo que cuando instalas una impresora, esto va a los drivers.

Tambien se encuentra la configuración de todo el sistema operativo: Que si le gusta que sea de tema del sistema sea negro o blanco, Cuales son los usuarios con los que arranca, qué es lo que aplica a todos los usuarios.

<img src="https://i.blogs.es/4771fa/mojave2/450_1000.jpg">

*Imagen Tomada De: https://www.xataka.com/moviles/modo-oscuro-nuestros-moviles-ordenadores-tiene-sus-pegas-no-oro-todo-que-no-reluce*

Y finalmente otros archivos de carga natural del sistema operativo (Archivos del nucleo) siendo asi donde el contenido del OS esta.

---

En las carpetas de usuario, hay una carpeta por cada usuario. Cada carpeta de usuario tiene una estructura parecida siendo asi una carpeta para el contenido del escritorio, para documentos, para descargas, videos y otras carpetas en las que casi no pensamos donde se guarda la configuración del OS y de aplicaciones que usamos que son solo relevantes para el usuario.

Esta información, el contenido de la carpeta del usuario es solamente accesible cuando tengo mi nombre de usuario y contraseña.

**Asi los otros usuarios del dispositivo no pueden acceder a los contenidos de esa carpeta.**

Si yo estoy en linux, mac o cualquier sistema tipo UNIX y tengo una foto en la carpeta llamada camara, dentro del usuario Santiago muy probablemente valla a estar en /home/santiago/camara/foto.png siendo asi el / la raiz en donde voy a una carpeta.

Si estoy en windows va a ser C: aunque si hay otros discos en el dispositivo pueden haber otras letras. 

Por lo que: C:User/Santiago/camara/foto.png

---

¿Qué quiere decir [.png](https://es.wikipedia.org/wiki/Portable_Network_Graphics ".png concept by wikipedia")? 

Se ha ido generando un problema a medida de que los ultimos años, los OS han ido escondiendo las ultimas cuatro letras de los archivos siendo asi:

nombre_de_archivo.xxxx (Despues del . viene el tipo de archivo) lo que puede ser entonces por ejemplo:

* Un documento WORD tiende a terminar en [.doc](https://es.wikipedia.org/wiki/Doc_(inform%C3%A1tica) ".doc concept by Wikipedia") o en .docx

* Un documento EXCEL tienda a terminar en [.xls](https://www.adobe.com/es/acrobat/resources/document-files/spreadsheet-files/xls.html ".xls concept by Adobe") o .xlsx

* Las paginas web principalmente son archivos HTML en donde puede ser .htm o [.html](https://es.wikipedia.org/wiki/HTML)

<img src="https://blog.beep.es/wp-content/uploads/2022/08/extensiones-archivo-1024x554.jpg">

*Imagen Tomada de: https://blog.beep.es/que-es-una-extension-de-archivo/*

---

¿Pór qué aveces tienen 3 letras y otras veces 4 letras?

Son razones históricas pues en Sistemas OS viejos habia una limitación en la estructura de la cabezera de los discos duros para cuantos bytes se pueden guardar para la extensión y solamente se podian guardar 3 bytes por lo que entonces sólo habia espacio para 3 letras.

En los sistemas OS modernos esto no importa, entonces con pasar el tiempo se han ido extendiendo el nombre de las extensiones, pero como esto es confuso y requiere que los usuarios normales se guarden en la cabeza .xls significa excel, .docx significa word los OS lo han ido abstrayendo y ahora no lo ves... Ahora simplemente ves un archivo que es de tipo word, pero internamente sigue funcionando.

Esto se puede ver en las direcciones web porque cuando accedes a un servidor en internet accedes a su sistema de archivos de toda la vida. 

Siendo asi, imaginese una imagen llamada 2-cuadricula-negra.jpg y la URL es:

    https://github.com/santiagoencodigo/Desarrollo-Web-Profesional/blob/main/Assets/img/2-cuadricula-negra.jpg

Siendo asi:

[https](https://es.wikipedia.org/wiki/Protocolo_seguro_de_transferencia_de_hipertexto "https concept by wikipedia"): indica comunicación segura con cifrado [SSL](https://www.cloudflare.com/es-es/learning/ssl/what-is-ssl/)/[TLS](https://es.wikipedia.org/wiki/Seguridad_de_la_capa_de_transporte "TLS concept by wikipedia")

* **github.com**: Nombre del servidor que se resuelve a una [dirección IP](https://es.wikipedia.org/wiki/Direcci%C3%B3n_IP "IP concept by Wikipedia")

* **/santiagoencodigo/Desarrollo-Web-Profesional/blob/main/Assets/img/**: Es la estructura de directorios en el servidor. 
El primer nombre /santiagoencodigo/ no es el nombre de la raiz del servidor, sino la raiz de lo que github configura en el servidor que le va a permitir observar al usuario siendo asi una raiz de archivos públicos siendo asi /santiagoencodigo/Desarrollo-Web-Profesional/blob/main/Assets/img/ el nombre de cada una de las carpetas separandose por un /

* 2-cuadricula-negra.jpg: Es el nombre del archivo con el recurso especifico solicitado y su extensión siendo el tipo de archivo como por ejemplo .jpg se tiende a ser para imagenes como fotografia.

> .png es tambien para imagenes pero en esta no se puede perder calidad y se tiene que ver de la misma forma siempre, se tiende a usar en ilustraciones  

---

[HTTP](https://es.wikipedia.org/wiki/Protocolo_de_transferencia_de_hipertexto "HTTP concept by Wikipedia") y este significa protocolo de transferencia de hipertexto: Hypertext Transfer Protocol y eso es el protocolo que transfiere los archivos [HTML = Hyper Text Markup Language](https://es.wikipedia.org/wiki/HTML), es el lenguaje con el que escribimos las paginas web y http es el protocolo de internet por donde lo transimitimos.

<img src="https://upload.wikimedia.org/wikipedia/commons/3/35/HTML_file_type_mimetype_icon.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/HTML*

La S significa secure lo que significa que el navegador intercambia con el servidor una llave de cifrado pública y prviada para que la transferencia nadie la vea y asi de esa forma es como puedes obtener los datos de tu banco sin que una persona, un atacante, pueda ver la transeferencia de datos en internet y observe por ejemplo: Cuanto dinero tienes en el banco.

Existen otros protocolos pues no todo es HTTPS tambien existe el protocolo WSS que significa [WebSocket](https://en.wikipedia.org/wiki/WebSocket) que son un tipo de transferencia de datos que ocurre en tiempo real como por ejemplo asi es como funciona un chat.

Por lo que:

    WSS://chat.servidor.com/chat2/415

Siendo asi el servidor de chat con un subdominio que se llama chat en donde dentro /chat2 es la aplicación y el 415 es el identificador del chat.

Siendo asi las rutas las mismas en internet que en tu computadora.

---

Cuando estas usando un iPad, un iphone, un android, no estas usando una computadora completa porque no estas observando esto e incluso cuando utilizas windows o mac no ves las extensiones.

> Es momento de activar la visibilidad de extensiones y rutas en tu computadora.  

Esto sucede porque es un gran negocio para las empresas de OS escondiendo cada vez la ruta en mac por ejemplo el escritorio recorre en la nube y simplemente dice [icloud](https://www.icloud.com/) escritorio en vez de decirle al usuario que puede guardar datos en su disco duro, le estan diciendo que simplemente guardelos en la nube y asi cuando cambie de computadoras simplemente pasa de un lado a otro. 

> Esto te quita autonomia: No se puede permitir que porque un OS trate de hacer todo más facil, impida el aprendizaje.

> Necesito saber como un OS funciona por dentro.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/ICloud_logo.svg/500px-ICloud_logo.svg.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/ICloud*











---











## Teléfonos y su System on a Chip o SOC


[Los circuitos integrados = los chips](https://es.wikipedia.org/wiki/Circuito_integrado).  La forma en la que funciona la electrónica moderna, empezaron con unos [tubos de vacio](https://es.wikipedia.org/wiki/V%C3%A1lvula_termoi%C3%B3nica) que ocupaban inmensas cantidades de espacio y asi iniciaron las primeras computadoras, los primeros televisores y muchas otras mecánicas de la forma en la que se construía la electrónica moderna.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cd/5C3Ss.jpg/500px-5C3Ss.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/V%C3%A1lvula_termoi%C3%B3nica*

Lentamente estos dispositivos se fueron haciendo cada vez más pequeños y más pequeños y más pequeños.

Porque empezamos a empacar transistores en formas más cortas y porque el consumidor queria dispositivos más pequeños y que usaran menos electricidad y a su vez que fueran más portatiles.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/eb/07R01.jpg/500px-07R01.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Circuito_integrado*

La electricidad funcionaba inicialmente con baterías AA, AAA e incluso de 9 Voltios, con las mismas que podiamos usar en una grabadora de [cassete](https://es.wikipedia.org/wiki/Casete), de las que llamaban [boombox](https://www.unocero.com/gadgets/que-es-boombox/) o un [walkman](https://es.wikipedia.org/wiki/Stereo_personal) y tantos otros dispositivos que quemaban esas baterias a una gran velocidad, que a su vez estas eran costosas por lo que habia un incentivo natural para los fabricantes de reducir el uso de las baterias.

Luego llegaron los smartphones, teléfonos moviles y muchas otras cosas.

La necesidad de reducir el gasto de electricidad y reducir el espacio empezó hacer que los chips se volvieran más y más especializados.

La computación hizo que las computadoras cupieran en una caja gigante y luego en un laptop.

---

Despues surgió una gran pregunta: **¿Por qué tenemos chips para todo?**

¿Por qué hay un chip que es la CPU y otra tarjeta distinta es la tarjeta gráfica y otra tarjeta distinta es la tarjeta de sonido?... **¿Por qué a medida de que especializamos todo, no pegamos todo en un sólo chip?**

Y eso es conocido como **System on a Chip**.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cc/Samsung-Exynos-4412-Quad_SoC_used_in_I9300.jpg/500px-Samsung-Exynos-4412-Quad_SoC_used_in_I9300.jpg">

*Imagen Tomada De: https://en.wikipedia.org/wiki/System_on_a_chip*

Los dos problemas más grandes son de electricidad y de espacio. 

1. Entre más chips hay, más gastan bateria porque más largo es el viaje de los [electrones](https://es.wikipedia.org/wiki/Electr%C3%B3n) dentro de la tarjeta en cada uno de los ciclos que nos permiten jugar un videojuego en el teléfono o atender una llamada.

2. El segundo problema es que los teléfonos era un ladrillo gigante y queríamos que fueran cada vez más pequeños. Y no solo eran teléfonos, eran cámaras digitales, eran iPods, walkmans, televisores. Todo eso que ahora es un teléfono.

<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjsR0R93qGxiPoYmml2KjMNz7gBKEPkMhPPZj5D9KgUxT1TPB8MO8Rha0qcg5r5XSI2OA3jm7NG-FLQaiwwTFFc3gY-Pb3fKt79G8JCyt0JrBfhDpAZ8UhdOQ1ErN-AArg7MozrjK7n3H_y/s320/Manual-de-usuario-iPhone-5+%25281%2529.jpg">

*Imagen Tomada De: https://comofuncionanloscelulares1.blogspot.com/2016/08/que-es-un-smartphone-y-sus.html*

> Tan acostumbrado estoy, debido al tiempo en el que nací en el mundo... Que jamas habia pensado en esto: Antes no tenias todo en un sólo lugar, tenias una camara, un dispositivo para escuchar musica y otro para mirar videos (TV)... Ahora todo lo tengo en el mismo lugar todo el tiempo (Mi bolsillo). Ni siquiera lo habia pensado en algún momento hasta ahora.

---

En otras palabras: Antes era todo tipo de dispositivos, así que empezamos a pensar **¿Qué podemos integrar?**

Por ejemplo un teléfono es básicamente una pantalla gigante por lo que necesita un procesador gráfico que sea muy eficiente y que no sea lento... Pues si el teléfono se siente lento no se puede utilizar. 

Los humanos somos conscientes y aceptamos que una computadora se pone lenta, pero no aceptamos que un teléfono se ponga lento.

Necesitamos el procesamiento normal de una computadora para el celular para poder navegar por internet, enviar mensajes, correos, jugar jeugos, etc...

Asi que necesitamos una CPU y una GPU en un mismo lugar, combinar en un mismo lugar estos elementos fue el primer paso de un System on a Chip.

El mismo CHIP no es el GPU y el CPU al mismo tiempo con los mismos transistores, realmente es que en la OBLEA de Silicio en el Wafer en donde hacen el chip, ponen a un ladito los Transistores que funcionan como CPU y en otro lado muy cerca, en el mismo circuito integrado rodeado de baquelita, lo chips de la gpu.

<img src="https://microcontrollerslab.com/wp-content/uploads/2020/10/system-on-chip-SoC.gif">

*Imagen Tomada De: https://microcontrollerslab.com/system-on-chip-soc-introduction/*

Y asi empezaron a pensar en otros chips porque un celular es un computador completo.

Cuando uno arma una computadora uno tenia sus tabletas de memoria en donde una era la memoria RAM o Discos Duros Externos. ¿Por qué no pegamos la memoria ram hay tambien?

Y ¿Por qué no pegamos el Modem Tambien? porque cuando uno hace una llamada, los teléfonos tienen internamente un chip que es un módem que es el que tiene que hablar con la central electrónica y procesar la llamada. 

Este módem se conecta a las antenas [3G](https://es.wikipedia.org/wiki/Telefon%C3%ADa_m%C3%B3vil_3G) y [4G](https://es.wikipedia.org/wiki/4G), y los chips tambien tienen que conectarse a WIFI entonces esto tambien, **es otro modulo**... Que anteriormente tambien era un circuito aparte en un chip aparte.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/Antena_Ugar.jpg/500px-Antena_Ugar.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/4G*

Como los teléfonos estandarizaron y todos los teléfonos tienen que procesar video a traves de la camara, capturar audio del micrófono, generar imagenes. Todas esas funciones estandar que anteriormente eran perifericos adicionales siendo asi creadas en un solo chip.

Otra ventaja es que estos dispositivos mantenian el mismo hardware constantemente, si tienes una computadora tu puedes conectarme mil marcas de webcam, pero en tu teléfono tu marca como samsung, apple, google... Tu sabes que el lente y qué camara, qué microfono y qué parlante.

Esto hace que los chips sean mucho más sencillos.

Hauwei es la primera marca en crear un módem de tecnología 5G en un chip. [El hauwei Kirin 990 5G](https://consumer.huawei.com/ae-en/campaign/kirin-990-series/)

> La innovación viene de todas partes.

---

Cuanto tu compras tu teléfono y lo enciedes, tu dedo oprime el boton de encendido el cual conecta dos contactos que hacen un paso de electricidad al circuito que llega a una señal en el system on a chip siendo asi, el primer circuito del chip la [BIOS](https://es.wikipedia.org/wiki/BIOS), es ese sistema de arranque que por ejemplo en el caso de [iPod](https://es.wikipedia.org/wiki/IPod) y dispositivos de Apple como el iPhone, se llama [iBoot](https://en.wikipedia.org/wiki/IBoot).

Lo mismo que habría en la BIOS de un computador normal, solo que aqui esta en el chip.

> Siendo asi: Dentro del chip arranca todo.

Ese pedazito de chip prende la CPU, la CPU va a la [memoria flash](https://es.wikipedia.org/wiki/Memoria_flash), memoria permanente equivalente al disco duro y aun asi distinto porque tienen un tamaño de circuito diferente (Uno más grande que otro) y de una quimica diferente.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flash_memory_cards_size.jpg/500px-Flash_memory_cards_size.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Memoria_flash*

De ahí van y buscan el código del OS y el resto es igual que una computadora. Pero en vez de estar viajando entre diferentes chips, todo esta viajando en el mismo chip: La CPU y la GPU estan muy cerca. La CPU arranca el computador en cuanto su OS y la GPU arranca los píxeles de la pantalla, trabajando en conjunto y compartiendo memoria siendo asi, esta una de las cosas únicas de un System on a Chip.

En una computadora la GPU tiene su propia memorIa y es la memoria que utiliza para representar cosas en pantalla o para hacer calculos paralelos como cálculos de [criptomonedas](https://es.wikipedia.org/wiki/Criptomoneda) o AI y la CPU usa la memoria RAM para ejecutar los computadoras.

en un SOC particularmente en la arquitectura que creo Apple, se utiliza una memoria unificada que lo comparten todas las necesidades del OS, donde carga el kernel, los drivers que prenden los perifericos, pero un periferico que normalmente seria un circuito con sus mecanismos químicos y mecánicos. Como la membrana de un micrófono, como los sensores de luz que tiene una camara que es todo lo que es Hardware, el circuito: Toda la operación está metida en ese SOC.

Esto hace que todo sea más sencillo, mucho más eficiente, con menos generación de calor, menor gasto de batería.

Por eso un teléfono que tiene 8GB de RAM y una CPU muy pequeña hace muchas más cosas que una computadora con una CPU más grande y los mismos 8 GB de RAM.

<img src="https://www.notebookcheck.org/fileadmin/Notebooks/News/_nc3/Apple_M2_Pro_0.png">

*Imagen Tomada De: https://www.notebookcheck.org/Apple-El-SoC-M2-Pro-podria-fabricarse-en-el-nodo-N5P-de-TSMC-en-lugar-del-proceso-N3-inicialmente-rumoreado.642288.0.html*

---

Un teléfono es básicamente un experimento de física pues por dentro un teléfono tiene un [barómetro](https://concepto.de/barometro/) que detecta la presión ambiental, hay un [termómetro](https://es.wikipedia.org/wiki/Term%C3%B3metro) en donde a veces el teléfono te avisa si esta muy calienta y depronto se apaga. Todos estos son mecanismos físicos que usando electrónica, mecánica y química hacen que llegue una señal digital al procesador, pero en vez de tener chips individuales, le delegan el procesamiento de chips a ese SOC, que tiene los transistores necesarios para que funcione. 

Lectura Recomendada: https://www.infobae.com/tecno/2023/02/20/los-5-sensores-que-tiene-un-celular-y-que-pocos-conocen-para-que-sirven/

Como son tan similares, entonces muchas de las marcas no tienen que programar sus teléfonos para soportar un montón de drivers como si le toca a hacer microsoft con windows a una computadora, o a apple con su Mac e incluso a los OS Linux. Todo eso apoya a la eficiencia de estos sistemas.

* Dato Curioso: la cámara de los teléfonos modernos, ¿Le ha pasado que aunque este temblando al tomar una foto, la camara se mantiene estable? Hay una estabilización que sirve con software, pero hay ciertas cámaras de los teléfonos más costosos donde el lente está flotando en un tipo de aciete (SuperOIS) que hace que cuando se este moviendo el celular, el lente se mantenga fijo. En otros casos esta flotando con electroimanes que lo mantienen fijo o con pequeños sistemas de resortes, es fascinante. Super pequeño.

<img src="https://cronica.tech/wp-content/uploads/2023/08/realme-11-pro-plus-especificaciones.jpg">

*Imagen Tomada De: https://cronica.tech/tecnologia/hardware/llega-el-realme-11-pro-a-colombia-precio-y-especificaciones/*

Muy recomendado ver este video: https://www.youtube.com/watch?v=D2bcButZx8g

---

Has notado que a los telefonos generalmente les dura 24 horas la batería a pesar de que la tecnología crece y crece, ¿Por qué será? Pues las baterías si estan mejorando respecto a tecnología, pero están limitadas por los límites químicos de lo que hemos descubierto que es la mayor cantidad de densidad de electricidad que podemos meter en una batería de un teléfono moderno.

Primero, en el mercado nosotros los humanos aceptamos que los teléfonos duren un día, pero no aceptamos teléfonos que duren 6 horas y no recompensamos tanto a nivel financiero los teléfonos que duran 2 días porque ese es mercado es más pequeño, existe. Pero los teléfonos son más grandes. Como el [iPhone Pro](https://support.apple.com/es-co/111879), como el [Samsung Galaxy Note o Ultra](https://www.samsung.com/co/smartphones/galaxy-s24-ultra/), etc....

> Este mercado existe, pero no es tan grande.

Los fabricantes de chips son muy conscientes de que cada generación de chip nuevo tiene que gastar menos electricidad y aveces tienen saltos espectaculares, por eso el MacBook Pro desde la generación de los Chips Apple M: m1, m2, m3, m4. han ido aumentando de una manera fuerte la duración de la batería de los laptops y ahora es normal que la batería de un laptop dure doce horas. 

Los teléfonos siguen exigiendose cada vez más porque las Apps son cada vez más complejas y sotisficadas, pero esa es parte de la razón del por qué la batería tiende a durar esto.

El uso intensivo del telefóno lo calienta, y el calor al estar tan cerca de la batería puede causar un efecto de explosión y a **esto le paso a una marca Galaxy Note que básicamente se convertian en granadas en el bolsillo.**

<img src="https://c.files.bbci.co.uk/13BDB/production/_90995808_burntnotearielgonzalez.jpg">

*Imagen Tomada De: https://www.bbc.com/mundo/noticias-37361044*

**Asi que los fabricantes de los teléfonos deben tener mucho cuidado con no pasarse de cierta cantidad de flujo eléctrico para que no se caliente el teléfono y no explote.**

> Al día de hoy esto casi no es un problema.

---

Volviendo al tema de la arquitectura de Chips X86, RISC, ARM.

[ARM](https://es.wikipedia.org/wiki/Arquitectura_ARM) domina la arquitectura de los chips de los teléfonos y los SOC, ARM una empresa que fue adquirida por una empresa japonesa: [SoftBank](https://www.softbank.jp/en// "Softbank.jp") y en la cual ese diseño es en el que estan basados los chips de apple, la tecnología hoy en día está mudando casi todo a un System on a Chip debido a que son más eficientes.

Pues en un teléfono inteligente o en un iWatch o Reloj inteligente, en anillos sensores de salud, en el automovil del sistema de entretenimiento hay un SOC.

Muchas veces en estos sistemas de SOC, agregan cosas completamente nuevas que no existen en la computación de escritorio como [las unidades de procesamiento neuronal: las NPUs o Neural Processing Units.](https://www.xataka.com/basics/npu-que-sirve-este-tipo-procesador)

Apple es el pionero de esto, pero ahora todos los fabricantes lo hacen.

Es un chip que como la [GPU](https://es.wikipedia.org/wiki/Unidad_de_procesamiento_gr%C3%A1fico) hace procesamiento paralelo. Recordemos que GPU quiere decir Graphics Processing Unit, es decir que es una unidad de procesamiento gráfico, no fue diseñada para eso, hay nuevos chips inicialmente inventados de google, llamados [TPU - Tensor Processing Units](https://docs.cloud.google.com/tpu/docs/system-architecture-tpu-vm?hl=es-419), que tambien se estan colocando dentro de los celulares porque ahora los teléfonos estan haciendo uso de la IA como por ejemplo: Cuando haces un dictado de voz, cuando usas asistentes, estas haciendo uso de machine learning, cuando el celular te coloca filtros por medio de [Snapchat](https://www.snapchat.com/es) o [Instagram](https://www.instagram.com/), el celular utiliza estas NPUs que vienen integradas en el CHIP completo.

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnGZFtSh0clR_Uyz1cmX9k2aYaAy51AbMw_w&s">

Las CPUs que están dentro de un System on a Chip son muy similares a la CPU a la de una computadora normal, el mismo procesamiento por Gigahertz, las mismas unidades, e incluso tienen nucleos. Hoy en día es normal es más normal ver multinucleos en el chip de una celular que en el chip de una computadora.

Los SOC tienden a tener 16 nucleos donde tipicamente en las computadoras de arquitectura x86 veaimos de cuatro a ocho nucleos.

---

A medida de que la inteligencia artificial captura todo el planeta, empezamos a tener una hiperoptimización de cosas distintas. La inteligencia artificial está conectada  directamente a plantas de energia nuclear por lo que el problema de la energia no es el problema que creemos, nuestro problema es más de memoría y velocidad de procesamiento en donde los SOC tambien son ideales para esto. 

Porque en el modelo anterior la GPU y la memoria estaban aparte y en el modelo nuevo, el procesador de un Iphone comparte la memoria entre la CPU, GPU, NPU 

NPU = Procesador Neuronal de IA

Cuando el OS no necesita tanta RAM, esa RAM la puede aprovechar completamente la IA **haciendo estos sistemas mucho más eficientes.**

Durante 2025, china le gano en un momento a OpenAI aprovechandose de esta característica para poder crear modelos de inteligencia artificial que corran en local en laptops y es en parte de que Apple a pesar de estar atrás en la carrera de IA sigue constantemente liderando el desarrollo de IA local por los SOC y su arquitectura de memoria unificada.

> Esto sucedió mediante DeepSeek 2025

> Unified Memory Architecture by Apple

<img src="https://media.igeeksblog.com/wp-content/uploads/2025/07/Unified-memory-architecture.jpg.webp">











---











## GPUs: Procesadores Gráficos y de AI

Las primeras computadoras no tenían pantalla, pues su funcionalidad era que cuando tu le dabas datos y hacias [calculos de computo](https://en.wikipedia.org/wiki/Computation), te imprimian los calculos.

<img src="https://upload.wikimedia.org/wikipedia/commons/e/e5/ENIAC-changing_a_tube.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Computadora#/media/Archivo:ENIAC-changing_a_tube.jpg*

**Las primeras pantallas no eran de realmente computadoras**, eran un instrumento electrónico para ver las ondas electromagnéticas llamada osciloscopio y unos ingenieros encontraron cómo usar la imagen del osciloscopio para colocar dos palitos y una bolita que rebotaba y asi nace el primer juego de la historia **PONG**.

<img src="https://upload.wikimedia.org/wikipedia/commons/a/a6/Osciloscopio_locomotora.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Osciloscopio*

<img src="https://upload.wikimedia.org/wikipedia/commons/6/62/Pong_Game_Test2.gif">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Pong*

Encontré que el juego, tiene su propia pagina por ende si se desea jugar ingrese al siguente link: https://www.ponggame.org/

Desde ese momento los [videojuegos](https://es.wikipedia.org/wiki/Videojuego) empezaron a usar la computación para empujar cada vez más lo que era posible a nivel gráfico siendo asi:

* Primero hubo gráficos de [videojuego](https://es.wikipedia.org/wiki/Videojuego) antes de que hubieran sistemas operativos gráficos.

En sistemas [UNIX](https://es.wikipedia.org/wiki/Unix) o en [DOS](https://es.wikipedia.org/wiki/DOS) uno podia jugar juegos como [Tetris](https://es.wikipedia.org/wiki/Tetris), [Mario Bros](https://es.wikipedia.org/wiki/Mario_Bros.), [Prince of Persia](https://es.wikipedia.org/wiki/Prince_of_Persia_(videojuego_de_1989)) sin necesidad de todavia tener ventanas porque cargaban cada una de estas pantallas y eran juegos muy sencillos que llevaban al máximo la capacidad de chips.

<img src="https://upload.wikimedia.org/wikipedia/commons/2/28/Prince_of_Persia_1_-_MS-DOS_-_Gameplay_-_Potion.gif">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Prince_of_Persia_(videojuego_de_1989)*

> Si no fuera por los videojuegos no habriamos llevado los chips a su maximo nivel.

Gracias a esto, empezó a existir una industria que creaba chips específicamente para poner a correr esos gráficos para diseño gráfico, para [producción audiovisual](https://es.wikipedia.org/wiki/Producci%C3%B3n_audiovisual "Producción Audiovisual concept by Wikipedida") de [efectos especiales](https://es.wikipedia.org/wiki/Efectos_especiales "Efectos Especiales concept by Wikipedia"), pero sobre todo para videojuegos.

Esos chips se llaman [Unidades de Procesamiento Gráfico = Graphics Processing Unit = GPU](https://es.wikipedia.org/wiki/Unidad_de_procesamiento_gr%C3%A1fico "GPU concept by Wikipedia")

Lecturas Recomendadas:

1. Qué es una GPU by AWS: https://aws.amazon.com/es/what-is/gpu/

2. Qué es una GPU by IBM: https://www.ibm.com/mx-es/think/topics/gpu

3. Qué es una GPU by NVIDIA: https://www.nvidia.com/es-la/drivers/what-is-gpu-computing/

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/6600GT_GPU.jpg/330px-6600GT_GPU.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Unidad_de_procesamiento_gr%C3%A1fico*

---

**¿Cual es la diferencia entre la CPU y una GPU?**

Las CPUs procesan de manera serial la información a través de ciclos. Y tienen millones de transistores que hacen cálculos matemáticos hipercomplejos porque eso es lo que se necesita para correr una hoja de calculo en [excel](https://www.microsoft.com/es-es/microsoft-365/excel), se necesitan para los calculos que se necesita para navegar una pagina web y todo eso que hacemos en una computadora normal.

Una GPU realmente son muchísimos núcleos de procesadores chiquitos por ende hacen muchos menos cálculos con mucho menos poder, pero como son muchísimos núcleos, los hacen al mismo tiempo.

* Lectura Recomendada: https://es.wikipedia.org/wiki/Computaci%C3%B3n_paralela

Representar una imagen en pantalla es representar un cálculo de una matriz de millones de puntos de luz, conocida como [pixeles](https://es.wikipedia.org/wiki/P%C3%ADxel). Pues cada uno de esos puntos debe calcular el punto de brillo que tienen a partir de prender [el rojo, verde o azul. (Red, Green, Blue = RGB)](https://es.wikipedia.org/wiki/RGB) y ese brillo tiene que calcularse al mismo tiempo.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/35/Pixeles_de_telefono.jpg/330px-Pixeles_de_telefono.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/P%C3%ADxel*

Anteriormente en el pasado una imagen cargaba como una línea, luego de otra linea de pixeles y eso es procesamiento serial, lo que haría una CPU. Que la imagen de repente cargue y valla cambiando dinámicamente es [procesamiento paralelo](https://www.ibm.com/es-es/think/topics/parallel-computing), esa es la magia de una GPU.

> Tu puedes ver los pixeles: los de un teléfono, sobre todo un telefono moderno... Son muy chiquitos porque son microscópicos, por más que acerques el ojo no lo alcanzas a ver, pero si tienes un monitor de toda la vida sin tanta resolución, puedes acercar los ojos a la pantalla.... Podras ver las lineas de rojo, verde y azul con tus ojos humanos.

Video Recomendado: https://www.youtube.com/watch?v=cId5PMLKEK8

---

[NVIDIA](https://www.nvidia.com/es-la/) y [ATI](https://es.wikipedia.org/wiki/ATI_Technologies), que luego fue adquirida por [AMD](https://www.amd.com/es.html), crearon esta industria de las [tarjetas gráficas](https://es.wikipedia.org/wiki/Tarjeta_gr%C3%A1fica "Tárjeta Gráfica concept by Wikipedia"), de hecho si no fuera por esta industria, no habria crecido la industria de los videojuegos, una consola de videojuegos en esencia es una computadora que tiene todas las partes de una computadora por dentro, pero cuyo su sistema operativo esta especificamente optimizado para la reproduccción de videojuegos.

Y sus chips incluyen GPUs por supuesto.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Sapphire-Radeon-HD-5570-Video-Card.jpg/500px-Sapphire-Radeon-HD-5570-Video-Card.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Tarjeta_gr%C3%A1fica*

---

Cuando hablamos de [Sistemas Operativos](#qué-es-un-sistema-operativo), vimos un poco sobre [interrupciones](https://es.wikipedia.org/wiki/Interrupci%C3%B3n): Mecanismos del OS para darle prioridad de unos procesos contra otros por eso cuando tu computadora esta muy colgada haciendo un proceso muy complejo, tu mouse se puede mover a alta velocidad porque el mouse tiene una alta prioridad en la jerarquia.

Cuando se procesa una pantalla imaginate que la GPU se cuelgue y solamente tengas imagen en el 75% de la pantalla y el resto se quede quieto, seria raro ¿No?

Asi que las GPUs fueron originalmente diseñadas para que toda la pantalla tenga la misma prioridad a traves de un sistema llamado [pipelines](https://en.wikipedia.org/wiki/Graphics_pipeline) que en resumen, los primeros circuitos de GPU eran sencillos... donde simplemente estaban encargados de sectores en la pantalla en donde todos los sectores de la pantalla tienen la misma prioridad y todos deben presentar una imagen.

No eran versátiles de programar, pero por la [ley de moore](https://es.wikipedia.org/wiki/Ley_de_Moore) a medida de que aumentaba exponencialmente la complejidad de los transistores empezaron a emerger características como la de generación de texturas, se programaron shaders, luces y cálculos de física porque es todo lo que necesitaba procesamiento paralelo, como pasa mucho en los videojuegos se podia pasar en estos cientos de miles de núcleos que hacen cálculos paralelos de alta velocidad.

<img src="https://upload.wikimedia.org/wikipedia/commons/9/90/Ley_de_Moore.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Ley_de_Moore*

Entonces asi, emergió un nuevo tipo de computación paralela que es la forma en la que funciona toda la industria de los efectos especiales, de los video juegos, de la animación.

> Es interesante pensar entonces, de los ivdeojuegos como una simulación de la vida real en donde hay unos cálculos físicos que se estan realizando todo el tiempo.

Video Recomendado para Analizar el Mundo de un Juego (Es un juego como tal, pero se puede analizar desde perspectivas computacionales las cuales simulan la física): 
**BLACK MYTH WUKONG Gameplay Walkthrough FULL GAME 100% (4K 60FPS) No Commentary** - https://www.youtube.com/watch?v=_R5IdnlZ0R4

Pero como necesitan nunca trabarse, no puede usar la memoria RAM tradicional que en una computadora esta muy lejos del chip (Esto es mucho antes de los System on a Chip que tienen todo integrado.)

Asi que las GPUs son tarjetas que, además de tener estos procesadores gráficos tienen una memoria especial independiente y esa memoria se le conoce como [VRAM y es la memoria de RAM de Video. ](https://www.lenovo.com/co/es/glosario/memoria-de-video/ "VRAM concept by Leonovo")

Una memoria volátil especialmente para esa computación paralela. Asi que cuando uno empieza a jugar videojuegos, uno carga datos en la VRAM asi que ahí es donde se cargan las texturas de tu videojuego, los polígonos y todos esos cálculos de física que vas a usar cuadno estás jugando un juego tridimensional.

A continuación una imagen de Drake (Uncharted 2: El reino de los ladrones, Playstation 3 - 30.000 Poligonos)

<img src="https://mediamaster.vandal.net/i/620x395/4-2014/201441116398_1.jpg">

*Imagen Tomada De: https://mediamaster.vandal.net/i/620x395/4-2014/201441116398_1.jpg*

---

**¿Qué otras cosas requieren procesamiento paralelo?**

Por ejemplo: El mundo.

Cuanto tú quieres modelar el sistema de las nubes para poder predecir el clima. Necesitas el procesamiento paralelo para predecir el clima y asi entonces un procesamiento paralelo de muchísimas variables al mismo tiempo.

<img src="https://services.meteored.com/img/article/-247062-hasta-cuantos-dias-de-antelacion-se-puede-predecir-el-tiempo--136281-6_1280.jpg">

*Imagen Tomada De: https://www.tiempo.com/ram/247062/hasta-cuantos-dias-de-antelacion-se-puede-predecir-el-tiempo/*

Siendo asi las GPUs ideales para simulación.

Hubo una época en las que investigadores que creaban supercomputadoras para simulaciones de física, de estrellas, agujeros negros, etc...

La física que rige estrellas, galaxias, agujeros negros, materia oscura, energía oscura o la expansión cósmica implica ecuaciones extremadamente complejas (como las de la relatividad general, termodinámica de gas, dinámica de fluidos, campos magnéticos, etc.).

Estas ecuaciones no tienen soluciones simples y requieren calcular millones o billones de interacciones simultáneas.

Eso sólo es posible con [supercomputadoras de alto rendimiento (HPC)](https://www.ibm.com/es-es/think/topics/hpc "HPC concept by IBM"), capaces de realizar billones de cálculos por segundo para aproximar la realidad física.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/The_catalyst_high_performance_computing_%28HPC%29.jpg/1200px-The_catalyst_high_performance_computing_%28HPC%29.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Archivo:The_catalyst_high_performance_computing_%28HPC%29.jpg*

Lectura Recomendada:

* Frontier - La simulación computacional del universo: https://www.universetoday.com/articles/a-superfast-supercomputer-creates-the-biggest-simulation-of-the-universe-yet

* La Supercomputadora FRONTIER presenta la simulación del universo más gramde jamás realizada: https://www.youtube.com/watch?v=WpUZmXpVIDA

* Stampede2 - Utilizadas para simular sombras y entornos alrededor de agujeros negros, incluyendo los discos de gas turbulentos que los rodean: https://www.universetoday.com/articles/researchers-simulate-what-a-black-hole-shadow-look-like 

* New NASA Black Hole Visualization Takes Viewers Beyond the Brink: https://science.nasa.gov/universe/black-holes/supermassive-black-holes/new-nasa-black-hole-visualization-takes-viewers-beyond-the-brink/

> Esto me hace pensar entonces qué: **¿Qué uso le das a tu computadora en tu día a día?** Pues teniendo en cuenta lo hablado, por medio de las matemáticas y la computación se pueden realizar diferentes modelos computacionales para hacer predicciones. ¿Te imaginas una predicción sobre el desarrollo humano? Da miedo con pensarlo.

> ¿Cómo será la vida de un trabajador de la [NASA](https://www.nasa.gov/ "www.nasa.gov")? Y quienes serán los ejecutivos de esta gran organización? Pienso que en cualquier lado de forma universal se le puede reconocer aunque no se tenga tanto conocimiento de esta.

Se dieron cuenta que el Chip de la [PlayStation 3](https://www.playstation.com/es-co/playstation-history/2007-ps3-ps-vita/) [un chip reado por IBM que combinaba CPU y GPU](https://www.xataka.com/videojuegos/procesador-cell-utilizado-sony-playstation-3-pequeno-prodigio-tecnologia-que-hoy-asombra-su-potencia "Chip de PS3 creado por IBM - Explicación by Xataka") para los videojuegos de PS3 era increiblemente eficiente, y como en el ps3 se puede instalar linux de toda la vida empezaron a comprar PS3 en masa y a crear [clústeres](https://www.salesforce.com/mx/blog/clusteres/ "Explicación Clústeres by SalesForce") de PlayStation con Linux para hacer simulaciones y fabricar supercomputadoras mucho más barato de lo que cuesta una supercomputadora porque a la final del día **Un videojuego es una simulación del mundo real** asi que sirve perfectamente para la física.

Video Recomendado - La PS3 usaba el procesador Cell Broadband Engine: https://www.dailymotion.com/video/x9gtlqe

Lectura Recomendadas:

* https://en.wikipedia.org/wiki/PlayStation_3_cluster

* https://www.infobae.com/tecno/2025/02/26/construyen-una-supercomputadora-con-1760-playstation-esta-es-la-historia-que-dejo-a-muchos-sorprendidos/

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/10/CondorCluster.png/500px-CondorCluster.png">

*Imagen Tomada De: https://en.wikipedia.org/wiki/PlayStation_3_cluster*


Porque el dinero: [Sony](https://www.sony.com.co/homepage), [Microsoft con el Xbox](https://www.xbox.com/es-CO/), [Nintendo](https://www.nintendo.com/es-es/) (Nintendo si hace dinero con las consolas). Sony y Microsoft no hacen dinero con sus consolas pues lo venden a perdida y ganan dinero con la venta de videojuegos.

PS3 era vendido a perdida.

Asi que playStation estaba perdiendo dinero haciendo todas estas consolas para las que nunca se iban a comprar videojuegos porque las estaban usando científicos, por lo que dejaron de permitir esto.

> La computación científica corría en PlayStation.

La inteligencia artificial también es procesamiento paralelo pues cuando tu utilizas un lenguaje de inteligencia artificial para generar un texto el modelo de lenguaje empieza a recorrer un arbol gigantesco de la esctructura del lenguaje humano con el que fue entrenado.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Colored_neural_network_es.svg/500px-Colored_neural_network_es.svg.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Red_neuronal_artificial*

Lectura Recomendada: https://www.ibm.com/es-es/think/topics/deep-learning

Asi mismo trata de encontrar diferentes caminos para responder una pregunta. La que tu le haces a [ChatGPT](https://chatgpt.com/ "https://chatgpt.com/") o a [DeepSeek](https://chat.deepseek.com/ "https://chat.deepseek.com/"), a [claude](https://claude.ai/ "https://claude.ai/") o a [Gemini](https://gemini.google.com/ "https://gemini.google.com/") o a cualquier modelo que utilices.

<img src="https://planetachatbot.com/wp-content/uploads/2023/12/2.png">

*Imagen Tomada De: https://planetachatbot.com/estudio-exhaustivo-de-grandes-modelos-lenguaje/*

El punto es que el procesamiento paralelo ocurre con GPUs originalmente, eventualmente empezamos a utilizar chips más especializados.

Inicialmente los primeros modelos de AI antes de la superinteligencia, fueron entrenados en GPUs.

---

[Los autos autónomos](https://www.mapfre.com.co/seguros-carros/preguntas-frecuentes/que-son-los-vehiculos-autonomos/ "Autos Autónomos concept by Mapfre") como los [Tesla](https://www.tesla.com/es_co) o [Waymo de Google](https://waymo.com/intl/es/) usan GPUs, porque asi una GPU tiene que procesar cada píxel de una pantalla, un automóvil usa las cámaras y los radares que tiene en el marco del automóvil en su estructura para capturar imágenes del mundo exterior.

Todo esto tiene que ser procesado en tiempo real para convertirla en los polígonos tridiomensionales que le permiten a un algoritmo de inteligencia artificial decidir si el auto va a frenar, acelarar o moverse.

<img src="https://storage.googleapis.com/waymo-prod-cdn/uploads/6766134c37d8067dbd109f39419595db-16-9-timeline-gif.gif">

*Imagen Tomada De: https://waymo.com/blog/2023/01/why-i-ride-with-waymo-maya

Sin GPUs, ese procesamiento paralelo de alta velocidad, de cálculos relativamente simples, pero **Millones al mismo tiempo** no sería posible.

---

Las CPUs ejecutan instrucciones en lenguaje máquina, y el software de bajo nivel que las inicializa suele escribirse en lenguaje ensamblador. Este código es el encargado de iniciar el proceso de arranque (boot), cargar el kernel y dar comienzo al sistema operativo.

Las aplicaciones que se programan en lenguajes como [C++](https://es.wikipedia.org/wiki/C%2B%2B), [Python](https://www.python.org/), [Visual Basic](https://es.wikipedia.org/wiki/Visual_Basic) entre otros... Todos esos lenguajes compilan al lenguaje ensamblador de la CPU, las GPUs tienen algo muy parecido.

Y fabricantes como [NVIDIA](https://www.nvidia.com/es-la/) han creado lenguajes intermedios para que los programadores le hablen al metal para asi poder programar el chip de la GPU, el más popular en este momento se llama [CUDA de NVIDIA](https://es.wikipedia.org/wiki/CUDA), inicialmente pensada para videojuegos.

CUDA es parte de la razón por la que la revolución de la AI es posible pues permite hacer estos cálculos masivos reprogramando el comportamiento de chips que originalmente fueron pensados para mover pixeles.

Lectura Recomendada: https://www.lenovo.com/co/es/glosario/cuda-toolkit/

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Nvidia_CUDA_Logo.jpg/406px-Nvidia_CUDA_Logo.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/CUDA*

Las GPUs también se programan y se diseñan a nivel físico de hardware con consideraciones distintas: La CPU que es el procesador que arranca el OS está en el corazón de la tarjeta madre de una computadora o de la tarjeta central de un teléfono, pero la GPU se conecta a alta velocidad a través de un puerto que se llama [PCI-E](https://es.wikipedia.org/wiki/PCI_Express "PCI-E concept by Wikipedia").

Una serie de muesquintas que se conectan directamente a la electrónica de la tarjeta madre, en un telefóno o en un computador de apple que utilice System on a Chip, la GPUs estan directamente pegadas a la CPU en el SOC.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/PCI-Express-Bus-1-lane.jpg/500px-PCI-Express-Bus-1-lane.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/PCI_Express*

En una computadora normal, [la CPU tiene un ventilador o un sistema de refrigeramiento por agua que enfría la CPU](https://es.wikipedia.org/wiki/Enfriamiento_de_computadoras "Enfriamiento de Computadoras by Wikipedia"), pero las GPUs también se calientan, así que tienen sus propios sistemas de enfriamiento paralelo.

Lectura Recomendada: https://www.sciencedirect.com/science/article/abs/pii/S0306261917310541

Sus propios ventiladores o su propia refrigreración de agua, en algunos casos como en las computadoras de videojuegos más poderosas, o en las computadoras de render de efectos especiales (VFX), o en las supercomputadoras de simulación para efectos científicos, llegan a enfriarlas con aceite, el aceite no conduce electricidad asi que hay computadoras que se hunden en aceite para que el aceite disipe el calor. 

Lectura Recomendada: https://www.kingston.com/es/blog/gaming/mineral-oil-cooling-pc-builds

<img src="https://www.profesionalreview.com/wp-content/uploads/2021/03/PC-refrigerado-por-inmersion.jpg">

*Imagen Tomada De: https://www.profesionalreview.com/2021/03/14/refrigeracion-por-inmersion/*

<img src="https://i.blogs.es/159ef2/aceite_refrigerantepc/1366_2000.jpg">

*Imagen Tomada De: https://www.xataka.com/ordenadores/refrigeracion-por-aceite*

---

**Codecs**

Im Codificador-Decodificador. Un tipo de algoritmo de compresión y descompresión que es por ejemplo, la forma en la que funciona el video. Anteriormente los videos eran súper pesados y ahora son mucho más livianos. Antes teniamos [blu-rays](https://es.wikipedia.org/wiki/Disco_Blu-ray) y ahora tenemos youtube y netfix.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/BluRayDiscBack.png/500px-BluRayDiscBack.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Disco_Blu-ray*

Esos algoritmos gastan muchísimo el chip, antes utilizaban la GPU, y mucho más antes la CPU. Ahora usan transistores especializados dentro de la GPU como instrucciones que solamente se encargan de codificar y descodificar el video. Usando mucho menos electricidad.

Lo mismo pasa con la simulación de ciertos video juegos.

---

Los videojuegos empezaron a simular el comportamiento de los [fotones](https://es.wikipedia.org/wiki/Fot%C3%B3n) del mundo real, el comportamiento de la luz con una técnica llamada [ray tracing](https://es.wikipedia.org/wiki/Trazado_de_rayos "Ray Tracing by Wikipedia") que inicialmente se programaba en código, pero ahora se crean en el transistor, en los chips y la GPU tiene unidades especificas diseñadas para [ray tracing](https://www.lenovo.com/co/es/glosario/ray-tracing/ "Ray Tracing by Lenovo").

> Black Myth: Wukong RTX ON.

Video Recomendado: Gameplay sin comentarios de Black Myth Wukong - https://www.youtube.com/watch?v=T4DFKOlrXCQ

<img src="https://i.blogs.es/0bc8f8/black-myth-wukong-fondos-pantalla-2049705/650_1200.jpeg">

*Imagen Tomada De: https://www.xataka.com/videojuegos/black-myth-wukong-arrastra-a-steam-su-exito-masivo-plataforma-ha-batido-su-record-historico-jugadores*

Con la inteligencia artificial para lo mismo. Pues la AI es en esencia multiplicación de matrices y recorrido de árboles, eso se puede programar en el chip y es la esencia de las [unidades de procesamiento neural](https://www.xataka.com/basics/npu-que-sirve-este-tipo-procesador).

NVIDIA por ejemplo, tiene chips que solamente hacen eso.

---

Antes de que la AI consumiera grandes cantidades de chips gráficos, lo hizo las [criptomonedas](https://www.bancosantander.es/glosario/criptomoneda "Criptomonedas by Banco Santander"): Bitcoin y cada moneda de [BlockChain](https://www.blockchain.com/es/) requiere hacer un cálculo matemático muy particular para que el blockchain funcione de manera cifrada. Ese cálculo es más amigable en procesamiento paralelo que en procesamiento serial. Asi que aprovecha las GPUs y como Bitcoin recompensa con Criptomonedas a las personas que hacen este proceso de ejecutar las ecuaciones matemáticas llamado [Criptomineria](https://es.wikipedia.org/wiki/Miner%C3%ADa_de_bitcoin "Criptomineria by Wikipedia"), se creó toda una industria de minería de Bitcoin que es poner a correr estas GPUs al maximo en grandes granjas de servidores pegadas a granjas de hirdroeléctricas, plantas de energia nuclear, energia basada en gas, etc...

Hay paises enteros que tienen cosas asi, como por ejemplo El Salvador, eso hizo que la demanda de Chips aumentara justo antes de que llegara la inteligencia artificial.

Lectura Recomendada: 

* https://www.c3controls.com/es/documento-tecnico/planificacion-de-una-operacion-de-criptomineria

* https://bitcoin.org/bitcoin.pdf

* https://www.xataka.com/servicios/bitcoin-la-tecnologia-detras-de-la-moneda-p2p

> Interesante paginas como https://www.coinbase.com/es-la

> Un rig de criptominería puede entenderse como un pequeño clúster de GPUs,
donde cada GPU ejecuta cálculos de [hashing](https://www.ionos.com/es-us/digitalguide/paginas-web/desarrollo-web/hashing/) de forma independiente,
un ejemplo clásico de computación masivamente paralela.

<img src="https://static.eldiario.es/clip/a25a5f72-f95d-434b-b2b6-c866ba4f200f_16-9-discover-aspect-ratio_default_0.webp">

*Imagen Tomada De: https://www.eldiario.es/tecnologia/fiebre-criptominera-reduce-precios-tarjetas-graficas-ordenadores_1_9289500.html*

---

No es como que las GPUs hayan abandonado la industria de los videojuegos pues todavia hay mucha innovación.

[VALVE](https://www.valvesoftware.com/es/): La empresa detrás de juegos como Portal, Half Life y el Sistema STEAM, tiene un sistema operativo llamado [SteamOS](https://store.steampowered.com/steamos?l=spanish) que reemplaza el OS que corres en tu computadora para maximiar el uso de recursos para un videojuego de tal manera que tu computadora se vuelve en esencia una consola de videojuegos.

Lectura Recomendada: 

* https://es.wikipedia.org/wiki/Valve_Corporation

* https://es.wikipedia.org/wiki/SteamOS


Tambien la realidad aumentada y la realidad virtual han aumentado la necesidad de procesadores gráficos porque en cada ojo estas procesando dos pantallas distintas para crear esa sensación de tridimensionalidad y presencia que tiene la realidad virtual, asi que aun sigue habiendo mucha innovación gráfica sólo que la IA lo absorbió mucho y todavía tenemos mucho procesamiento científico que hacer.

<img src="https://a.storyblok.com/f/102932/600x338/b2c03b0823/apple-vision-pro-gif.gif">

*Imagen Tomada De: https://creative.salon/articles/features/apple-vision-pro-and-adland*

> la Realidad Virtual (RV) te sumerge en un mundo completamente digital y te aísla del real (ej. cascos que bloquean tu vista), mientras que la Realidad Aumentada (RA) superpone elementos digitales como las Apple Vision Pro

**Las GPUs son un procesador revolucionario que avanzó la ciencia humana.**











---











## Qué es un Algoritmo y Qué es un Lenguaje de Programación

Un [algoritmo](https://es.wikipedia.org/wiki/Algoritmo "Algoritmo concepto by Wikipedia") es un conjunto de pasos logicos claramente definidos de una manera no ambigua para resolver un problema o lograr un objetivo.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/bd/LampFlowchart-es.svg/500px-LampFlowchart-es.svg.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Algoritmo*

Como por ejemplo: 

Imaginemos un sistema de aire acondicionado. Que de forma simplificada es un sistema que hace dos cosas: Calientan o enfrían el aire.

<img src="https://www.lacasadelelectrodomestico.com/blog/wp-content/uploads/2024/07/como-funciona-el-aire-acondicionado.jpg">

*Imagen Tomada De: https://www.lacasadelelectrodomestico.com/blog/como-funciona-aire-acondicionado/*

Pero una vez el aire esta caliente o frio, el siguente paso es distribuirlo al rededor del área que quieres condicionar asi que tienes que ventilar el aire.

Y si el aire ya está a la temperatura deseada por el usuario, tienes que dejar de ventilar el aire sino vas a perder esa temperatura.

Entonces para eso, los aires acondicionados utilizan un [termostato](https://es.wikipedia.org/wiki/Termostato) el cual esta constantemente midiendo la temperatura del aire comparada con la que el usuario tiene.

**¿Cómo entonces expresamos todas estas funciones de una manera algoritmica?**

1. Tenemos que definir nuestras variables por lo que, al tener nuestro termostato... Este sabe dos cosas: La temperatura actual, definida como **Temperatura** y la temperatura que el usuario quiere definida como **Usuario**.

Vamos a asumir que el lugar donde estamos esta a veinte grados y que la temperatura que el usuario quiere es de 24 grados.

2. Tenemos que definir si tenemos que calentar o enfriar, asi que debemos crear una condición en donde si la temperatura es menor que la que el usuario quiere **¿Qué tenemos que hacer?**.

    ```si (temperatura < usuario)```
 

Por lo que teniendo en cuenta lo que hemos asumido si

        (20) < (24)
    
Significa que está más frio asi que tenemos que activar el aire acondicionado en modo calentador. Es decir, calentar el aire.

¿En qué logramos parar de ventilar?, Digamos que la ventilación es un proceso que ocurre cada segundo y digamos que nuestro sistema está corriendo un ciclo cada segundo.

Por ende podemos expresar de forma algoritmica que en cada ciclo se esta evaluando el sistema, por ende si la temperatura es menor que la que pide el usuario, calentamos y sino lo que deberiamos hacer es enfriar.

Por ende, ¿Siempre deberiamos estar ventilando? No. ¿Qué pasa si la temperatura está perfecta? o Si:

    (temperatura = usuario) 
    
pues ventilar sería un problema para el usuario por ende sólo vamos a ventilar cuando la temperatura sea distinta.

Por ende, hagamos que el ciclo cada vez que se repita pregunte si la temperatura es igual a la del usuario, es decir:

    temperatura != usuario

Por ende: 

> Ciclo

    MIENTRAS (temperatura != usuario) 

>hacemos la condición 

    Si (temp < usuario) 
        calendar ()
    Sino
        Enfriar ()

    Ventilar ()

> Este ciclo sólo va a ocurrir en el momento que la temperatura sea diferente a la que desea el usuario y sino la sacamos. Esto ocurre en cada segundo en el ciclo de un aire acondicionado.

---

Hay algoritmos más simples. Como un [hervidor](https://es.wikipedia.org/wiki/Jarra_el%C3%A9ctrica "Hervidor concept by Wikipedia") que tiene que hervir el agua hasta los 100 grados centigrados lo que hace una vez este lleno de agua, al oprimir el boton... Muy probablemente la electrónica de tu hervidor dice: Mientras el Agua sea de Menor Temperatura a 100 Grados manten el elemento de calor calentando de tal manera que, cuando sea mayor de cien grados ese mientras deja de funcionar y al terminar de funcionar el ciclo se apaga.

O en otras palabras, más técnicas y algoritmicas.

    Mientras temperatura_actual < 100 Hacer
        activarElementoCalor()
        esperar(1 segundo)
        temperatura_actual < medirTemperatura()
    Fin Mientras

    ApagarElementoCalor()

Siendo asi este, un algoritmo.

Entonces un algoritmo es una serie de instrucciones, una expresión matemática de las ordenes que se le puede dar a un sistema.

---

Un [](https://www.lenovo.com/es/es/glossary/programming-language/ "Lenguaje de Programación concept by Wikipedia") no es necesariamente un algoritmo, los lenguajes de programación son lenguajes los cuales los algoritmos se expresan.

Pero tu puedes expresar un algoritmo como quieras.

Cuando te den una serie de instrucciones para completar una tarea, una serie de procesos que te den para tu trabajo... Eso es un algoritmo para que tú ejecutes y tu no eres un lenguaje de programación.

Los lenguajes de programación son mecanismos escritos típicamente en un lenguaje inglés adaptado, como por ejemplo: [Javascript](https://aws.amazon.com/es/what-is/javascript/ "JavaScript concept by AWS"), [Python](https://www.python.org/ "Python.org"), [C++](https://es.wikipedia.org/wiki/C%2B%2B# "C++ concept by Wikipedia"), Visual Basic, etc...

Lecturas Recomendadas:

    JavaScript

* https://es.wikipedia.org/wiki/JavaScript

* https://aws.amazon.com/es/what-is/javascript/

* https://developer.mozilla.org/es/docs/Web/JavaScript

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f7/Ejemplo_de_c%C3%B3digo_JavaScript.jpg/500px-Ejemplo_de_c%C3%B3digo_JavaScript.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/JavaScript

    Python

* https://www.python.org/

* https://aws.amazon.com/es/what-is/python/

* https://es.wikipedia.org/wiki/Python

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CPT-TheoryOfComp-Binary-Search-Python.png/500px-CPT-TheoryOfComp-Binary-Search-Python.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Python*

    C++

* https://i.workana.com/glosario/que-es-c/

* https://es.wikipedia.org/wiki/C%2B%2B

* https://msmk.university/que-es-c-en-programacion/

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Hello_World_C%2B%2B.png/500px-Hello_World_C%2B%2B.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/C%2B%2B*

    Visual Basic

* https://es.wikipedia.org/wiki/Visual_Basic

* https://learn.microsoft.com/es-es/dotnet/visual-basic/

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/65/VBAicon.png/500px-VBAicon.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Visual_Basic*

Que transforman estas instrucciones en el lenguaje de la máquina, siendo este el lenguaje que usan los chips para hacer estas operaciones matemáticas y este es conocido como [Assembler o Lenguaje de Ensamblado o Lenguaje Ensamblador](https://es.wikipedia.org/wiki/Lenguaje_ensamblador).

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Motorola_6800_Assembly_Language.png/500px-Motorola_6800_Assembly_Language.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Lenguaje_ensamblador*



---

En nuestra era moderna, los lenguajes corren en el chip de dos maneras.

Hay un tipo de lenguajes como por ejemplo [Java](https://www.java.com/es/) o C o C++ que cuando se transforman al lenguaje de máquina pasan por un proceso de compilación que es transformar ese lenguaje legible por humanos en el lenguaje de ceros y unos de la CPU.

El resultado de la compilación es un archivo ejecutable. En Windows son los archivos que tienen la extensión .EXE, en linux o en mac son los archivos que tienen permisos de ejecución y son los ejecutables, las aplicaciones arrancan como una app, que corren como un mecanismo del sistema.

El otro mecanismo son los lenguajes interpretados o interpretación. Cuando tu corres Javascript en el navegador o cuando usas algunos lenguajes de scripting como por ejemplo Python, estos lenguajes son interpretados sobre la marcha... Es decir que se leen línea a línea y en la memoria RAM, la computadora y su interprete (Interprete de Javascript o JS) por ejemplo, el navegador.

El interprete de python es el sistema de ejecución en tiempo real de Python, que se llama Python.

Ellos lo que hacen es transformar línea a línea el código a código que corre en el chip, pero sin compilarlo.

---

Existe una técnica interesante que se llama [JIT - Just in Time Compiler](https://en.wikipedia.org/wiki/Just-in-time_compilation) que lo que hace es compilar justo antes de ejecutar corriendolo todo en la memoria RAM de una manera segura.

Lecturas Recomendadas: 

* https://developer.mozilla.org/en-US/docs/Glossary/Just_In_Time_Compilation

* https://www.ibm.com/docs/es/sdk-java-technology/8?topic=reference-jit-compiler

Aprender cualquier lenguaje de programación conviene mucho, no hay que casarse con un lenguaje de programación porque estos cambian... No hay un lenguaje de programación mejor que otro, no porque sepas uno, dos, tres, cinco o diez lenguajes te hace mejor o peor ingeniero. **Lo importante es lo que haces con los lenguajes.**

Aprender lenguajes es trivial, realmente trivial. En el momento que domines dos lenguajes, puedes dominar tres, cuatro, cinco o diez, los que se deseen aprender.

No se trata de aprender muchos lenguajes y no hay lenguajes que paguen mejor que otros. **Es simplemente que sepas cómo solucionar cualquier problema a través de algoritmos y que esos que esos algoritmos sepas expresarlos en diferentes lenguajes.**

> Ten curiosidad intelectual y no te cases con ningún lenguaje. 

A continuación ilustración animada del proceso de un algoritmo de ordenación de números.

<img src="https://upload.wikimedia.org/wikipedia/commons/9/94/Selection-Sort-Animation.gif">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Algoritmo*










---










# Redes e Internet









## Direcciones IP y el protocolo de Internet

Asi como tu casa tiene una dirección como carrera 1, 2, 3... de la calle 8. Todas las computadoras en internet en una [red local](https://www.godaddy.com/resources/latam/tecnologia/que-es-una-red-lan "LAN concept by godaddy") tienen una dirección. Estas se conocen como [direcciones IP](https://www.lenovo.com/co/es/glosario/direccion-ip/ "Direcciones IP concept by Lenovo") y vienen tipicamente como 4 grupos de números como por ejemplo: 128.10.2.5

<img src="https://www.cloudflare.com/resources/images/slt3lc6tev37/78rJr5URxwDD9uyxKNpsiJ/d220f31e4b59c89290f04eed689ab5bb/what_is_LAN_diagram.png">

*Imagen Tomada De: https://www.cloudflare.com/es-es/learning/network-layer/what-is-a-lan/*

Lecturas Recomendadas:

* https://www.cloudflare.com/es-es/learning/network-layer/what-is-a-lan/

* https://www.avast.com/es-es/c-what-is-lan

* https://www.ibm.com/docs/es/cics-ts/5.5.0?topic=concepts-ip-addresses

* https://www.hostinger.com/co/tutoriales/que-es-una-direccion-ip

¿Por qué son 4 números y no 5 u otro número? ¿Por qué cada uno de estos números va del 0 al 255 y no más allá?, ¿Por qué no podemos usar 4 números fuera de una red local Porque en internet necesitamos utilizar otros tipo de números?

Recordando que en una computadora todos los números son ceros y unos. Siendo un cero o un uno un bit. Y un grupo de esos bits es un byte.

Entonces: Un byte es un grupo de 8 bits.

Y hasta ahora asi funcionan las computadoras.

En un Número/Dirección IP, IP significa Internet Protocol o protocolo de internet, lo que haciamos fue organizar estos números en grupos de 4 numeros teniendo diferente significado, pero principalmente son: ¿Donde está ubicada nuestra computadora?

¿Por qué son entonces estos números?

¿Por qué son 4 bytes, 4 números de 8 bits?

Con 8 bits ¿Cual es el máximo número que podemos representar?

Es el 255, en los bytes podemos tener 256 números siendo asi del 0 al 255 y por eso tenemos ese máximo número dentro de una IP.

Si nosotros tomamos esos 4 bytes y los expandiéramos solamente a ceros y unos , ¿Cuantos ceros y unos tendríamos? Si son entonces 4 grupos, cada uno tiene 8 bits, quiere decir que es 8 por 4, es decir que tendriamos 32 bits por lo que las direcciones IP tienen un máximo de 32 bits siendo asi 32 ceros y unos.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Ipv4_address_Spanish.svg/500px-Ipv4_address_Spanish.svg.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Direcci%C3%B3n_IP*

> Me encontré con este documento: https://datatracker.ietf.org/doc/html/rfc791

Que visualmente agrupamos en 4 números decimales normales expresados por su valor en bytes devididos por un punto. Están separados cada uno por un .

Todo esto ocurrió cuando internet todavía era un experimento militar de una organización que es [la Agencia para el Desarrollo y de Investigación Avanzado de la Defensa, conocida como DARPA](https://www.darpa.mil/ "www.darpa.mil").

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ce/DARPA_Logo_2010.png/330px-DARPA_Logo_2010.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Agencia_de_Proyectos_de_Investigaci%C3%B3n_Avanzados_de_Defensa*

Lecturas Recomendadas:

* https://www.innovaciondigital360.com/iot/darpa-que-es-como-esta-organizada-y-que-hace-la-agencia-estadounidense/

* https://www.esade.edu/es/articulos/por-que-europa-necesita-una-darpa

DARPA se inventa esta estructura, como estructura de prueba para internet, pero luego internet se vuelve super popular y simplemente lo mantienen hasta que los números se acaban que... Con 32 bits ¿Cuanto es la cantidad de números que podemos guardar? Son 4.300.000.000 de números y como cada dispositivo conectado a internet tiene que tener un número único... Porque ya hace mucho tiempo que ya tenemos más de 4.300.000.000 Dispositivos, porque eso significa cada servidor, cada computador, cada teléfono, cada reloj, cada dispositivo, todo requiere de una dirección IP única.  

Y en internet esas direcciones IP no simplemente cuando apago un computador tengo una dirección ip y cuando prendo el computador tengo otra.

Y algunas sobre todo cuando son servidores, tienen que ser únicas y persistentes, ese es parte del problema por lo que entonces, se nos acabaron esas direcciones.

El problema de que se nos van a acabar las direcciones se conoce desde 1998 porque se encontró que habia la necesidad de crear otro estandar siendo asi el IPv6 asi como el anterir que era IPv4 de 4 bytes y ahora tenemos 6. No exactos, pero los hay.

Sabiendo que esto era un problema, desarrollamos este estándar siendo este ratificado en el 2017.

---

El estandar IPv6 fue diseñado para tener muchos ordenes de magnitud, más espacio. Porque en vez de tener 32 bits, lo cuadruplicamos y ahora tenemos 128 bits. 

Lecturas Recomendadas:

* https://www.xataka.com/basics/ipv6-que-sirve-que-ventajas-tiene

* https://www.ibm.com/docs/es/power10/9028-21B?topic=networking-ipv6

* https://www.ionos.es/digitalguide/servidores/know-how/ipv6-los-beneficios-del-nuevo-protocolo-de-internet/

* https://docs.oracle.com/cd/E24842_01/html/820-2981/ipv6-overview-8.html

Al tener muchos 2 bits 4 veces más tenemos una mayor cantidad de números porque es un número mucho más grande.

128 bits representan muchos numeros más allá afuera. Y las direcciones tambien se ven distintas.

Una dirección IPv6 que es la nueva versión tiene 8 grupos de números que se representan con 4 dígitos hexadecimales.

<img src="https://upload.wikimedia.org/wikipedia/commons/1/1a/Ipv6_address-es.svg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Direcci%C3%B3n_IPv6

> Los números hexadecimales son una base numérica asi como nosotros tenemos la base binaria que son solo 0 o 1, o la base decimal tiene dígitos del 0 al 9 y la hexadecimal tiene del 0 a la f.

> Base Hexadecimal: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, A, B, C, D, E, F 

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/Hexadecimal-counting.jpg/412px-Hexadecimal-counting.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Sistema_hexadecimal

En IPv6 o en la versión 6 de las direcciones IP pasa algo curioso y es que aveces esos números son tan grandes que hay pedazos del grupo de esos numeros que no se usan que son puros ceros.

Ejemplo:

IPV6 Dirección Completa: **6cca:31e3:2399:0000:0715:0000:2880:a942**

Cuando pasa eso, tendemos a comprimir la dirección colocando 2 puntos (**:**) entre esos grupos asi comprimiendolos y no tener que mostrar todos esos números 0.

Ejemplo con la misma dirección IPV6: 6cca:31e3_2399::0715::2880:a942

---

Darpa no creia que fuera a ser internet tan popular y nunca cambiaron la configuración de los números IP hasta que empezamos a tener demasiadas computadoras conectadas.

A lo largo de los años se han construido varias organizaciones y autoridades que se dedican a regular internet una de estas es [IANA = The Internet Assigned Numbers Authority o la Autoridad de Asignación de Números de Internet](https://www.iana.org/).

Lecturas Recomendadas:

* https://es.wikipedia.org/wiki/Internet_Assigned_Numbers_Authority

* https://www.ionos.es/digitalguide/servidores/know-how/iana-que-es-y-cual-es-su-funcion/

Esta autoridad es la que termina asignando las direcciones IP permanentes de diferentes computadoras en el mundo. 

Todo dispositivo que se conecte a internet es por definición una computadora. En ocasiones necesitamos que estos números IP sean fijos para que siempre apunten al mismo lugar. Estos numeros se pueden comprar y diferentes organizaciones los compran para que a partir de ahí, los tengan de una manera fija. 

Como por ejemplo cuando se ingresa a google.com pues este siempre va a tener la misma dirección IP. 

> Diferentes computadoras tienen diferentes direcciones IPs en internet.

---

Hay una diferencia entre tener números IP en internet y tener números IP en tu red local. Internet es una red global asi como la conexión local de tu casa la cual se conecta a tu router WiFi y ambas redes usan números IP de una manera distinta.

Las conexiones de red de tu casa se conectan al internet de allá afuera, al global donde estan los servidores, las redes sociales, sistemas de mensajeria, paginas web a todo lo que tu te conectas.

Pero internamente en tu casa te conectas a WiFi. Tu teléfono, tu computadora, tu televisor, cada dispositivo que se conecta a internet debe contener una dirección IP unica.

La IP de tu red local es distinta a la IP de Internet, por lo que en tu red local puedes tener una dirección ip que en otra red local sea exactamente igual, pero como solamente ocurre dentro del dominio o ambito de tu red local, es el lugar donde realmente importa ese número, asi que tu estas corriendo una IP local. 

Por lo que probablemente tu habras visto una IP que dice: 127.0.0.1 la cual es internacionalmente estandarizada como la dirección IP de tu propio dispositivo tambien conocida como Local Host. Esto es básicamente un apuntador de dirección de internet que sin importar en la computadora la cual tu estes siempre apunta hacia tu misma computadora desde donde estas usando ese 127.0.0.1

Lecturas Recomendadas: 

* https://www.freecodecamp.org/news/what-is-localhost/

* https://blog.hubspot.com/website/what-is-localhost

* https://www.hostinger.com/tutorials/what-is-localhost

* https://www.godaddy.com/resources/latam/stories/que-es-localhost-ip127001

<img src="https://www.freecodecamp.org/news/content/images/2022/06/ss3-6.png">

*Imagen Tomada De: https://www.freecodecamp.org/news/what-is-localhost/*

Sin importar las diferentes direcciones IP que tenga tu red local cuando tu teléfono o tu computadora necesitan conectarse a internet usan sus direcciones de IP local para ir al Router WiFi de tu casa y al módem que se conecta a internet y eso transforma la petición en la ip de internet de tu casa. Ese paquete de la IP de tu casa sale a internet, recupera el dato y tu router WiFi sabe de donde vino la petición de ese paquete y lo redirecciona a la IP de tu casa.

Esto lo hace internamente a través de algo llamado un NAT.

[NAT = Network Address Translation](https://es.wikipedia.org/wiki/Traducci%C3%B3n_de_direcciones_de_red "NAT concept by Wikipedia") y es una tecnología interna de todos los enrutadores o routers para transformar las peticiones de una red local hacia las peticiones de otra red externa que tipicamente es internet.

<img src="https://pandorafms.com/wp-content/uploads/2024/04/NAT-blog-1.png">

*Imagen Tomada De: https://pandorafms.com/es/it-topics/que-es-nat/*

Es importante cuanto estas desarrollando software entiendas los numeros IP porque asi entiendes de donde viene un mensaje, si tienes un problema del desarrollo de software, y simplemente es concoimiento básico de depuración y entendimiento de sistemas conectados que hoy en día son la gran mayoría de sistemas que programamos.

Por otro lado nosotros cuando programamos casi no usamos las direcciones IP sino que a cada IP le asignamos un nombre. Esto se conoce como nombre de Dominio.

Lecturas Recomendadas: 

* https://es.wikipedia.org/wiki/Traducci%C3%B3n_de_direcciones_de_red

* https://www.fortinet.com/lat/resources/cyberglossary/network-address-translation

* https://www.xataka.com/basics/que-nat-ventajas-desventajas-tipos-cual-se-usa-cada-caso










---










## Nombres de Dominio, DNS y cómo obtener un .com

Como todas las computadoras que estan conectadas a internet tienen un número IP y ese número es una larga cantidad de números que nadie se acuerda. Necesitamos una base de datos donde ponerles nombre. Asi esos números que pertenecen a una dirección IP les asignamos un nombre específico.

Esos nombres generalmente venian en un archivo que se compartía en los diferentes proveedores de internet, un archivo llamado host.

Lecturas Recomendadas: 

* https://www.adobe.com/es/acrobat/resources/document-files/text-files/hosts-file.html

* https://www.ionos.com/es-us/digitalguide/servidores/configuracion/archivo-hosts/

<img src="https://www.ionos.com/es-us/digitalguide/fileadmin/DigitalGuide/Screenshots_2018/hosts-datei-aufbau.png">

*Imagen Tomada De: https://www.ionos.com/es-us/digitalguide/servidores/configuracion/archivo-hosts/* 

Pero eso no escala porque ahora tenemos millones y millones de estos nombres. Asi que construimos una base de datos distribuida que está dominada por una serie de estándares y mecanismos internacionales.

Esa base de datos se le conoce como [nombres de dominio o DNS = Domain Name System.](https://www.shopify.com/es/blog/dns?term=sistema%20de%20nombres%20de%20dominio&adid=565882055162&campaignid=15436645087&bucket=domain_ES&gad_campaignid=15436645087 "DNS concept by shopify.com")

Lecturas Recomendadas:

* https://www.cloudflare.com/es-es/learning/dns/what-is-dns/

* https://aws.amazon.com/es/route53/what-is-dns/

DNS es lo que permite que un número practicamente aleatorio con las reglas de IPV4 o IPV6 sea exactamente equivalente como a youtube.com

Los nombres de dominio siguen algunas reglas, tipicamente permiten letras del idioma inglés, aunque ultimamente se pueden agregar Ñ o tildes aunque muy poca gente lo usa. Tipicamente no inicia con un número, inicia con una letra (En ocasiones es posible) y por ultimo los nombres de dominio no distinguen entre mayúsculas y minúsculas.

En ese sentido son relativamente similares al os nombres de variable en varios lenguajes de programación.

<img src="https://kinsta.com/es/wp-content/uploads/sites/8/2018/10/nombre-de-dominio.png">

*Imagen Tomada De: https://kinsta.com/es/blog/elegir-nombre-dominio/*

Una vez tienes tu nombre de dominio necesitas un [TLD o Top Level Domain](https://www.hostinger.com/co/tutoriales/como-usar-sftp-17 "TLD concept by hostinger") que es el sufijo que se le agrega a estos dominios, que son generalmente .com, .org, .net, y existen algunos sufijos o top level domains que son de uso exclusivo como:

* .gov: goverment - Tiende a ser usado por gobiernos. Y en america latina esta como .gob

* .mil: Ejército Militar - Tiende a ser usado por ejército militar.

* .edu: Educativo Acreditado - Tiende a ser exclusivo de instituciones educativas acreditadas.

Luego hay TLD que son exclusivos de países como:

* .co: De Colombia

* .jp: De Japon

* .es: De España

Cada país lo usa de manera distintas como por ejemplo en Inglaterra es .co.uk, en el caso de españa es .es y en colombia es .com.co

<img src="https://mimercadopopular.gov.co/_next/static/media/gov-co.c92cd7b6.png">

*Imagen Tomada De: https://mimercadopopular.gov.co/transparencia/informacion-publica*

¿Cual es la diferencia? Y qué determina si usa uno o usa otro?... Esto es aleatorio, depende de cada país y cada uno tiene toma decisiones respecto a como lo quiere usar.

---

Debido a los ultimos años debido a la liberación de posibilidades de los top level domains han empezado aparecer TLD larguisimos como el .promo, .info, .love, entre muchos... muchos otros.

**En negocios uno tiende a respetar mucho más los dominios .com**

Antes habian dominios que no tenian mucho valor, pero ahora como por ejemplo el .AI

> Colombia hizo una gran campaña para decir que el .CO era un remplazo del .com y en vez de referirse a estos dominios como un dominio colombiano, son simplemente una alternativa al com mucho más interesante que el .org

---

Comprar un dominio .com, .org, lo que sea... No es lo mismo que tener una página web. Comprar un dominio es simplemente comprar el derecho a que un numero IP apunte a un nombre, es como construir una casa y luego comprar la dirección de la casa.

Sin tener un dominio, no puedes tener una pagina web.

Hoy en día internet esta tan maduro que casi no existe nombres de dominio .com y muchas personas tienen que comprar nombres alternativos.

Esto es todo un negocio, hay personas que tienen que pagarles a personas para comprar su DNS... Pues **existen personas que compran muchos DNS para luego revenderlos.**

Uno de los dominios más caros fue Business.com que fue vendido por 345.000.000 de USD y en 2015 un exempleado de Google se dio cuenta de que el dominio de google.com estaba apunto de expirar y lo compro por 12 USD, por el precio normal... En donde menos mal fue un empleado el cual devolvió el dominio y le dieron un bono de 10.000 USD como recompensa por haber encontrado este problema. 

No porque tengas un dominio lo puedes revender. Por ejemplo: Una persona comprando google.com.ar en vez de recibir una recompensa, recibio una demanda porque tambien aplican leyes de copyright y de marcas registrada.

Y si tu como empresa, eres dueño de una marca registrada puedes ir a la corte para obtener tu .com

---

Para comprar dominios... Hay varios sitios web, como por ejemplo [namecheap.com](https://www.namecheap.com/)

<img src="https://ayudahosting.online/wp-content/uploads/2017/05/Captura1-8-1024x521.png">

*Imagen Tomada De: https://ayudahosting.online/como-apuntar-dns-dominio-namecheap/*

> godaddy.com no es recomendable debido a que tiene malas practicas, en la que cuando tú empiezas a buscar un dominio, godaddy se va a dar cuenta y si ese dominio está disponible, godaddy lo va a automáticamente a comprar de tal manera que si decides comprarlo luego, te lo va cobrar mucho más caro, porque automáticamente se va a apropiar del dominio y no te va a permitir comprar en otro lado. Siendo este perseguido por estas mismas malas practicas, no es recomendable usarlo.

Registrar un dominio es tan simple como colocarle el nombre que quieras.

Sistemas como Google usan la longevidad del dominio para determinar qué tan serio es un sitio web, por lo que si quieres proyectar seriedad compra dominios a 10 años que puede 

> Puede una longevidad de 10 años costar 150 USD...

Un dominio debe corresponder a una persona por lo que piden código postal.

Paginas para Comprar un Dominio:

* https://www.namecheap.com/

* https://www.hostinger.com/

* https://www.spaceship.com/es/

---

Una vez comprado el dominio hay que configurarlo.

Siendo los más importantes 

A Record: Es una variable dentro de la base de datos de nombre de dominio que apunta donde esta el servidor.

CNAME Record: Tu habras visto que algunas veces los dominios tienen palabras detras del sufijo como por ejemplo Google Docs, esta en docs.google.com siendo en este caso google.com el dominio y docs el subdominio.

Por medio de estos subdominios podemos apuntar a servidores totalmente distintos

TXT Records: Variables de texto que yo agrego como señal a otros sitios web

Videos sobre como comprar un dominio:

* https://www.youtube.com/watch?v=1JJrXWQ-7OE

* https://www.youtube.com/watch?v=1_-wEukySLI&t

* https://www.youtube.com/watch?v=BLYizqaM11w

Una vez que tienes un dominio y este apunta a una dirección IP, el siguiente paso es contar con un servidor en esa IP. Tener únicamente un dominio no significa que ya tengas una página web. Una página web es, en esencia, una computadora conectada a Internet que ofrece un servicio —generalmente un sitio web— y a la cual tu dominio funciona como un nombre fácil de recordar que dirige las solicitudes hacia esa máquina.

Esto es una computadora conectada a internet que es lo que la gente llama la nube, la nube es rentar una computadora en un data center de otra empresa o puede ser tu propia computadora en tu propia conexión, pero eso es un poco complicado.

<img src="https://www.gravel2gavel.com/files/2024/09/GettyImages-1451308764.jpg">

*Imagen Tomada De: https://www.gravel2gavel.com/what-is-data-center/










---










## Modelo Cliente/Servidor: ¿Cómo funciona un sitio web?

Estás en tu computadora y en tu navegador escribes youtube.com, al momento de darle enter tu navegador es el cliente.

El cliente manda [youtube.com](https://www.youtube.com/) al router que lo transforma en una IP, esa es la IP del servidor youtube.com y allá esta el servidor donde estan los datos de [youtube.com](https://www.youtube.com/)

<img src="https://www.ionos.com/es-us/digitalguide/fileadmin/_processed_/9/c/csm_ES-browser-work_8ea4b6cc54.webp">

*Imagen Tomada De: https://www.ionos.com/es-us/digitalguide/paginas-web/desarrollo-web/que-es-un-navegador/*

Siendo asi el cliente envía ese dato a youtube.com siendo asi "Mándeme la página web de youtube", el servidor recibe la petición y responde con los datos de youtube.com que los envía por [HTTP = Hypertext Transfer Protocol o el protocolo de transferencia de hipertexto](https://developer.mozilla.org/es/docs/Web/HTTP "HTTP concept by developer.mozilla"). Y como vivimos en el futuro ahora es el protocolo [HTTPS](https://www.cloudflare.com/es-es/learning/ssl/what-is-https/ "HTTPS concept by Cloudflare"), donde la S significa seguro, es decir que cifra los datos.

Los datos cifrados llegan a tu computadora que es el cliente, eso es todo el modelo cliente-servidor, pero por detrás no solamente pasa esto.

Lecturas Recomendadas: 

* https://www.ionos.com/es-us/digitalguide/servidores/know-how/modelo-cliente-servidor/

* https://www.akamai.com/es/glossary/what-is-the-client-server-model

* https://www.lenovo.com/mx/es/glosario/red-cliente-servidor/

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Cliente-Servidor.png/461px-Cliente-Servidor.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Cliente-servidor*

Por ejemplo: ¿Cómo le hacen los sitios web para mostrarte versiones de teléfonos moviles y versiones de computadoras de escritorio?

Esto sucede porque cuando escribes una [URL](https://developer.mozilla.org/es/docs/Learn_web_development/Howto/Web_mechanics/What_is_a_URL "URL concept by developer.mozilla.org") o le das click a una página web, el cargarla hace que tu computadora envíe en la petición datos de quién eres tú. Uno de esos datos es cuál es tu navegador, tu sistema operativo y tu computadora. Algo asi como "Yo soy un iphone, yo soy un android, una laptop", el tamaño de tu pantalla y entre otros datos que le permiten al servidor enviarte los datos correctos.

Estos datos van invisibles al usuario en la capa de protocolo que envía la petición del cliente. Tú al servidor. Esto va en [los headers de conexión o en los headers HTTP o en la cabecera HTTP](https://developer.mozilla.org/es/docs/Web/HTTP/Reference/Headers "HTTP headers concept by developer.mozilla.org").

Como por ejemplo información como [Agende de Usuario o User-Agent](https://developer.mozilla.org/es/docs/Web/HTTP/Reference/Headers/User-Agent) 

<img src="https://assets.bytebytego.com/diagrams/0231-http-header.png">

*Imagen Tomada De: https://bytebytego.com/guides/important-things-about-http-headers-you-may-not-know/*

Como por ejemplo cuando tu vas a [gmail.com](https://mail.google.com/mail/u/0/) no siempre tienes que colocar tu nombre de usuario y contraseña. Porque el servidor ya sabe quién eres tu y carga exactamente tus emails debido a que en la ultima vez que te logueaste el servidor dejó unos datos en tu computadora que indican e identifican que tú eres tú.

Estos datos se llaman [cookies o galletas](https://policies.google.com/technologies/cookies?hl=es "Cookies concept by google"). Son unos datos que quedan guardados en tu computadora asignados al dominio de la petición estas haciendo como: google.com, youtube.com, gmail.com y esas cookies siempre viajan en la cabecera del protocolo cuando vas a pedirle algo.

<img src="https://i.workana.com/wp-content/uploads/2020/01/cookies-glosario-workana-850x400.jpg">

*Imagen Tomada De: https://i.workana.com/glosario/que-son-las-cookies/

Lectura Recomendada: https://es.wikipedia.org/wiki/Cookie_(inform%C3%A1tica)*

Asi entonces, cuando ingresas a youtube.com y ya eres un usuario de youtube, youtube.com lo sabe porque en las cookies están tus datos de identificación de la ultima vez colocaste tu nombre de usuario y contraseña.

---

Pero no responde inmediatamente con todo. Primero envía el código [HTML = Hypertext Markup Language o Lenguaje de etiquetas de hipertexto](https://developer.mozilla.org/es/docs/Web/HTML "HTML concept by MDN")  que es la estructura de datos de una página web. Es texto plano, puro texto. Y en este texto hay referencias a otros archivos por ejemplo, las referencias a cargar [las hojas de estilo o CSS = Cascade Style Sheets = Hojas de estilo en cascada](https://developer.mozilla.org/es/docs/Web/CSS "CSS concept by MDN"), esto es un lenguaje que define el diseño gráfico del sitio web. 

<img src="https://www.dptotres.es/wp-content/uploads/2020/11/primeraweb-scaled.jpg">

*Imagen Tomada De: https://www.dptotres.es/la-primera-pagina-web-del-mundo/*

Entonces el navegador va y lo carga y eso es lo que carga el diseño web de toda la página web, pero tambien necesitas componentes interactivos, lo que hace que los botones reaccionen al dar click, lo que mueve todo el sitio web.

A este código se le llama [JavaScript](https://developer.mozilla.org/es/docs/Web/JavaScript "JavaScript concept by MDN") y también está referenciado al HTML y estas son peticiones adicionales al servidor que regresan al navegador y es lo que va construyendo la representación de una página web, sea en el navegador del teléfono o en los navegadores de escritorio, o donde sea.

<img src="https://geoinnova.org/wp-content/uploads/2021/08/logos.png">

*Imagen Tomada De: https://geoinnova.org/blog-territorio/html-css-y-javascript-lenguajes-para-el-desarrollo-de-paginas-web/*

---

**?search**: Significa que va a enviarle variables al servidor a través de un método llamado el método get, que son variables que viajan por la URL.

Lecturas Recomendadas:

* https://www.ionos.com/es-us/digitalguide/paginas-web/desarrollo-web/get-vs-post/

* https://www.ibm.com/docs/es/was-nd/8.5.5?topic=SSAW57_8.5.5/com.ibm.websphere.wim.doc/get.htm

* https://developer.mozilla.org/es/docs/Web/HTTP/Reference/Methods

Tu contraseña y usuario no lo puedes enviar por GET porque esto queda en el historial del navegador, así que seria un problema de seguridad porque estaría en texto plano en el historial del navegador.

<img src="https://aprendelibvrefiles.blob.core.windows.net/aprendelibvre-container/course/como_usar_chrome/image/chrome_02_p05b_xl.png"

*Imagen Tomada De: https://edu.gcfglobal.org/es/como-usar-chrome/historial-de-navegacion-de-google-chrome/1/*

Hay un metodo para enviar estas variables de forma escondida, empaquetada en la cabecera de los envios de tal manera que nadie lo pueda ver por medio del historial.

Porque imagina si estuvieras en un cafe internet o algo por ese estilo.

Entonces si tu tienes un formulario que tiene usuario y contraseña y le das al boton de login y esto va en un metodo POST el cual se encapsula en un paquetico que va en el header similar al user-agent, los datos del navegador.

Asi el servidor se da cuenta del nombre de usuario y contraseña por lo que el servidor da una respuesta exclusiva para el nombre de usuario y contraseña que el servidor obtuvo.

Los servidores pueden dar diferentes tipos de respuesta dependiendo de la petición que hagas, la respuesta más tipica es que todo está bien, siendo unos numeros que van en la cabecera siendo este 200 OK en donde todo esta bien, pero seguro tambien habras visto 404 not found que aparece cuando intentas acceder a un sitio web que no existe, a una dirección dentro del servidor que no existe, los servidores HTTP tienden a responder con not found o no existe o 404.

<img src="https://i.blogs.es/f35966/404/650_1200.jpg">

*Imagen Tomada De: https://www.xataka.com/basics/errores-404-500-502-504-y-mas-en-paginas-web-que-significan

Si el servidor está ocupado o el servidor está trabado, o hay un error de configuración el error típico de esto es el 500

Y cuando vas a una dirección existia y ya no existe, pero apunta a un nuevo lugar y a esto se le llama una redirección y le corresponde el numero 300.

**Lectura Recomendada: https://developer.mozilla.org/es/docs/Web/HTTP/Reference/Status**

---

Todo esto fue para páginas web, pero ¿cómo funcionan con las APIs? ¿Cómo funciona el mover archivos?, ¿Cómo funciona el enviar un correo?

Todo esto es con diferentes protocolos.

Estos son los protocolos [SMTP o Simple Message Transfer Protocol](https://aws.amazon.com/es/what-is/smtp/ "SMTP concept by AWS") que realmente esta en desuso, o el [protocolo POP3 o Post Office Protocol 3](https://developer.mozilla.org/es/docs/Glossary/POP "POP3 concept by MDN") y por ultimo el protocolo IMAP o el [internet Message Access Protocol.](https://mihosting.com/ayuda/glosario/imap-internet-message-access-protocol/)

Lecturas Recomendadas:

* https://www.cloudflare.com/es-es/learning/email-security/what-is-smtp/

* https://www.ionos.es/ayuda/correo/microsoftr-outlook/que-es-pop3/

* https://www.cloudflare.com/es-es/learning/email-security/what-is-imap/

<img src="https://sp-ao.shortpixel.ai/client/to_webp,q_glossy,ret_img,w_768/https://kb.rolosa.com/wp-content/uploads/2019/05/01-768x384.png">

*Imagen Tomada De: https://kb.rolosa.com/eml-diferencia-entre-pop3-imap/*

Estos son protocolos de formato de envio y recepción del correo electronico. Hoy en día muy pocas empresas manejan sus propios servidores de correo electrónico. Solo las empresas más grandes lo pueden hacer porque el correo se ha vuelvo increíblemente complejo y la gran mayoría de las compañias le delegan la gestión de sus correos electrónicos a dos empresas.

A [microsoft](https://www.microsoft.com/) con [Outlook](https://www.microsoft.com/es-co/microsoft-365/outlook/email-and-calendar-software-microsoft-outlook) o a [Google](https://about.google/intl/es_ALL/products/) con [Gmail](https://mail.google.com/mail/u/0/).

---

¿Qué pasa entonces cuando tengo un teléfono movil y una aplicación móvil tiene que cargarme unos datos? Para que los datos de esta app en este teléfono lleguen y sean representados, tengo que ir al servidor y buscar esos datos, pero las aplicaciones no usan HTML, CSS, ni JS. Usan lenguajes propios de aplicaciones nativas. En el caso de Android usan [Java](https://www.java.com/es/) o [Kotlin](https://kotlinlang.org/) y en el caso de iOS usan [Swift](https://www.apple.com/co/swift/) o [Objective C](https://www.godaddy.com/resources/latam/desarrollo/objective-c-que-es "Objective C concept by godaddy") por lo que cuando cargan los datos no necesitan cargar los típicos datos HTML, usan otras cosas, usan estructuras de datos entre servidor y aplicación que se conocen con JSON o XML.

<img src="https://developer.android.com/static/images/kotlin/choose-template.png?hl=es-419">

*Imagen Tomada De: https://developer.android.com/kotlin/add-kotlin?hl=es-419*

[JSON significa Java Script Object Notation y es una forma de guardar datos. ](https://www.oracle.com/latam/database/what-is-json/)

<img src="https://cdn-wcsm.alura.com.br/2025/04/147291500-402b5260-4d61-41eb-a9ff-b38957abd81f.png">

*Imagen Tomada De: https://www.aluracursos.com/blog/que-es-json*

[XML significa Extensible Markup Language](https://aws.amazon.com/es/what-is/xml/) que es parecido a HTML, pero en vez de expresas etiquetas de representación de información visual como títulos, cabeceras, parrafos y demás, sólo expresa estructuras de datos normal.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/XML.svg/500px-XML.svg.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Extensible_Markup_Language*

Sólo ten en cuenta que si es XML, JSON, HTML, JS, CSS o lo que sea, sigue siendo lo mismo, un cliente, una app, o un navegador haciendo una petición a través de un protocolo, generalmente un protocolo HTTP con la S de seguro por lo que intercambiaron llaves de cifrado.

Que envia entiende los datos y los devuelve de regreso al cliente, siendo asi el modelo de cliente-servidor.

<img src="https://infimg.com/bimg/2019/02/diagrama-cliente-servidor.jpeg.webp">

*Imagen Tomada De: https://blog.infranetworking.com/modelo-cliente-servidor/*










---










# Sistemas Operativos y Almacenamiento










## Diferencias entre Windows, Linux, MacOS

Las primeras computadoras no tenian sistemas operativos pues tu llegabas con tu programa que era una serie de tarjetas perforadas en donde cada hueco significaba algo en el [lenguaje ensambalador](https://msmk.university/el-lenguaje-assembler/) de la unidad de procesamiento central o CPU.

<img src="https://i.blogs.es/781cdb/1366_2000/1366_2000.jpeg">

*Imagen Tomada De: https://www.xataka.com/historia-tecnologica/hoy-dia-programadores-tienen-a-ia-hace-60-anos-tenian-que-picar-codigo-literalmente-tarjetas-perforadas*

La insertabas en un escaner que escaneaba los datos, los procesaba y luego entregaba el resultado en una impresora de matriz de punto.

<img src="https://i.blogs.es/9ec3b6/picar-codigo/1200_800.jpeg">

*Imagen Tomada De: https://www.xataka.com/historia-tecnologica/hoy-dia-programadores-tienen-a-ia-hace-60-anos-tenian-que-picar-codigo-literalmente-tarjetas-perforadas*

Lecturas Recomendadas: 

* https://es.wikipedia.org/wiki/Historia_de_los_sistemas_operativos

* https://www.sutori.com/es/historia/generaciones-de-sistemas-operativos--cZsZ2B3u4FGirm8DxDvmoFYF

* https://www.fib.upc.edu/retro-informatica/historia/so.html

Luego pasó que estas computadoras querian poder correr múltiples diferentes programas, así que empezó la primera generación de sistemas operativos.

* El inicio de todo: Entrada del Panel de Código Máquina e Instrucciones de programa con Tarjetas / Cintas de Papel.

* La primera generación en 1950: Cargador / Loader, un sistema operativo de un sólo usuario y un sólo programa.

* La segunda generación en 1960: Sistema operativo por lotes y varios programas a la vez por lotes.

* La tercera generación en 1970: Con sistema operativo multi-usuario, multi-funcional. Debido a la necesidad de correr programas en paralelo o que se pudieran acceder con su propio nombre de usuario y tener su propia definición de permisos y esto fue lo que fue construyendo el concepto que hoy en día conocemos como sistema operativo.

<img src="https://concepto.de/wp-content/uploads/2019/07/generaciones-de-las-computadoras-eniac-e1563970917833.jpg">

*Imagen Tomada De: https://concepto.de/generaciones-de-las-computadoras/*

---

La historia de los sistemas operativos empieza en varios diferentes lugares del mundo y realmente en varias compañias.

<img src="https://www.laranja.org/wp-content/uploads/2021/07/os-evolution.jpg">

Los primeros sistemas operativos evolucionaron de algo llamado [UNIX](https://es.wikipedia.org/wiki/Unix "Unix concept by Wikipedia") que fue uno de los primeros grandes sistemas operativos del lado del servidor.

Toda la computación inicia en [servidores](https://es.wikipedia.org/wiki/Servidor "Servidor concept by Wikipedia") porque anteriormente las computadoras eran cosas gigantescas que debian ser guardadas en edificios grandísimos y que ocupaban múltiples cuartos. 

<img src="https://ascentoptics.com/blog/wp-content/uploads/2023/08/network-server.png">

*Imagen Tomada De: https://ascentoptics.com/blog/es/everything-you-need-to-know-about-network-servers/*

Unix es un sistema que permitia tener múltiples diferentes usuarios y que divide las cosas en un Kernel, en un sistema de archivos y en un sistema de usuarios.

Lecturas Recomendadas:

* https://www.lenovo.com/co/es/glosario/unix/

* https://www.ionos.com/es-us/digitalguide/servidores/know-how/unix-el-sistema-operativo-que-cambio-la-informatica/

Estos unix se fueron fragmentando y teniendo diferentes mecanismos. Uno de los mecanismos más populares de unix lo conocemos como BSD que tiene el icono de un diablito.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/40/Daemon-phk.svg/1024px-Daemon-phk.svg.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Berkeley_Software_Distribution

Video Recomendado: BSD - La historia Oculta de Onix Olvidado - https://www.youtube.com/watch?v=RJYe_uRVJi4

Pagina Recomendada: https://www.freebsd.org/

[Los sistemas BSD](https://docs.freebsd.org/es/articles/explaining-bsd/ "Qué es BSD by BSD") que inicialmente fueron sistemas de investigación en la [universidad de Berkeley](https://www.elabedu.eu/es/universidad-california-berkeley/ "https://www.elabedu.eu/es/universidad-california-berkeley/"). Fueron creciendo y aumentando llevando a empresas como son [Micro Systems](https://es.wikipedia.org/wiki/Sun_Microsystems "Sun Microsystems company by wikipedia") o a sistemas gratuitos como FreeBSD, con el pasar del tiempo de aqui es de donde sale el sistema operativo que hoy conocemos como [Mac OS](https://es.wikipedia.org/wiki/MacOS "MacOS by wikipedia"):

> Evolución: [NEXTSTEP](https://es.wikipedia.org/wiki/NEXTSTEP "nextstep by wikipedia"), [Darwin OS](https://es.wikipedia.org/wiki/Darwin_(sistema_operativo)), [iOS](https://www.apple.com/co/os/ios/), [MacOS](https://www.apple.com/co/os/macos/) 

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0d/NeXTSTEP_Nethack.png/500px-NeXTSTEP_Nethack.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/NEXTSTEP*

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/aa/GNOME_2_running_on_openDarwin_%282004%29.png/330px-GNOME_2_running_on_openDarwin_%282004%29.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Darwin_(sistema_operativo)*

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/2010-01-21_MacBook_Pro_Mac_OS_X_Snow_Leopard_with_Earth_background.jpg/500px-2010-01-21_MacBook_Pro_Mac_OS_X_Snow_Leopard_with_Earth_background.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/MacOS*

---

Luego por otro lado tenemos otra rama de UNIX que es la rama que se volvió LINUX, UNIX como sistema creó una serie de reglas que luego varios investigadores entre ellos Linux Torvalds crearon y construyeron de una manera de software completamente abierto, montado sobre una teoría de que el software tenía que ser gratuito, abierto y completamente libre para todo el mundo creado por alguien llamado Richard Stallmann en una fundación llamada GNU, con una licensia especial llamada la Licencia GPL: Siendo una licensia de software libre.

Lecturas Recomendadas:

* https://www.redhat.com/es/topics/linux

* https://www.ibm.com/mx-es/think/topics/linux

* https://www.gnu.org/home.es.html

De aqui sale toda una revolución que termina creando LINUX, el sistema operativo más popular de la tierra. La gran mayoria de servidores usan Linux. La gran mayoria de desarrolladores de software profesionales terminan usando linux o UNIX de alguna manera en sus carreras. 

A partir de linux nacen un montón de compañias muy grandes como: [Red Hat](https://www.redhat.com/), [Gentoo Linux](https://www.gentoo.org/), [Archlinux](https://archlinux.org/).

* de Red Hat sale [Fedora](https://fedoraproject.org/es/) y luego [CentOS](https://www.centos.org/)

* De [Debian](https://www.debian.org/index.es.html) sale [ubuntu](https://ubuntu.com/).

Y probablemente la versión de linux más popular del mundo: [Android](https://www.android.com/intl/es_es/) que es la que corre la gran mayoria de los teléfonos del planeta.

<img src="https://www.redeszone.net/app/uploads-redeszone.net/2015/12/Distribuciones-Linux-2015-696x337.png">

*Imagen Tomada De: https://www.redeszone.net/2015/12/12/las-distribuciones-linux-mas-buscadas-de-2015/*

---

Mac viene de un lugar muy unico, en los años 70 había un laboratorio en Silicon Valley llamado laboratorio XEROX PARC, en palo alto. [Palo alto](https://es.wikipedia.org/wiki/Palo_Alto) es un pueblito al sur de san francisco.

Lecturas Recomendadas: 

* https://www.semana.com/tecnologia/articulo/que-es-el-silicon-valley-y-por-que-es-importante-en-la-industria-de-la-tecnologia/202117/

* https://es.wikipedia.org/wiki/Silicon_Valley

Hoy conocemos a [XEROX](https://www.xerox.com/es-co) como la empresa que hace impresoras, pero en esos tiempos XEROX tenia los laboratorios de computación más avanzados del mundo.

En ese laboratorio ellos construyeron la primera computadora con interfaces basada en ventanas y crearon el concepto que hoy en día todos usamos, llamado el mouse.

Le dieron un paseo a una persona que estaba construyendo en las primeras empresas de computación personal en la epoca: [Steve Jobs](https://es.wikipedia.org/wiki/Steve_Jobs).

Ellos vieron lo que estaba haciendo xerox y básicamente se lo robaron. Crearon una versión del sistema operativo de xerox de distribución masiva siendo esta la [computadora LISA](https://www.xataka.com/ordenadores/el-software-del-lisa-el-legendario-y-fracasado-ordenador-de-apple-volvera-en-2018-gratis-y-en-codigo-abierto "Computadora Lisa by Xataka").

<img src="https://i.blogs.es/82bf58/lisa-00/1366_2000.jpg">

*Imagen Tomada De: https://www.xataka.com/ordenadores/el-software-del-lisa-el-legendario-y-fracasado-ordenador-de-apple-volvera-en-2018-gratis-y-en-codigo-abierto*

[Lisa](https://es.wikipedia.org/wiki/Apple_Lisa) no fue un exito comercial, pero las teorias de lisa luego se aplicaron con mucho exito comercial en la [Macintosh o Mac](https://es.wikipedia.org/wiki/Macintosh "Macintosh o Mac concept by Wikipedia"), que es la primera computadora con interfaz gráfica de distribución masiva en el planeta.

Al tiempo que el laboratorio [Xerox Parc](https://es.wikipedia.org/wiki/PARC "Xerox Parc concept by Wikipedia") había creado este sistema operativo visual. Otra empresa creó un sistema operativo basado completamente en texto y controlado por disquetes, discos de plastico. Un sistema conocido como [CPM: Control Program Monitor](https://en.wikipedia.org/wiki/CP/M "CP/M concept by Wikipedia")

Video Recomendado: https://www.youtube.com/watch?v=HSx0LV7pkSI

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/03/CP%E2%81%84M_Ad%2C_InfoWorld%2C_November_29%2C_1982.jpg/499px-CP%E2%81%84M_Ad%2C_InfoWorld%2C_November_29%2C_1982.jpg">

*Imagen Tomada De: https://en.wikipedia.org/wiki/CP/M*

Fue construido por una empresa llamada [Digital Research.](https://es.wikipedia.org/wiki/Digital_Research "Digital Research concept by Wikipedia")

Lectura Recomendada: https://parceladigital.com/articulo/digital-research-una-leyenda-derrotada-en-los-despachos

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fd/Digital_Research_logo_1974.svg/500px-Digital_Research_logo_1974.svg.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Digital_Research*

Ellos desarrollan esta teoría de los sistemas operativos basados en texto controlados por disquete en paralelo distinto a Unix.

**Unix tambien era controlado por texto, por una terminal y línea de comandos**... Pero este estaba hecho para servidores.

<img src="https://computernewage.com/wp-content/uploads/2014/06/terminal-de-linux-fundamentos.png?w=1024">

*Imagen Tomada De: https://computernewage.com/2013/04/04/primeros-pasos-con-la-terminal-de-linux/*

CP/M es el padre de los sistemas operativos basados en computadoras.

Otra persona decidió crear una versión de este sistema operativo, conocido como [DOS](https://www.ionos.com/es-us/digitalguide/servidores/know-how/dos-que-es-un-sistema-operativo-de-disco/ "DOS concept by ionos"), famosamente [Bill Gates](https://es.wikipedia.org/wiki/Bill_Gates "Bill Gates by Wikipedia") a través de la conexión que su mamá tenía como asistente del CEO de [IBM](https://www.ibm.com/), le vende a IBM la idea de que ellos ya tienen un sistema operativo. Pero no la tenían, fueron le compraron DOS a otra persona y esa persona que les mende DOS se convierte en la persona que les vende [Microsoft DOS](https://es.wikipedia.org/wiki/MS-DOS "MSDOS by Wikipedia"), que por 50.000 contruye una semilla de los imperios más grandes de la historia: Microsoft.

Video Recomendado: https://www.youtube.com/watch?v=-L6WAO2_EEs

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/ea/Msdos-icon.svg/330px-Msdos-icon.svg.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/MS-DOS*

Similar a cuanto Xerox Parc le dió un paseo a Steve Jobs, Steve Jobs en apple le dió un paseo a Bill Gates y a gente de Microsoft, cuando microsoft se dió cuenta de lo que Apple estaba haciendo con Mac. 

Se fueron a la empresa a desarrollar en alta velocidad a desarrollar un clon de este sistema operativo para computadoras IBM y para computadoras de escritorio genéricas que otros fabricantes pudieran fabricar.

Mac, Apple fabricaba su propia computadora y su propio sistema operativo.

Microsoft sólo fabricaba el sistema operativo pues el negocio de las computadoras se los dejaba a [Compaq](https://es.wikipedia.org/wiki/Compaq), a IBM y a otros fabricantes. Ellos solo hacian sistemas operativos y con lo que aprendieron del Mac, crearon un sistema operativo gráfico clonando las ideas que habian extraido del Mac y esto lo llamaron Windows.

De hay nace Windows 3, y luego más reconocido el Windows 3.1, Windows 95, Windows Millenium, Windows 2000, Windows NT, entre muchos, muchos otros.

Esto da inicio a una de las guerras de la época que fue la guerra de los sistemas operativos.

Lecturas Recomendadas: https://www.xatakamovil.com/sistemas-operativos/la-guerra-de-los-sistemas-operativos

---

Hoy en día tenemos 3 grandes sistemas operativos que dominan nuestra computación:

* Windows que lo usa la gran mayoría de las personas.

* Linux que es la gran mayoría de los servidores.

* MacOS

Estos 3 sistemas operativos compiten y tienen diferentes uso.

Windows es el OS de Microsoft y es la interfaz gráfica por excelencia, es el que más usan los gamers, es el más común.

Linux es el sistema operativo más usado por desarrolladores de software profesionales, seguido de Mac. Que tambien al ser sistema UNIX, se parece mucho a Linux y son sistemas que tienen filosofías muy similares. Siendo su diferencia que linux es un OS Abierto donde Mac a pesar de que usa el núcleo abierto del BSD es un sistema cerrado.

<img src="https://www.nitro-pc.es/blog/wp-content/uploads/2023/10/linux-mac-windows-blog.png">

*Imagen Tomada De: https://www.nitro-pc.es/blog/windows-vs-mac-vs-linux/*

---

En sistemas operativos de Móviles tambien hay dos grandes sistemas operativos.

iOS de Iphone, en donde internamente tiene el mismo núcleo de un Mac, un sistema Unix como BSD.

* hay una sola versión de iOS, porque es de Apple.

Luego está Android que internamente es un linux

* hay diferentes versiones de android dependiendo del teléfono que compres.

<img src="https://i.blogs.es/5aea99/android-ios/840_560.jpg">

*Imagen Tomada De: https://www.xatakamovil.com/aplicaciones/android-recibe-cada-ano-el-doble-de-apps-que-ios-pero-el-iphone-siendo-la-primera-opcion-para-muchos-desarrolladores*

Cualquier sistema operativo que utilices, la recomendación es que aprendas LINUX.

Los desarrolladores de software profesionales usan Linux, por lo menos en algún punto de sus vidas.

Todas las supercomputadoras del planeta usan Linux, todos los servidores del planeta usan una versión de Linux.

Lectura Recomendada: https://ed.team/blog/la-historia-completa-de-unix-como-un-sistema-operativo-cambio-el-mundo

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Unix_history-simple_es.svg/1280px-Unix_history-simple_es.svg.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Unix-like*










---










## Permisos, niveles de procesos y privilegios de ejecución

Es normal que tengamos archivos en servidores o en computadoras que no son nuestras, que estamos compartiendo con otras personas.

<img src="https://www.ionos.com/es-us/digitalguide/fileadmin/_processed_/0/9/csm_client-server-modell-us_2f314afbee.webp">

*Imagen Tomada De: https://www.ionos.com/es-us/digitalguide/servidores/know-how/que-es-un-servidor-un-concepto-dos-definiciones/*

Por ejemplo:

Cuando tú compras un [Hosting Service](https://www.hostinger.com/co/tutoriales/que-es-un-hosting "Hosting Service concept by Hostinger") de [Digital Ocean](https://www.digitalocean.com/), [Linode](https://www.linode.com/es/), [AWS](https://aws.amazon.com/es/) o donde sea lo que realmente estás comprando es un pedacito de un computador que estás compartiendo con 10, 100.000 o 1.000.000 de otros usuarios. 

Asi que necesitas una forma de gestionar los permisos, los accesos, los privilegios de ejecución, entre muchas otras cosas.

Digamos, con un archivo "Nomina.html" y ese archivo queremos que tu como administrador tengas permiso para todo: Leer, Escribir, Compartir, Copiar, Eliminar. Es decir, cualquier cosa.

> El administrador es el dueño de la computadora. Es el usuario que tiene el nombre de usuario y contraseña del Administrador, el cual tiene acceso a toda la computadora.

Lecturas Recomendadas: 

* https://support.microsoft.com/es-es/windows/administrar-cuentas-de-usuario-en-windows

* https://www.lenovo.com/mx/es/glosario/administrador-de-dispositivos/

* https://es.wikipedia.org/wiki/Usuario_(inform%C3%A1tica)

Luego tienes grupos de usuarios, entonces imagina que tienes un grupo de desarrolladores que llamas devs los cuales pueden leer y escribir el archivo, pero no eliminarlo.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/12/User_icon_2.svg/500px-User_icon_2.svg.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Usuario_(inform%C3%A1tica)*

y luego está el público general, quienes deberían acceder al archivo.

¿Qué deberia poder hacer el público?

Leer el archivo, pero no lo pueden modificar, no lo pueden borrar, no lo pueden volver un ejecutable; Es decir que cuyo código pueda correr en la CPU.

En los sistemas tipo Unix, como Linux, Mac, etc... típicamente hay 3 grandes permisos.

1. El permiso de lectura - R

2. El permiso de Escritura - W

3. El permiso de Ejecución - X

La ejecución es la capacidad de que el contenido de ese archivo corra como un archivo ejecutable, como una aplicación. 

<img src="https://s3.amazonaws.com/cloudxlab/static/images/aha/permissions.png">

*Imagen Tomada De: https://cloudxlab.com/assessment/displayslide/64/permissions-numeric

Lectura Recomendada: https://ed.team/blog/entender-los-permisos-en-linux-2da-parte

Por ejemplo: En windows esto se logra cambiando la extensión del archivo a una .exe que cuando tu la corres te va a sacar un anuncio del sistema operativo de microsoft windows el cual dice, ¿Estás seguro de que quieres correr esta aplicación? 

Lecturas Recomendadas:

* https://es.wikipedia.org/wiki/EXE_(inform%C3%A1tica)

* https://www.ionos.com/es-us/digitalguide/servidores/know-how/archivos-exe/

<img src="https://www.ionos.com/es-us/digitalguide/fileadmin/_processed_/f/6/csm_exe-file_26f65a1da5.webp">

*Imagen Tomada De: https://www.ionos.com/es-us/digitalguide/servidores/know-how/archivos-exe/*

Algunos desarrolladores de software le piden permiso a microsoft para que les dé una llave especial de cifrado que las pueden pegar a sus aplicaciones, de tal manera que esa advertencia no ocurra.

En Mac pasa lo mismo con Apple cuando por ejemplo: Se corre una aplicación descargada de la tienda de aplicaciones de Mac, la [App Store](https://es.wikipedia.org/wiki/App_Store_(iOS)).

Lecturas Recomendadas:

* https://www.apple.com/co/app-store/

* https://play.google.com/

En los dispositivos móviles como Android o iPhone, esto no es necesario porque tanto Google como Apple revisaron las aplicacoines antes de que salieran a la luz.

Pero en Linux esto se hace agregandole la X a los permisos del archivo.

¿Cómo Funciona Esto?

En el sistema operativo, cuando estas en la terminal y línea de comandos vas a ver que en la lista de los archivos a veces salen las letras:

RWX en diferentes grupos.

Entonces yo podría decir que el administrador tiene permisos RWX para el archivo nomina.html, es decir que lo puede Leer, Escribir y volver un Ejecutable.

Pero el equipo DEVS solo tiene permiso RW, de lectura y escritura.

Por último el equipo del público, cualquier persona que accede al servidor lo puede leer, pero nada más.

Existen diferentes comandos de Linux o de Unix que permiten hacer este cambio.

Uno de los comandos más populares es el comando CHMOD = Change Mode. Es un comando el cual yo le puedo agregar números los cuales representan el RWX. 

    chmod 754 nomina.html

Lecturas Recomendadas:

* https://www.freecodecamp.org/espanol/news/comando-chmod-como-cambiar-permisos-de-archivo-en-linux/

* https://www.ionos.com/es-us/digitalguide/servidores/know-how/asignacion-de-permisos-de-acceso-con-chmod/

> Todos estos permisos los da el administrador.

En los sistemas Unix o Linux los permisos de administrador se pueden invocar en cualquier momento cuando antes de la ejecución con el comando sudo, por lo que si utilizas sudo y despues algún comando, el sistema siempre te va a preguntar la contraseña del administrador.

<img src="https://genuinocloud.com/wp-content/uploads/2023/01/Cuales-son-las-diferencias-entre-sudo-y-su.png">

*Imagen Tomada De: https://genuinocloud.com/blog/diferencia-sudo-su/*

Por lo que cada vez que ejecutes sudo y despues un comando, ese comando se va a ejecutar como administrador.

Lecturas Recomendadas:

* https://www.ionos.com/es-us/digitalguide/servidores/configuracion/linux-sudo/

Siendo asi una forma de ejecutar comandos como administrador sin entrar al usuario de administrador, desde cualquier usuario. En windows o en Mac lo puedes hacer en la interfaz gráfica pues al darle click derecho a un archivo le das a información y encontrarás información de los tipos de permisos y privilegios que tiene el archivo.

<img src="https://www.solvetic.com/uploads/monthly_08_2016/tutorials-7463-0-55315400-1470401959.jpg">

*Imagen Tomada De: https://www.solvetic.com/tutoriales/article/2934-como-pasar-de-usuario-estandar-a-administrador-en-mac/

Un privilegio es poder ejecutarse como aplicación  o el no ejecutarse, el poder editarlo o solamente poder acceder en modo de lectura.

---

Los archivos típicamente son de un dueño, el dueño es el usuario que creó el archivo. Por lo si los devs crearon el archivo, el dueño van a ser los devs. Y si tenemos otro tipo de usuario que creó un archivo pues ese va a ser el dueño.

Dependiendo del dueño del archivo es la capacidad de acceso al archivo. Y va a depender de quién tenga el usuario y contraseña dentro del OS que acceda al archivo.

Es posible cambiar los dueños de los archivos, el Linux se hace con chown, en windows y en mac se hace mediante la interfaz gráfica dandole click derecho al archivo y cambiando sus propiedades.

    chown nuevodueno nomina.html

    sudo chmod 777 nomina.html

Lecturas Recomendadas:

* https://www.hostinger.com/co/tutoriales/comando-chown-linux

* https://www.ionos.com/es-us/digitalguide/servidores/configuracion/comando-chown-de-linux/

Como práctica general de seguridad, uno debería asegurarse que los archivos siempre tengan la mínima cantidad de permisos y privilegios. Entre más permisos y privilegios tenga un archivo más problemas de seguridad puede traer ese archivo.

Aqui la única excepción es Windows porque uno le puede dar click derecho a un archivo y decirle correr el archivo como administrador siendo equivalente al comando sudo en linux o en Mac.

En windows casi nada ocurre en la terminal y casi todo ocurre en la interfaz gráfica, además de que los ejecutables deben tener un formato especial como el .exe donde en Linux o en Mac tú puedes tener un script de Python el cual se puede volver un ejecutable perfectamente a pesar de que internamente sea un archivo de texto.

<img src="https://thepythoncode.com/media/articles/organize-files-by-extension-in-python.jpg">

*Imagen Tomada De: https://thepythoncode.com/article/organize-files-by-extension-with-python*

> Todo esto va a depender mucho del formato interno del archivo.











---











## Archivos: Metadatos, cabeceras y extensiones

Los formatos de archivo son la forma en la que dentro de los sistemas operativos se identifica qué es lo que es un archivo.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/68/Audio_formats.jpg/500px-Audio_formats.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Formato_de_archivo*

Lecturas Recomendadas:

* https://es.wix.com/blog/tipos-de-archivos-y-como-utilizarlos

* https://www.adobe.com/es/acrobat/resources/document-files.html

Porque algunos son una [imagen](https://es.wikipedia.org/wiki/Imagen), [word](https://es.wikipedia.org/wiki/Microsoft_Word), [excel](https://es.wikipedia.org/wiki/Microsoft_Excel), [video](https://es.wikipedia.org/wiki/Video), un [pdf](https://www.adobe.com/co/acrobat/about-adobe-pdf.html), [un archivo de texto](https://es.wikipedia.org/wiki/Archivo_de_texto), y no es necesariamente claro.

Existen multiples mecanismos para definir qué es un tipo de archivo por dentro.

El más común es usar la extensión del archivo pues si al final del nombre del archivo aparece un .txt es un texto. 

* Si aparece .doc es un documento de Word

* Si aparece .html es un archivo HTML

<img src="https://www.adobe.com/es/acrobat/resources/document-files/web-files/media_1555bfde6cf361e67f66923d2d937c6da6a259755.jpg?width=2000&format=webply&optimize=medium">

*Imagen Tomada De: https://www.adobe.com/es/acrobat/resources/document-files/web-files/html.html*

Sin embargo esto no es un metodo muy efectivo, en los ultimos años los OS están escondiendo las extensiones de los sistemas de archivos, hay que trabajar para poder mostrarlas

> Recomendación: Activa desde ya la vista hacia el nombre de extensión, aunque esto no se puede hacer en un teléfono. Pero sí se puede hacer en Linux, Windows o en Mac.

Lecturas Recomendadas:

* https://support.apple.com/es-co/guide/mac-help/mchlp2304/mac

---

La segunda forma de lograrlo de saber cómo esta estructurado un archivo por dentro es leyendo las primeras 4 letras del archivo. Cuando uno abre un archivo, si es un archivo de texto es muy probable que las primeras 4 letras sean un texto cualquiera por lo que en ese caso el sistema operativo simplemente asume que esto es texto o "No sé qué es".

Pero con archivos estructurados como imágenes, como PDFs, las primeras 4 letras tienden a ser una definición de lo que el archivo es.

¿Cómo un archivo binario se ve por dentro?

<img src="https://learn.microsoft.com/es-es/cpp/mfc/media/vcbinaryeditor2.gif?view=msvc-170">

*Imagen Tomada De: https://learn.microsoft.com/es-es/cpp/windows/binary-editor?view=msvc-170*

Del lado derecho se ve un texto que es medio ilegible que es la representación [ASCII](https://elcodigoascii.com.ar/) o la reprsentación en texto normal del archivo binario.

<img src="https://elcodigoascii.com.ar/codigo-americano-estandar-intercambio-informacion/codigo-ascii.png">

*Imagen Tomada De: https://elcodigoascii.com.ar/

En el centro está la representación [hexadecimal](https://es.wikipedia.org/wiki/Sistema_hexadecimal). Cada byte se expresa como un par de números hexadecimales (2 numeros de 16 dígitos) puedo expresar un byte.

Por lo que al mirar del lado izquierdo de la imagen se va a encontrar el nombre de la extensión en los primeros 4 bytes pues esos primeros 4 caracteres con la cabecera del archivo. Siendo asi, indican que tipo de archivo es.

Lectura Recomendada: https://es.wikipedia.org/wiki/Volcado_hexadecimal

<img src="https://i.sstatic.net/iVINZ.png">

*Imagen Tomada De: https://stackoverflow.com/questions/69447266/converting-a-aspose-words-hex-to-pdf*

---

En los servidores web existen tipos y subtipos de archivos por lo que los

Tipos pueden ser:

* Texto

* Imagen

* Aplicación

Y los subtipos pueden ser:

* Texto Plano, Texto CSV

* Imagen PNG, Imagen JPG

* Aplicación PDF

A estos se les conoce como [tipos MIME o MIME types](https://developer.mozilla.org/en-US/docs/Web/HTTP/Guides/MIME_types "Mime Types concept by MDN") que son una forma para que los servidores sepan cual es el tipo de archivo que estas sirviendo.

Lectura Recomendada: https://www.ibm.com/docs/es/sc-and-ds/8.5.0?topic=guide-mime-types

Es una base de datos interna donde ciertas extensiones o ciertas cabeceras equivalen a cierto tipo de archivo.

El servidor tiene que saber cuál es cada tipo de archivo y no es tan perfecto.

La forma más común en la que los sistemas operativos definen un archivo es atraves de los primeros 4 bytes y de la estructura de la cabecera.

Un archivo de texto plano es texto, el HTML o Javascript o Python son archivos de texto plano cuyas extensiones .py, .js, .html indican "Esto es texto plano, pero por dentro hay una estructura lógica siendo la estructura HTML, Javascript o Python.

Existe una estructura de texto plano que me permite expresar datos como si fueran una tabla y esa estructura se llama CSV o Comma Separated Values.

Lecturas Recomendadas:

* https://es.wikipedia.org/wiki/Valores_separados_por_comas

* https://www.adobe.com/es/acrobat/resources/document-files/text-files/csv-file.html

<img src="https://www.profesionalreview.com/wp-content/uploads/2020/05/C%C3%B3mo-abrir-un-archivo-csv-02.png">

*Imagen Tomada De: https://www.profesionalreview.com/2020/06/06/como-abrir-un-archivo-csv/*

En donde si tu lo abres por medio de un editor de código o texto podrás verlo como si fuera texto separado por comas, pero si lo abres desde un excel lo verás como si fuera una tabla.

En donde excel es una forma muy simple de mostrar datos separados por comas, como si fueran datos estructurados en una tabla.

---

<img src="https://i.ytimg.com/vi/W22wnNUXqGM/hq720.jpg?sqp=-oaymwE7CK4FEIIDSFryq4qpAy0IARUAAAAAGAElAADIQj0AgKJD8AEB-AG-B4AC0AWKAgwIABABGBsgRyh_MA8=&rs=AOn4CLC7iQDn9kBgXLbZj8-ISOfp5yj7Qg">

*Imagen Tomada De: https://www.youtube.com/watch?v=W22wnNUXqGM*

Cuando abrimos un archivo de word, un .docx vamos a encontrar que su cabecera esta llema de ceros porque esa cabecera es el espacio donde se guardan metadatos del archivo. Y luego abajo tengo la estructura.

Por lo que puedes tener varios PDF, pero la estructura inicial de bytes es muy similar porque eso indica que tipo de archivo es y bajo qué mecanismo fue realizado. Y despues de la primera linea o renglon ya todo cambia.

Es por medio de un editor hexadecimal que se puede mirar archivo binarios.

Lecturas Recomendadas:

* https://es.wikipedia.org/wiki/Editor_hexadecimal

* https://mh-nexus.de/en/hxd/

Esto es algo que generalmente no se estudia a no ser que se valla a ser el programador que va a programar una estructura de estos datos. Estas estructuras son arbitrarias, alguien las decidió porque sí, porque encontró que esa era la forma más eficiente de guardar los archivos.

---

Hay muchos tipos de archivo y alguna veces esos archivos por dentro tienen datos escondidos que se pueden ver en sistemas operativos como por ejemplo, los videos tienden a tener por dentro cuando fueron grabados, su tamaño, cual es el codec que usan.

Lecturas Recomendadas: 

* https://www.ibm.com/es-es/think/topics/metadata

* https://www.avast.com/es-es/c-what-is-metadata

* https://helpx.adobe.com/co/acrobat/desktop/edit-documents/edit-pdf-properties/pdf-properties.html

Lo mismo sucede con las imagenes en donde actualmente se encuentra: Con qué dispositivo se tomo la foto, dimensión original del archivo, la última fecha en la que fue abierta, etcétera.

<img src="https://i.blogs.es/27ab89/ver-metadatos/450_1000.jpg">

*Imagen Tomada De: https://www.xataka.com/basics/que-metadatos-archivo-que-informacion-muestran-como-se-borran*

Los PDF guardan muchos metadatos pues si le dan click derecho y miran sus metadatos van a ver el título original del archivo de donde vino, porque la mayoria de PDF no fueron un PDF originalmente sino que fueron construidos en otro lugar como por ejemplo en Adobe Illustrator o en Word.

> Hay que tener mucho cuidado con el primer nombre que tuvo un archivo, debido a que por medio de los metadatos muchas veces se puede encontrar detalles tal vez no esperados.

Los metadatos muchas veces en archivos también te explican cuál es la versión mínima de una aplicación para poder abrirlo o los archivos que necesitas para poder ejecutarlo.

Por ejemplo los archivos son comprimidos y descomprimidos con unas técnicas especiales que se llaman codecs. Eso tiende a estar incluido en la cabecera  de los archivos de video, incluyendo su resolución, qué formato tienen, la calida, etc.

Tambien existen otro tipo de archivos en donde están aglomerados otros datos, por ejemplo:

Un archivo .zip, un archivo comprimido en los metadatos y en la cabecera del archivo está la lista de los archivos que por dentro tiene el .zip antes de ser descomprimida.

Lecturas Recomendadas:

* https://www.lenovo.com/mx/es/glosario/archivo-comprimido/

* https://es.wikipedia.org/wiki/Formato_de_compresi%C3%B3n_ZIP

* https://www.dropbox.com/es/resources/what-is-a-zip-file

<img src="https://www.7-zip.org/7ziplogo.png">

*Imagen Tomada De: https://www.7-zip.org/*

Cuando los archivos se dañan en la parte arriba cuando uno le cambian las cabeceras es completamente posible que se vuelvan ilegibles y que ya no se puedan volver a abrir a no ser que se reparen por medio de técnicas muy avanzadas que rara vez son utilizadas.

Tambien para archivos que se descarga mal, uno los puede verificar, existen mecanismos de verificación como el check zoom.

Lo más importante para recordar son dos cosas:

1. Un archivo no es una base de datos, un archivo puede tener datos y puede ser una base de datos, pero típicamente no es una BD pues esto es un concepto totalmente diferente. 

2. Existe una técnica avanzada de informática para esconder datos dentro de archivos, se llama esteganografía que por ejemplo: Imagina que tienes una iamgen JPG que por dentro guarda un archivo de Excel de manera secreta. Esto es porque se sabe la estructura de la imagen JPG y de esa manera se esconde el Excel dentro del JPG, siendo está técnica muy común en distribución de virus, en el mundo de inteligencia militar, entre otros universos.

Lectura Recomendada: https://es.wikipedia.org/wiki/Esteganograf%C3%ADa

> Es curioso entonces que por medio de la Esteganografía existen las "firmas digitales" que se podían ocultar en documentos y archivos. Lo pueden usar las empresas entregando a sus trabajadores archivos a cada uno con una firma diferente y si se filtra información se puede saber quien lo filtro debido a esa "firma oculta".

<img src="https://www.cisinformatica.cat/wp-content/uploads/2024/09/que-es-la-esteganografia.jpg">

*Imagen Tomada De: https://www.cisinformatica.cat/es/que-se-la-esteganografia-en-ciberseguridad/*











---











# Archivos y estructuras de datos











## Qué son las Bases de Datos

Las bases de datos, muchos creen que son como tablas de excel. Asi como una tabla que tiene 5 campos donde esta Nombre, Cargo, Edad, Salario y País y esto sería igual que un archivo de excel en donde cada uno de los campos se llenan.

<img src="https://i.ytimg.com/vi/qtuElizNx9g/maxresdefault.jpg">

*Imagen Tomada De: https://www.youtube.com/watch?v=qtuElizNx9g*

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/OOo-2.0-Base-ca.png/960px-OOo-2.0-Base-ca.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Base_de_datos*

Lecturas Recomendadas:

* https://www.oracle.com/latam/database/what-is-database/

* https://aws.amazon.com/es/what-is/database/

* https://www.ibm.com/mx-es/think/topics/database

Para la gran mayoría de las personas allá afuera, las bases de datos son simplemente tablas de excel. Pero excel no es una base de datos, pues excel es una hoja cuadriculada donde coloco cualquier cosa.

Las bases de datos son estrictas respecto a los datos que guardan. Son variables de tipos especificos que tienen reglas.

La regla más importante en las BD es que no deben tener [redundancia](https://es.wikipedia.org/wiki/Redundancia_(ling%C3%BC%C3%ADstica) "Redundancia concept by Wikipedia"), los datos tienen que ser únicos para mantener integridad, esto es importante porque las BD es de lo que depende un negocio.

**Entonces por ejemplo:**

No pueden haber diferentes tipos de transacción cuando mueves dinero de un banco a otro. No pueden haber diferentes tipos de contraseña o de usuarios cuando estás guardando tu nombre de usuario o contraseña para un sistema único.

No pueden haber diferentes formatos de vuelo cuando estás guardando los vuelos de un avión.

Estos sistemas requieren ser estrictos, características estrictas de almacenamiento de los datos y para eso son las bases de datos.

Para evitar redundancia, las bases de datos se estructuran pensando en cuáles son las tablas necesarias para representar cada catergoría de datos y luego se conectan entre sí.

**Por ejemplo:**

Imaginemos que vamos a hacer la tabla de una red social, entonces en una red social tú tienes uan serie de Post en el timeline y esos post que son creados por usuarios necesitan tener su nombre de usuario, quién lo creó como contenido y por dentro puede tener comentarios, el post puede tener likes y los comentarios tambien pueden tener likes.

<img src="https://img.freepik.com/vector-gratis/plantilla-publicacion-instagram-notificaciones_23-2147838119.jpg">

*Imagen Tomada De: https://www.freepik.es/fotos-vectores-gratis/cuadricula-instagram-mockup*

Por lo que un Post contiene: El Post, Los comentarios, Los likes, Los likes de los comentarios, el nombre de usuario que lo creó.

Pensemos en la forma más simple en la que esta base de datos ocurriría. ¿Qué es lo primero que necesitamos entender? Probablemente lo primero que necesitamos entender es que hay usuarios. 

Los usuarios tienen un nombre de usuario y por supuesto para poder entrar y ser identificados de una manera unica, necesitan una contraseña.

En una base de datos esto no es lo único que se necesita. Tambien necesitamos un número único que los identifique porque los números son variables muy simples asi como por ejemplo, cuando un país te asigna un número que te identifica como ciudadano de ese país, como la cédula, el documento de votación, el pasaporte, entre otros.

Y es una buena idea que guardemos la fecha en la que este usuario se registro.

Por lo que para el usuario tenemos 4 varaibles con 3 tipos de datos distintos.

---

### Tabla Usuarios

* [PK] usuario_id - int = número entero

* nombre_usuario - string = texto

* contrasena - string = texto

* fecha_registro - date = fecha

---

Si estuvieramos en excel esto seria una hoja aparte y ahora que tenemos esta tabla, ahora necesitamos guardar todos los Post que hacen diferentes usuarios. Entonces, imagina que tenemos un post como los de toda la vida.

Los post son creados por usuarios, entonces necesitamos el ID del usuario que creó el Post, y solo necesito el ID del usuario porque por medio de ese ID puedo encontrar la información de ese usuario en esa tabla siendo asi: No necesito agregar el nombre del usuario. 

Porque lo puedo buscar a traves del ID de usuario que estoy guardando en la tabla de los Post, pero cada Post es único por lo que voy a necesitar un ID del Post, un número que identifique cada uno de estos Post.

Necesitaremos tambien una descripción del contenido siendo una variable de tipo string = texto, una fecha de publicación y entonces eso es una variable de tipo fecha.

Y si le vamos a poner likes, necesitamos una variable númerica siendo asi un contador de los likes que tiene y tambien, si quiero agregarle comentarios necesito un contador de estos comentarios siendo asi una variable de tipo entero.

Por lo que siendo asi:

---

### Tabla Post

* [PK] post_id - int

* [FK] usuario_id - int

* contenido - string

* fecha_publicacion - string

* contador_me_gusta - int

* contador_comentarios - int

---

Ahora:

[PK significa Primary Key o LLave Primaria](https://www.ibm.com/think/topics/primary-key "PK concept by IBM") de esa tabla siendo asi, el identificador único de cada uno de los registros de la tabla.

Siendo esta llave primaria la que me conecta con la tabla de post siendo asi que en la tabla post, la llave primaria sea post_id

y tambien tengo una llave especial única de otra tabla que me conecta con los datos de esa tabla, siendo asi que en la tabla post, me conecta con la tabla usuarios. 

Esa se llama una [llave foránea o Foreing Key](https://www.ibm.com/docs/en/db2-for-zos/12.0.0?topic=integrity-defining-foreign-key "FK concept by IBM") y es la llave primaria en otra tabla. Que me puede traer esos datos que son únicos, en este caso es único saber quién es el tipo de usuario que colocó un Post.

<img src="https://images.ctfassets.net/00voh0j35590/2K1mVD8aEwDgRcE0eEuCR8/279085dae1b34b30e32d43c9641b7df3/what_is_a_foreign_key_visual_explanation.jpg">

*Imagen Tomada De: https://www.cockroachlabs.com/blog/what-is-a-foreign-key/

---

**Ahora ¿Donde guardo los comentarios?**

Los comentarios son otra cosa aparte que guardaría en una tabla llamada comentarios, ¿Qué necesitaria para esta tabla?

    [PK] comentarios_id - int

    [FK] usuario_id     - int

    [FK] post_id        - int

    contenido         - string

    fecha_comentario  - date

    contador_me_gusta

---

Siendo asi tenemos toda una tabla de comentarios y toda una conexión en una base de datos. Una BD es mucho más compleja que esto, pero es un muy buen ejemplo. 

Siendo asi, visible los componentes básicos de una base de datos. Hay diferentes herramientas de Software que construyen esas bases de datos:

* Hoy en día casi ya no se usa, pero [Access de Microsoft](https://www.microsoft.com/es-co/microsoft-365/access) sirve para eso.

* Existen programaciones que se llaman [SQL Lite o SQLite. ](https://sqlite.org/)

* la base de datos más común usada en el mundo es [MySQL](https://www.mysql.com/).

<img src="https://kinsta.com/wp-content/uploads/2019/04/logo-mysql-1.svg">

*Imagen Tomada De: https://kinsta.com/es/blog/que-es-mysql/*

* Tambien existe SQL Server del lado de Microsoft 

[ORACLE](https://www.oracle.com/latam/database/) a nivel profesional.

* La gran mayoría de los grandes y profesionales proyectos utilizan una base de datos de alto rendimiento que se llama [PostgreSQL](https://www.postgresql.org/).

Todos estos sistemas son conocidos como motores de bases de datos. 

Lecturas Recomendadas:

* https://es.wikipedia.org/wiki/Motor_de_base_de_datos

* https://ed.team/blog/6-motores-de-bases-de-datos-sql

Los motores de bases de datos son pequeños servidores, herramientas de software que en el disco duro almacenan en diferentes archivos estas estructuras.

Las bases de datos no son un archivo porque en una gran compañia, miles de personas y en ocasiones millones de personas, tienen que acceder a leer, editar y modificar estas bases de datos **en tiempo real** y eso requiere reglas especificas.

También existe un lenguaje de programación construido especificamente para consultar la base de datos. Este lenguaje es conocido como SQL.

SQL = Structured Query Language

Lecturas Recomendadas:

* https://aws.amazon.com/es/what-is/sql/

* https://www.ibm.com/mx-es/think/topics/structured-query-language

* https://universidadeuropea.com/blog/lenguaje-programacion-sql/

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Sql_data_base_with_logo.svg/500px-Sql_data_base_with_logo.svg.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/SQL*

Cuando hay personas que le dicen "My sequel" en vez de "My SQL" es porque una de las perimas bases de datos del mundo se llamaba Secuela o Sequel. Por lo que se volvió parte de la industria llamarle Sequel a SQL, pero realmente es SQL: Structured Query Language.

Este lenguaje por ejemplo, si quisiéramos seleccionar todos los comentarios de usuarios cuyo nombre de usuario empiece por la letra F escribimos un código como este:

    SELECT * FROM COMENTARIOS c
    JOIN USUARIOS u ON c.usuario_id = u.usuario_id
    WHERE u.nombre_usuario LIKE 'F%';

<img src="https://www.astera.com/wp-content/uploads/2024/01/SQL-ETL-code-for-data-transformation.png">

*Imagen Tomada De: https://www.astera.com/es/type/blog/sql-etl-tools/*

Es un código distinto al código de programación normal. Algo asi se ve el lenguaje que hace consultas a bases de datos. Y esto es toda una profesión muy bien pagada.

Lecturas Recomendadas:

* https://aws.amazon.com/es/what-is/data-science/

* https://www.coursera.org/mx/articles/what-does-a-data-analyst-do-a-career-guide

* https://www.datacamp.com/es/blog/how-to-become-a-data-analyst

---

Las bases de datos se conectan con los lenguajes de programación y con las aplicaciones que haces de una manera distinta a los archivos pues un archivo se abre, se puede escribir, se puede guardar, pero las bases de datos tienen reglas específicas para guardar, editar, etc...

Es la forma más facil de manejar datos dentro de una aplicación y es lo más común que tú aprendes cuando aprendes un lenguaje de backend o un lenguaje de desarrollo de aplicaciones móviles, etc...

Es extremadamente común y necesario para cualquier empleado de desarrollo de software.

existen otro tipo de bases de datos que no son relacionales, se conocen como NoSQL, la más común son las bases de datos documentales que son como tablas de excel que tienen diferentes variables que van cambiando. También existen bases de datos que son gráficos o grafos y bases de datos que son llave valor, que simplemente guardan una variable con un valor. 

Lecturas Recomendadas:

* https://aws.amazon.com/es/nosql/

* https://www.ibm.com/es-es/think/topics/nosql-databases

* https://www.oracle.com/latam/database/nosql/what-is-nosql/

* https://www.mongodb.com/es/resources/basics/databases/nosql-explained

Tipicamente cuando uno hace caché, que es guardar en memoria RAM los datos de algo que uno usa constantemente, uno usa una base de datos llave valor, la más común de ellas se llama [Redis](https://redis.io/) o [MongoDB](https://www.mongodb.com/).

<img src="https://kinsta.com/es/wp-content/uploads/sites/8/2023/05/redis-vs-mongodb.jpg">

*Imagen Tomada De: https://kinsta.com/es/blog/redis-vs-mongodb/*










---










## Cómo funciona el formato JPG

El ojo humano no puede ver todos los colores. Hay varias cosas que son imperceptibles en nuestro ojo. Pero cuando tomamos una [fotografía](https://es.wikipedia.org/wiki/Fotograf%C3%ADa "Fotografía concept by Wikipedia") los [sensores fotográficos](https://es.wikipedia.org/wiki/Sensor_de_imagen "Sensores Fotográficos concept by Wikipedia") guardan mucho más detalle en los formatos normales.

En 1992, un grupo llamado [Join Photographic Experts Group](https://en.wikipedia.org/wiki/Joint_Photographic_Experts_Group "JPEG by Wikipedia") o JPEG, creo el formato JPG: Un formato especial de compresión de imágenes que aprovecha esta característica del ojo humano para comprimir las fotos.

Lecturas Recomendadas:

* https://www.freecodecamp.org/news/how-jpg-works-a4dbd2316f35/

* https://www.adobe.com/es/creativecloud/file-types/image/raster/jpeg-file.html

* https://jpeg.org/about.html

Video Recomendado: https://www.youtube.com/watch?v=_OF3LKJkYC8

Hay que entender la diferencia entre una pantalla y el medio impreso, cuando tu [imprimes](https://es.wikipedia.org/wiki/Impresi%C3%B3n "Imprimir concept by Wikipedia") una foto, cuando tu ves una foto en el mundo real esta foto esta dividida en 4 grandes colores, 4 tintas que son las 4 tintas que tipícamente tiene una impresora: **[CMYK](https://www-figma-com.translate.goog/resource-library/what-is-cmyk/ "CMYK concept by Figma")**

* Cian

* Magenta

* Amarillo

* Negro

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/CMYK_color_swatches.svg/500px-CMYK_color_swatches.svg.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Modelo_de_color_CMYK*

La combinación CMYK da la combinación de todos los colores que se pueden expresar en un papel, en un medio impreso.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/CMYK_color_wheel-es.png/500px-CMYK_color_wheel-es.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Modelo_de_color_CMYK*

Pero en una pantalla esto funciona distinto, la luz tiene total color, que es el blanco u ausencia absoluta de color que es el negro.

Entonces, ¿Cómo hacemos los puntos intermedios? 

Una pantalla tiene una serie de puntos que se llaman píxeles, cada uno de estos píxeles tiene 3 colores:[ El rojo, el verde y el azul - RGB](https://developer.mozilla.org/es/docs/Glossary/RGB "RGB by MDN")

<img src="https://www.ionos.com/es-us/digitalguide/fileadmin/_processed_/2/3/csm_que-es-un-pixel-la-disposicion-de-los-subpixeles_44d751808c.webp">

*Imagen Tomada De: https://www.ionos.com/es-us/digitalguide/paginas-web/diseno-web/que-es-un-pixel/*

Son 3 lamparas de luz, de estos 3 colores el cual dependiendo de su intencidad de brillo hay total rojo, total verde, total azul o ausencia de alguno de ellos. Siendo asi esta intensidad de brillo el color en nuestras pantallas.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/Synthese%2B.svg/500px-Synthese%2B.svg.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/RGB*

La mayoria de formatos de captura de imagen completos, como los mapas de bits conocidos como BMP o como los PNGs, que son otro formato de compresión guardan toda la información de cada píxel siendo asi: En cada punto, cúal es su total a rojo, verde y azul (Su intensidad de brillo)

Lecturas Recomendadas:

* https://www.crehana.com/blog/estilo-vida/que-es-mapa-bits/

* https://es.wikipedia.org/wiki/Imagen_de_mapa_de_bits

* https://learn.microsoft.com/es-es/dotnet/desktop/winforms/advanced/types-of-bitmaps

<img srC="https://learn.microsoft.com/es-es/dotnet/desktop/winforms/advanced/media/aboutgdip03-art02.gif">

*Imagen Tomada De: https://learn.microsoft.com/es-es/dotnet/desktop/winforms/advanced/types-of-bitmaps*

Lo primero que hace JPG es transformarlo a otro formato que se llama [YCbCR](https://es.wikipedia.org/wiki/YCbCr "YCBCr concept by Wikipedia") siendo asi:

* Y = La cantidad de luz

* CBCR = Un plano cartesiano en un eje x y un eje y que muestra todo el arcoiris de color que existe dependiendo de un punto en el plano cartesiano, esto es porque el ojo humano es menos sensible al color que a la luz.

* Cb representa el croma azul

* Cr representa el croma rojo

De esa manera: Guardando la luminancia de una fotografía, es más fácil poder comprimir el resto de los datos de su posición de color.

<img src="https://upload.wikimedia.org/wikipedia/commons/b/b8/YCbCr.GIF">

*Imagen Tomada De: https://es.wikipedia.org/wiki/YCbCr*

Por lo que lo primero que hace JPG es agarrar una foto, pasarla al plano de iluminación mostrando asi la cantidad de brillo de cada uno de los puntos y luego tengo un plano del croma azul y otro plano del croma rojo construyendo asi todos los colores dependiendo del plano.

Asi ha funcionado la fotografia, la impresión y muchos otros medios gráficos por mucho tiempo.

Son estándares.

Teniendo asi, la imagen dividida en estas 3 opciones:

1. Plano de iluminación

2. Croma Azul

3. Croma Rojo

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Barns_grand_tetons_YCbCr_separation.jpg/500px-Barns_grand_tetons_YCbCr_separation.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/YCbCr*

---

Lo siguente es crear bloques, cuadritos de la imagen, porque en ocasiones no necesitamos tanto detalle a nivel de pixel por lo que vamos a fragmentar la imagen en mini cuadritos. 

Típicamente en JPG cada uno de estos cuadritos es de 8 x 8 píxeles, pero los cuadritos pueden ser mucho más grandes o mucho más pequeños dependiendo de la calidad de exportación del JPG.

Entre más pequeños estos cuadritos, más resolución y más detalle y entre más grandes los cuadritos, más perdida de calidad.

<img src="https://upload.wikimedia.org/wikipedia/commons/f/f2/Resolution_illustration.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Resoluci%C3%B3n_de_imagen*

El JPG reduce mas o menos una cuarta parte la cantidad de detalle en los canales de color sin remover la iluminación porque al ojo humano no le importa el color tanto como la iluminación.

Sin ir a tanto detalle, se aplica una onda de coseno y la transformada al [coseno](https://es.wikipedia.org/wiki/Teorema_del_coseno "Coseno concept by Wikipedia") y lo que hace es ir a la frecuencia de cada uno de los bloques de 8 píxeles y convertirlo en una expresión matemática mucho más simple en una matriz.

<img src="https://cdn.pruebat.org/video/lbhrnM2DpQk/portada.png">

*Imagen Tomada De: https://pruebat.org/SaberMas/MiClase/inicia/33350/*

De toda la resolución de información matemática de cada uno de los píxeles de cada uno de los bloques de 8x8, se convierte en una ecuación matemática de onda de coseno para expresarlo en menos bytes, luego se aplican diferentes mecanismos matemáticos de algebra lineal para comprimir los datos que ya existen, estos mecanismos se conocen como cuantización.

Uno de ellos por ejemplo: Es que se va a ir en zigzag por los diferentes componentes de los pixeles para ir agrupando cada uno de los elementos de la matriz.

<img src="https://upload.wikimedia.org/wikipedia/commons/1/1f/JPEG_example_zigzag.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Archivo:JPEG_example_zigzag.png*

Hacemos esto en grupos de 8 bloques para la iluminación, el croma azul, el croma rojo y luego agarramos esos 3 componentes que han sido comprimidos matemáticamente, los volvemos a convertir a RGB y eso, lo volvemos a meter en un solo archivo y asi tienes tu imagen JPG.

JPG elimina las cosas que el ojo humano no puede ver, cambia el formato rojo, verde, azul a un formato iluminancia, croma azul, croma rojo. Luego vuelve la imagen en pequeños bloques de 8 pixeles por 8 píxeles donde busca una especie de promedio de los colores expresados matemáticamente para luego expresarlo más chiquito en un archivo más pequeño con menos necesidad de bytes y volverlo a combinar y comprimir en un archivo RGB final, que termina siendo la imagen JPG.

<img src="https://static.platzi.com/media/user_upload/upload-66d7f485-1bca-4f1f-b138-9f9c5271fc0f.png">

JPG no es el único formato, existe un formato llamado PNG o Portable Network Graphics que no comprime las imagenes como las comprime JPG, pues este formato retiene la calidad y funciona de una forma completamente distinta, por lo que tiende a tener formatos de archivo más grandes por eso.

Lecturas recomendadas: 

* https://www.adobe.com/co/creativecloud/file-types/image/raster/png-file.html

* https://es.wikipedia.org/wiki/Portable_Network_Graphics

PNG viene en 2 "sabores":

* **PNG 8**: Tiene pocos colores porque solamente es de 8 bits, tambien puede ser transparente, pero tiene un solo color para esto y por ende se ve como un hueco pixelado.

* **PNG 32**: Tiene millones de colores y puede tener transparencias perfectas donde los archivos JPG no tienen la capacidad de ser transparentes. Tiene todo el arcoiris de transparencia incluyendo bordes completamente suaves.

> Notese la transparencia de la siguente imagen.

<img src="https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png">

*Imagen Tomada De: https://upload.wikimedia.org/wikipedia/commons/4/47/PNG_transparency_demonstration_1.png*










---










## Videos: Contenedores, Codecs y Protocolos

Si [JPEG](https://es.wikipedia.org/wiki/Joint_Photographic_Experts_Group "JPEG concept by Wikipedia") fue creado para comprimir imágenes porque guardar cada uno de los pixeles de la pantalla crea un archivo enorme, imaginese cuánto pesa guardar una película entera. Porque una [película](https://es.wikipedia.org/wiki/Pel%C3%ADcula "Película concept by Wikipedia") no es más que una serie de imágenes, una detras de otra, tomadas en sucesión.

<img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEinK_9ZgKpFGMmvnmdgzxmqLnVUgavb2KsRxi5e3vh9SyJAUa3tjyTJoQF0LGa8DCK99NTW3Zhphmn3kAijcFbjxpnYmKyNs5HrkvtbRxSR83kcVIxI-HKuR99dWXVZ0VGmx36C-4-vI2mq/s1600/53669fa18ce0dd5ed7c83251fcd3b60d.gif">

*Imagen Tomada De: https://plasticabrian23.blogspot.com/2014/04/gif.html*

Una película típicamente tiene 24 imágenes por cada segundo que se graba, de ahí vienen los 24 frames por segundo. Asi que la compresión sería super difícil.

Los algoritmos de compresión de video funcionan de una manera muy interesante.

Imaginese una imagen a lo largo del tiempo y esa imagen, es un video de una persona corriendo. 

<img src="https://www.gifsanimados.org/data/media/169/correr-imagen-animada-0051.gif">

*Imagen Tomada De: https://www.gifsanimados.org/cat-correr-169.htm*

Si una persona esta corriendo, digamos que corriendo a través del frame lo único que va cambiando es la persona, el resto del fondo no cambia. Así que los códecs, los compresores de video, buscan en el tiempo cuáles son esos pedazos que no cambian y los vuelven bloques.

Bloques tridimensionales que no se mueven en el tiempo hasta que no cambia por completo la escena, esta es la esencia.

Lecturas Recomendadas: 

* https://es.wikipedia.org/wiki/C%C3%B3dec_de_video

* https://www.lenovo.com/co/es/glosario/codec/

* https://www.cloudflare.com/es-es/learning/video/video-encoding-formats/

* https://platzi.com/blog/codec-para-video/

Los videos digitales modernos tienen que estar guardados en un contenedor siendo este el formato de archivo donde va el video. Típicamente estos archivos se encuentran como [.mp4](https://www.cloudflare.com/es-es/learning/video/what-is-mp4/ ".mp4 concept by Cloudflare"), [.mkv](https://es.wikipedia.org/wiki/Matroska "Matroska concept by Wikipedia"), [.avi](https://www.lenovo.com/co/es/glosario/avi/ ".avi concept by Wikipedia"), [.mov](https://www.cloudflare.com/es-la/learning/video/mov-vs-mp4/ ".mov concept by Cloudflare"), etc... Estos no son el compresor ni el descompresor sino simplemente el contenedor.

Por dentro del contenedor el video son muchas cosas.

Los videos tienden a ser:

* [Video](https://es.wikipedia.org/wiki/Video "Video concept by Wikipedia")

* [Audio](https://es.wikipedia.org/wiki/Audio_digital "Audio concept by Wikipedia")

* [Subtítulo](https://es.wikipedia.org/wiki/Subt%C3%ADtulos_cerrados "Subtítulos concept by Wikipedia")

Y a veces contienen múltiples tracks de audio, múltiples tracks de subtítulos y en algunos casos múltiples tracks de video.

Por lo que vamos primero con el video:

El contenedor es simplemente el formato de archivo, ¿De qué depende? De la compatibilidad de las computadoras, del sistema donde lo estés usando, etc...

En este momento los más populares del planeta son .mp4, si tú descargas anime por ejemplo, o peliculas extrañas de lugares medio dudosos, probablemente encontrarás un formato que se llama MKV o Matrioshka Video donde mp4 es parte de un estándar internacional que se conoce como el consorcio H264.

Lecturas Recomendadas: 

* https://docs.fileformat.com/es/video/h264/

* https://en.wikipedia.org/wiki/Advanced_Video_Coding

* https://www.cloudflare.com/es-es/learning/video/what-is-h264-avc/

La televisión digital tiende a estar transmitida a través de este formato. Estos son formatos que guardan video por dentro.

<img src="https://digiday.com/wp-content/uploads/sites/3/2023/11/revamp-tv-digiday.gif">

*Imagen Tomada De: https://digiday.com/future-of-tv/future-of-tv-briefing-how-telemundo-is-using-tv-digital-and-streaming-originals-to-program-its-live-24-7-fast-channel/*

Los videos por dentro se graban en un formato nativo de los [sensores de las cámaras](https://es.wikipedia.org/wiki/Sensor_de_imagen "Sensor de camaras concept by Wikipedia") y luego chips en la camara: Esto incluye tu teléfono, una cámara de video, entre cualquier dispositivo que pueda grabar video. El chip automáticamente lo comprime a través de un sistema llamado el [Codificador Decodificador = CODEC = Compresor Descompresor.](https://www.dacast.com/es/blog-es/que-es-un-codec-de-video/ "CODEC concept by dacast.com")

Estos son algoritmos de compresión de video que funcoinan de maneras distintas y tienen diferentes compatibilidades.

Entre más chiquito es el video, más CPU o GPU necesitas para descomprimirlo a tiempo real.

Hoy en día los chips son extremadamente avanzados y no te va a mucho tiempo descomprimir un video. Pero si toma bastante tiempo comprimirlo porque requiere de operaciones matemáticas extremadamente complejas para guardar el video.

De hecho, hoy en día las tablets, las computadoras y los teléfonos tienen chips especializados en el SOC = System on a Chip, cuyo único trabajo es comprimir y descomprimir ciertos códecs, como el codec H264.

> Tu televisor sin duda tiene un chip dedicado simplemente a comprimir y descomprimir video.

Los algoritmos más comunes de compresión y descompresión hoy en día son H264, hay uno nuevo que se llama [H265](https://es.wikipedia.org/wiki/H.265 "H.265 concept by Wikipedia"), muy popular en los iPhones, existe uno de Google que se llama [VP9](https://es.wikipedia.org/wiki/VP9 "VP9 concept by Wikipedia"), y existe otro llamado [AV1](https://es.wikipedia.org/wiki/AV1 "AV1 concept by Wikipedia").

Los algoritmos tardan tiempo es distribuirse porque a pesar de que sean mejores o más comprimidos, necesitan actualizaciones de hardware debido a lo intensos que son.

Si un algoritmo es nuevo y tu teléfono o tu televisor o tu computadora no tienen un chip especializado para comprimir y descomprimirlo, este trabajo se le manda a la CPU o a la GPU por lo que requiere más energia y por ende más batería y puede hacer el proceso más lento.

En la práctica el códec más común que te vas a encontrar será el H264.

H264 tiene un problema muy grande es que es un códec propietario dueño de un consorcio, el [consorcio MPEGLA](https://en.wikipedia.org/wiki/MPEG_LA "MPEG LA concept by Wikipedia"). Siendo este consorcio múltiples empresas, entre ellas está [Sony Music](https://es.wikipedia.org/wiki/Sony_Music "Sony Music concept by Wikipedia"), [Apple](https://es.wikipedia.org/wiki/Apple "Apple concept by Wikipedia"), [Microsoft](https://es.wikipedia.org/wiki/Microsoft "Microsoft concept by Wikipedia"), entre otros. Y le cobran a los fabricantes por cada una de las veces que en sus dispositivos se usa el códec, en respuesta a ello, Google se compró una empresa llamada [ON2 technologies](https://es.wikipedia.org/wiki/On2_Technologies "On2 Technologies concept by Wikipedia") de donde sale el CODEC BP9, pero no es tan popular.

<img src="https://upload.wikimedia.org/wikipedia/en/thumb/9/92/MPEG_LA_logo.png/500px-MPEG_LA_logo.png">

*Imagen Tomada De: https://en.wikipedia.org/wiki/MPEG_LA*

Ellos no solamente se compraron esa empresa sino que hicieron el CODEC completamente abierto y la comunidad de software abierto tambien desarrolló un sistema automático abierto y gratuito de descompresión de los videos H264 que se conoce como [X264](https://es.wikipedia.org/wiki/X264 "X264 concept by Wikipedia").

Pero eso es video sin incluir el audio en donde este es un monstruo distinto.

<img src="https://media.tenor.com/b3pZMIW1I-UAAAAM/audio-beat.gif">

*Imagen Tomada De: https://tenor.com/search/audio-wave-gifs*

---

La compresión y descompresión de audio tiene una revolución muy grande en los noventas con la llegada del algoritmo [MP3](https://es.wikipedia.org/wiki/MP3 "MP3 concept by Wikipedia") que funciona muy parecido al JPG. Así como JPG elimina los componentes que el ojo no puede ver, mp3 elimina los componentes en la onda de audio que el oido no puede escuchar.

Lectura Recomendada: https://es.wikipedia.org/wiki/Algoritmo_de_compresi%C3%B3n_con_p%C3%A9rdida

Hay personas que dicen que lo pueden escuchar todo y depronto sí, es toda una industria que se llama los [audiófilos](https://audio46.com/es/blogs/audio46-guidepost/what-is-an-audiophile), que son personas obsesionadas con los parlantes más costosos del planeta tierra.

* Parlantes KEF LS 50: https://lflaudio.com/producto/kef-ls50

Puede que hallan parlantes que puedan mostrar más sonidos de una misma honda, pero el cambio no va a ser tan perceptible.

Existen varios códecs de audio, está [AAC](https://es.wikipedia.org/wiki/Advanced_Audio_Coding "AAC concept by Wikipedia"), [MP3](https://es.wikipedia.org/wiki/MP3 "MP3 concept by Wikipedia"), [OPUS](https://es.wikipedia.org/wiki/Opus_(c%C3%B3dec) "OPUS codec concept by Wikipedia"), entre otros. Allá afuera te vas a encontrar casi siempre con el códec AAC que es muy común conectarlo con H264 y meterlo en el contenedor MP4 o con el CODEC MP3.

Con el contenedor códec de video y códec de audio ya tengo un video completo, pero no es suficiente para transmitirlo por internet.

En internet tengo un problema y es que a veces yo tengo que abrir un archivo de video en la mitad del video. Imagina que entro a youtube y quiero verlo en el minuto 3 o en el minuto 5 o justo en el final.

Entonces no puedo tener el primer segmento del video, y en la cabecera del archivo, los metadatos son muy importantes. 

En la cabecera del contenedor hay mucha información que se necesita para reproducir el video, por ejemplo: 

* Resolución del video: Que tengo que preparar para que el reproductor de video tenga la forma correcta.

* [Framerate](https://es.wikipedia.org/wiki/Fotogramas_por_segundo "FPS concept by Wikipedia"): Cuántos frames por segundo tiene el video, de esa manera el video se reproduce en la velocidad correcta.

* Codec de compresión de video

* Codec de compresión de audio

* Otros datos...

Si yo estoy transmitiendo un video por internet y lo abro en un punto aleatorio del video o por ejemplo si estoy haciendo streaming en vivo, pues no tengo el header. ¿Qué hago?

<img src="https://mastersofmedia.hum.uva.nl/wp-content/uploads/2019/10/Twitch-Chat-Gif.gif">

*Imagen Tomada De: https://mastersofmedia.hum.uva.nl/2019/10/unfolding-twitch-vernaculars-through-emotes/*

Existen protocolos de transmisión que así como existe HTTP para mandar archivos HTML o Archivos de texto por internet, estos son protocolos de transmisión específicamente diseñados para enviar video.

Hoy en día, el más popular es [HLS o Http Live Streaming](https://www.cloudflare.com/es-es/learning/video/what-is-http-live-streaming/ "HLS concept by Cloudflare"), hay otro que se llama [mpeg-DASH](https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP "MPEG DASH concept by Wikipedia"), y hay uno muy viejo de la época de Flash, conocido como [RTMP o Real Time Message Protocol](https://wave.video/es/blog/rtmp-guide/ "RTMP concept by wave.video").

Estos 3 protocolos usan técnicas distintas para hacer más o menos lo mismo. 

Agarrar los videos desde su contenedor, romperlos en pedacitos, y en cada uno de esos pedacitos incluir en la cabecera de tal forma que si yo salto a un punto aleatorio del video, salto al pedacito de video que estoy buscando junto con la cabecera y tengo los datos que necesito sin importar el momento en el video en el que lo estoy obteniendo.

Los servidores modernos de video también están constantemente midiendo cuánto ancho de banda hay entre el usuario y el servidor. Y de esa manera mandan versiones distintas de los videos que tienen otros tipos diferentes de compresión.

La forma en la que intermanente esto funciona, es que la mayoria de los videos cuando son subidos a un servidor de video, son recomprimidos en diferentes tamaños y en diferentes bitrates.

Un [bitrate](https://es.wikipedia.org/wiki/Tasa_de_bits "bitrate concept") es cuántos bits le puedo colocar a un video por cada segundo de video. Por ejemplo: Un video que tenga un bit rate de un megabit por segundo tiene 1.000.000 de bits de información por cada segundo de video que yo estoy enviando.

Entre más bits tenga más calidad, pero más ancho de banda necesita.

Entre menos bits tengo menos calidad y menos ancho de banda necesito.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f6/Bandwidth.svg/500px-Bandwidth.svg.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Ancho_de_banda*

Existe un mito en el que bitrate y resolución es lo mismo, porque la mayoría de las personas observa esto a través de youtube y uno puede convertir o cambiar la calidad en: 144p, 240p, 360p, 480p, 720p, 1080p

Pero no es asi, pues se puede enviar un video de 1080p en un megabit de 1 MB/s o de 512 KB/s o de 100 KB/s, se van a ver más feos pero es posible.

> Por lo que la idea de bitrate y que la resolución esten conectadas es falso.

Hay servidores avanzados que usando procesadores muy complejos recomprimen en tiempo real los videos. Asi funciona por ejemplo: [Netflix](https://www.netflix.com/ "Netflix.com") o [Twitch](https://www.twitch.tv/).

Hoy en día la gran mayoría de los navegadores, teléfonos y computadoras son compatibles con la gran mayoría de los códecs, pero hace muy pocos años era muy difícil lograr compatibilidad.

Ten mucho cuidado cuando estés exportando y sí quieres asegurarte en maxima compatibilidad lo mejor es que uses mp4 como contenedor, h264 como codec y AAC como codec de audio.

Los subtítulos tambien tienen estándares. Los 2 estándares más comunes son [.SRT](https://mailchimp.com/es/resources/what-is-an-srt-file/ ".srt concept by mailchimp.com") o [.VTT](https://filext.com/es/extension-de-archivo/VTT "VT concept by filext.com") que son básicamente archivos de texto con un código interno donde para un tiempo específico del video sale un tipo de texto.

Tanto las imágenes como los videos tienen interamente en esencia mecanismos de compresión de los bytes, del contenido.











---











## Cómo funciona un archivo .zip

> La compresión de archivos es un proceso fascinante que utilizamos a diario sin entender realmente cómo funciona.

Detrás de cada archivo ZIP hay una serie de algoritmos matemáticos que permiten reducir significativamente el tamaño de nuestros datos sin perder información.

Lecturas Recomendadas:

* https://es.wikipedia.org/wiki/Formato_de_compresi%C3%B3n_ZIP

* https://es.wikipedia.org/wiki/Compresi%C3%B3n_de_datos

Los archivos .zip son conocidos como archivos comprimidos y la forma en la que comprimen se puede entender: Vamos a comprimir una palabra para entender matemáticamente esa palabra cómo se comprime.

Vamos a comprimir:

    MANZANAS_AMARILLAS_DE_ANA

Solo tendremos mayusculas, aunque en la practica tambien podriamos tener minusculas.

Debemos entender primero en la palabra cuántas letras tiene, y cuales son las letras más frecuentes de esta palabra.

La letra más frecuente es la letra A

* La letra A aparece 8 veces

* La letra N aparece 3 veces

* La letra _ aparece 3 veces

* La letra M aparece 2 veces

* La letra S aparece 2 veces

* La letra L aparece 2 veces

* Z = 1

* R = 1

* I = 1

* D = 1

* E = 1

Entendiendo ahora la frecuencia de las letras puedo empezar a comprimir. Sabiendo que las letras dentro de una computadora son bytes, es decir ocho bits, 8 grupos de 0 y 1.

Y estos representan un número, que es en la forma de la que se guarda en el computador cada una de las letras.

Los números corresponden a la tabla ASCCI en donde por ejemplo:

    La letra M

    Decimal: 77

    Hexadecimal: 0x4D

    Binario: 01001101

y por otro lado:

    A

    Decimal: 65

    Hexadecimal: 0x41

    Binario: 01000001

<img src="https://elcodigoascii.com.ar/codigo-americano-estandar-intercambio-informacion/codigo-ascii.png">

*Imagen Tomada De: https://elcodigoascii.com.ar/*

Asi es como entiende internamente una computadora cada letra.

La palabra MANZANAS_AMARILLAS_DE_ANA son 25 letras, por lo que se almacenan 25 bytes de información en la computadora, siendo asi cada byte 8 bits por lo que son un total de datos que tiene la palabra son 200 bits.

La idea de la compresión es que necesitemos la menor cantidad de bits para expresar las letras más comunes de las palabras que están en un archivo.

Entonces en nuestro caso donde la letra A es la que más se representa por ende debe haber una forma en la que representemos esa letra en 8 bits, la representemos en 1 bits.

Nosotros podemos crear un [árbol binario](https://es.wikipedia.org/wiki/%C3%81rbol_binario "Árbol Binario concept by Wikipedia"). Es una estructura de datos que tiene una raíz en donde si agarro a la derecha tengo un 1 o si voy a la izquierda tengo 0  y cada uno de estos nodos tiene máximo dos caminos.

Por eso se llaman árboles binarios, porque cada punto o cada nodo del arbol solamente agarra hacia dos lados. 

Esta es la representación gráfica de una estructura matemática.

<img src="https://upload.wikimedia.org/wikipedia/commons/3/36/Binary_tree_%28oriented_digraph%29.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/%C3%81rbol_binario*

La raiz siempre donde agarra es el inicio del archivo, vamos a imaginar que cuando en mi raíz voy para la derecha es un 1 y cuando voy para la izquierda es un 0 y vamos a asumir que cada que digo uno es una letra y que cada vez que digo 0 estoy bajando en mi árbol.

Entonces la letra que más frecuencia tiene en mi archivo la voy a colocar en la primera ramita que tiene un uno siendo este la letra A.

Luego voy un cero a la izquierda del primer nodo y luego hago otro nodo de uno siendo la segunda letra más frecuente: N

Vuelvo a hacer otro 0, voy al uno del siguente nodo siendo asi la siguente letra más frecuente que es el espacio o _

Otro 0 y otro 1 que es la letra M

Otro 0 y otro 1 que es la letra S

Otro 0 y otro 1 que es la letra L

Otro 0 y otro 1 que es la letra Z

Otro 0 y otro 1 que es la letra R

0, 1 - D

0, 1 - E

Lo que se hizo fue organizarlos de mayor a menor frecuencia de acuerdo a la tabla de frecuencias

Ahora que tengo el arbol organizado, donde yo siempre sé que cero significa moverme a la izquierdo, bajar un nivel en mi árbol y que uno significa encontrar una letra, ahora voy a tratar de representar la palabra MANZANAS_AMARILLAS_DE_ANA expresada como los bits a donde llego a cada letra.

Por ejemplo, la primera letra es la M

en donde M se encuentra bajando 3 veces en el árbol y llendo a la derecha una sola vez. Por lo que si fuera a expresarlo en movimientos de ceros y unos.

La M sería 0001 

La letra A de "MANZANAS" que sigue despues de la letra M sería simplemente un 1, porque es la primera letra de la raíz del árbol hacia abajo por lo que solo necesité 1 bit para expresar A

Cuantos bits necesito para expresar N? 2. Lo que seria un 0 y un 1 de acuerdo al árbol por lo que ya vamos "MAN"

Despues Z es la letra que esta más lejos por lo que será 0000001 

---

por lo que:

    M = 0001

    A = 1

    N = 01

    Z = 0000001

    A = 1

    N = 01

    A = 1

    S = 00001

    _ = 001

    A = 1

    M = 001

    A = 1

    R = 00000001

    I = 000000001

    L = 000001

    L = 000001

    A = 1

    S = 00001

    _ = 001

    D = 0000000001

    E = 00000000001

    _ = 001

    A = 1

    N = 01

    A = 1

---
    
Entonces vemos que tenemos algunos números grandes y otros pequeños, de hecho hay algunos más pesados que un byte como por ejemplo la letra D en donde son 10 bits y la letra E tiene 11 bits.

Sin embargo si contamos cuantos bits tiene la palabra en total de esta forma, son 98 bits. Por lo que la estructura original me hubiera costado 25 bytes/200 bits, organizada con nuestro árbol se comprimió en más del 50% siendo 98 bits. Y si la palabra hubiera sido más larga, se habría logrado comprimir aún más.

Porque entre más letras se comporten con alta frecuencia, entonces más fácil va a ser comprimir y esto es todo lo que se tuvo que hacer para comprimir el archivo.

Ahora, si tomamos los números de la estructura del árbol binario y lo organizamos como bytes:

    00011010 00000111 01100001 00001001 10001100 00000100 00000010 00001000 00110000 10010000 00000100 00000000 10011011

Teniendo asi 12.25 bytes, pero para completarlo le agregamos varios 0 siendo asi un total de 13 bytes.

Por eso cuando abres un archivo .zip tiene un monton de letras que no tienen sentido, porque si yo convierto esto en una letra para poder guardarlo en mi disco duro, voy a encontrar que cada uno de estos números corresponde a una letra en la tabla ASCCI, pero son números aleatorios que simplemente se ven como basura.

Sin embargo, si yo agarro todos estos ceros y unos que son noventa y ocho bits y tambien tengo por ejemplo, en la cabecera del archivo guardado de algún formato, mi arbol donde tengo la estructura a qué letra corresponde cada uno de los movimientos yo puedo descomprimir el archivo y volver a recrearlo y tener una vez más MANZANAS_AMARILLAS_DE_ANA

Siendo algo asi, el proceso del cómo se comprime y descomprime un archivo. No es el único algoritmo, hay varios algoritmos de compresión y descompresión. Pero esta es una de las técnicas.

Por lo que esto recuerda a que en nuestra computadora todo tipo de datos, podemos acceder bit por bit a cada uno de ellos lenguajes de programación.

<img src="https://gutl.jovenclub.cu/wp-content/uploads/2019/04/dwm-img-01-e1556095346814.png">

*Imagen Tomada De: https://gutl.jovenclub.cu/parchear-archivo-binario-de-dwm-con-xxd-y-ht-editor/*

---

Hay que programar este algoritmo en cualquier lenguaje de programación.

Github Repositorio de alguien que lo hizo: https://github.com/MrDonkey08/huffman

Para usarlo se necesita instalar el paquete BitVector: pip install BitVector

* https://colab.research.google.com/drive/1FFyo5QFofbE8RZoJOPxK3j_A3rrnjong?usp=sharing










---










# Introducción a Blockchain e Inteligencia Artificial











## Arquitectura y funcionamiento interno de Blockchain

Pagina Recomendada para Revisar: https://bitcoin.org/es/

Documental Recomendadisismo (Me encanto): https://www.youtube.com/watch?v=qb4M1lfDJSA

Uno entiende el [dinero](https://es.wikipedia.org/wiki/Dinero "Dinero concept by Wikipedia") porque si tienes 10 dólares y se los quieres dar a un amigo, simplemente se los entregas. Y si tu le envías ese dinero de tu banco al banco de esa persona, tú das un click y ese dinero se resta de tu cuenta y se suma a la cuenta de la otra persona.

<img src="https://cdn-icons-gif.flaticon.com/15579/15579001.gif">

*Imagen Tomada De: https://www.flaticon.es/icono-animado-gratis/transaccion_15579001*

Es momento de pensar:

Cuanto tú envías 10 dólares de tu [banco](https://es.wikipedia.org/wiki/Banco "Banco concept by Wikipedia") al banco de otra persona, no hubo una transacción de [billetes hechos de papel de algodón](https://es.wikipedia.org/wiki/Papel_moneda "Papel Moneda concept by Wikipedia").

Lo que pasó fue que una variable en la base de datos de un banco restó 10 y una variable en la base de datos de otro banco sumó 10.

<img src="https://gifgifs.com/animations/other-animations/money/money-printing.gif">

*Imagen Tomada De: https://gifgifs.com/es/other-animations/money/35094-money-printing.html*

---

**¿Entonces qué es el dinero?**

Porque esos 10 dólares no están soportados por [oro](https://es.wikipedia.org/wiki/Oro "Oro concept by Wikipedia") en una bóveda ni por ninguna otra cosa. Siendo asi esos 10 dólares la suma en una base de datos y la resta en otra base de datos.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Gold_bullion_bars.jpg/500px-Gold_bullion_bars.jpg">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Oro*

Producto de que el gobierno de un país confía en el sistema bancario a través de mecanismos de verificación, donde el gobierno le hace auditoría a estos bancos, incluyendo mecanismos como los bancos centrales, para mantener un balance de la cantidad total de dinero que hay.

Los gobiernos pueden elegir que haya más dinero al imprimir dinero, y eso crea inflación reduciendo el valor de ese dinero.

Lecturas Recomendadas:

* https://datos.bancomundial.org/indicador/FP.CPI.TOTL.ZG

* https://www.bbva.es/finanzas-vistazo/ef/finanzas-personales/que-es-la-inflacion-y-como-se-calcula.html

* https://www.ecb.europa.eu/ecb-and-you/explainers/tell-me-more/html/what_is_inflation.es.html

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/World_Inflation_Rate_2019.png/960px-World_Inflation_Rate_2019.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Inflaci%C3%B3n*

El dinero es simplemente una historia que contamos, sostenida por las leyes y mecanismos de control de un gobierno, no es nada más.

Así que si yo quisiera enviarle dinero a alguien, pero no tener un gobierno, a un banco u otra institución central lidiando con ese dinero, sino que sea un proceso confiable, mundial, global y descentralizado, lo que necesitaria es tener la misma base de datos donde una variable resta 10 y otra variable suma 10.

Pero que esa base de datos fuera de todos y no de una sóla persona.

---

A diferencia de los sistemas fiduciarios tradicionales, donde la emisión y validación monetaria dependen de una autoridad central (como los [Bancos Centrales](https://es.wikipedia.org/wiki/Banco_central "Banco Central concept by Wikipedia") , Bitcoin opera bajo un modelo de descentralización absoluta. En el sistema financiero convencional, las instituciones centrales poseen la facultad discrecional de ejecutar políticas monetarias e imprimir circulante.

En contraste, Bitcoin se rige por un protocolo de código abierto y una red de nodos distribuidos. Al no existir un ente rector, la seguridad y la integridad del sistema no dependen de la confianza en una institución, sino en la verificación criptográfica y el consenso de la red. Esta arquitectura elimina los puntos únicos de falla y garantiza una política monetaria predecible y resistente a la censura.

<img src="https://wiki.lemon.me/public/wp-content/uploads/2022/04/la-historia-de-bitcoin-2.gif">

*Imagen Tomada De: https://wiki.lemon.me/es-pe/bitcoin/que-es-bitcoin-btc*

---

Una base de datos así necesita ciertas características, la base de datos tendría que estar copiada en múltiples computadores, tantos como uno quiera. Y todas las copias tienen que ser iguales.

Es decir que cada vez que halla una transacción, todas las copias de la base de datos se tienen que actualizar y como no hay un banco central o un gobierno que determine la fuente de verdad, necesito un mecanismo matemático que me permita confirmar entre todas las personas que tienen una copia de la base de datos que la base de datos es legítima y esto tiene que ocurrir cada vez que la base de datos cambie.

¿Cuando cambia la base de datos?

Cuando se resta una variable para sumarle a otra variable = Cuando hay una transacción.

<img src="https://cdn.pixabay.com/animation/2024/02/21/06/39/06-39-56-211_512.gif">

*Imagen Tomada De: https://pixabay.com/es/gifs/transferencia-de-dinero-11086/*

El dinero para que tenga valor tiene que ser finito.

Hay una cantidad máxima de pesos colombianos, hay una cantidad máxima de pesos peruanos, hay una cantidad máxima de dólares estadounidenses.

Así que tiene que haber una cantidad finita máxima de la moneda digital que estamos construyendo. 

Esto se puede expresar en ecuaciones matemáticas en las que todos los miembros de la red que son las computadoras que tienen una copia de la base de datos, de las transacciones estén de acuerdo.

---

**¿Y cómo sé cuáles de esos números son míos y cuáles de esas transacciones son de otras personas?**

En el mundo real yo tengo una cuenta bancaria y mi acceso a esa cuenta bancaria es con usuarios, contraseñas, con mi rostro biométricos, con mis datos oficiales de gobierno.

En el mundo digital yo necesitaría lo mismo, usuarios, contraseñas, pero sobre todo llaves de cifrado, una forma criptográfica de acceder a estos datos.

**¿Y cual es el mecanismo cuando quiero que otros encripten mensajes que me envíen a mí y yo pueda encriptar mensajes que envíen a otros?**

Cuando miramos hace un rato, en este mismo archivo markdown un tema sobre WhatsApp aprendimos que existen llaves públicas y llaves privadas, hagamos un repaso:

Si yo tengo dos personas a las que les quiero enviar un mensaje encriptados sin que los intermediarios de internet, como WhatsApp se enteren del contenido del mensaje, lo que yo hago es que tengo 2 llaves.

Tengo una llave pública que se la envió a quien me va a enviar un mensaje, esa llave pública cifra, entonces a mi amigo yo le digo "Ciframe ese mensaje con mi llave pública."

Mi amigo tiene mi llave pública que le envié por internet normal que se puede interceptar, pero esa llave solamente sirve para cifrar el mensaje.

Con la llave pública el amigo cifra el mensaje y me envia el mensaje cifrado a mi.

Y yo tengo una llave privada que yo no envié por internet, que solo vive en mi computadora.

Con esa llave privada, lo único que puedo hacer es descifrar los mensajes que fueron cifrados con la llave pública.

Como nadie tiene esa llave privada, solo yo puedo ver el contenido de ese mensaje.

Entonces todo el mundo puede cifrar mensajes para mí, cuando tienen mi llave pública. Pero solo yo tengo mi llave privada. Siendo asi que esos mensajes cifrados solo yo los puedo ver.

Por lo que si yo quiero enviarle un mensaje cifrado a mi amigo, él me manda su llave pública, yo lo cifro, se lo envió y el sólo lo puede descifrar con la llave privada que ni yo ni nadie tiene acceso a excepto de él.

<img src="https://cdn-icons-png.flaticon.com/512/3957/3957993.png">

*Imagen Tomada De: https://www.flaticon.es/icono-gratis/el-intercambio-de-datos_3957993*

---

Pues en nuestra red puede funcionar exactamente igual.

Acceder a una red de dinero descentralizado haría que yo tenga que crear una llave privada y una llave pública.

La llave pública se la doy a todo el mundo para que me envién dinero. Y la llave privada es la única forma en la que yo accedo al dinero que yo tengo (Bloques/Monedas) Además de eso, yo tendría un número especial en la base de datos de transacciones donde guardo mis transacciones. 

Lecturas Recomendadas:

* https://es.wikipedia.org/wiki/Cadena_de_bloques

* https://www.blockchain.com/es/

* https://www.xataka.com/especiales/que-es-blockchain-la-explicacion-definitiva-para-la-tecnologia-mas-de-moda

* https://www.ibm.com/es-es/think/topics/blockchain

* https://aws.amazon.com/es/what-is/blockchain/

<img src="https://www.bbva.com/wp-content/uploads/2022/06/BBVA-blockchain-apertura-1920x1181.jpg">

*Imagen Tomada De: https://www.bbva.com/es/innovacion/que-es-blockchain-como-ha-impulsado-la-descentralizacion/*

Ese número especial se podría llamar billetera, sería el equivalente a una cuenta bancaria. Y esa dirección de billetera es donde estan todas mis transacciones.

Pero, entonces ¿Qué es el dinero?

El dinero son las transacciones.

Esto es lo más dificil de entender.

<img src="https://substackcdn.com/image/fetch/$s_!WUHm!,f_auto,q_auto:good,fl_progressive:steep/https%3A%2F%2Fsubstack-post-media.s3.amazonaws.com%2Fpublic%2Fimages%2F861c99d3-3d4d-4d91-8a46-f32bcfc16d4a_629x329.gif">

*Imagen Tomada De: https://businessanalytics.substack.com/p/blockchain-and-analytics

Hay una cantidad máxima de numeritos de dinero, una cantidad máxima de billetes y las transacciones que hay entre esos billetes, es decir: Los dueños de esos números, eso es el dinero.

Cuando yo le resto a mi variable de números y le sumo a otro lado, estoy moviendo dinero, pero el dinero es un número finito. Todo esta información se encuentra en el paper de Blockchain y Bitcoin creado por [Satoshi Nakamoto](https://en.wikipedia.org/wiki/Satoshi_Nakamoto "Who is Satoshi Nakamoto - by Wikipedia") que construyó el protocolo que hoy conocemos como bitcoin.

Dato Curioso: Al día de hoy nadie sabe quién es Satoshi Nakamoto.

Quizás sea una persona, quizás sea un grupo de personas, quizás fue una inteligencia artificial, no lo sabemos.

<img src="https://upload.wikimedia.org/wikipedia/commons/a/a3/LenSassaman-Bitcoin-Tribute.png">

*Imagen Tomada De: https://en.wikipedia.org/wiki/Satoshi_Nakamoto*

Pero en el año 2009 una persona anónima publicó este paper. Entonces, ¿Por qué Bitcoin vale dinero? ¿Por qué sabemos que un Bitcoin vale 10.000, 15.000, 50.000, 100.000?

Porque alguien lo intercambio por dolares. Esa es la única respuesta. Las cosas valen porque alguien más les da valor. En el año 2009 hubo una persona que con un Bitcoin compro una pizza.

Y de ahí, a lo largo de los años han habido diferentes personas que han intercambiado las llaves privadas de estas direcciones por dólares del gobierno, y esto ha creado un mercado que terminó construyendo el valor de BitCoin expresado en dinero de gobierno.

---

¿Pero por qué se llama Block Chain = Cadena de Bloques?

La base de datos distribuida de las transacciones realmente son varios pequeños bloques de transacciones como si fueran libros de contabilidad digitales

> A día de hoy 17/01/2025: Actualmente, el número de bitcoins que hay en circulación es, aproximadamente, de 19.5 millones, aunque es importante que no se olvide el hecho de que este número varía (como se ha indicado, con cada bloque o cada movimiento realizado). Según https://www.bbva.es/finanzas-vistazo/ef/criptoactivos/cuantos-bitcoins-hay.html#:~:text=Actualmente%2C%20el%20n%C3%BAmero%20de%20bitcoins,bloque%20o%20cada%20movimiento%20realizado).

Y esos libros a día de hoy tienen una cantidad máxima de transacciones y una cantidad máxima de bitcoin.

Los bitcoin se dividen en fracciones conocidas como satoshis, estos bloques son descubiertos.

¿Cómo así que descubiertos?

Parte del problema de las criptomonedas es que tiene que haber un límite máximo de la cantidad de dinero que se puede crear, que se puede emitir.

Lo que se inventó Satoshi Nakamoto es unas ecuaciones matemáticas que hacen un uso muy intensivo del procesador y de energía eléctrica para descubrir unos números cifrados únicos.

Esas estructuras matemáticas numéricas únicas es lo que compone los bloques de bitcoin.

Y en esencia un bloque de bitcoin es como imprimir un montón de billetes de papel de algodón = es plata.

Parte del proceso de minar bitcoin, de generar estas ecuaciones matemáticas, es insertar en las diferentes bases de datos las transacciones. Y el paper determina que hay una cantidad máxima de transacciones que cada bloque puede tener.

Link del WhitePaper en Español: https://bitcoin.org/files/bitcoin-paper/bitcoin_es.pdf

¿Qué pasa cuando un bloque se llenó? y ya descubrí todo el tamaño del bloque? Pues lo cierro y construyo otro bloque. Pero necesito hacer que cada bloque esté relacionado entre sí.

Ahí entra otro proceso matemático que se conoce como [HASHING](https://www.ionos.com/es-us/digitalguide/paginas-web/desarrollo-web/hashing/ "Hashing concept by Wikipedia") - [HASH](https://brave.com/es/glossary/hashing/ "Hash concept by Brave")

Un Hash es una ecuación matemática que lee el contenido de un archivo y genera un código único para cada uno de esos archivos. Entonces, un archivo puede pesar un megabyte o 30 gigabytes o 100 gigabytes o 300 bytes, no importa. Cada uno de esos va a tener un código único, como si fuera una firma digital, una huella. Esa huella son unos pequeños caracteres que pueden tener 10 caracteres, 50 caracteres, 30 caracteres, pero es único, esoo es un hash.

Los HASH o huellas son súper importantes porque garantizan la intergridad del contenido del archivo, si el archivo cambia, el hash cambia.

Por lo que entonces fue manipulado. De esa manera, cada ves que calculas el hash de un bloque, estás verificando que ese bloque es legítimo y su movimiento de transacciones no cambió.

Eso signfica que en cada uno de los bloques de bitcoin quedan registrados desde el inicio de la red todos los movimientos del inicio de la historia humana de bitcoin en adelante, las diferentes transferencias de dinero que hubo, porque nadie puede cambiar los bloques porque entonces tendrían que cambiar el hash.

La magia es que el hash de un bloque anterior va en el bloque siguente, en su estructura. Entonces el siguente bloque va y busca si el anterior bloque tiene ese mismo hash y de esa manera sabe que están interconectados de una manera legítima.

Esa cadena de bloques conectado por hash es el BlockChain.

<img src="https://i.blogs.es/b5ce90/blockchain2/650_1200.jpg">

*Imagen Tomada De: https://www.xataka.com/especiales/que-es-blockchain-la-explicacion-definitiva-para-la-tecnologia-mas-de-moda*

Las operaciones matemáticas de la minería es lo que calcula las transacciones de la red, lo que distribuye copias de la base de datos de esa red a otros computadores de minería, esa es la red de bitcoin, porque tienen diferentes copias del BlockChain, que son las transacciones. Y lo que descubre nuevos bloques a través de estos procesamientos matemáticos.

Videos Recomendados:

* Cómo Funciona la Minería de Bitcoin (Explicado con Números Reales) by Andres Garza: https://www.youtube.com/watch?v=d2tlmRQiErU

* Estoy Ganando $104,68 Al Día Minando Criptomonedas by Adrián Sáenz: https://www.youtube.com/watch?v=U07Rq40Jeuo

* CÓMO FUNCIONA 💰⛏️ LA MINERÍA DE CRIPTOMONEDAS by Xataka: https://www.youtube.com/watch?v=GjOs_W3wilc

Ese procesamiento matemático con un gasto energético muy fuerte se conoce como POW o Prove of Work, pero otras redes como Ethereum que tambien es un tipo de criptomoneda, usan otro sistema llamado Prove of Stake.

Lecturas Recomendadas:

* https://finst.com/es/learn/articles/what-is-proof-of-work

* https://academy.bit2me.com/que-es-proof-of-stake-pos/

Prove of Stake es muy interesante porque usa mucha menos electricidad. En vez de hacer cálculos matemáticos muy compejos, lo que hace es que genera una apuesta.

Varios miembros de la red de Ethereum apuestan algunas de sus monedas y de manera aleatoria se gana uno de ellos se gana el derecho a construir el próximo bloque. Lo que gasta mucha menos energía.

El resto pierden las monedas que apostaron y se las queda el que le quedó la generación del nuevo bloque.

Es distinto, una filosofia diferente.

Al día de hoy la más popular, es la más segurda y que es la que genera la mayor cantidad de gasto energetico, que es la Prove of Work como la que tiene Blockchain de Bitcoin.

Lo más importante es que todos estos mecanismos criptográficos hacen que toda la red se pueda verificar entre sí, sin necesidad de tener un mecanismo central de criptografía o llaves, sino simplemente una distribución del trabajo de CPU o de GPUs y una verificación de la integridad de los datos.

<img src="https://cloudfront-us-east-1.images.arcpublishing.com/bloomberglinea/K7AZ2MR5TNF4ZFJYBGGPFG3BR4.jpg">

*Imagen Tomada De: https://www.bloomberglinea.com/2023/12/11/agua-y-bitcoin-el-impacto-de-la-mineria-cripto-en-el-ambiente-crece-cada-ano/*

De esta manera, tenemos un algoritmo que hace el trabajo que haría un banco central o los sistemas de confianza de los bancos regulados.

Parte de la razón por la que Bitcoin es tan poderoso es porque, para hackearlo necesitarías tener más poder de cómputo que toda la red de minería. Necesitarías tener un 51% por ciento más de poder de cómputo que la red de minería para recalcular los bloques y tener un voto más fuerte en el consenso que distribuye la versión actualizada de las transacciones.

Esto ha pasado en criptomonedas más pequeñas que bitcoin, pero con [bitcoin](https://bitcoin.org/es/ "Bitcoin.org"), [ethereum](https://aws.amazon.com/es/web3/what-is-ethereum/ "Ethereum by AWS"), [solana](https://solana.com/es), las monedas grandes: Es prácticamente imposible.

<img src="https://www.profesionalreview.com/wp-content/uploads/2017/06/Qu%C3%A9-son-y-para-qu%C3%A9-sirven-las-criptomonedas-01.png">

*Imagen Tomada De: https://www.profesionalreview.com/2017/06/07/que-son-y-para-que-sirven-las-criptomonedas/*

Parte del problema de la inflación, bitcoin lo controla haciendo que en la ecuación matemática de bitcoin como criptomoneda, existe un limite en donde el bitcoin tiene un limite de 21.000.000 (veintun millones de bitcoins) que a la fecha de hoy todavia no hemos llegado.

Otro de los problemas para no poder hackear bitcoin es la cantidad de energia que necesitarías, para tener una idea: Al día de hoy la red de bitcoin utiliza 130 terawatts por hora de energía. Esto es equivalente a la energía entera de [suecia](https://es.wikipedia.org/wiki/Suecia "Suecia concept by Wikipedia").

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/87/Sweden_in_European_Union.svg/500px-Sweden_in_European_Union.svg.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Suecia*

Algunos protocolos de criptomonedas, aparte del sistema de transacciones, los wallets, las llaves privadas, agregan la capacidad de ejecutar órdenes de código de programación bajo ciertas condiciones como por ejemplo:

Si estos servidores tienen estos datos o si estos usuarios colocan estas llaves en una configuarción particular, entonces dispara las transacciones de esta forma o de esta otra forma.

Esto significa que contratos legales u otro tipo de mecanismos de compañia se pueden expresar en código y distribuir de manera descentralizada. Esto es lo que permiten redes como Ethereum o Solana y es lo que ha permitido la creación de lo que se llama: Tokenización.

Es convertir ciertos activos del mundo real en expresiones de criptomonedas. Los [NFTs](https://es.wikipedia.org/wiki/Token_no_fungible "NTFs concept by Wikipedia") por ejemplo: Son una expresión de este estilo.

Lecturas Recomendadas:

* https://brave.com/es/web3/what-are-nfts/

* https://www.xataka.com/basics/que-nft-como-funcionan

Plataformas de NFTs

* https://opensea.io/es

* https://magiceden.io/

* https://blur.io/

Áun ninguno ha triunfado en el mundo real. Pero es muy prometedor y probablemente inevitable para el futuro.

> Cómo programar nuestras propias redes, cómo ser minero?, Cómo tener una granja de bitcoin?, ¿Cómo hacer Ethereum, Solana?

Esto es muy grande que fluctua mucho con el precio, pero que desde una perspectiva tecnológica es fascinante.










---










## Qué es una Red Neuronal

> Una red neuronal es un modelo matemático inspirado en el cerebro humano.

<img src="https://static.platzi.com/media/user_upload/upload-a5923ae7-d9e1-49a6-a002-b039dd678e12.png">

Playlist de Youtube Recomendada (Serie de 9 videos explicando lo que es una Red Neuronal a profundidad by 3Blue1Brown): https://www.youtube.com/watch?v=aircAruvnKk&list=PLZHQObOWTQDNU6R1_67000Dx_ZCJB-3pi&index=2

Lecturas Recomendadas:

* https://aws.amazon.com/es/what-is/neural-network/

* https://www.ibm.com/es-es/think/topics/neural-networks

* https://www.fortinet.com/lat/resources/cyberglossary/neural-network

* https://www.cloudflare.com/es-es/learning/ai/what-is-neural-network/

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Colored_neural_network_es.svg/500px-Colored_neural_network_es.svg.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Red_neuronal_artificial*

Para entender qué es una red neuronal, vamos a convertir números dibujados a mano en números digitales. Como un sistema de reconocimiento óptico de carateres.

Así que primero, imagina que dibujas a mano un número tres y ese número lo conviertes a una imagen digital. 

Para efectos de este ejercicio, imagina que lo convertimos a una imagen de 20px * 20px. Por lo que tenemos en total 400 píxeles y cada píxel es básicamente una representación de un porcentaje de cero a cien que determina la cantidad de brillo de cada uno de estos puntos.

Así que para poder representar matemáticamente este número tres en una cuadricula de 20 x 20, necesitamos 400 números.

Y esos 400 números son un porcentaje de brillo de cada número.

Creamos una matriz de esos 400 números, y esa matriz serían mis neuronas de entrada.

Estas neuronas de entrada son los datos de Input que yo le doy a una red neuronal.

En este momento, una neurona no es más que un dato. En las neuronas de entrada, la neurona es un número, un dato: En este caso el dato representa cada uno de los píxeles que componen esas imágenes, que pueden ser un número cualquiera dibujado a mano alzada.

Las otras neuronas, que estan al final de mi red neuronal son la capa de salida, siendo también simplemente: Datos.

En este caso estoy construyendo una red neuronal que me va a generar al final del proceso la probabilidad de cuál es el número digital que corresponde del 1 al 9 al dibujo que corresponde al que yo dibujé a mano alzada. 

Como solamente hay 10 números del 0 al 9, necesito 10 neuronas. Y cada una de ellas me va a representar un número entre el cero al nueve.

Las neuronas que se van a aprender son las neuronas que corresponden al número y se van a aprender con con una probabilidad.

Que en la práctica esto quiere decir que las neuronas no solamente van a decir "Esto es un 3" o "Esto es un 8" Porque por ejemplo: el 3 y el 8 se parecen.

<img src="https://adamharley.com/nn_vis/images/fc_flat_480.png">

*Imagen Tomada De: https://adamharley.com/nn_vis/*

Entonces el 3 tiene que tener una probabilidad muy alta, de pronto se prende un 90% y el ocho un 84%, esto son probabilidades que se colocan en números decimales entre cero y 1.
 
Un 0.5 = 50%

Un 0.7 = 70%

Esa generación de probabilidad es como funciona tanto la inteligencia humana como la inteligencia artificial y se expresa en esta capa de salida.

En estos números de probabilidad de las neuronas finales. Pero ¿Cómo la capa de entrada que tiene estos 400 números que son los 400 píxeles que corresponda con la capa de salida? Siendo estos ultimos 10 números que son el output, la salida.

Pues tenemos internamente una serie de neuronas que no son simplemente números: Son unas operaciones matemáticas que emergen los patrones de los datos. 

Patrones a través de los cuales se interpreta la información. 

Esas neuronas intermedias se conocen como la capa oculta. Y usan una serie de operaciones matemáticas que vamos a entender brevemente para extrapolar esos patrones de la información que al final del día son la inteligencia.

En esta red neuronal: Elegí crear 3 capas ocultas.

Y en cada una de estas capas ocultas tengo 15 neuronas, la verdad es que el número es arbitrario, pues pueden ser 2 capas ocultas o pueden ser 5, pueden ser 10 o pueden ser 100 y pueden ser 10 neuronas, 20 o 30...

¿Cómo sabes cuántas poner? Cada problema matemático y cada problema de neuronas de inteligencia artificial, dependiendo de los datos que quieras entrenar. Va a hacer variar la cantidad de neuronas que necesites.

Por ejemplo: Para un gran modelo de lenguaje vas a usar una cantidad de capas ocultas distinta y una cantidad de neuronas distinta.

A mayor cantidad de neuronas distintas, a mayor cantidad de capas más uso de procesadores y de memoria.

Y como esto va a usar una cantidad de datos masivos, necesitas la menor cantidad de neuronas y la menor cantidad de capas para generar los mejores resultados.

Y estadísticamente, a veces, demasiadas capas generan menos inteligencia. Asi como cuando las personas están demasiado especializadas en un conocimiento, es muy dificil para ellos aprender cosas nuevas. "Porque estan demasiado metidos en la caja."

En esencia, lo que estas capas van a hacer es encontrar los patrones estadísticos que tiene un dato.

Por ejemplo

Los números tienden a tener líneas, el 9 tiene una línea, el 1 tiene una línea, el 7 tiene una serie de líneas. Pero tambien tienen círculos: El nueve es un circulo, el seis es un círculo en otra posición. El 3 es 2 medios círculos.

El 4 son tres líneas en ciertos ordenes diagonales. Estos patrones tienden a emerger, pero en programación clásica: Nosotros habemos programado una serie de condiciones preagregándole a cada uno de esos patrones.

Sim embargo, nuestros cerebros aprenden a partir de observar masivas cantidades de información e inferir de una manera casi inconsciente en nuestro entrenamiento de observar el mundo cada uno de esos patrones: Encontrar los bordes y las formas.

La idea es que en estas capas creamos un procedimiento estadístico donde le mostramos a estas diferentes capas muchos muchos muchos de estos patrones.

Y ellos van ajustando la relación matemática entre cada una de las capas para que a medida que cada uno de los 400 números de entrada que pasan por la capa de entrada, vallan atravesando capa por capa terminen generando a nivel númerico los porcentajes de probabilidad de la capa de salida que genere un número correcto.

Las ecuaciones matemáticas son básicamente unos números que cada una de estas capas tienen. Y esos números son la fuerza de la relación entre la neurona de una capa y todas las neuronas de la otra capa.

Entonces ciertas capas se conectan de una manera muy fuerte u muy débil con otras neuronas y esos números se les conoce como pesos. (La relación o conexión)

<img src="https://cometelared.es/storage/2023/06/Red1.webp">

*Imagen Tomada De: https://cometelared.es/el-peso-en-las-redes-neuronales/*

Suena muy extraño o muy arbitrario, pero es simplemente un mecanismo matemático.

Las conexiones entre las diferentes neuronas en una red neuronal se arrancan de manera aleatoria.

Es un número aleatorio que tú colocas como quieras y luego a medida que vas entrenando... El sistema, el número se va ajustando para eventualmente corresponder a esos patrones.

---

**El entrenamiento**

Lecturas Recomendadas:

* https://es.wikipedia.org/wiki/Aprendizaje_autom%C3%A1tico

* https://www.ibm.com/es-es/think/topics/machine-learning

* https://aws.amazon.com/es/what-is/machine-learning/

* https://www.bbva.com/es/innovacion/machine-learning-que-es-y-como-funciona/

* https://www.oracle.com/latam/artificial-intelligence/machine-learning/what-is-machine-learning/

Lo primero es inicializar todos los pesos, todas las conexiones entre neuronas en números aleatorios. Lo que haces que tienes una gran cantidad de datos de entrenamiento, es decir que tendríamos que tener una gran cantidad de imágenes de números dibujados a mano alzada entre el cero y el nueve.

Que corresponden a su número correcto y los empiezas a pasar por la red. Como son números aleatorios te va a dar errores constantemente. 

* Un error es cuando la red neuronal te va a decir que un cuatro es un cinco, o que un cero es un uno, etc...

Cada vez que halla un error, le reportas el error a la neurona y la neurona empieza a revisar matemáticamente cuáles fueron las neuronas que estaban mal ajustadas porque dieron el error mal.

Y usando una serie de ecuaciones matemáticas

> (Aqui no las vemos. Pero, estaria interesante aprender eventualmente una función que se llama sigmoide u otra función que se llama ReLu, y la derivada de esas funciones: Esto es [cálculo vectorial](https://es.wikipedia.org/wiki/C%C3%A1lculo_vectorial "Cálculo Vectorial concept by Wikipedia") - [cálculo diferencial](https://es.wikipedia.org/wiki/C%C3%A1lculo_diferencial "Cálculo Diferencial concept by Wikipedia").).

se encuentra una diferencia entre cada uno de estos pesos y lo van corrigiendo. Eso se hace en una retropropagación: Generar el error y luego regresas para entender donde cometiste el error y ajustas las neuronas para saber donde cometiste el error y ajustar las conexiones entre las neuronas a partir de los datos con los que entrenaste.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/18/Derivative.svg/500px-Derivative.svg.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/C%C3%A1lculo_diferencial*

A medida que ajustas los pesos mostrándole los diferentes ejemplos en el entrenamiento y los devuelves. Eso es el entrenamiento.

Cuando tienes una base de datos de entrenamiento, digamos que diez mil números, el completar el entrenamiento con esos diez mil números se conoce como una época o epoch.

Y no solamente con completar el entrenamiento una vez es suficiente. Como la red neuronal empieza de manera aleatoria, es posible que con una sola época no sea suficiente para entrenar por completo la red neuronal.

Muy probablemente necesites entrnarla múltiples veces hasta que tu red quede muy ajustada. Y luego tienes que probar con una base, de esa red de entrenamiento que guardaste para probar a ver si esta dando los resultados correctos.

Asi sabes si tu red neuronal quedó bien entrenada o no. El resultado final de entrenamiento es que depronto:

* la capa oculta número uno detecta las formas que son una rayita.

* La capa oculta número dos detecta las formas que son una curva.

* La capa oculta número tres detecta cuál es la conexión entre ambas.

Y eso termina haciendo que la capa de salida final me genere una serie de números de probabilidad, una matriz de 10 números de probabilidad desde el 100% hasta el 0% donde a mayor probabilidad de que un número específico corresponda a una de esas neuronas. Esa neurona tiene un porcentaje más alto = Una activación más grande.

Lo que significa que en una red bien entrenada, los cuatrocientos píxeles de entrada, que equivale al número tres, me deberia generar una activación de muy alto porcentaje comparado a las otras neuronas en el número correspondiente al número 3.

---

En este ejemplo, en la capa de entrada, creamos cuatrocientas neuronas que equivalen a cada uno de los píxeles. Pero imagina que en vez de usar píxeles, usamos tokens.

Un token es forma de expresar texto. El texto se puede romper en palabras, sílabas o letras.

Eso sería tokenizar el lenguaje. 

Lecturas Recomendadas:

* https://www.datacamp.com/es/blog/what-is-tokenization

* https://www.ibm.com/mx-es/think/topics/tokenization

Y por ejemplo, el lenguaje inglés tiene en total 50.000 tokens, 50.000 permutaciones de palabras, sílabas y letras para expresar lenguaje. Incluyendo puntuación, etc...

<img src="https://www.ionos.com/es-us/digitalguide/fileadmin/_processed_/d/2/csm_tokenizer-openai-ejemplo_30a4b71739.webp">

*Imagen Tomada De: https://www.ionos.com/es-us/digitalguide/paginas-web/desarrollo-web/tokens-de-ia/*

Si agregáramos esos cincuenta mil neuronas y las pusiéramos en la entrada y pusiéramos otras cincuenta mil neuronas en la salida podríamos crear la estructura de la red neuronal para un gran modelo de lenguaje como ChatGPT o como un traductor. 

Una red neuronal no es suficiente para generar un traductor o para generar un autocompletador como chatGPT.

Necesitaríamos una arquitectura matemática que se conoce como transformador y un modelo especial o mecanismos llamado "Atención"  para generar ese resultado.

Lecturas Recomendadas: 

* https://www.ibm.com/es-es/think/topics/attention-mechanism

* https://es.wikipedia.org/wiki/Atenci%C3%B3n_(aprendizaje_autom%C3%A1tico)

* https://www.datacamp.com/es/blog/attention-mechanism-in-llms-intuition

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/8/81/Attention-qkv.png/1280px-Attention-qkv.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Atenci%C3%B3n_(aprendizaje_autom%C3%A1tico)*

> Hay que aprender los Fundamentos de LLMs y Matemáticas de AI, álgebra Lineal Aplicada para Machine Learning, Deep Learning con [TensorFlow](https://www.tensorflow.org/ "tensorflow.org") y [Keras](https://keras.io/ "keras.io") (Las librerías más usadas para crear este tipo de mecanismos.)

Todo esto es básciamente álgebra lineal, vectores, matrices y un poco de cálculo diferencial.

Estas matrices se expresan en una estructura de datos que se conocen como vectores, hay mucha multiplicación de vectores y también existe un tipo de dato especial llamado tensor para hacer más fácil estas multiplicaciones, sumas, etc...

Y por ultimo, mucho de esto ya está expresado en librerías existentes que hacen relativamente sencilla su implementación como:

* [PyTorch](https://pytorch.org/ "pytorch.org")

* [TensorFlow](https://www.tensorflow.org/ "tensorflow.org")

**¿Cómo funciona un gran modelo de lenguaje por dentro?**

---

Dijo una persona: En el colegio, yo me acuerdo que habia un Aplicativo que descargabas en la playstore llamado Photomath, este aplicativo permitia tomar fotos de operaciones matematicas escritas a mano y te daba la solucion paso a paso. Como reconocer numeros para una AI es tan avanzado (complicado), si el reconocimeinto de numeros escritos a mano, ya existia desde hace mucho mucho antes de la creacion de la AI ?

Glosario: 

* Pesos: determinan la fuerza de conexión entre neuronas (cuánto influye una sobre otra).

* Retropropagación: técnica que ajusta los pesos cuando la red comete errores.

* Época: una pasada completa de entrenamiento con todos los datos.

* Token: unidad mínima de texto (puede ser una palabra, sílaba o letra). Es la forma en que la IA “entiende” y procesa el lenguaje.

**Y en otras palabras para el proceso de entrenamiento paso a paso:**

1. Inicializar los pesos de manera aleatoria. 

2. Pasar los datos de entrenamiento a través de la red. 

3. Calcular el error entre la predicción y el resultado esperado. 

4. Ajustar los pesos mediante retropropagación. 

5. Repetir el proceso hasta completar una o más épocas.


> El video a continuación es interesante porque es de hace 8 años, el tema que para mi es totalmente nuevo asi como conocer a chatgpt despues del 2020 (Cuarentena): Es una reflexión importante porque es un tema que ya tenia tiempo que se estaba desarrollando.

Video Recomendado: Qué es una Red Neuronal by Platzi (Freddy Vega): https://www.youtube.com/watch?v=Es7HAzFsW1M

La red neuronal: vamos a convertir números dibujados a mano en números digitales es - https://adamharley.com/nn_vis/

<img src="https://www.popsci.com/wp-content/uploads/2019/03/18/QAGMAJQKZC3WRPWNB5DBYZ7VQM.png">

*Imagen Tomada De: https://www.popsci.com/gaze-inside-mind-artificial-intelligence/*

Simulación a tiempo real en 3D: https://adamharley.com/nn_vis/mlp/3d.html

Simulación a tiempo real en 2D (Más recomendable y entendible al ser principiante.): https://adamharley.com/nn_vis/cnn/2d.html

Link de Github: https://github.com/aharley/nn_vis











---











## Cómo funcionan los LLMs

Videos Recomendados: 

* Breve explicación de los modelos extensos de lenguaje (LLM) by 3Blue1Brown: https://www.youtube.com/watch?v=LPZh9BOjkQs

* Live Bases matemáticas de inteligencia artificial by Platzi :https://www.youtube.com/watch?v=v6tk0CxaVU8

Lecturas Recomendadas:

* https://www.ibm.com/es-es/think/topics/large-language-models

* https://www.oracle.com/latam/artificial-intelligence/large-language-model/

* https://www.hostinger.com/co/tutoriales/modelos-grandes-de-lenguaje-llm

* https://es.wikipedia.org/wiki/Modelo_extenso_de_lenguaje

* https://aws.amazon.com/es/what-is/large-language-model/

* https://www.cloudflare.com/es-es/learning/ai/what-is-large-language-model/

Si yo te digo que "el gato maúlla y el perro ...", ¿El perro qué hace? El razonamiento más común aqui es, "Y el perro ladra", pero de pronto no: De pronto el gato maúlla y el perro se asusta, depronto el gato maúlla y el perro no maúlla.

Todas son opciones completamente válidas. Pero nuestra [inteligencia](https://es.wikipedia.org/wiki/Inteligencia "Inteligencia by Wikipedia") nos dice que la forma en la que este acertijo se resuelve es que el gato maúlla y el perro ladra. ¿Cómo hicimos esto?

Esto lo hacemos con algo que se llama la atención. Le ponemos atención a ciertas palabras y a otras no. Esto se puede expresar matemáticamente en la **ecuación de la atención.**

Lectura Recomendada: https://medium.com/@weidagang/demystifying-the-attention-formula-8f5ad602546f

<img src="https://i.ytimg.com/vi/n7JOBTS85ts/maxresdefault.jpg">

*Imagen Tomada De: https://www.youtube.com/watch?v=n7JOBTS85ts*

Entonces vamos a entender los componentes de la ecuación porque es la forma en la que funcionan los grandes modelos de lenguaje, la inteligencia artificial moderna.

Lo primero que tenemos que hacer es agarrar todo el cuerpo de lenguaje de la cultura humana y romperlo en pedacitos. 

Vamos a romper todas las palabras, todas las letras, todo lo que existe en la cultura humana en letras, sílabas y palabras.

Se puede pensar que esto, puede tener una cantidad de variaciones infinita, pero el lenguaje no es infinito: Efectivamente existen permutaciones casi infinitas de las letras, pero la realidad es que cuando uno todos los libros escritos, todo el internet, todos los emails, todo lo que esta en Google, todo lo que está en Wikipedia, todo lo que esta en redes, foros, etc...

Uno se da cuenta de que por ejemplo: En el caso del lenguaje inglés hay una más o menos cantidad de 50.000 Tokens.

Si le agregamos otros lenguajes, lenguajes de programación u otros tipos de texto, el número aumenta bastante.

    Alfabeto Ruso

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/30/Russian_Cyrillic_19th.png/500px-Russian_Cyrillic_19th.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Alfabeto_ruso*

    Alfabeto Klingon

<img src="https://upload.wikimedia.org/wikipedia/commons/f/f4/KLI_pIqaD.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Idioma_klingon*

    BrainFuck Language

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b4/Hello_World_Brainfuck.png/330px-Hello_World_Brainfuck.png">

*Imagen Tomada De: https://en.wikipedia.org/wiki/Brainfuck* 

Típicamente los sistemas de traducción, por ejemplo: Usan entre cuarenta mil a cincuenta mil tokens.

Y los grandes modelos de lenguaje como [GPT-4](https://openai.com/es-419/index/gpt-4/ "GPT-4 by openai.com"), [LLaMA](https://www.llama.com/ "llama by Meta"), y los otros grandes modelos que existen, pueden usar hasta 256.000 Tokens en sus tokens del vocabulario del lenguaje.

Pero por ahora ten en mente que lo que hacemos es que agarramos las palabras y las dividimos en pedacitos. Entonces, por ejemplo: La palabra "satisfacción" tiene la palabra "Acción" y esta palabra es un token. Pero entonces tambien la letra F puede ser otro token y la palabra "is" de sat**IS**facción tambien es un token. Y por ultimo el "sat" tambien es otro token.

Lecturas Recomendadas: 

* https://www.ionos.com/es-us/digitalguide/paginas-web/desarrollo-web/tokens-de-ia/

* https://www.datacamp.com/es/blog/what-is-tokenization

<img src="https://miro.medium.com/v2/resize:fit:720/format:webp/1*e3kY5h25iAyqNGzkr_IxKw.png">

*Imagen Tomada De: https://medium.com/data-science-collective/the-invisible-building-blocks-of-ai-what-you-need-to-know-about-tokenization-acadd86a63ba*

Y ahora que tengo cada uno de esos tokens, lo siguente que tengo que hacer es evaluar la correlación que existe entre token y token.

Entonces, imagine que tengo el token "gato" y quiero buscar la palabra "gato" qué tan cercana esta en todo el lenguaje está a otros conceptos.

Entonces, por ejemplo: Hay que imaginar como si esto fuera un plano cartesiano que va de cero hasta N donde N es el número de tokens que existe.

> Vector Space | Embedding Space

<img src="https://d2908q01vomqb2.cloudfront.net/77de68daecd823babbb58edb1c8e14d7106e83bb/2023/08/02/WhyLabs-ML-Embeddings-1.png">

*Imagen Tomada De: https://aws.amazon.com/what-is/embeddings-in-machine-learning/* 

Entonces la palabra "gato" en el eje animal, estaria muy cerca al cero. Entonces yo pongo que "gato" en su correlación animal es un cero. Imagina que tengo una segunda dimensión como si fuera un eje X-Y y estuviera la palabra "automóvil" por lo que entonces "gato" respecto a "automóvil" muy probablemente está tan arriba como sea posible porque "gato" no esta cercano a la palabra "automóvil".

Ahora imagina que tengo una tercera dimensión donde tengo el eje "amor". Uno ama a los gatos, pero uno no ama a los gatos más que a los bebés. Entonces "gato" no va a estar en el cero de la palabra "amor", pero depronto si va a estar en el 10 y asi lo hago entonces, para todas las palabras que existen, de todos los tokens que existen: A partir de qué tan cercanas están las palabras con otras palabras en el lenguaje.

Esto es ubicarlo en un espacio N dimensional. Visualmente, los humanos solamente podemos ver 3 dimensiones, pero un computador no tiene problemas en guardar las trescientas mil millones de dimensiones de GPT-3 (300.000.000.000) o de todas las 50.000 dimensiones que requiere un traductor.

Entonces cada palabra tiene un vector o un número de números que muestra la cercanía entre otras palabras y se ubican de manera multidimensional. Y eso es tokenizar el lenguaje.

<img src="https://towardsdatascience.com/wp-content/uploads/2025/03/image-45.png">

*Imagen Tomada De: https://towardsdatascience.com/neural-network-embeddings-explained-4d028e6f0526/*

Esto crea un efecto muy interesante. Y es que palabras similares van a estar en estos espacios multidimensionales muy cerca de otra palabras similares.

    Entonces por ejemplo las palabras: "gato", "perro" y "lobo" van a estar muy cerca entre si porque son mamíferos, porque están en español, porque son animales.

    Las palabras: Banano, Manzana tambien van a estar muy cerca entre si.

El otro fenómeno interesante que tiene esto es que las palabras pueden tener vectores: Un vector es una dirección en ese plano cartesiano multidimensional: que se parece mucho una con la otra.

Entonces rey y reina tienen una conexión muy similar a hombre y mujer, y ese vector muy probablemente es el vector de la palabra "género".

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/3f/Word_vector_illustration.jpg/250px-Word_vector_illustration.jpg">

*Imagen Tomada De: https://en.wikipedia.org/wiki/Latent_space*

O por ejemplo la palabra "caminé" y "caminar" va a estar muy similar a "nadé" y "nadar" porque el vector de tiempo presente o pasado los hace estar muy cerca.

O entonces diferentes países y sus capitales: Italia - Roma, Rusia - Moscu, China - Pekín, Turquía - Angora, Peru - Lima. El vector, la coordenada, la serie de coordenadas que apuntan entre país y ciudad capital van a ser muy similares.

Y si yo agarro los números que corresponden al vector entre italia y roma y los llevo a colombia muy probablemente me va a apuntar muy cerca o exactamente hacia Bogotá.

Esto es convertir las palabras en expresiones matemáticas que se pueden sumar o restar.

Y eso nos permite hacer cosas increíbles. Por ejemplo: "Mamá" menos "Género" probablemente me da "Pariente"

Entonces:

    Pariente + Masculino = Padre

    Regente + Mujer = Reina

    Regente + Hombre = Rey

Lo siguente que tengo que hacer... Es crear una red de pesos de probabilidad estadística donde las palabras estén estadísticamente conectadas entre sí. Los tokens realmente.

Asi como usamos el lenguaje de toda la cultura humana para crear nuestros tokens, ahora necesitamos usar todo el lenguaje de la cultura humana para agregar la probabilidad de conexión entre cada uno de ellos.

Con el lenguaje tokenizado, el siguente paso es tratar de encontrar la probabilidad en la que una palabra ocurré despues de otra.

Como nosotros tenemos todo el lenguaje de la cultura humana en libros, internet, en las redes sociales, en wikipedia y en tantos otros lugares.

Las empresas de inteligencia artificial toman esta fuente de datos [*La cultura humana y todos los textos que hemos escrito*] y buscan expresar de una manera matemática de que una letra va despues de otra letra, que una palabra vaya después de cierta otra palabra.

Esto se conoce como el **[Corpus del Lenguaje](https://es.wikipedia.org/wiki/Corpus_ling%C3%BC%C3%ADstico)** = Es el conjunto de textos con los que se entrena el modelo para aprender a generar respuestas y comprender el lenguaje.

y entonces tomo esto y lo separo en dos partes: un 70% del conjunto de datos para que sea [Training Data](https://es.wikipedia.org/wiki/Conjuntos_de_datos_de_entrenamiento,_validaci%C3%B3n_y_prueba "Training Data by Wikipedia") de la red neuronal y el otro 30% para [Testing Data](https://en.wikipedia.org/wiki/Test_data "Test Data concept by Wikipedia").

En donde si me da lo mismo y se comporta igual, es que el entrenamiento quedó bien.

Recordemos que una red neuronal es un mecanismo estadístico para encontrar los patrones escondidos entre los datos.

Nosotros sabemos que hay una conexión entre adverbios, sílabas, adjetivos, sustantivos y muchos otros patrones que emergen simplemente de la posición de las letras, las sílabas y las palabras: Lo que nosotros llamamos tokens.

Así que una red neuronal es un proceso que tiene una capa de entrada, unas capas escondidas y una capa de salida.

* La capa de entrada: Son todos los tokens que corresponden al vocabulario de entrenamiento (La representación vectorial de los tokens del texto).

* Las capas intermedias/ocultas: Son funciones matemáticas de interconexión que detectan estos patrones y que van modificando unos números estadísticos para cambiar la capa de salida.

* La capa de salida: Es exactamente lo mismo que la capa de entrada en donde la ídea es predecir a partir de unas palabras de entrada cuál sería la palabra de salida.

<img src="https://www.ibm.com/docs/es/SS3RA7_sub/modeler_mainhelp_client_ddita/clementine/images/nn.jpg">

*Imagen Tomada De: https://www.ibm.com/docs/es/spss-modeler/saas?topic=networks-neural-model*

Estos patrones se van ajustando en el periodo de entrenamiento. A medida de que nuestra red neuronal lee todo el cuerpo del lenguaje de la cultura humana va entendiendo que probablemente despues de la palabra "Yo" puede seguir la palabra "Amo", que muy probablemente despues de la palabra "Mi mamá" siga la palabra "Me".

Y todo ese ajuste de entendimiento de patrones del lenguaje, como el patron de rimar, el patrón de programar, el patrón de escribir lenguaje de marketing, se va expresando matemáticamente para generar esta estructura final que se vuelve una red neuronal de un gran modelo de lenguaje.

Estos son miles de millones de parámetros, que son los pesos de cada una de estas letras que nosotros llamamos neuronas. Estos miles de millones de parametros toman muchisimo tiempo y es en parte porque la inteligencia artificial se demoró tanto en llegar.

Porque aunque estos algoritmos son viejos (Nacieron en los años 50, se fueron optimizando en los 90) es hasta ahora que tenemos suficientes chips y suficiente memoria RAM para entrenar una red neuronal de este este estilo.

Esto es mucho más complejo y tiene otras ecuaciones matemáticas.

Con sólo entrenar una red neuronal y tener todos los tokens, puedo programar por ejemplo: Un traductor, pero no puedo hacer que el gato maúlle o que el perro ladre.

Todavía no he logrado completar todos los datos que necesito para generar un sistema de predicción efectivo.

En general, la razón por la que no se puede es porque tendría que multiplicar por cada una de las letras, por cada uno de los tokens, por cada una de las palabras y sílabas que tengo acá expresadas, todas las variaciones siendo este un problema N a la N que tomaría una cantidad de memoria RAM, de CPU, de GPU y de chips ingente.

Pero no necesito hacerlo para todas, solamente necesito hacerlo para las palabras más importantes. 

Cuando tú dices: El gato maúlla y el perro "hmm" hay una palabra particular a la que le pones más atención, probablemente es la palabra "maúlla". Y hay otra palabra a la que probablemente le pones atención "gato". Así funciona tu mente. Tú no leiste todo el texto, solo te enfocas en los elementos más importantes para predecir la siguente palabra y de esta manera completar el texto.

Esto se le conoce como [Modelo de Atención](https://es.wikipedia.org/wiki/Atenci%C3%B3n_(aprendizaje_autom%C3%A1tico)#:~:text=En%20las%20redes%20neuronales%20artificiales,entrada%20mientras%20que%20disminuye%20otras. "Modelo de Atención by Wikipedia") y funciona de la siguente manera:

Existe:

Query = Consulta 

Key = Llave

Value = Valor

Esto que tenemos aqui:

    El gato maulla y el perro ******

Esto es un prompt, el prompt que tú escribes en ChatGPT o en donde sea. El prompt lo que hace es mirar el ultimo token, la última palabra en donde en este caso es "perro" y a partir de este token va a evaluar a lo largo de todo el resto del prompt todo lo que se ha escrito, cuáles son los tokens de mayor significancia = Que están más cercan del último

¿Cómo saben que está más cerca?

Porque esta en el plano cartesiano del espacio n-dimensional de tokens, entonces la palabra "perro" esta muy cerca de la palabra "maulla" y esta palabra esta definivamente cerca a la palabra "gato".

Estas palabras que son cercanas a la palabra perro las volvemos la llave y luego la V es el valor. Ese valor es una ecuación matemática que multiplica y mueve las matrices de los números de puntería de la palabra "perro" y la palabra "maulla" y "gato" a través de una función de activación. Lo importante es que esa V termina siendo un vector que usando la palabra "maúlla" y la palabra "gato" junto con la palabra "perro" que es la última palabra del prompt apunta a la probabilidad más alta de una palabra que continué.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f3/Vector_01.svg/500px-Vector_01.svg.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/Vector*

Esto genera otro vector de probabilidades que genera una serie de palabras. Porque puede que el perro ladre, que el perro es, que el perro llora o que el perro no.

Esta probabilidad es lo que termina siendo eventualmente eligamos la palabra ladra porque tiene el mayor porcentaje. Pero los grandes modelos de lenguaje no solamente eligen la palabra con mayor probabilidad. 

Los modelos de lenguaje tienen algo que se llama [temperatura](https://gpt.space/blog_es/temperatura-mundo-ia-guia-usar-parametro-temperatura-openai-respuestas-chatgpt-gpt-3-gpt-4 "Temperatura concept by   gpt.space"), porque la creatividad no funciona siendo siempre lo mismo. Para que halla un nivel de inteligencia tiene que haber un cierto nivel de creatividad, por ende a veces tengo que elegir la segundao  tercera opción. Los grandes modelos de elnguaje a veces de manera aleatorio, eligen la segunda o tercera opción y es por esto que no son deterministas que no generan el mismo texto todo el tiempo.

Pero generan textos muy similares. Sin embargo esto sólo sirve para autocompletar. Los primeros GPTS o Generative Pretrained Transformers que son estos modelos que integran la red neuronal, los tokens, el espacio unidimensional, la atención.

Lecturas Recomendadas:

* https://www.xataka.com/basics/gpts-que-sirve-como-se-usa-quien-puede-utilizarlo-para-crear-tu-propio-chatgpt

* https://es.wikipedia.org/wiki/GPTs

* https://aws.amazon.com/es/what-is/gpt/

* https://azure.microsoft.com/es-es/resources/cloud-computing-dictionary/what-is-gpt

* https://www.ibm.com/es-es/think/topics/gpt

* https://openai.com/es-419/index/introducing-gpts/

Uno les colocaba un texto y tenían que completarlo.

No se comportaban como un chat.

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ad/GPT2-talks-about-GPT2.png/500px-GPT2-talks-about-GPT2.png">

*Imagen Tomada De: https://es.wikipedia.org/wiki/GPT-2*

Lectura Recomendada: https://openai.com/index/gpt-2-1-5b-release/

Lo que hizo OpenAI, es que contrato a 6.000 personas en África para hablar con el modelo y regañarlo cuando el modelo no se comportaba como un chat y recompensarlo cuando el modelo se comportaba como un chat.

Lecturas Recomendadas:

* https://www.muycomputerpro.com/2023/01/19/openai-mejoro-chatgpt-pagando-trabajadores-kenia

* https://time.com/6247678/openai-chatgpt-kenya-workers/

* https://en.wikipedia.org/wiki/ChatGPT

Esto recalibró las neuronas del modelo para enseñarle al modelo a responder como un chat o como no un chat.

Esto se conoce como RLHF = Reinforcement Learning with Human Feedback

Lecturas Recomendadas:

* https://aws.amazon.com/what-is/reinforcement-learning-from-human-feedback/

* https://www.ibm.com/think/topics/rlhf

* https://www.coursera.org/articles/rlhf

<img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/RLHF_diagram.svg/500px-RLHF_diagram.svg.png">

*Imagen Tomada De: https://en.wikipedia.org/wiki/Reinforcement_learning_from_human_feedback*

Y de esta forma es como los modelos aprenden a hablar como un chat. Esto incluye aprender cuándo dejar de hablar, cuándo dejar de generar resultados. Es por eso que muchas veces CHAT GPT responde en listas de viñetas o por la que Anthropic [Claude](https://claude.ai/) y [Gemini](https://gemini.google.com/app) tienen respuestas tan diferentes en su personalidad.

<img src="https://planetachatbot.com/wp-content/uploads/2023/12/2-1024x472.png">

*Imagen Tomada De: https://www.linkedin.com/pulse/oportunidades-en-el-uso-de-large-language-models-llms-diego-branca/*

> Procesamiento de Lenguaje Natural










---

## Conclusión

Ya entonces, nosotros podemos entender en este documento readme que la tecnología desde su base física hasta la abstracción de la Inteligencia Artificial. Todo comienza con circuitos electrónicos procesando bits y bytes a través de la CPU, RAM y GPUs, orquestados por un Sistema Operativo que organiza el almacenamiento y los archivos.

Esta infraestructura local se expande mediante Internet, donde el protocolo IP, DNS y el modelo Cliente/Servidor permiten el flujo de datos y bases de datos globales. Sobre esta red, la complejidad aumenta hacia estructuras descentralizadas como Blockchain y modelos avanzados de IA. Finalmente, entendemos que los LLMs y las Redes Neuronales no son magia, sino el resultado de procesar metadatos y algoritmos sobre la misma arquitectura fundamental que enciende nuestro computador.

<img src="https://media3.giphy.com/media/v1.Y2lkPTZjMDliOTUyMTI0MDE0cmozdWYwbGgzdG5zbzdyeHU1bXEya293ZjJ3c2NybHJmdCZlcD12MV9naWZzX3NlYXJjaCZjdD1n/DBW3BniaWrFo4/source.gif">

*Imagen Tomada De: https://giphy.com/explore/computadoras*

**Gracias por haber visto este documento.**

Si quieres ir al inicio del documento: [Haz click aqui.](#curso-de-fundamentos-de-ingeniería-de-software)

Si quieres mirar la pagina de este repositorio: https://santiagoencodigo.github.io/desarrollo-web-profesional/index.html

Link del repositorio: https://github.com/santiagoencodigo/desarrollo-web-profesional/tree/main