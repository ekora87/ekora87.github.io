$(function() {
    var oTop = $('#counter').offset().top - window.innerHeight;
    $(window).scroll(function(){

        var pTop = $('body').scrollTop();
        console.log( pTop + ' - ' + oTop );   //just for your debugging
        if( pTop > oTop ){
            start_count();
        }
    });
});

function start_count(){
       $({countNum: $('#counter').text()}).animate({countNum: 461  }, {
          duration: 3000,
          easing:'linear',
          step: function() {
            $('#counter').text(Math.floor(this.countNum));
          },
          complete: function() {
            $('#counter').text(this.countNum);

          }
        });
    
    $({countNum: $('#counter2').text()}).animate({countNum: 16  }, {
          duration: 3000,
          easing:'linear',
          step: function() {
            $('#counter2').text(Math.floor(this.countNum));
          },
          complete: function() {
            $('#counter2').text(this.countNum);

          }
        });
}

/*Script for Google Map*/
$('.maps').click(function () {
    $('.maps iframe').css("pointer-events", "auto");
});

$( ".maps" ).mouseleave(function() {
  $('.maps iframe').css("pointer-events", "none"); 
});
         