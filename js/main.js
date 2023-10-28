const opciones = document.getElementById('opciones')
const opcionesMenu = document.querySelector(".aside-de-opciones")
const opcionesMenuClosed = document.querySelector(".closed-opciones")

opciones.addEventListener('click', abrirOpciones)

function abrirOpciones () {
    console.log('Click menu')
    opcionesMenu.classList.toggle('inactive')
}

// textarea
document.getElementById('miFormularioTextarea').addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe normalmente

    // Obtén los datos del formulario
    const formData = new FormData(this);

    // Enviar datos a FormSubmit usando fetch
    fetch('https://formspree.io/f/xwkdyzqj', {
        method: 'POST',
        body: formData
    })
    .then(response => {
        // Verifica el código de estado de la respuesta
        if (response.status === 200) {
            alert('¡Formulario enviado con éxito!');
        } else {
            alert('Error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
        }
    })
    .catch(error => {
        console.error(error);
        alert('Error al enviar el formulario. Por favor, inténtalo de nuevo más tarde.');
    });
});