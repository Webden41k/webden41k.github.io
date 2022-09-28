

$('.main-sOne-slider').slick({
  slidesToShow: 4,
  dots: true,
  slidesToScroll: 4,
  
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },{
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
});



$('.main-video-slider').slick({
  slidesToShow: 1,
  dots: true,
  slidesToScroll: 1
});


$('.calend-slider').slick({
  slidesToShow: 1,
  dots: true,
  slidesToScroll: 1,
  asNavFor: '.calend .dates'
});
$('.calend .dates').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  asNavFor: '.calend-slider',
  dots: true,
  focusOnSelect: true
});


$('.main-gallery-slider').slick({
  slidesToShow: 4,
  dots: true,
  slidesToScroll: 4,
  responsive: [
    {
      breakpoint: 991,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3
      }
    },
    {
      breakpoint: 767,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false
      }
    }
  ]
});


$('.main-gallery-slider').slickLightbox({
  itemSelector        : 'a',
  navigateByKeyboard  : true
});

$(".navbar-back").click(function() {
  $("header nav .navbar-collapse").removeClass("in");
  $("body").removeClass("over");
})

$("header .navbar-toggle").click(function() {
  $("body").addClass("over");
})



$(".photos a").fancybox({
	buttons: [    
    ],
  infobar: false
});

$(".kond-slider a").fancybox({
	buttons: [    
    ],
  infobar: false
});

$('.dop .slider').slick({
  slidesToShow: 1,
  dots: true,
  slidesToScroll: 1,
  arrows: false
});


$( '.persons a' ).fancybox({
  buttons: [    
    ],
  idleTime: false,
  infobar: false,
    caption : function( instance, item ) {
        var caption = $(this).data('caption') || '';

        if ( item.type === 'image' ) {
            caption = (caption.length ? caption + '<br />' : '') + '<a data-toggle="modal" data-target="#myModal" class="callBtn" onClick="window.parent.jQuery.fancybox.close();" href="#">Заказать персонажа</a>' ;
        }

        return caption;
    },
  beforeShow : function(){
   this.title =  $(this.element).data("caption");
  }
});


//$('.fancybox-caption a').click(function(){
//  $("#fancybox-close").click();
//});
//

$("form input[name$='phone']").mask('+0 (000) 000-00-00');

$("form .callBtn").click(function() {
  //$(this).parents('form').;
  var thisForm = $(this).parents('form');
  
  thisForm.validate({
    rules: {
    name: {
      required: true,
      minlength: 2
    },
    phone: {
      required: true,
      minlength: 18
    },
    text: {
      required: true,
      minlength: 5
    }
  }
  });
  
  
  
  if(thisForm.valid() == true){
    thisForm.addClass("senDD");
  }
  
  thisForm.submit();
});

$(".calend-slider .day1btn").click(function() {
  $(".calend-slider .l a").removeClass("active");
  $(".calend-slider .day1btn").addClass("active");
  $(".calend-slider .r div").removeClass("active");
  $(".calend-slider .day1").addClass("active");
});

$(".calend-slider .day2btn").click(function() {
  $(".calend-slider .l a").removeClass("active");
  $(".calend-slider .day2btn").addClass("active");
  $(".calend-slider .r div").removeClass("active");
  $(".calend-slider .day2").addClass("active");
});

$(".calend-slider .day3btn").click(function() {
  $(".calend-slider .l a").removeClass("active");
  $(".calend-slider .day3btn").addClass("active");
  $(".calend-slider .r div").removeClass("active");
  $(".calend-slider .day3").addClass("active");
});

$(".calend-slider .day4btn").click(function() {
  $(".calend-slider .l a").removeClass("active");
  $(".calend-slider .day4btn").addClass("active");
  $(".calend-slider .r div").removeClass("active");
  $(".calend-slider .day4").addClass("active");
});

$(".calend-slider .day5btn").click(function() {
  $(".calend-slider .l a").removeClass("active");
  $(".calend-slider .day5btn").addClass("active");
  $(".calend-slider .r div").removeClass("active");
  $(".calend-slider .day5").addClass("active");
});



$(".menuLager .day1btn").click(function() {
  $(".menuLager .l a").removeClass("active");
  $(".menuLager .day1btn").addClass("active");
  $(".menuLager .r div").removeClass("active");
  $(".menuLager .day1").addClass("active");
});

$(".menuLager .day2btn").click(function() {
  $(".menuLager .l a").removeClass("active");
  $(".menuLager .day2btn").addClass("active");
  $(".menuLager .r div").removeClass("active");
  $(".menuLager .day2").addClass("active");
});

$(".menuLager .day3btn").click(function() {
  $(".menuLager .l a").removeClass("active");
  $(".menuLager .day3btn").addClass("active");
  $(".menuLager .r div").removeClass("active");
  $(".menuLager .day3").addClass("active");
});

$(".menuLager .day4btn").click(function() {
  $(".menuLager .l a").removeClass("active");
  $(".menuLager .day4btn").addClass("active");
  $(".menuLager .r div").removeClass("active");
  $(".menuLager .day4").addClass("active");
});

$(".menuLager .day5btn").click(function() {
  $(".menuLager .l a").removeClass("active");
  $(".menuLager .day5btn").addClass("active");
  $(".menuLager .r div").removeClass("active");
  $(".menuLager .day5").addClass("active");
});




