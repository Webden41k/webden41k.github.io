

if ($(window).width() <= 991) {
  $(".players-list .player-item").removeClass("active");
  $(".teams-list .team-item").removeClass("active");
  $(".tour-list .tour-item").removeClass("active");
}     



$( ".header-search .search-btn" ).click(function() {
  $(".header-search").toggleClass("active");
});


$(".nav-show-btn").click(function() {
  $("header .nav").toggleClass("active");
  $(this).toggleClass("change");
})

$(".list-match.live .match").click(function() {
  $(".list-match.live .match").removeClass("active");
  $(this).addClass("active");
});

$(".teams-list .team").click(function() {
  $(".teams-list .team-item").removeClass("active");
  $(this).parent(".team-item").addClass("active");
});

$(".players-list .player").click(function() {
  $(".players-list .player-item").removeClass("active");
  $(this).parent(".player-item").addClass("active");
});

$(".tour-list .tour").click(function() {
  $(".tour-list .tour-item").removeClass("active");
  $(this).parent(".tour-item").addClass("active");
});

$(".list-match .match.drop").click(function() {
  $(this).toggleClass("open");
});


$(document).mouseup(function (e){ // событие клика по веб-документу
  var div = $(".list-match .match.open"); // тут указываем ID элемента
  if (!div.is(e.target) // если клик был не по нашему блоку
      && div.has(e.target).length === 0) { // и не по его дочерним элементам
    div.removeClass("open");
  }
});


