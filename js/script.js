/* Smooth Scroll */
$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

/* End Smooth Scroll */

/* Fixed Nav on Scroll */
$(window).scroll( function( e ){ 
    if( $(this).scrollTop() > $('.header-container').offset().top ){
        $(".nav-container").addClass("nav-fixed");
    } else {
        $(".nav-container").removeClass("nav-fixed");
    }
});