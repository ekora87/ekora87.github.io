$(document).ready(function(){       
   var scroll_start = 0;
   var startchange = $('.navbar-default');
   var offset = startchange.offset();
   $(document).scroll(function() { 
      scroll_start = $(this).scrollTop();
      if(scroll_start > offset.top) {
          $('.navbar-default').css('background-color', 'rgba(34,34,34,0.9)');
       } else {
          $('.navbar-default').css('background-color', 'transparent');
       }
   });
});