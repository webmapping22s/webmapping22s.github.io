/* Neuseelandreise Skript */
// einzeiliger Kommentar
let lat = -39.13;
let lng = 175.65;
let zoom = 11;

let coords = [-39.13, 175.65];
//console.log(coords);
//console.log(coords[0]);
//console.log(coords[1]);
//console.log(coords.length);

//console.log("text");
//console.log('text');
//console.log('id="map"');
//console.log(`latitude = ${lat}`);

//console.log(ETAPPEN);
//console.log(ETAPPEN[0]);
//console.log(ETAPPEN[0].nr);
//console.log(ETAPPEN[0].github);
//console.log(ETAPPEN[0].titel);
//console.log(ETAPPEN[0].wikipedia);
//console.log(ETAPPEN[0].lat);
//console.log(ETAPPEN[0].lng);


let popup = `
    <h3>${ETAPPEN[0].titel} (Etappe ${ETAPPEN[0].nr})</h3>
    <ul>
        <li>geogr. Länge: ${ETAPPEN[0].lng}</li>
        <li>geogr. Breite: ${ETAPPEN[0].lat}</li>
        <li><a href="${ETAPPEN[0].wikipedia}">Link zur Wikipediaseite</a></li>
        <li><a href="${ETAPPEN[0].github}">Link zur Etappenseite</a></li>
    </ul>
`;

let map = L.map('map').setView(coords, zoom);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([lat, lng]).addTo(map)
    .bindPopup(popup)
    .openPopup();


for (let etappe of ETAPPEN) {
    let popup = `
    <h3>${etappe.titel} (Etappe ${etappe.nr})</h3>
    <ul>
        <li>geogr. Länge: ${etappe.lng}</li>
        <li>geogr. Breite: ${etappe.lat}</li>
        <li><a href="${etappe.wikipedia}">Link zur Wikipediaseite</a></li>
        <li><a href="https://${etappe.github}.github.io/nz/">Link zur Etappenseite</a></li>
    </ul>
    `;
    //console.log(etappe);
    L.marker([etappe.lat, etappe.lng]).addTo(map).bindPopup(popup);
}

// DOC Hütten anzeigen
for (let hut of HUTS) {
    let popup = `
        <h3>${hut.name}</h3>
    `;
    L.circleMarker([hut.lat, hut.lng]).addTo(map).bindPopup(popup);
}

