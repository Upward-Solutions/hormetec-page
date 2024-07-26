document.addEventListener("DOMContentLoaded", () => {
  const slides = document.querySelectorAll(".slides img");
  let index = 0;

  function showNextSlide() {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }

  setInterval(showNextSlide, 5000); // Cambiar de imagen cada 5 segundos
});
