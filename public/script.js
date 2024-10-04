const map = L.map('map').setView([7.6211, 5.2214], 9);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {

}).addTo(map);

L.marker([7.6211, 5.2214]).addTo(map).bindPopup('A pretty CSS popup.<br> Easily customizable.')