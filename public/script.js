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

// let navIcon = document.getElementById('navIcon');
// console.log(navIcon)
// console.log("hello");
