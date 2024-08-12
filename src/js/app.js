document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const name = document.getElementById('#fullname').value;
    const message = document.getElementById('#message').value;

    const encode = encodeURIComponent(message);

    const url = `https://wa.me/5521995291891?text=${encode}`;
    window.open(url, '_blank');
});