document.addEventListener('DOMContentLoaded', function () {
    const hamburger = document.querySelector('.navbar-hamburger img');
    const navbarItems = document.querySelector('.navbar-items');

    // Toggle the menu visibility and change icon when clicking on the hamburger icon
    hamburger.addEventListener('click', function () {
        navbarItems.classList.toggle('active'); // Alterna la visibilidad del menú

        // Cambia la imagen del ícono
        if (hamburger.src.includes('menu.png')) {
            hamburger.src = 'assets/menu-close.png'; // Cambia a la imagen de la "X"
        } else {
            hamburger.src = 'assets/menu.png'; // Cambia de vuelta a la imagen de la hamburguesa
        }
    });

    // Close the menu when clicking on a navbar item
    navbarItems.addEventListener('click', function (event) {
        if (event.target.tagName === 'A') { // Verifica si el clic fue en un enlace
            navbarItems.classList.remove('active'); // Oculta el menú
            hamburger.src = 'assets/menu.png'; // Cambia de vuelta a la imagen de la hamburguesa
        }
    });
});
