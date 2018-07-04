
$(document).ready(function() {
    flatpickr("#datePicker");
});

function initMap() {
  // The location of Uluru
  var uluru = {lat: -43.485512, lng: 172.539442};
  // The map, centered at Uluru
  var map = new google.maps.Map(
      document.getElementById('map'), {zoom: 4, center: uluru});
  // The marker, positioned at Uluru
  var marker = new google.maps.Marker({position: uluru, map: map});
}
$(document).ready(function(){
    $('.deals').slick({
        dots: true,
        infinite: true,
        speed: 300,
        slidesToShow: 1,
        slidesToScroll: 1
    });
  });
