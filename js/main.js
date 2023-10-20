const enviar = document.querySelector("#button")
const miForm = document.querySelector("#formulario")

miForm.addEventListener("submit", boton)

function boton() {
    window.location.href = "../pages/principal.html"
}