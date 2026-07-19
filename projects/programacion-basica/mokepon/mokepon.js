/* Las constantes nunca van a variar. */


    const sectionSeleccionarAtaque=document.getElementById('seleccionar-ataque')
    const sectionReiniciar=document.getElementById('section-reiniciar')
    const botonSeleccionar = document.getElementById('boton-seleccionar')

    // Botón de reiniciar
    const botonReiniciar = document.getElementById('reiniciar')

    // Seleccionar Mascota
    const sectionSeleccionarMascota=document.getElementById('seleccionar-mascota')

    const SpanMascotaJugador = document.getElementById('mascota-jugador')
    const SpanMascotaEnemigo = document.getElementById('mascota-enemigo')

    const spanVidasJugador = document.getElementById('vidas-jugador')
    const spanVidasEnemigo = document.getElementById('vidas-enemigo')

    const sectionMensajes = document.getElementById("resultado")
    const sectionResultados = document.getElementById("mensajes")

    const ataquesDelJugador = document.getElementById("ataques-del-jugador")        
    const ataquesDelEnemigo = document.getElementById("ataques-del-enemigo")

    const ContenedorTarjetas = document.getElementById("contenedorTarjetas")
    const ContenedorAtaques = document.getElementById("contenedorAtaques")



/* Las razones del por qué no se cambian estas let, es porque son variables. */

    /*  Esto se llama arrays o arreglos - Similar a una lista.
        En esta variable esta vacia porque por medio de push le insertamos los mokepones.
    */
        let mokepones = [] 

        // array para Función secuenciaAtaque()
        let ataqueJugador = []

        // array para Función ataqueAleatorioEnemigo()
        let ataqueEnemigo = []


    // Esta variable es para popular nuestro HTML
        let opcionDeMokepones
    
        let inputHipodoge
        let inputCapipepo
        let inputRatigueya

        let mascotaJugador
        
        let vidasJugador = 3
        let vidasEnemigo = 3

    // Ataques
        let ataquesMokepon

            // Botones de ataque
            let botonFuego
            let botonAgua
            let botonTierra

            // Un array
            let botones = []
        
        let ataquesMokeponEnemigo






// Clase

    class Mokepon { 
        constructor(nombre, foto, vida) {
            this.nombre = nombre
            this.foto = foto
            this.vida = vida
            this.ataques = []
        }
    }



// Objetos

    // Objetos Instancia que vienen de mi Clase
    let hipodoge = new Mokepon('Hipodoge', './img/hipodoge.png', 5)
    let capipepo = new Mokepon('Capipepo', './img/capipepo.png', 5)
    let ratigueya = new Mokepon('Ratigueya', './img/ratigueya.png', 5)

    // Objetos Literarios
    hipodoge.ataques.push(
        {nombre: '🌊', id: 'boton-agua'},
        {nombre: '🌊', id: 'boton-agua'},
        {nombre: '🌊', id: 'boton-agua'},
        {nombre: '🔥', id: 'boton-fuego'},
        {nombre: '🌱', id: 'boton-tierra'},
    )

    capipepo.ataques.push(
        {nombre: '🌱', id: 'boton-tierra'},
        {nombre: '🌱', id: 'boton-tierra'},
        {nombre: '🌱', id: 'boton-tierra'},
        {nombre: '🌊', id: 'boton-agua'},
        {nombre: '🔥', id: 'boton-fuego'}, 
    )

    ratigueya.ataques.push(
        {nombre: '🔥', id: 'boton-fuego'},
        {nombre: '🔥', id: 'boton-fuego'},
        {nombre: '🔥', id: 'boton-fuego'},
        {nombre: '🌊', id: 'boton-agua'},
        {nombre: '🌱', id: 'boton-tierra'},
    )

    /* Esto se llama push, es una función que se utiliza para agregar elementos a un array.*/
    mokepones.push(hipodoge,capipepo,ratigueya) 


// Inician Funciones

function iniciarJuego() {
    sectionSeleccionarAtaque.style.display = 'none'

    mokepones.forEach((mokepon) => {
        opcionDeMokepones =`
        <input type="radio" name="mascota" id=${mokepon.nombre} />
        <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
            <p>${mokepon.nombre}</p>
            <img src=${mokepon.foto}
            alt=${mokepon.nombre}>
        </label>
        ` /* las comillas se hacen con alt gr y } */

    ContenedorTarjetas.innerHTML += opcionDeMokepones

    inputHipodoge = document.getElementById('Hipodoge')
    inputCapipepo = document.getElementById("Capipepo")
    inputRatigueya = document.getElementById("Ratigueya")
    }) /* De esta forma trabajarian las ecommerce, por medio de paginas dinamicas. */

    sectionReiniciar.style.display = 'none'

    botonSeleccionar.addEventListener("click", seleccionarMascota)
    botonReiniciar.addEventListener('click', reiniciarJuego)
}

function seleccionarMascota(){
    sectionSeleccionarMascota.style.display = 'none'

    // sectionSeleccionarAtaque.style.display = 'block'
    sectionSeleccionarAtaque.style.display = 'flex'

    //Esto es una forma de modificación del DOM

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

    extraerAtaques(mascotaJugador)
    SeleccionarMascotaEnemigo()
}

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

function mostrarAtaques(ataques) {
    ataques.forEach((ataque) => {
        ataquesMokepon = `
            <button id="${ataque.id}" class="boton-de-ataque BAtaque">${ataque.nombre}</button>
        `

        ContenedorAtaques.innerHTML += ataquesMokepon
    })        

    botonFuego = document.getElementById('boton-fuego')
    botonAgua = document.getElementById('boton-agua')
    botonTierra = document.getElementById('boton-tierra')

    botones = document.querySelectorAll('.BAtaque')
    // console.log(botones)
}

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

function SeleccionarMascotaEnemigo(){
    let MascotaAleatoria = aleatorio(1, mokepones.length -1)

    SpanMascotaEnemigo.innerHTML = mokepones[MascotaAleatoria].nombre
    ataquesMokeponEnemigo = mokepones[MascotaAleatoria].ataques

    secuenciaAtaque()
}

function ataqueAleatorioEnemigo(){
    let ataqueAleatorio = aleatorio(1,3)

    if(ataqueAleatorio == 0 || ataqueAleatorio == 1 ) {
            ataqueEnemigo.push('Fuego 🔥')
    } else if(ataqueAleatorio == 2 || ataqueAleatorio == 4 ) {
        ataqueEnemigo.push('Agua 🌊')
    } else {
        ataqueEnemigo.push('Tierra 🌱')
    }

    console.log(ataqueEnemigo)

    combate()
}

// Hay diferentes operadores "AND=&&" "OR=||" "NOT=!" y habrá que estudiar las bases de la ingenieria en software.
// don´t repeat your self, no repitas tu codigo. 
//¿Cómo podrías mejorar tu codigo?

function combate(){
    if(ataqueJugador == ataqueEnemigo) {
        sectionResultados.style.backgroundColor = '#bababa'
        crearMensaje("Empate 🙌")
    } else if(ataqueJugador == 'Fuego 🔥' && ataqueEnemigo == 'Tierra🌱') {
        sectionResultados.style.backgroundColor = '#8bbc8b'
        crearMensaje("Ganaste 👍")
        vidasEnemigo--
        // spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Agua 🌊' && ataqueEnemigo == 'Fuego 🔥') {
        sectionResultados.style.backgroundColor = '#8bbc8b'
        crearMensaje("Ganaste 👍")
        vidasEnemigo--
        // spanVidasEnemigo.innerHTML = vidasEnemigo
    } else if(ataqueJugador == 'Tierra 🌱' && ataqueEnemigo == 'Agua 🌊') {
        sectionResultados.style.backgroundColor = '#8bbc8b'
        crearMensaje("Ganaste 👍")
        vidasEnemigo--
        // spanVidasEnemigo.innerHTML = vidasEnemigo
    } else {
        sectionResultados.style.backgroundColor = '#e78282'
        crearMensaje("Perdiste ❌")
        vidasJugador--
        // spanVidasJugador.innerHTML = vidasJugador
    }

    // Corazones que representan vidas en el juego.
    
        // Vidas Jugador
        if (vidasJugador==3){
            spanVidasJugador.innerHTML = '🤍🤍🤍'
        } else if (vidasJugador==2){
            spanVidasJugador.innerHTML = '🤍🤍'
        } else if (vidasJugador==1){
            spanVidasJugador.innerHTML = '🤍'
        } else {
            spanVidasJugador.innerHTML = '💀'
        }

        // Vidas Enemigo
        if (vidasEnemigo==3){
            spanVidasEnemigo.innerHTML = '🖤🖤🖤'
        } else if (vidasEnemigo==2){
            spanVidasEnemigo.innerHTML = '🖤🖤'
        } else if (vidasEnemigo==1){
            spanVidasEnemigo.innerHTML = '🖤'
        } else {
            spanVidasEnemigo.innerHTML = '💀'
        }

        // Cara Feliz en Caso de Ganar
        if (vidasJugador == 0 && vidasEnemigo != 0){
            spanVidasEnemigo.innerHTML = '😉'
                        
        } else if (vidasEnemigo == 0 && vidasJugador != 0){
            spanVidasJugador.innerHTML = '😉'
        }

    revisarVidas()
}

function revisarVidas(){

    if(vidasEnemigo == 0) {
        crearMensajeFinal('Ganaste 🥳')
    }else if(vidasJugador == 0) {
        crearMensajeFinal('Perdiste 😥')
    }
}

function crearMensaje(resultado){   
    let nuevoAtaqueDelJugador = document.createElement('p')
    let nuevoAtaqueDelEnemigo = document.createElement('p')
    
    sectionMensajes.innerHTML = resultado
    nuevoAtaqueDelJugador.innerHTML = ataqueJugador
    nuevoAtaqueDelEnemigo.innerHTML = ataqueEnemigo
    
    ataquesDelJugador.appendChild(nuevoAtaqueDelJugador)
    ataquesDelEnemigo.appendChild(nuevoAtaqueDelEnemigo)
}

function crearMensajeFinal(resultadoFinal){
    sectionMensajes.innerHTML = resultadoFinal

    botonFuego.disabled = true
    botonAgua.disabled = true
    botonTierra.disabled = true

    sectionReiniciar.style.display = 'flex'
} 

function reiniciarJuego(){
    location.reload()
}

function aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min)
}

window.addEventListener('load', iniciarJuego)