function initMap() {
  var home = {lat : 37.566535, lng:126.977969};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom :7,
    center : home
  });
  var marker = new google.maps.Marker({
    position: home,
    map : map
  });
}