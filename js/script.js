$(window).on('load', function() { 
  $('#preloader').delay(400).fadeOut('slow');
  $('body').delay(400).css({'overflow':'visible'});
  $('section').delay(400).css({'filter':'none'});
})

$(document).ready(function () {
  $('.loader').on('click', function () {
    $(".loader-text").addClass("anim");
    $(".loader-text .name").addClass("animate__fadeOutLeft");
    $(".loader-text .spec").addClass("animate__fadeOutRight");
    $(this).delay(700).fadeOut(500);
    setTimeout(function () {
      $('.loader').remove();
    }, 1200);
  });

  $('.nav-btn').on('click', function () {
    $(this).toggleClass("active");
    $(".menu").toggleClass("open");
  });
});
