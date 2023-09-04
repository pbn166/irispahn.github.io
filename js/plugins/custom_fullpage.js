jQuery(document).ready(function() {
    jQuery('#fullpage').fullpage({
	    navigation: false,
	    touchSensitivity: 10,
	    scrollingSpeed : 500,
	    scrollBar : true,
	    loopBottom: true,
	    continuousVertical: true,
	    
	    afterLoad: function(){
		    jQuery('#fullpage').addClass('visible');
	    }
    });
});