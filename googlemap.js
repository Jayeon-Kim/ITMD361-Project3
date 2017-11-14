function initMap() {
  var uluru = {lat : 37.566535, lng:126.977969};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom :6,
    center : uluru
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map : map
  });
}