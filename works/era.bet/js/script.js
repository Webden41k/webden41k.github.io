$(document).ready(function () {
  let banners = {
    'dark': {
      'ru': [
        {
          'img': './img/banners/dark-1.png',
          'link': './actions.html'
                },
        {
          'img': './img/banners/dark-2.png',
          'link': '../actions.html'
                },
        {
          'img': './img/banners/dark-3.png',
          'link': '../actions.html'
                },
        {
          'img': './img/banners/dark-4.png',
          'link': './actions.html'
                },
            ],
      'eng': [
        {
          'img': './img/banners/dark-1.png',
          'link': './actions.html'
                },
        {
          'img': './img/banners/dark-2.png',
          'link': './actions.html'
                },
        {
          'img': './img/banners/dark-3.png',
          'link': './actions.html'
                },
        {
          'img': './img/banners/dark-4.png',
          'link': './actions.html'
                },
            ],
      'ua': [
        {
          'img': './img/banners/dark-1.png',
          'link': './actions.html'
                },
        {
          'img': './img/banners/dark-2.png',
          'link': './actions.html'
                },
        {
          'img': './img/banners/dark-3.png',
          'link': './actions.html'
                },
        {
          'img': './img/banners/dark-4.png',
          'link': './actions.html'
                },
            ],
    },
    'light': {
      'ru': [
        {
          'img': './img/banners/light-1.png',
          'link': './actions.html'
                },
        {
          'img': './img/banners/light-2.png',
          'link': './actions.html'
                },
        {
          'img': './img/banners/light-3.png',
          'link': './actions.html'
                },
        {
          'img': './img/banners/light-4.png',
          'link': './actions.html'
                },
            ],
      'eng': [
        {
          'img': './img/banners/light-1.png',
          'link': './actions.html'
                },
        {
          'img': './img/banners/light-2.png',
          'link': './actions.html'
                },
        {
          'img': './img/banners/light-3.png',
          'link': './actions.html'
                },
        {
          'img': './img/banners/light-4.png',
          'link': './actions.html'
                },
            ],
      'ua': [
        {
          'img': './img/banners/light-1.png',
          'link': './actions.html'
                },
        {
          'img': './img/banners/light-2.png',
          'link': './actions.html'
                },
        {
          'img': './img/banners/light-3.png',
          'link': './actions.html'
                },
        {
          'img': './img/banners/light-4.png',
          'link': './actions.html'
                },
            ],
    },
    'cyber': {
      'ru': [
        {
          'img': './img/banners/cyber-1.png',
          'link': './actions.html'
                },
        {
          'img': './img/banners/cyber-2.png',
          'link': './actions.html'
                },
        {
          'img': './img/banners/cyber-3.png',
          'link': './actions.html'
                },
        {
          'img': './img/banners/cyber-4.png',
          'link': './actions.html'
                },
            ],
      'eng': [
        {
          'img': './img/banners/cyber-1.png',
          'link': './actions.html'
                },
        {
          'img': './img/banners/cyber-2.png',
          'link': './actions.html'
                },
        {
          'img': './img/banners/cyber-3.png',
          'link': './actions.html'
                },
        {
          'img': './img/banners/cyber-4.png',
          'link': './actions.html'
                },
            ],
      'ua': [
        {
          'img': './img/banners/cyber-1.png',
          'link': './actions.html'
                },
        {
          'img': './img/banners/cyber-2.png',
          'link': './actions.html'
                },
        {
          'img': './img/banners/cyber-3.png',
          'link': './actions.html'
                },
        {
          'img': './img/banners/cyber-4.png',
          'link': './actions.html'
                },
            ],
    },
  }

  if ($.cookie('lang') == null) {
    $.cookie('lang', 'ru');
    $(".list-lang .ru").addClass("active");
  }

  if ($.cookie('theme') == null) {
    $.cookie('theme', 'dark');
    $("body").addClass("dark");
    $(".list-themes .dark").addClass("active");
    $("header .theme").addClass("dark");
  }

  function renderBanners(theme, language) {

    if (theme == "dark") {
      $("body").addClass("dark");
      $(".list-themes .dark").addClass("active");
      $("header .theme").addClass("dark");
    }

    if (theme == "light") {
      $("body").addClass("light");
      $(".list-themes .light").addClass("active");
      $("header .theme").addClass("light");
    }

    if (theme == "cyber") {
      $("body").addClass("cyber");
      $(".list-themes .cyber").addClass("active");
      $("header .theme").addClass("cyber");
    }


    if (language == "ru") {
      $(".list-lang .ru").addClass("active");
    }

    if (language == "ua") {
      $(".list-lang .ua").addClass("active");
    }

    if (language == "eng") {
      $(".list-lang .eng").addClass("active");
    }




    $('.banners-wrapper').html('');
    $('.banners-wrapper').append('<ul class="banners-slider">' + '</ul>')

    for (let i = 0; i < banners[theme][language].length; i++) {
      $('.banners-wrapper .banners-slider').append(
        '<li>' +
        '<a href="' + banners[theme][language][i]['link'] + '"><img src="' + banners[theme][language][i]['img'] + '" alt=""></a>' +
        '</li>');
    }


    $('.banners-wrapper .banners-slider').slick({
      arrows: false,
      dots: true,
      customPaging: function (slick, index) {
        return '<a class="pag">' + (index + 1) + '</a>';
      },
      infinite: true,
      slidesToShow: 1,
      slidesToScroll: 1,
      vertical: true,
      verticalSwiping: true
    });


  }

  renderBanners($.cookie('theme'), $.cookie('lang'));


  $(".list-themes .item").click(function (e) {
    $(".list-themes .item").removeClass("active");
    $("body").removeClass("dark light cyber");
    $("header .theme").removeClass("dark light cyber");

    if ($(this).hasClass('dark')) {
      $.cookie('theme', 'dark');
    };

    if ($(this).hasClass('light')) {
      $.cookie('theme', 'light');

    };

    if ($(this).hasClass('cyber')) {
      $.cookie('theme', 'cyber');
    };

    renderBanners($.cookie('theme'), $.cookie('lang'));
  });


  $(".list-lang .item").click(function (e) {
    $(".list-lang .item").removeClass("active");


    if ($(this).hasClass('ua')) {
      $.cookie('lang', 'ua');
    };

    if ($(this).hasClass('ru')) {
      $.cookie('lang', 'ru');
    };

    if ($(this).hasClass('eng')) {
      $.cookie('lang', 'eng');
    };

    renderBanners($.cookie('theme'), $.cookie('lang'));

  });

});

if ($(window).width() < 1291) {
  $(".account .sp-name").prependTo(".account .user .user-info");
  $(".account .progress-wrap").prepend('<div class="close"></div>');
  $(".account .place-bet").prepend('<div class="close"></div>');
  $(".sidebar-main .inner-pages").prependTo('.shop .shop-filter');
  $(".sidebar-main .inner-pages").prependTo('.actions-page');
  $(".sidebar-main .inner-pages").prependTo('.profile-filter');
  $(".sidebar-main .inner-pages").prependTo('.profile-shop');
  $(".sidebar-main .inner-pages").prependTo('.profile-progress');
  $(".inner-pages").wrap('<div class="inner-wrapper">');
  $('.statistics').before('<div class="br"></div>');

} else {};


if ($(window).width() < 1024) {
  $(".stat-right").prependTo('.statistics');
} else {};

if ($(window).width() < 720) {
  $(".account .user .cash").prependTo(".progress-wrap");
  $(".match-main .filter-match").wrap('<div class="filter-wrapper">');
  $(".account .user .btns-profile .btn-p").appendTo("header .nav-m");
  $(".login .form-login").prepend('<div class="close"></div>');
  $(".fantasy .prize .prize-title").appendTo('.fantasy .tour');
  $(".fantasy .prize").appendTo('.fantasy .f-items .item');
  $(".fantasy-match .selected-pl .budget").prependTo('.fantasy-match .search-players');
  $(".fantasy-match .search-players").prepend('<div class="close"></div>');


  $(".profile-bets .bet").each(function () {
    $(this).find('.status').appendTo($(".l-info", this));
  });

  $(".login .head-btns .reg").click(function () {
    $("body").toggleClass("bg");
    $(".login .form-login").slideToggle(200);
  });

  $(".form-login .close").click(function () {
    $(".login .form-login").slideToggle(0);
    $("body").toggleClass("bg");
  });

  $(".tour .prize-title").click(function () {
    $(this).closest('.item').toggleClass("show");
  });

  $(".fantasy-match .top-nav .open-select").click(function () {
    $(".fantasy-match .search-players").slideToggle(250);
    $(this).toggleClass("active");
    $("body").toggleClass("bg");
  });

  $(".search-players .close").click(function () {
    $(".fantasy-match .top-nav .open-select").removeClass("active");
    $(".fantasy-match .search-players").slideToggle(250);
    $("body").toggleClass("bg");
  });

  $(".modal-stat1 .btn-games").click(function () {
    $(".modal-stat1 .heroes").hide();
    $(".modal-stat1 .pl-games").show();
    $(this).addClass("active");
    $(".modal-stat1 .btn-heroes").removeClass("active");
  });

  $(".modal-stat1 .btn-heroes").click(function () {
    $(".modal-stat1 .pl-games").hide();
    $(".modal-stat1 .heroes").show();
    $(this).addClass("active");
    $(".modal-stat1 .btn-games").removeClass("active");
  });

} else {};



$(".nav-btn-m").click(function () {
  $(this).toggleClass("active");
  $("body").toggleClass("bg");
  $("header .nav-m").slideToggle(250);
});

$(".progress-open").click(function () {
  $("body").addClass("bg");
  $(".nav-btn-m").removeClass("active");
  $("header .nav-m").hide(0);
  $(".account .progress-wrap").toggle(0);
});

$(".account .progress-wrap .close").click(function () {
  $("body").removeClass("bg");
  $(".account .progress-wrap").toggle(0);
});


$(".cart-open").click(function () {
  $("body").addClass("bg");
  $("html, body").animate({
    scrollTop: 0
  }, 0);
  $(".nav-btn-m").removeClass("active");
  $("header .nav-m").hide(0);
  $(".account .place-bet").animate({
    width: 'toggle'
  }, 150);
});

$(".account .place-bet .close").click(function () {
  $("body").removeClass("bg");
  $(".account .place-bet").animate({
    width: 'toggle'
  }, 150);
});



$(".match").click(function (e) {
  if ($(e.target).closest('.arrow-up').length) {
    $(this).toggleClass("open");
  } else {
    $(this).siblings(".match").removeClass("open");
    $(this).addClass("open");
  }
});


$(".long-term .head-item").click(function (e) {
  $(".long-term .item").removeClass("open");
  $(this).parent(".item").toggleClass("open");
});



$(".sw-val .span").click(function () {
  $(".sw-val .span").removeClass("active");
  $(this).addClass("active");
});

$(".tournaments .more-btn").click(function () {
  $(".tournaments").toggleClass("open");
});

$(".tournaments .list .li").click(function () {
  $(".tournaments .list .li").removeClass("active");
  $(this).addClass("active");
});

$(".statistics .list-tour .item").click(function () {
  $(".statistics .list-tour .item").removeClass("active");
  $(this).addClass("active");
});

$(".statistics .list-players .item").click(function () {
  $(".statistics .list-players .item").removeClass("active");
  $(this).addClass("active");
});


$(".semi-bar").each(function () {

  var $bar = $(this).find(".bar");
  var $val = $(this).find(".num");
  var $max = $(this).find(".max");
  var perc = (parseInt($val.text(), 10) / parseInt($max.text(), 10)) * 100;

  $({
    p: 0
  }).animate({
    p: perc
  }, {
    duration: 0,
    easing: "swing",
    step: function (p) {
      $bar.css({
        transform: "rotate(" + (-180 + (p * 1.8)) + "deg)"
      });
    }
  });
});


$(".search-players .item .add-player").click(function () {
  $(this).parent(".item").toggleClass("active");
});


var $status = $('.list-players .slide-count');
var $slickElement = $('.list-players .slide-players');

$slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
  var i = (currentSlide ? currentSlide : 0) + 1;
  $status.text(i + '/' + slick.slideCount);
});

$slickElement.slick({
  autoplay: false,
  dots: false,
  arrows: false,
  responsive: [
    {
      breakpoint: 720,
      settings: "unslick"
    }
  ]
});

$('.list-players .prev-sl').click(function () {
  $slickElement.slick('slickPrev');
});

$('.list-players .next-sl').click(function () {
  $slickElement.slick('slickNext');
});



$.datepicker.regional['ru'] = {
  closeText: 'Закрыть',
  prevText: 'Предыдущий',
  nextText: 'Следующий',
  currentText: 'Сегодня',
  monthNames: ['Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь', 'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'],
  monthNamesShort: ['Янв', 'Фев', 'Мар', 'Апр', 'Май', 'Июн', 'Июл', 'Авг', 'Сен', 'Окт', 'Ноя', 'Дек'],
  dayNames: ['воскресенье', 'понедельник', 'вторник', 'среда', 'четверг', 'пятница', 'суббота'],
  dayNamesShort: ['вск', 'пнд', 'втр', 'срд', 'чтв', 'птн', 'сбт'],
  dayNamesMin: ['Вс', 'Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб'],
  weekHeader: 'Не',
  dateFormat: 'dd.mm.yy',
  firstDay: 1,
  isRTL: false,
  showMonthAfterYear: false,
  yearSuffix: ''
};

$.datepicker.setDefaults($.datepicker.regional['ru']);