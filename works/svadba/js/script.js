 
$(document).ready(function(){

$('.photoSlider').slick({
  dots: false,
  infinite: true,
  variableWidth: true,
  centerMode: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 1,
        infinite: true
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }

  ]
});
	


$('.photoSlider').slickLightbox({
  itemSelector        : 'a',
  navigateByKeyboard  : true
});



$('.review').slick({
  dots: true,
  adaptiveHeight: true,
  arrows: false,
  autoplay: true,
  autoplaySpeed: 5000,
  infinite: true,
  speed: 800,
  slidesToShow: 1,
  slidesToScroll: 1
});



	$("#menu").on("click","a", function (event) {
		//отменяем стандартную обработку нажатия по ссылке
		event.preventDefault();

		//забираем идентификатор бока с атрибута href
		var id  = $(this).attr('href'),

		//узнаем высоту от начала страницы до блока на который ссылается якорь
			top = $(id).offset().top;
		
		//анимируем переход на расстояние - top за 1500 мс
		$('body,html').animate({scrollTop: top}, 800);
	});
});
