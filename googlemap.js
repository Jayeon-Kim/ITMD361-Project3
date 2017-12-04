function initMap() {
  var seoul = { lat : 37.566535, lng : 126.977969};
  var home = {lat : 37.478487, lng : 126.864288};
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

var sliderOptions = 
{ sliderId: "slider", 
  startSlide: 0, 
  effect: "series1", 
  effectRandom: false, 
  pauseTime: 2800, 
  transitionTime: 1200, 
  slices: 14, boxes: 8,  
  hoverPause: 1, 
  autoAdvance: true, 
  thumbnailsWrapperId: "thumb_container_id", 
  m: false, license: "mylicense" 
}; 
var imageSlider=new mcImgSlider(sliderOptions); 
function mcImgSlider(i){
	for(var I = function(a))
}
	