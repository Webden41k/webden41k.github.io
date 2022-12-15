$(document).ready(function () {
// responsive hide
  if ($(window).width() < 990) {
    $('.social').appendTo('#home .right');
  } else {};

// click nav button
  $('.nav-btn').click(function () {
    $(this).toggleClass('open');
    $("header nav").toggleClass('open');
  });

// validator form initialization
  $("form").validate();

// click nav items
  $("nav a").click(function () {
    $("nav a").removeClass("active");
    $(this).addClass("active");
    $("section").removeClass("visible");
    var activeTab = $(this).attr("href");
    $(activeTab).addClass("visible");
    return false;
  });

// click default button
  $(".btn-default").click(function () {
    $("nav a").removeClass("active");
    $("section").removeClass("visible");
    var activeTab = $(this).attr("href");
    $('nav a[href="' + activeTab + '"]').addClass("active");;
    $(activeTab).addClass("visible");
    return false;
  });

// click work filter tabs
  $(".work-tabs li").click(function () {
    $(".work-tabs li").removeClass("active");
    $(this).addClass("active");
    return false;
  });

// function work filter
  $(function () {
    var selectedClass = "";
    $(".work-tabs li").click(function () {
      selectedClass = $(this).attr("data-rel");
      $(".work-list li").fadeOut(0);
      $(".work-list li." + selectedClass).fadeIn(400);
    });
  });

// open post modal window
  $(".post-list li").click(function () {
    var selectedPost = $(this).attr("data-rel");
    $(".modal." + selectedPost).addClass("open");
    $(".close-modal").addClass("open");
    $(".wrapper").addClass("bg");
    return false;
  });

// open work modal window
  $(".work-list li").click(function () {
    var selectedPost = $(this).attr("data-rel");
    $(".modal." + selectedPost).addClass("open");
    $(".close-modal").addClass("open");
    $(".wrapper").addClass("bg");
    return false;
  });

// close modal
  $(".close-modal").click(function () {
    $(this).removeClass("open");
    $(".modal").removeClass("open");
    $(".wrapper").removeClass("bg");
    return false;
  });
});


// click outside element

$(document).mouseup(function (e) {
  var div = $("header .open");
  var div2 = $(".modal.open");

  if (!div.is(e.target) &&
    div.has(e.target).length === 0) {
    div.removeClass("open");
    $(".nav-btn").removeClass("open");

  }
  if (!div2.is(e.target) &&
    div2.has(e.target).length === 0) {
    div2.removeClass("open");
    $(".close-modal").removeClass("open");
    $(".wrapper").removeClass("bg");
  }


});