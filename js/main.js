const opciones = document.getElementById('opciones')
const opcionesMenu = document.querySelector(".aside-de-opciones")
const informacionAdicional = document.querySelector('.aside-de-informacion')
const closedOpciones = document.querySelector('.closed-opciones')


opciones.addEventListener('click', abrirOpciones)
closedOpciones.addEventListener('click', cerrarOpciones)

//------------------Aparecer y desaparecer haciendo click contenedores de html

//del nav ↓
function abrirOpciones () {
    console.log('Abriste el menu')
    opcionesMenu.classList.remove('inactive')
}  
function cerrarOpciones() {
    console.log('Cerraste el menu')
    opcionesMenu.classList.add('inactive')
}

// del archivo rituaes.html ↓
function informacionExtra() {
    console.log('Le diste click para ver infomaciuon extra')
    informacionAdicional.classList.toggle('inactive')
}
//----------------------------------------------------


// Enviar los datos del formulario a mi correo html, en este caso, el textarea
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

//---------------------------------------Escribiendo html en js del archivo contenidpo.html
let imagesDeMuestra = [];
imagesDeMuestra.push({
    img: 'https://i.pinimg.com/236x/62/84/32/62843263b5bff6c8b02f6f830fab94cc.jpg'
})
imagesDeMuestra.push({
    img: 'https://i.pinimg.com/236x/67/62/a4/6762a4a1037e7dfd05e14e0f0ff8db99.jpg'
})
imagesDeMuestra.push({
    img: 'https://i.pinimg.com/236x/c3/c6/60/c3c66055a00c95404fd2bd2881b99aa4.jpg'
})
imagesDeMuestra.push({
    img: 'https://i.pinimg.com/236x/1e/40/28/1e402873122a729b6c6c98024ed3f500.jpg'
})
imagesDeMuestra.push({
    img: 'https://i.pinimg.com/236x/c3/32/95/c3329558e87e53a0fa42350d95345e2c.jpg'
})
imagesDeMuestra.push({
    img: 'https://i.pinimg.com/236x/34/31/d3/3431d31e0bb575782529ae831e5b78a8.jpg'
})
imagesDeMuestra.push({
    img: 'https://i.pinimg.com/236x/a2/7d/94/a27d94ca801114219cde1b71ffe0ab94.jpg'
})
imagesDeMuestra.push({
    img: 'https://i.pinimg.com/236x/0e/37/af/0e37af97b97ee5567a286b8a68471168.jpg'
})
imagesDeMuestra.push({
    img: 'https://i.pinimg.com/236x/21/a3/e4/21a3e4dc27d38cf49199094a163ff632.jpg'
})
imagesDeMuestra.push({
    img: 'https://i.pinimg.com/236x/3e/1f/54/3e1f54a7a99858751813bc9e88a1fa7d.jpg'
})
imagesDeMuestra.push({
    img: 'https://i.pinimg.com/236x/22/11/7e/22117e9cbe753332c8fef6838611397b.jpg'
})
imagesDeMuestra.push({
    img: 'https://i.pinimg.com/236x/3c/80/48/3c8048db2ba648ce5d6f78c770bbc7e3.jpg'
})
imagesDeMuestra.push({
    img: 'https://i.pinimg.com/236x/c0/0a/5f/c00a5f1ee662c3331e5166968d78a047.jpg'
})


function srollImages() {
    const slider = document.querySelector('.slider');

    // Crea un único elemento <article>
    const etiquetaArtcle = document.createElement('article');//crear etiqueta html 
    etiquetaArtcle.classList.add('slider_contend'); //agregar una clase para que se vincule con el css

    const titulo = document.createElement('h4') //crear etiqueta html 
    titulo.innerText = 'Algunas Esculturas Realistas' //inyectar texto al html

    for (const imagen of imagesDeMuestra) { //creamos nuestras diversas imagenes
        const divContenedor = document.createElement('div'); //crear etiqueta html

        const etiquetaImg = document.createElement('img'); //crear etiqueta html
        etiquetaImg.setAttribute('src', imagen.img); //conectar con el array lo que se quiere mostrar

        // Agrega elementos al árbol DOM dentro del <article>
        divContenedor.appendChild(etiquetaImg);
        etiquetaArtcle.appendChild(divContenedor);
    }

    // Agrega el <article> al contenedor .slider
    slider.appendChild(titulo)
    slider.appendChild(etiquetaArtcle);
}

// Llama a la función srollImages después de que el DOM se haya cargado
document.addEventListener('DOMContentLoaded', srollImages);
//------------------------------------------------------

