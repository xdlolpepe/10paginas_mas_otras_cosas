const carrusel = document.querySelector('.carrusel');
const slides = document.querySelectorAll('.slide');
const anteriorBtn = document.getElementById('anterior');
const siguienteBtn = document.getElementById('siguiente');
let indice = 0;

siguienteBtn.addEventListener('click', () => {
    indice++;
    if (indice === slides.length) {
        indice = 0;
    }
    actualizarCarrusel();
});

anteriorBtn.addEventListener('click', () => {
    indice--;
    if (indice < 0) {
        indice = slides.length - 1;
    }
    actualizarCarrusel();
});

function actualizarCarrusel() {
    carrusel.style.transform = `translateX(-${indice * 100}%)`;
}

