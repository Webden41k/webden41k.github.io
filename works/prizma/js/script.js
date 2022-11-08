$(document).ready(function(){ 
  $("form").validate();
  
  
  $("nav a").click(function () {
     $("nav a").removeClass("active");
     $(this).addClass("active");
     $("section").removeClass("visible");
     var activeTab = $(this).attr("href");
     $(activeTab).addClass("visible");
     return false;
   });

   $(".work-tabs li").click(function () {
     $(".work-tabs li").removeClass("active");
     $(this).addClass("active");
     return false;
   });


	$(function() {
		var selectedClass = "";
		$(".work-tabs li").click(function(){
			selectedClass = $(this).attr("data-rel");
			$(".work-list li").fadeOut(0);
			$(".work-list li." + selectedClass).fadeIn(400);
		});
	});
  
});