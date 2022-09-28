$('.slider-big-wrap').slick({
    dots: true,
	responsive: [
    {
      breakpoint: 768,
      settings: {
        adaptiveHeight: true
      }
    }
	]
});

$(".talent .tal-img").click(function() {
	if(($(this).parent('li').hasClass('disabled')) || ($(this).parent('li').hasClass('lock'))){
		
	} else{
		$(".talent-list .talent").removeClass('active');
		$(this).parent('li').addClass('active');
	}
});


$("a[href='#top']").click(function() {
  $("html, body").animate({ scrollTop: 0 }, 300);
  return false;
});



$(".dicr-h .dicr-icon").click(function() {
  $(".dicr-h").toggleClass("open");
});

$(".close-collapse").click(function() {
  $('.tab-pane .collapse').collapse('hide');
  return false;
});

$(".close-hero-info").click(function() {
  $('.hero-info').collapse('hide');
  return false;
});
$(".qwerty-list .item-link").click(function() {
  $('.tab-pane .collapse').collapse('hide');
});

$(document).click( function(e){
	if ( $(e.target).closest('.dicr-h').length ) {
		return;
	}
	$(".dicr-h").removeClass("open");
});

$(".contacts .icon").click(function() {
  $("header .contacts").toggleClass("open");
});

$(document).click( function(e){
	if ( $(e.target).closest('header .contacts').length ) {
		return;
	}
	$("header .contacts").removeClass("open");
});


$(".mobile-nav-btn").click(function() {
  $(this).toggleClass("active");
  $(".mobile-nav").toggleClass("open");
});
