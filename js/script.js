$('.loader').awesomeCursor('hand', {
  color: '#fff',
  size: 22,
  hotspot: 'left top'
});

$('.loader').click(function() {
  $(".loader-text").addClass("anim");
  $(".loader-text .name").addClass("animate__fadeOutLeft");
  $(".loader-text .spec").addClass("animate__fadeOutRight");
  $('.loader').delay(700).fadeOut(500);
});
