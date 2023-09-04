jQuery(document).ready(function(){ 
	jQuery('#post_featured_slider').flexslider({
	      animation: "slide",
	      animationLoop: true,
	      itemMargin: 0,
	      minItems: 1,
	      maxItems: 1,
	      controlNav: true,
	      smoothHeight: false,
	      slideshow: 0,
	      animationSpeed: 400,
		  slideshow: 1,
		  slideshowSpeed: 5000,
	      move: 1
	});
});

jQuery(document).ready(function() {
    fixFlexsliderHeightpost_featured_slider();
});

jQuery(window).load(function() {
    fixFlexsliderHeightpost_featured_slider();
});

jQuery(window).resize(function() {
    fixFlexsliderHeightpost_featured_slider();
});

function fixFlexsliderHeightpost_featured_slider() {
    jQuery('#post_featured_slider').each(function(){
        var sliderHeight = 0;
        jQuery(this).find('.slides > li').each(function(){
            slideHeight = jQuery(this).height();
            if (sliderHeight < slideHeight) {
                sliderHeight = slideHeight;
            }
        });
        jQuery(this).find('.flex-viewport').css({'height' : sliderHeight});
    });
}