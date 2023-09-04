jQuery(window).load(function(){ 
jQuery("#portfolio_filter_wrapper").imagesLoaded( function(){
    jQuery("#portfolio_filter_wrapper").children(".element").children(".portfolio_type").each(function(){
        jQuery(this).addClass("slideUp");
    });
});

});