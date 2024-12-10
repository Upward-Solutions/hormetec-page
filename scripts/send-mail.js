const sendButton = document.getElementById('contact-form-send')

sendButton.addEventListener('click', () => {
    const name = document.getElementById('name').value
    const email = document.getElementById('email').value
    const subject = document.getElementById('subject').value
    const message = document.getElementById('message').value
    const messageError = document.getElementById('message-error')

    if (!name || !email || !subject || !message) {
        messageError.innerHTML = 'Por favor, completa todos los campos del formulario'
        messageError.style.display = 'block'
        return;
    }

    const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(
    `Name: ${name}\n\nMessage: ${message}`
    )}`;

    window.open(mailtoLink, '_blank');
})