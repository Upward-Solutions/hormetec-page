let index = 0; // Índice de la página actual
const itemsToShow = 3; // Número de elementos visibles en el slider

function moveSlide(step) {
    const slides = document.querySelectorAll('.slider-item');
    const totalSlides = slides.length;

    // Calcula cuántas páginas habrá
    const totalPages = Math.ceil(totalSlides / itemsToShow);

    // Actualiza el índice
    index += step; // Incrementa o decrementa el índice según el paso

    // Ajusta el índice para permitir desplazamientos continuos
    if (index < 0) {
        index = totalPages - 1; // Regresa a la última página si se intenta retroceder desde la primera
    } else if (index >= totalPages) {
        index = 0; // Regresa a la primera página si se intenta avanzar desde la última
    }

    // Calcula el desplazamiento en función de la cantidad de elementos que se están mostrando
    const offset = -index * (itemsToShow * (100 / totalPages)); // Ajuste del desplazamiento
    document.querySelector('.slider-items').style.transform = `translateX(${offset}%)`;
}
