//https://www.youtube.com/watch?v=utonytGKodc
/*$(function(){
	var navOffset = jQuery(".right-tr").offset().top;
	
	jQuery(window).scroll(function() {
		var scrollPos = jQuery(window).scrollTop();
		
		if (scrollPos >= navOffset){
			jQuery(".right-tr").addClass("fixedOffset");
		}else{
			jQuery(".right-tr").removeClass("fixedOffset");
		}
	});
});*/




//carousel
 $(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});