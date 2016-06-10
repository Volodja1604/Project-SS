    var map = new GMaps({
      el: '#map',
      lat: 48.9226,
      lng: 24.7111
    });
map.addMarker({
  lat: 48.9227566,
  lng: 24.7104366,
  title: 'Ратуша',
  infoWindow: {
  content: '<a href="index.html">Ратуша</a>'
}
});
