$(function(){


// my title JS //
// my title JS //
// my title JS //


$(function(){

    $('.title_item').filter(function(){
        $(this).css('transition-delay' , $(this).data('delay'));
    });
    $(window).ready(function(){
        $(".title_item").css('bottom', '0' , 2000)
    })
});

// menu scroll JS //
// menu scroll JS //
// menu scroll JS //

$(window).scroll(function(){
if($(window).scrollTop() > 0){ 
$(".nav").addClass('scroll_nav');
}
else{
$(".nav").removeClass('scroll_nav');
}
})

// menu toggler JS //
// menu toggler JS //


    $(".menu-button").click(function(){
    $(".sidenav").css("width" , "250");
  })

    $(".closebtn").click(function(){
    $(".sidenav").css("width" , "0");
  })
// go to top //
//go to top //
// go to top//
$(window).scroll(function(){
if($(window).scrollTop() > 400){
  $(".elevator").css("display" , "flex");
}else{
  $(".elevator").css("display" , "none");
}
})

$('.elevator').click(function(){
  $('body , html').animate({scrollTop : 0} , 500)
});


//smooth scroll //

$(".navigation-link").click(function(){

  var y = $(".nav").height();
  boxId = this.hash;
  var x = $(boxId).offset().top - y;
  $("body , html").animate({scrollTop : x } , "slow");
});

$(".right-menu-link").click(function(){

  var y = $(".logo_nav_holder").height();
  boxId = this.hash;
  var x = $(boxId).offset().top - y;
  $("body , html").animate({scrollTop : x } , "slow");
  $(".sidenav").css("width" , "0");

});

});