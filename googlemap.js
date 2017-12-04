function initMap() {
  var seoul = {['Seoul', 37.566535, 126.977969]};
  var home = {['My home', 37.478487, 126.864288]};
  var map = new google.maps.Map(document.getElementById('map'), {
    zoom :8,
    center : seoul
  });
  var marker = new google.maps.Marker({
    position: seoul,
    map : map
  });
  var marker2 = new google.maps.Marker({
    position: home,
    map : map
  });
}