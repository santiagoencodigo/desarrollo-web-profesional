# Introducción a la Terminal y Línea de Comandos

En esta sección encuentras mis apuntes sobre cómo utilizar la terminal (**BASH**) como una herramienta fundamental para interactuar directamente con el sistema operativo. A través de la línea de comandos podrás navegar entre carpetas, manipular archivos, gestionar permisos, entender procesos y emplear herramientas esenciales como grep, curl y otras utilidades clave.

También cómo crear alias, personalizar shell y optimizar el flujo de trabajo para mejorar la eficiencia al trabajar con proyectos, servidores y entornos de desarrollo. Esta introducción es una base sólida para comprender cómo funciona realmente el sistema desde dentro y cómo sacarle el máximo provecho a la terminal.

>Terminal: Es una herramienta que permite comunicarnos directamente con el sistema operativo mediante texto, en lugar de usar ventanas, botones o menús.

>Linea de Comandos: Es el espacio dentro de la terminal donde escribimos instrucciones (Comandos) para que el sistema los ejecute.

>En lugar de hacer clic, escribimos órdenes como crear carpetas, mover archivos, instalar programas o revisar procesos. Esto nos da más control, rapidez y precisión, especialmente al trabajar con programación, servidores y sistemas avanzados.

>Profesor: Enrique Devars





---





## Tabla de Contenido

1. [Ventajas de Dominar la Terminal de Comandos para Profesionales](#ventajas-de-dominar-la-terminal-de-comandos-para-profesionales)
2. [Qué es una Terminal y Cómo Funciona con Comandos Básicos](#qué-es-una-terminal-y-cómo-funciona-con-comandos-básicos)
3. [Instalación de terminal Bash en Windows usando WSL](#instalación-de-terminal-bash-en-windows-usando-wsl)
4. [Comandos básicos de terminal para principiantes](#comandos-básicos-de-terminal-para-principiantes)
5. [Navegación entre directorios en Linux con Comandos de Terminal](#navegación-entre-directorios-en-linux-con-comandos-de-terminal)
6. [Comandos para Explorar y Manipular Archivos de Texto en Terminal](#comandos-para-explorar-y-manipular-archivos-de-texto-en-terminal)
7. [Uso de Wildcards para Búsquedas Masivas en la Terminal](#uso-de-wildcards-para-búsquedas-masivas-en-la-terminal)
8. [Comandos GREP y FIND para búsquedas avanzadas en linux](#comandos-grep-y-find-para-búsquedas-avanzadas-en-linux)
9. [Tipos de comandos en Linux y cómo identificarlos](#tipos-de-comandos-en-linux-y-cómo-identificarlos)
10. [Redirecciones de terminal en Linux con operadores básicos](#redirecciones-de-terminal-en-linux-con-operadores-básicos)
11. [Operadores de Control para Encadenar Comandos Linux](#operadores-de-control-para-encadenar-comandos-linux)
12. []()
13. []()
14. []()
15. []()
16. []()
17. []()
18. []()
18. []()
19. []()
20. []()








---




## Ventajas de Dominar la Terminal de Comandos para Profesionales

[Toy Story](https://es.wikipedia.org/wiki/Toy_Story "Wikipedia - Toy Story") pudo no haber sido la pelicula por problemas con la terminal, ellos utilizaban un sistema de archivos compartidos por errores de uno de los administradores del sistema se empezaron a borrar cada uno de los archivos en cadena **simplemente por ejecutar mal un comando**, pero menos mal habia un respaldo y se pudo mostrar esta pelicula al mundo.

Los verdaderos profesionales, dominan el entorno, entienden que es lo que sucede "bajo el capo" y para ello utilizan la línea de comandos dentro de la terminal porque te da: Control, Presición, Fiabilidad acerca de lo que esta sucediendo en tu sistema.

Al usar la terminal no se hacen clics, se dan ordenes.

Por lo que la terminal no es una reliquia del pasado, es la herramienta profesional por excelensia en los técnicos en programación

**¿Qué se gana al aprenderlo?**

1. **Velocidad y Presición:** Se automatizara en unos segundos lo que con clicks tomaria horas a través de interfaces gráficas.

2. **Conocimiento profundo:** Se conocerá cómo funciona el sistema operativo y cómo se mueve la información dentro de el.

3. **Acceso a herramientas avanzadas:** Git para control de versiones. Docker en gestión de contenedores. Htop para monitoreo eficiente de procesos. Nmap en analítica de redes y sistemas. y demas herramientas que sólo existen en la terminal.

4. **Personalización Extrema:** Se va a poder crear los SCRIPTS propios, flujos de medida de trabajo y convertirse en el arquitecto de tu entorno digital. La terminal es para todos: Windows, Linux, Mac e incluso tu celular puede que tenga una terminal y no lo sabias.

>Si se busca un buen trabajo como en Compañías como Google, Amazon, Facebook, Corey Cold y Red Hat destacan: El uso de la terminal debe ser como respirar, emplean profesionales con dominio total de la terminal. consideran esta habilidad básica e imprescindible.

>Se puede hacer una automatización de tareas repetitivas. Acortas considerablemente el tiempo dedicado a procesos manuales.

El no usar la terminal genera dependencia a herramientas que nos limitan, pero si se aprende se hará un salto enorme en el dominio técnico.

<img src="https://www.profesionalreview.com/wp-content/uploads/2021/09/Terminal-de-comandos-34.png">

*Imagen Tomada De: https://www.profesionalreview.com/2021/10/06/que-es-terminal-windows-10/*

Lectura Recomendada: https://labex.io/linuxjourney




---




## Qué es una Terminal y Cómo Funciona con Comandos Básicos

¿Qué es una terminal? Es una pregunta que vamos a ir resolviendo a lo largo de todo este documento.

La terminal es la que solemos ver usualmente en las peliculas de hacker donde escriben código y cosas magicas empiezan a suceder. (No esta muy alejado de la realidad.)

La terminal es una **Interfaz de Usuario** en la que se escribe una serie de comandos que nos va a permitir comunicarnos con el sistema operativo, es decir: Darle instrucciones a nuestra computadora a traves de comandos.

Las terminales pueden aparecer en varios lados, en un programa, en la web, pueden aparecer asi sin más... sin ni siquiera interfaz de usuario e incluso podría aparecer en nuestro celular si nos conectamos de una forma adecuada.

Para poder ejecutar la terminal debemos hacerlo mediante un programa llamado **SHELL** pues la que realmente hará la interpretación de estos comandos es la Shell, es un programa (normalmente compilado) que actúa como interfaz entre el usuario y el sistema operativo (Se encarga de la traducción). Por lo que permite al usuario interactuar con el sistema operativo a traves de comandos de texto.

Como por ejemplo: Copia un archivo, elimina un archivo, configuraciones de crear un proceso.

Aunque la mayoría de las terminales están asociadas con sistemas Linux y Unix, es posible emplearlas también en Windows mediante herramientas específicas como PowerShell o Bash a través del sistema WSL. La elección de la terminal dependerá del sistema operativo y del entorno de trabajo.

>Veremos la powershell

Como en mi dispositivo tengo un sistema Windows se utilizará un sistema emulado llamado **WSL** | Windows Subsystem Linux.

**La diferencia entre la terminal y la shell.**

>Si tambien tienes windows, oprime la tecla windows y busca "Powershell", ejecuta "Windows Powershell"

>Si vas al Visual Studio Code y oprimes el atajo Control + Ñ te abrira la terminal.

Una vez dentro de Powershell o en la terminal de VSCODE escribes: **dir**

<img src="https://static.platzi.com/media/user_upload/upload-c7a8f22f-a45d-49b4-abd4-f90bfed8c2ff.png">

Te mostrara todos los directorios que tengas en tu dispositivo, shell tiene sus propios comandos, pero no son tan utilizados a nivel global. La terminal que se utiliza globalmente y en todas partes es **BASH** que es la que se va a estar utilizando a lo largo de todos estos apuntes.

    En la mayoria de servidores windows se utiliza esta powershell

* PowerShell es una terminal específica para Windows que ofrece comandos únicos para este sistema operativo. Es utilizada principalmente en servidores Windows.

* la terminal Bash, frecuente en Linux y sistemas Unix, es ampliamente utilizada a nivel global y será explorada mediante emulación WSL en este repo.

El funcionamiento de una terminal se apoya en un programa llamado shell. Este programa interpreta los comandos que introduces y los traduce en instrucciones que el sistema operativo puede entender y ejecutar. La shell convierte estos comandos escritos en acciones concretas visibles en tu equipo.

Lo que conocemos por Terminal realmente involucra 3 conceptos clave: Terminal (interfaz), Shell y Línea de comandos.

<img src="https://www.cs.cornell.edu/courses/cs1110/2021sp/resources/images/example-powershell.png">

*Imagen Tomada De: https://www.cs.cornell.edu/courses/cs1110/2021sp/resources/shell-windows.html*




---



## Instalación de terminal Bash en Windows usando WSL

La mayoría de personas que comienzan en el mundo de la tecnología lo hacen desde un sistema operativo Windows. Por eso, en esta sección aprenderemos a instalar una terminal Bash en Windows utilizando WSL (Windows Subsystem for Linux).

Estos seran los pasos para instalar una terminal BASH en windows usando un sistema llamado Windows Subsystem for Linux.

WSL permite ejecutar un sistema operativo Linux dentro de Windows, sin máquinas virtuales ni configuraciones complejas. Gracias a esto, podemos usar una terminal real de Linux directamente desde nuestro equipo.

A continuación, instalaremos WSL y una distribución de Linux (en este caso Ubuntu) que incluye la shell Bash por defecto.

Sigue el enlace, haz la lectura y sigue los pasos: https://learn.microsoft.com/es-es/windows/wsl/install

>Cuando ejecutas la powershell con administrador, la dirección será PS C:\Windows\system32>

El comando wsl --install va a instalar WSL para luego instalar una distribución de linux llamada UBUNTU, la más usada del mundo.

Ubuntu es una distribución de linux basada en DEBIAN que ya trae por defecto la SHELL de BASH

>Estamos descargando ubuntu.

Si quieres administrar las distribuciones de linux que tienes, puedes usar el comando wsl -l

Con esto ejecutamos WSL (oprime tecla windows y busca WSL) y se debe crear un usuario con nombre y contraseña.

De hay ya tenemos BASH, ¿Cómo sabemos que tenemos BASH? basta con usar el comando echo $SHELL y debe aparecer algo como /bin/bash - Con esto sabemos que tenemos BASH en nuestra terminal con ubuntu mediante WSL

>Mac tiene su propia terminal con BASH, pero puede que hallan algunos comandos que no los tome porque no es un sistema linux completo sino mas bien UNIX





---




## Comandos básicos de terminal para principiantes

A continuación encontrarás los comandos más básicos y a la vez más útiles para empezar a explorar el sistema operativo desde la terminal. Con ellos podrás navegar, analizar información, listar archivos y entender mejor cómo funciona Bash.

> La mayoría de los comandos suelen ser abreviaciones de palabras completas.

* **whoami:** Muestra el nombre del usuario con el que estás actualmente autenticado.

* **pwd = print working directory:** Indica la ruta exacta del directorio en el que te encuentras.

> Cada usuario tiene su propio directorio home.

* **ls = list:** Lista el contenido del directorio actual.

> La mayoria de comandos reciben algo llamado options

* **ls (list):** Lista el contenido del directorio actual.

* ls -a: Le indicará al comando que muestre todos los archivos ya que pueden haber archivos visibles y no visibles, porque suelen haber archivos ocultos que normalmente son archivos de configuración.

    .bashrc es de configuración de la terminal de bash

### Opciones de los comandos (Flags)

* **ls -a:** Muestra todos los archivos, incluyendo los ocultos (los que empiezan con .), por ejemplo: .bashrc → Archivo de configuración de Bash.

* ls -l: Muestra los archivos en una lista detallada (permisos, tamaño, propietario, etc.). Solo incluye archivos visibles.



**Tambien podemos combinar las opciones.**

*** ls -la:** Lista todos los archivos (incluyendo ocultos) con información detallada. 

> (El orden de las opciones no importa.)

* **ls -al:** (Mostrara lo mismo que ls -la)

* **clear:** Cuando contamos con bastante información en nuestra pantalla y no nos interesa verla podemos utilizar este comando para "limpiar" la terminal. **Se puede oprimir tambien el atajo CONTROL + L**

> Con la flecha ↑ puedes navegar por el historial de comandos ya ejecutados.

* **echo:** Si yo quiero guardar algún texto en mi terminal como por ejemplo echo "hola mundo" que se usa usualmente para temas de scripting

* **--help:** Podemos visualizar que opciones tiene un comando pues la mayoria de comandos y sobre todo lo más utilizados suelen utilizar algo llamado --help. Se les conoce como flask en donde se pueden escribir sin ningún valor y otras veces pueden contener un valor. Por lo que otros comandos pueden recibir parametros para realizar actividades especificas y complejas.

**ls --help**

Entonces eso permitira mirar todos los comandos con los que se puede jugar mediante ls -- para luego combinarlos como por ejmeplo

    ls -lah

> Importante tener en cuenta que en la terminal todo texto que sea blanco son archivos

> Todo lo que venga con una d al inicio suelen ser directorios y generalmente los veras de color azul

---

A continuación **Comandos que son de utilidad en el sistema**

* uname -a: Para mirar la descripción del entorno donde se esta trabajando

* date: Para mirar la fecha

* man: viene de la palabra manual que nos permite el manual de cualquier comando como por ejemplo:

    man echo

Estos son solo los primeros comandos básicos. Aún quedan por explorar comandos de red, compresión, manipulación avanzada de archivos, y algunos incluso… para dibujar dragones 🐉

<img src="https://i.sstatic.net/cqags.png">

*Imagen Tomada De: https://askubuntu.com/questions/1389080/how-to-get-to-the-windows-desktop-in-wsl*

Lectura Recomendada: https://www.geeksforgeeks.org/linux-unix/linux-commands-cheat-sheet/




---



## Navegación entre directorios en Linux con Comandos de Terminal

¿Cómo movernos entre directorios? ¿Cómo movernos al rededor de la terminal?

Es fundamental recordar que lo que hace una shell o en general la terminal es permitirnos interactuar con el sistema operativo simplemente con comandos. Sin importar qué sistema operativo tenga el dispositivo (Windows, Mac, Linux, Android) va a tener carpetas y dentro de estas archivos. Para navegar entre estos elementos solemos dar clicks en una biblioteca/explorador de archivos y eso mismo **se puede hacer a traves de la terminal**

### CD / Change Directory

Todos los sistemas linux inician a traves de una ruta absoluta que la podemos iniciar con el simbolo slash o " / ", este simbolo representa lo que es el inicio de lo que es un sistema operativo linux.

* Un truco interesante puede ser: Cuando se quiere ingresar a un directorio y analizar las diferentes opciones a las que se puede ingresar, escriba cd / y oprima la tecla de tabulación.

Ahora por medio de la tabulación, vamos a tener un autocompletado. 

Si entonces vamos hacia la carpeta cd /home/ lo unico que habra dentro de esta es el usuario.

Para volver al lugar original que es el directorio principal, basta con escribir cd [nombre de usuario] /

**A lo visto anteriormente se le conoce como navegación entre rutas fijas**
 
* rutas relativa: Es decirle al sistema operativo que se regruese una o dos carpeta hacia atras.

La forma de ir hacia una el directorio principal de nuestro usuario es escribiendo: **cd ~**

### pushd .

Guarda una variable de un lugar a donde quisieramos volver de la forma más sencilla en donde se guarda y para ir hay nuevamente se puede escribir **popd**

Podemos pensar de la busqueda y navegación de archivos como un arbol. En Linux para visualizar la estructura de directorios de forma jerárquica, es como si fuera un árbol.

Como por ejemplo: 

<img src="https://static.platzi.com/media/user_upload/upload-3fe5cc12-ff90-457a-9f81-d3c529078f38.png">

Y por otro lado:

* .   Directorio actual
* ..  Directorio superior
* /   Raiz
* ~   Directorio home del usuario

usar el comando cd / nos posiciona directamente en el directorio raíz del sistema Linux, que aloja importantes carpetas del sistema tales como:

* bin 

* dev 

* lib64 

* root 

* home 





---



## Comandos para Explorar y Manipular Archivos de Texto en Terminal

Ahora empezando a ver usos más especificos de los comandos de la terminal y es que en cualquier sistema operativo existe una gran cantidad de archivos de texto plano y cuando estamos procesando analisis de datos o estamos descargando cierto tipo de archivos y no tenemos una interfaz gráfica. **Existen comandos que nos van a permitir explorar el contenido de estos archivos.

* **cat [nombre archivo]:** Por medio de cat se pueden mirar diferentes archivos de texto

* **less:** Para mirar de forma más pausada el archivo.

* **head:** Si quiero mostrar el contenido inicial de mis archivos pues... con head lo puedo realizar

* **tail:** Si quiero mostrar el contenido final de mis archivos pues... con tail lo puedo realizar

    Tanto Head como Tail tienen la opción -n que será la cantidad de lineas que puedo mostrar como por ejemplo: head -n 20 [nombre del archivo] para imprimir 20 lineas de ese archivo.

* **nl:** Sirve para saber cuantas lineas de texto contiene este archivo.

* **wc = word count:** Si se desea sabes cuantas palabras contiene ese archivo y si queremos ver que opciones tiene este, podemos poner man wc y entre una de las opciones esta wc --byte para que cuente cuantos bytes pesa. y puede ser por numero de caracteres, de líneas, númerm maximo de líneas.

* **awk:** Sirve para determinar diferentes elementos, y entre ellos puede ser imprimir ciertas columnas en archivos csv como por ejemplo por medio de awk '{print $1}' [nombre archivo] para imprimir sólamente la primera columna. O tal vez por medio de awk -F ',' 'print{$1, $3}' [nombre del archivo] 

Lectura Recomendada: https://dn790008.ca.archive.org/0/items/pdfy-MgN0H1joIoDVoIC7/The_AWK_Programming_Language.pdf





---




## Uso de Wildcards para Búsquedas Masivas en la Terminal

Un wildcard es un carácter especial utilizado como comodín para hacer coincidir múltiples archivos en base a un patrón determinado. Principalmente, es útil con comandos como:

* ls (listar archivos)

* cp (copiar archivos)

* mv (mover archivos)

* rm (eliminar archivos)



¿Cuáles son los principales tipos de wildcards?

* Asterisco (*): representa cualquier combinación de caracteres.

* Signo de interrogación (?): coincide específicamente con un único carácter.

* Corchetes [ ]: agrupan caracteres específicos.

* Llaves { }: agrupan patrones o palabras.

> Ya vamos para un tema más avanzados -Como superpoderes.

* Touch: Al momento de usar touch file1.txt file2.txt fileA.txt fileB.md data.log archivo.csv se crearon esos archivos



**A continuación las wildcards**

1. "*" Conciste en señalar todo y despues se le puede agregar el nombre de la extensión, como por ejemplo: *.txt y nuevamente podemos seguir usando lo de combinar diferentes comandos para mostrarlos: ls -la *.txt

2. Si deseamos buscar por nombre, se le agrega un nombre inicial antes del * es decir: ls -la file*

3. Si deseamos buscar por ultimo caracter, se le cambia el * por un ? debido a que ? sólo acepta un sólo carácter. Entonces ls -la file?.txt

4. Ahora si deseamos buscar solamente por ultimas letras se le agrega [AB] (las letras que se desean buscar) como por ejemplo: ls -la  * [AB]. * = Me va a mostrar todos los archivos que finalicen con la letra A o la letra B.

5. Ahora si deseamos buscar solamente por una seguimos haciendo uso de [] y entonces escribimos algo como: ls -la * [o] .*

6. Si deseamos encontrar por dos tipos de extensiones diferentes podemos hacer uso de { } y escribir cosas como ls -la *.{md,log}

* **MV = Move:** Para mover y desplazar archivos se puede mediante mv, en donde se puede desplazar por tipo de extensiones como: mv *.txt ./backup/

Las wild cards son de esas cosas que hacen una diferencia enorme cuando usamos la terminal porque nos permite agrupar grandes cantidades de archivos.

> Cada shell tiene su forma de wildcards y su forma de interpretar por lo que son ligeramente diferentes de unas a las otra.

<img src="https://hablemoslinux.wordpress.com/wp-content/uploads/2012/03/tabla.png?w=1180">

*Imagen Tomada De: https://hablemoslinux.wordpress.com/2012/03/04/486/*





---




## Comandos GREP y FIND para búsquedas avanzadas en linux

A lo largo de este documento hemos explorado diferentes comandos para listar, buscar archivos y en general ver información acerca de nuestro dispositivo. Existen comandos que nos permiten buscar archivos por extensión, contenido, por tamaño e incluso por ubicación. En resumen son dos comandos: **GREP** y **FIND**

Estos dos comandos son de busqueda general que usan expresiones regulares (Especie de patron que hará match con una serie de carácteres) para encontrar patrones.

### GREP

Digamos que vamos a querrer buscar ciertos nombres en un archivo CSV que contiene una gran cantidad de datos... Podemos usar **GREP** como digamos... grep '[palabra que estamos buscando]' [nombre del archivo] y aparecerá toda la información que contenga esto. 

Por otro lado este comando es case sensitive por lo que se debe tener cuidado del cómo se escribe o debe agregar un -i antes de la palabra que se esta buscando es decir: grep -i 'spider' marvel base de datos.csv

Y se puede saber esta palabra en cuantos elementos aparece agregando una c despues de la -i por lo que:

    grep -ic 'spider' marvel base de datos.csv

Esta es una herramienta muy poderosa para la busqueda en donde le podemos integrar diferentes opciones para buscar por contenido por lo que nos permite encontrar las ocurrencias en un documento de texto lo que sea que estemos buscando. **Porque GREP nos permite buscar por contenido**

Tambien podemos hacer exclusiones!

Si deseamos que nos muestre toda la información a excepto de ciertos carácteres se puede por medio de: v - Es decir que: grep -v 'palabra' documento por lo que un ejemplo podría ser

    - grep -iv 'spider' marvel base de datos.csv
 
que es muy importante si se esta haciendo un análisis de datos.

<img src="https://www.web24.com.au/wp-content/uploads/2016/10/grep-small-500x295.png">

*Imagen Tomada De: https://www.web24.com.au/tutorials/use-grep-command-linux*



## FIND 

A diferencia de GREP que busca por contenido, FIND que busca por patrones de tipo de archivo dentro de una carpeta de una manera especifica, permite buscar por nombre o patrones de archivo.

El . se refiere a la misma carpeta en la que se esta en PWD y se usa la opción -type en donde podemos separarlo en si queremos encontrar un directorio un dir = **d**, o si por el otro lado queremos encontrar un archivo, un file = **f**.
Y se le agrega un -name  en donde podriamos agregar un "*" para que sin importar el nombre, lo liste.

    find . -type d -name "*"

Tambien se puede hacer busqueda por tamaño de archivo como por ejemplo:
    
    find . -type f -size +1M

**A continuación diferentes elementos de interes:**

* -name: Busca por nombre de archivo (acepta wildcards)

* -type: Busca por tipo (f=archivo, d=directorio)

* -size: Busca por tamaño

* -mtime: Busca por tiempo de modificación

* -user: Busca por propietario

* -exec: Ejecuta un comando sobre los archivos encontrados

* -not, -and, -or: Operadores lógicos

---

* Buscar archivos por nombre: find /home -name "*.txt"

* Buscar directorios: find /var -type d -name "log*"

* Buscar archivos modificados en los últimos 7 días: find /home -mtime -7

* Buscar archivos grandes: find /var -size +10M

* Ejecutar comando en archivos encontrados: find . -name "*.tmp" -exec rm {} \\;

* Buscar archivos con permisos específicos: find /etc -perm 644


---

**¿Para qué sirven GREP y FIND?**

* GREP: Busca contenido dentro de archivos.

* FIND: Busca archivos o carpetas por nombre, tipo o tamaño.

<img src="https://b1490832.smushcdn.com/1490832/wp-content/uploads/2019/03/find_simple.png?lossy=2&strip=1&webp=1">

*Imagen Tomada De: https://www.fosslinux.com/8661/how-to-find-files-using-command-line-in-the-linux-terminal.htm*




---



## Tipos de comandos en Linux y cómo identificarlos

A esta altura ya habrás utilizado varios comandos para listar, buscar y revisar archivos. Pero surge una pregunta importante: **¿qué es realmente un comando?**  
Cuando ejecutamos algo en la terminal, un comando puede ser distintos tipos de elementos.

> En Linux solemos usar comandos sin reflexionar sobre su naturaleza y origen.

Un comando puede ser:

- **Un script**
- **Una utilidad del sistema**
- **Un archivo binario ejecutable**
- **Un alias del sistema** (un “apodo” que simplifica un comando más largo)

---

## Cómo identificar qué tipo de comando es

Linux incluye herramientas que permiten saber exactamente qué estamos ejecutando.

### `type` — Identificar el tipo de comando

Permite determinar si algo es un alias, un script, un binario o una función del shell.

Ejemplo:

```bash
type ls


Qué significa que “todo en Linux o en una shell son binarios”
```

Cuando decimos que “todo en Linux son binarios”, no significa que todo sea solo unos y ceros visibles. Lo que significa es que casi todos los programas o comandos que ejecutas en Linux son archivos ejecutables compilados — llamados binarios — porque están hechos de código binario (0s y 1s) que la computadora puede entender directamente.

<img src="https://static.platzi.com/media/user_upload/upload-a9c6ef4b-6595-4116-afb3-849938bd583e.png">





---




## Redirecciones de terminal en Linux con operadores básicos

Preguntas a responder en esta sección:

* ¿Cómo usar las redirecciones del sistema?

* ¿Cómo usar los operadores "<", ">"?

* ¿Cómo usar el pipe operator?


---

¿Para qué sirven las redirecciones en nuestro sistema?

Cada uno de los comandos que nosotros ejecutamos un comando, se suelta una información en la interfaz del sistema. ¿Cómo hacemos cuando queremos guardar la información de nuestro comando ls o nuestro comando find la quisieramos guardar en un archivo de texto?

* Puedes almacenar resultados que normalmente aparecen en pantalla directamente en archivos.

* Facilita el envío de datos entre comandos en una cadena o flujo.


Y para esto es que sirven las redirecciones.

>Las redirecciones del sistema son una herramienta esencial para manejar eficientemente la información que generan los comandos en la terminal de Linux. 

>operadores básicos: mayor que (>), menor que (<), doble mayor que (>>) y pipe operator (|), con estos operadores podemos redirigir salidas, entradas y errores hacia diferentes destinos, ampliando así las posibilidades de nuestro trabajo en terminal.

Para realizar un pequeño ejercicio de esto tendremos que instalar una serie de comandos a traves del manejador de paquetes que tiene ubuntu llamado apt.

>apt Sólo funciona en distribuciones basadas en debian en este caso, [yo estoy utilizando ubuntu] por lo que si se esta utilizando otro tipo de distribución como puede ser fedora... En ese caso su manejador de paquete puedel llamarse dnf y si estas utilizando archlinux tendras que usar el manejador de paquete llamado packman, en caso de macos no existe un manejador como tal y el paquete se llama brup

---


Se va a escribir en la terminal:

    sudo apt install lolcat


Datos Interesantes:

1. sudo: Es un ejecutador, es decir que se le pide que ejecute como super administrador.
2. apt: Es el manejador de paquetes del sistema operativo que estemos utilizando que en mi caso es ubuntu.
3. install: Instalar... En donde a continuación de aqui se escriben los paquetes
4. lolcat y cowsay son dos paquetes distintos.

    ```sudo apt install cowsay```

---



Redirecciones

Como por ejemplo utilizar primero

    echo "hola mundo"

lo que hace es imprimir y mostrarnos la salida "hola mundo" que de forma estandar se le conoce como output, por el contrario cuando un comando recibe información se le conoce por el estandar input. Pero existe un tercer estado cuando manipulamos comandos en la terminal que se le conoce como estandar error.

Un ejemplo de error es cuando ingresas ls y el nombre de un archivo que no existe.

    ls asjldlaskdjlñasdj

Ahora, si nosotros al output lo redireccionamos a un archivo de texto mediante > archivo

    echo "santiagoencodigo" > archivohola.txt

y lo ejecutamos mediante

    cat archivohola.txt

y ahora si queremos ingresar otra línea de texto a este documento se puede hacer mediante >> archivo, a esto se le conoce como concatenar porque si cuenta con contenido, pues se lo agrega hasta el final

    echo "hola mundo" >> archivohola.txt

---



Ahora vamos a trabajar con un input.

¿Cómo hacemos que un estandar output de un comando sea el estandar input de otro comando?, para esto existe el pipe operator    

Como por ejemplo:

    lolcat "hola"

Lolcat recibe estandar input por lo que no va a realizar nada, pero al momento de:

    echo "saludo colorido" | lolcat

* El signo | es el pipe operator y sirve para redireccionar a otro comando.

* Lolcat será el comando que va a recibir el output de ese echo.

> No entendí muy bien, hace que se ponga de colores el texto solamente

---



Ahora sí utilizamos cowsay, aparecera una vaca dibujada mediante simbolos y despues entre " " podemos agregar el texto que queremos que diga la vaca.

    cowsay "hello world"

<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTrz-PpPy5p1z-wm-eH_uB68NH-dzoMO9m0dw&s">

*Imagen Tomada De: https://www.sauveconsulting.com.au/cowsay*

---

Ahora si... 

    cowsay "hello world" | lolcat

hará aparecer esa vaca, pero en colores.

Como por ejemplo:

<img src="https://think.unblog.ch/wp-content/uploads/2020/08/lolcat_kitty.png">

*Imagen Tomada De: https://think.unblog.ch/en/lolcat-for-more-color-in-the-terminal/*

---

Ahora si deseamos agregarle un animal o formato diferente, lo podemos hacer mediante -f [formato]

    cowsay -f dragon "santiagoencodigo" | lolcat

<img src="https://cdn.osxdaily.com/wp-content/uploads/2014/07/lolcat-rainbow-cowsay-output-terminal.jpg">

*Imagen Tomada De: https://osxdaily.com/2014/07/03/lolcat-rainbow-terminal-command-output/*

Si se desea mirar qué elementos se pueden dibujar mediante formatos de cowsay, se puede mediante:

    cowsay -l

> los comandos LOLCAT o Cowsay usados habitualmente en ejercicios educativos

---



Ahora ya sabiendo que cuando ingresamos algún comando erroneo o una sintaxis erronea... La terminal nos manda un error, ¿Cómo podemos capturar ese error?

Se puede mediante el signo > definiendo qué queremos capturar.

la forma de capturar en linux, es hacer referencia al elemento a capturar mediante el numero 2, es decir:

    ls asmdask 2> error.logs

ahora si se desea concatenar, se puede mediante el doble signo >>

    ls asmdask 2>> error.logs

que ahora si probamos

sudo apt install neovim 2>&1 info-install.log

* el paquete neovim es para edición de texto

* 2>&1: capturar los errores 2>, como que tambien capture lo que salga bien &1 

* info-install.log es el nombre que decidí agregarle, pero es modificable

---

En pocas palabras, nosotros podemos pensar: 


Redirige el input de un comando hacia un archivo.

    comando < archivo


Redirige la salida de un comando a un archivo. El mismo sobrescribe el contenido del archivo a donde se redirige la salida.

    comando > archivo


Concatena la salida de un comando a un archivo. Si no existe el archivo lo crea.

    comando >> archivo


Redirige la salida de error de un comando a un archivo.

    comando 2> archivo

Redirige la salida de un comando, que se ejecuto satisfactoriamente o un comando que presento errores, a un archivo.

comando > archivo 2>&1

---

Los manejadores de paquetes varían según el sistema operativo:

* Ubuntu (basado en Debian): APT

* Fedora (basado en Red Hat): DNF

* Arch Linux: PacMan

* macOS: Brew (se instala, no viene por defecto)

---

## Operadores de Control para Encadenar Comandos Linux