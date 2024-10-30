window.onload = function() {
    document.getElementById('poetry-section').classList.remove('hidden');
    document.getElementById('storyTelling-section').classList.add('hidden');
    document.getElementById('contentWriting-section').classList.add('hidden');
    document.getElementById('essay-section').classList.add('hidden');
};

function displayContent(event) {
    event.preventDefault();
    document.getElementById('contentWriting-section').classList.remove('hidden');
    document.getElementById('storyTelling-section').classList.add('hidden');
    document.getElementById('poetry-section').classList.add('hidden');
    document.getElementById('essay-section').classList.add('hidden');
}

function displayPoetry(event) {
    event.preventDefault();
    document.getElementById('poetry-section').classList.remove('hidden');
    document.getElementById('contentWriting-section').classList.add('hidden');
    document.getElementById('storyTelling-section').classList.add('hidden');
    document.getElementById('essay-section').classList.add('hidden');
}

function displayStory(event) {
    event.preventDefault();
    document.getElementById('storyTelling-section').classList.remove('hidden');
    document.getElementById('poetry-section').classList.add('hidden');
    document.getElementById('contentWriting-section').classList.add('hidden');
    document.getElementById('essay-section').classList.add('hidden');
}

function displayEssay(event) {
    event.preventDefault();
    document.getElementById('essay-section').classList.remove('hidden');
    document.getElementById('contentWriting-section').classList.add('hidden');
    document.getElementById('storyTelling-section').classList.add('hidden');
    document.getElementById('poetry-section').classList.add('hidden');
}

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

L.marker([7.6211, 5.2214]).addTo(map).bindPopup('')


const contactForm = document.getElementById('contactForm');


contactForm.addEventListener('submit', function(e) {
    e.preventDefault();  

    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value
    };

    emailjs.send('service_q8z51z3', 'template_99n6em2', formData)
    .then(function(response) {
        alert("Message sent successfully! \u{1F389}");
    })
    .catch(function(error) {
        alert("Oops! Something went wrong. \u{274C}");
    });
    document.getElementById('name').value =''
    document.getElementById('email').value = ''
    document.getElementById('subject').value =''
    document.getElementById('message').value =''
});