document.addEventListener("DOMContentLoaded", function () {
    const intro = document.getElementById("intro");
    const content = document.getElementById("content");
    const navbar = document.querySelector(".navbar");
    const scrollArrow = document.querySelector(".scroll-up-arrow");
    const whatsappIcon = document.querySelector(".whatsapp-icon");

    setTimeout(() => {
      intro.style.display = "none";
      content.style.display = "block";
      navbar.classList.remove("hidden");
      navbar.style.display = "flex";
      scrollArrow.classList.remove("hidden");
      whatsappIcon.classList.remove("hidden");
    }, 3000);
  });
  