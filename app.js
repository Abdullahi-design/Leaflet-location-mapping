var map = L.map('map').setView([12.0084, 8.5172], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
}).addTo(map);

coords = [[12.4366, 8.5103], [11.9765437, 8.4618210], [11.9658880, 8.4538974], [11.9821928, 8.4299342], [11.9773881, 8.4694899], [11.9745769, 8.4720824]];
rent = ['$200', '$180', '$100', '$90', '$30', '$1']

//areas
areas = ["80 m2", "50 m2", "35 m2", "60 m2", "70 m2", "25 m2"]

//rooms
rooms = [4, 2, 1, 3, 4, 1]

//outside
images = ['img/outside/exterior1.jpeg', 'img/outside/exterior2.jpeg', 'img/outside/exterior3.jpeg', 'img/outside/exterior4.jpeg', 'img/outside/exterior5.jpeg', 'img/outside/exterior6.jpeg']

let l = coords.length;

var appart1 = document.querySelector('#appart1');
var appart2 = document.querySelector('#appart2');
var appart3 = document.querySelector('#appart3');
var appart4 = document.querySelector('#appart4');
var appart5 = document.querySelector('#appart5');
var appart6 = document.querySelector('#appart6');

apparts = [appart1, appart2, appart3, appart4, appart5, appart6]

for (let i = 0; i < l; i++) {
    //popups
    var pop = L.popup({
        closeOnClick: true
    }).setContent('<h4> Area: ' +areas[i] + '<br> Rooms: ' + rooms[i] + '</h4><img src=' + images[i] + ' style="width: 100px">')

    //markers
    var marker = L.marker(coords[i]).addTo(map).bindPopup(pop);

    //labels
    var toollip = L.tooltip({
        permanent: true
    }).setContent(rent[i]);

    marker.bindTooltip(toollip)

    //zoom in / fly to 
    apparts[i].addEventListener('mouseover', ()=> {
        map.flyTo(coords[i], 16)
    })

}