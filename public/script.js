let navLink = document.getElementById('nav-Links');
let navIcon = document.getElementById('navIcon');

navIcon.addEventListener('click', function () {
    navLink.classList.toggle('hidden')
})

navLink.addEventListener('click', function (e) {
    if (e.target.tagName === 'A') {
        navLink.classList.add('hidden')
    }
})

document.addEventListener('click', function (e) {
    if (!navLink.contains(e.target) && !navIcon.contains(e.target)) {
        navLink.classList.add('hidden')
    }
})

const map = L.map('map').setView([7.6211, 5.2214], 9);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {

}).addTo(map);

L.marker([7.6211, 5.2214]).addTo(map).bindPopup('A pretty CSS popup.<br> Easily customizable.')


const contactForm = document.getElementById('contactForm');


contactForm.addEventListener('submit', function(e) {
    e.preventDefault();  

    // Collect form data
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    // Use EmailJS to send form data
    emailjs.send('service_q8z51z3', 'template_99n6em2', formData)
    .then(function(response) {
        alert("Message sent successfully! \u{1F389}");
    })
    .catch(function(error) {
        alert("Oops! Something went wrong. \u{274C}");
    });
});