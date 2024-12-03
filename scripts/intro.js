document.addEventListener("DOMContentLoaded", function () {
    const intro = document.getElementById("intro");
    const content = document.getElementById("content");
    const navbar = document.querySelector(".navbar");
    const scrollArrow = document.querySelector(".scroll-up-arrow");
    const whatsappIcon = document.querySelector(".whatsapp-icon");
  
    // Esperar a que termine la animación
    setTimeout(() => {
      intro.style.display = "none"; // Oculta la introducción
      content.style.display = "block"; // Muestra el contenido principal
      navbar.classList.remove("hidden");
      navbar.style.display = "flex"; // Asegúrate de que el navbar sea visible
  
      // Mostrar la flecha y el ícono de WhatsApp
      scrollArrow.classList.remove("hidden");
      whatsappIcon.classList.remove("hidden");
    }, 7000); // Ajusta el tiempo según la duración de tu animación
  });
  