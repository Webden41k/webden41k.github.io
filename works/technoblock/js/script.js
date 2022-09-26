$(".menuOpenBtn").click(function(){
  $(".openMenu").show();
});

$(".closeMenu").click(function(){
  $(".openMenu").hide();
});

 $('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  fade: false,
  asNavFor: '.slider-nav',
});
$('.slider-nav').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  dots: false,
  fade: true

});;

$('.sertificSlider').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false
});

$(document).ready(function(){
	$(".menu-scroll").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 800);
	});
  
  
  $('.show-modal').on('click', function () {
                $.showYtVideo({
                    videoId: 'uVdV-lxRPFo'
                });
            });  
  
  $('.inputphone').mask('+0 (000) 000-00-00');
  
  $('#form').validate({ // initialize the plugin
        rules: {
            name: {
                required: true,
                minlength: 2
            },
            phone: {
                required: true,
                minlength: 18
            },
          email: {
                required: true,
                email: true
            }
        }
    });

});





    

