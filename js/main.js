const opciones = document.getElementById('opciones')
const opcionesMenu = document.querySelector(".aside-de-opciones")
const opcionesMenuClosed = document.querySelector(".closed-opciones")

opciones.addEventListener('click', abrirOpciones)

function abrirOpciones () {
    console.log('abrio el menu')
    opcionesMenu.classList.toggle('inactive')
}