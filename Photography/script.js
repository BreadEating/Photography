document.addEventListener('DOMContentLoaded', function() {
    var map = L.map('map').setView([37.8, -96], 4); // Set the initial center and zoom level of the map

    // Adding a tile layer to the map using OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    // Data for the cities with coordinates
    var cities = [
        { name: "New York", coords: [40.7128, -74.0060] },
        { name: "Seattle", coords: [47.6062, -122.3321] },
        { name: "Boston", coords: [42.3601, -71.0589] }
    ];

    // Add markers to the map
    cities.forEach(function(city) {
        var marker = L.marker(city.coords).addTo(map);
        marker.bindTooltip(city.name); // Bind a tooltip instead of a popup
    });
});
