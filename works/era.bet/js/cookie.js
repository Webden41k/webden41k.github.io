$(document).ready(function(){
    if ($.cookie('dark') == "yes") {
      $("body").addClass("dark");
      $(".list-themes .dark").addClass("active");
    };
  
    if ($.cookie('light') == "yes") {
      $("body").addClass("light");
      $(".list-themes .light").addClass("active");
    };
  
    if ($.cookie('cyber') == "yes") {
      $("body").addClass("cyber");
      $(".list-themes .cyber").addClass("active");
    };
  
  

    
    $(".list-themes .item").click( function(e){
      $(".list-themes .item").removeClass("active");
      $("body").removeClass("dark light cyber");
      $("header .theme").removeClass("dark light cyber");
      $.cookie('dark', 'no');
      $.cookie('light', 'no');
      $.cookie('cyber', 'no');
      
      if($(this).hasClass('dark')){
        $.cookie('dark', 'yes');
        $("body").addClass("dark");
        $("header .theme").addClass("dark");
        $(this).addClass("active");
      };
      if($(this).hasClass('light')){
        $.cookie('light', 'yes');
        $("body").addClass("light");
        $("header .theme").addClass("light");
        $(this).addClass("active");
      };
      if($(this).hasClass('cyber')){
        $.cookie('cyber', 'yes');
        $("body").addClass("cyber");
        $("header .theme").addClass("cyber");
        $(this).addClass("active");
      };
      
    }); 
});
