const fila = document.querySelector('.contenedor-carousel');
const peliculas = document.querySelectorAll('.pelicula');


const flechaIzquierda = document.getElementById('flecha-izquierda');
const flechaDerecha = document.getElementById('flecha-derecha');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----

flechaDerecha.addEventListener('click', () => {
	fila.scrollLeft += fila.offsetWidth;


});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda.addEventListener('click', () => {
	fila.scrollLeft -= fila.offsetWidth;

});








// ? ----- ----- carousel1 ----- -----

const fila1 = document.querySelector('.contenedor-carousel1');
const peliculas1 = document.querySelectorAll('.pelicula1');


const flechaIzquierda1 = document.getElementById('flecha-izquierda1');
const flechaDerecha1 = document.getElementById('flecha-derecha1');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----

flechaDerecha1.addEventListener('click', () => {
	fila1.scrollLeft += fila1.offsetWidth;


});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda1.addEventListener('click', () => {
	fila1.scrollLeft -= fila1.offsetWidth;
});






// ? ----- ----- carousel2 ----- -----


const fila2 = document.querySelector('.contenedor-carousel2');
const peliculas2 = document.querySelectorAll('.pelicula2');


const flechaIzquierda2 = document.getElementById('flecha-izquierda2');
const flechaDerecha2 = document.getElementById('flecha-derecha2');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----

flechaDerecha2.addEventListener('click', () => {
	fila2.scrollLeft += fila2.offsetWidth;


});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda2.addEventListener('click', () => {
	fila2.scrollLeft -= fila2.offsetWidth;

});



// ? ----- ----- carousel3 ----- -----

const fila3 = document.querySelector('.contenedor-carousel3');
const peliculas3 = document.querySelectorAll('.pelicula3');


const flechaIzquierda3 = document.getElementById('flecha-izquierda3');
const flechaDerecha3 = document.getElementById('flecha-derecha3');

// ? ----- ----- Event Listener para la flecha derecha. ----- -----

flechaDerecha3.addEventListener('click', () => {
	fila3.scrollLeft += fila3.offsetWidth;


});

// ? ----- ----- Event Listener para la flecha izquierda. ----- -----
flechaIzquierda3.addEventListener('click', () => {
	fila3.scrollLeft -= fila3.offsetWidth;

});





// ? ----- ----- paginas flotantes. ----- -----

function abrir(){
    document.getElementById("ven").style.display="block"

}


function cerrar(){
    document.getElementById("ven").style.display="none"
}