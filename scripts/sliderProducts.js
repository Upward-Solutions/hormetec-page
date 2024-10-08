let index = 0;
const itemsToShow = 2; // Número de elementos visibles en el slider

function moveSlide(step) {
    const slides = document.querySelectorAll('.slider-item');
    const totalSlides = slides.length;
    const slidesToShow = itemsToShow;
    const totalPages = Math.ceil(totalSlides / slidesToShow);
    
    index = (index + step + totalPages) % totalPages;
    const offset = -index * (100 / slidesToShow);
    document.querySelector('.slider-items').style.transform = `translateX(${offset}%)`;
}
