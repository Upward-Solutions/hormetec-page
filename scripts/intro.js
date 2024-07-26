        document.addEventListener("DOMContentLoaded", function() {
            const intro = document.getElementById('intro');
            const content = document.getElementById('content');
            const navbar = document.querySelector('.navbar');
            
            // Esperar a que termine la animación
            setTimeout(() => {
                intro.style.display = 'none';
                content.style.display = 'block';
                navbar.classList.remove('hidden');
                navbar.style.display = 'flex'; // Asegúrate de que el navbar sea visible
            }, 7000); // Ajusta el tiempo según la duración de tu animación
        });