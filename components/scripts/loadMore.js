$(document).ready(function(){

  var $fadeIn = $('.fadeIn'),
      showAll = $('.showAll');

      showAll.click(function(){
        if($(window).width() <= 768) {
          $fadeIn.slideToggle("slow");
        }
        return false;
      });

});
