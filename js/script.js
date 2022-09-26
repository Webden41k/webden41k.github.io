  var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
     typeSpeed: 90,
    backSpeed: 40,
    loop: false,
    backDelay: 2000,
    smartBackspace: true,
    fadeOutClass: 'typed-fade-out',
    showCursor: true,
  });

$(".nav-btn").click(function() {
  $(".navs").toggleClass("open");
  $(this).toggleClass("open");
});

$('.navs a').on('click', function() {

    let href = $(this).attr('href');

    $('html, body').animate({
        scrollTop: $(href).offset().top - 70
    }, {
        duration: 350,    
        easing: "linear" 
    });

    return false;
});
	