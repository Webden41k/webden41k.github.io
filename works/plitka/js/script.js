$(function () {
  
var top_show = 150; // В каком положении полосы прокрутки начинать показ кнопки "Наверх"
  var delay = 500; // Задержка прокрутки
  $(document).ready(function() {
    $(window).scroll(function () { // При прокрутке попадаем в эту функцию
      /* В зависимости от положения полосы прокрукти и значения top_show, скрываем или открываем кнопку "Наверх" */
      if ($(this).scrollTop() > top_show) $('.toTopBtn').fadeIn();
      else $('.toTopBtn').fadeOut();
    });
    $('.toTopBtn').click(function () { // При клике по кнопке "Наверх" попадаем в эту функцию
      /* Плавная прокрутка наверх */
      $('body, html').animate({
        scrollTop: 0
      }, delay);
    });
  });

$(".dropMenuBtn").click(function(){
  $(".dropMenu").toggleClass("open");
});
  
$(".mobDropBtn").click(function(){
  $(".mobDropList").toggleClass("show");
  $(this).toggleClass("open");
});  
  
$(".mobBtnOpen").click(function(){
  $(".mobileMenu").toggleClass("show");
});

  
 $('.mainSingleSlider').slick({
 	slidesToShow: 1,
 	slidesToScroll: 1,
 	arrows: false,
 	fade: true,
 	adaptiveHeight: true,
 	infinite: false,
    speed: 0,
	useTransform: true,
    autoplay: true,
    autoplaySpeed: 300000,
   
   responsive: [{
 			breakpoint: 960,
 			settings: {
 			  arrows: true,
              dots: true,
              infinite: true
 			}
 		
 		}]
 });
  

  
 

 $('.mainSingleNav').on('init', function(event, slick) {
 		$('.mainSingleNav .slick-slide.slick-current').addClass('is-active');
 	}).slick({
 		slidesToShow: 5,
 		slidesToScroll: 5,
 		dots: false,
        speed: 100,
 		focusOnSelect: false,
 		infinite: false,
 	});

 $('.mainSingleSlider').on('afterChange', function(event, slick, currentSlide) {
 	$('.mainSingleNav').slick('slickGoTo', currentSlide);
 	var currrentNavSlideElem = '.mainSingleNav .slick-slide[data-slick-index="' + currentSlide + '"]';
 	$('.mainSingleNav .slick-slide.is-active').removeClass('is-active');
 	$(currrentNavSlideElem).addClass('is-active');
 });

 $('.mainSingleNav').on('click', '.slick-slide', function(event) {
 	event.preventDefault();
 	var goToSingleSlide = $(this).data('slick-index');

 	$('.mainSingleSlider').slick('slickGoTo', goToSingleSlide);
 });
  
  
  $('.collectionSlider').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 3,
    dots: true,
    arrows: true,
    responsive: [{
 			breakpoint: 640,
 			settings: {
 			  slidesToShow: 1,
              slidesToScroll: 1
 			}
 		
 		}]
  });

  
$('.collectionSlider img').each(function(){
        var $this = $(this);
        if ($this.width() > $this.height()) {             
        $this.addClass('landscape');
        } 
        else{        
          $this.addClass('portrait');
        }   
      });      
 

  
  
$( ".datePicker" ).datepicker();
  
$(".phoneMask").mask("(999) 999 99 99");
 

  
  $('.catalog select').styler();
  $('.number-plus-minus input').styler();
  
  

  
$('.btnHideSecond').click(function(){
  $('.secondRow').toggle();
});
  
$('.filterShow').click(function(){
  $('.firstRow').toggleClass('show');
  $('.secondRow').toggleClass('show');
});
  

$( "#sliderPrice" ).slider({
 range: true,
 min: 0,
 max: 500,
 values: [ 75, 300 ],
 slide: function( event, ui ) {
 //Поле минимального значения
 $( "#price" ).val(ui.values[ 0 ]);
 //Поле максимального значения
 $("#price2").val(ui.values[1]); }
});
  
  //Записываем значения ползунков в момент загрузки страницы
  //То есть значения по умолчанию
  $( "#price" ).val($( "#sliderPrice" ).slider( "values", 0 ));
  $("#price2").val($("#sliderPrice").slider( "values", 1 ));

  
$('.priceBtn').click(function(){
  $('.rangePrice').toggle();
});
  
$('.colorsOpen').click(function(){
  $('.colorsList').toggle();
});
  
  
$('.jq-number__field input').change(function(){
  var val = $( this ).val();
  var cont = $(this).parents().eq(4);
  var oneP = cont.find( "#priceOne").html();
  oneP = parseFloat(oneP,10) * $(this).val();
  
  cont.find("#priceAll").html(oneP.toFixed(2));
  
}); 
  
  $(".number-plus-minus .jq-number__field input").keyup(function() {
    if (this.value.length > 2)
        this.value = this.value.substr(0, 2);
});
  
$('.deleteItem').click(function(){
  $(this).parents().eq(1).remove();
  
});
  
  



  
  
//Превью товара для каталога
$('.previewItem').slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false
});
  


  
  
  
//ТАБЫ 
(function($){				
    jQuery.fn.lightTabs = function(options){
        
        var createTabs = function(){
            tabs = this;
            i = 0;
            
            showPage = function(i){
                $(tabs).children("div").children("div").hide();
                $(tabs).children("div").children("div").eq(i).show();
                $(tabs).children("ul").children("li").removeClass("active");
                $(tabs).children("ul").children("li").eq(i).addClass("active");
            }
            
            showPage(0);				
            
            $(tabs).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;                        
            });
            
            $(tabs).children("ul").children("li").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });				
        };		
        return this.each(createTabs);
    };	
})(jQuery);

$(".tabs").lightTabs();

  
  
});