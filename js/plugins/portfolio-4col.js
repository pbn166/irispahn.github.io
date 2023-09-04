
jQuery(window).load(function(){ 

jQuery("#portfolio_filter_wrapper").masonry({
  itemSelector: ".element",
  columnWidth: ".element",
  gutter: 30,
  transitionDuration: 0
});
jQuery("#portfolio_filter_wrapper").imagesLoaded( function(){
    jQuery("#portfolio_filter_wrapper").children(".element").each(function(){
        jQuery(this).addClass("slideUp");
    });
});

jQuery('#infinite_load_more').click(function(){
	jQuery(this).hide();
    jQuery('#infinite_loading').addClass('visible');
    
    var startItem = parseInt(jQuery(this).attr('data-start'));
    var loadItems = parseInt(jQuery(this).attr('data-items'));
    
    jQuery.ajax({
	    url:"#",
	    type:'POST',
	    data:'action=grandphotography_script_grid_gallery_pagination_load&gallery_id=6311&start='+startItem+'&items='+loadItems+'&columns=3&type=masonry&photoframe=1&justified=0',
	    success:function(results) {
	    	if(results != '')
	    	{
				var html = jQuery(results);
				jQuery("#portfolio_filter_wrapper").append(html).masonry( 'appended', html ).masonry();
				
				jQuery("#portfolio_filter_wrapper").imagesLoaded( function(){
					jQuery("#portfolio_filter_wrapper").masonry( 'reloadItems' );
					jQuery("#portfolio_filter_wrapper").masonry( 'layout' );
				});
				
				jQuery('#infinite_load_more').attr('data-start', parseInt(startItem+loadItems));

	    		jQuery(document).setiLightbox();
	    		jQuery('#infinite_loading').removeClass('visible');
	    		
	    		var newStartItems = parseInt(startItem + loadItems);
	    		if(newStartItems >= 0)
	    		{
	    			jQuery('#infinite_load_more').remove();
	    		}
	    		else
	    		{
	    			jQuery('#infinite_load_more').attr('data-start', newStartItems);
	    			jQuery('#infinite_load_more').show();
	    			
	    								if(jQuery('#infinite_load_more').length > 0)
					{
						Waypoint.destroyAll();
						var waypoint = new Waypoint({
						  element: document.getElementById('infinite_load_more'),
						  handler: function(direction) {
						    jQuery('#infinite_load_more').trigger('click');
						  },
						  offset: '100%'
						});
					}
						    		}
	    	}
	    	else
	    	{
	    		
	    	}
	    }
	})
});
if(jQuery('#infinite_load_more').length > 0)
{
	var waypoint = new Waypoint({
	  element: document.getElementById('infinite_load_more'),
	  handler: function(direction) {
	    jQuery('#infinite_load_more').trigger('click');
	  },
	  offset: '120%'
	});
}

});


jQuery(window).load(function(){ 
jQuery("#portfolio_mixed_filter_wrapper").masonry({
  itemSelector: ".element",
  gutter: 0,
  columnWidth: Math.floor(jQuery("#portfolio_mixed_filter_wrapper").width()/ 3)
});

jQuery("#portfolio_mixed_filter_wrapper").imagesLoaded( function(){
    jQuery("#portfolio_mixed_filter_wrapper").children(".element").children(".gallery_type").each(function(){
        jQuery(this).addClass("slideUp");
    });
});

jQuery(window).resize(function () {
	jQuery("#portfolio_mixed_filter_wrapper").masonry({
	  itemSelector: ".element",
	  gutter: 0,
	  columnWidth: Math.floor(jQuery("#portfolio_mixed_filter_wrapper").width()/ 3)
	});
});

jQuery('#infinite_load_more').click(function(){
	jQuery(this).hide();
    jQuery('#infinite_loading').addClass('visible');
    
    var startItem = parseInt(jQuery(this).attr('data-start'));
    var loadItems = parseInt(jQuery(this).attr('data-items'));
    
    jQuery.ajax({
	    url:"#",
	    type:'POST',
		data:'action=grandphotography_script_metro_gallery_pagination_load&gallery_id=5567&start='+startItem+'&items='+loadItems+'&columns=3&type=metro&largecounter='+jQuery(this).attr('data-largecounter')+'&nextnumbertoadd='+jQuery(this).attr('data-nextnumbertoadd')+'&nexttrigger='+jQuery(this).attr('data-nexttrigger'),
	    success:function(results) {
	    	if(results != '')
	    	{
				var html = jQuery(results);
				jQuery("#portfolio_mixed_filter_wrapper").append(html).masonry( 'appended', html ).masonry();
				
				jQuery("#portfolio_mixed_filter_wrapper").imagesLoaded( function(){
					jQuery("#portfolio_mixed_filter_wrapper").masonry( 'reloadItems' );
					jQuery("#portfolio_mixed_filter_wrapper").masonry( 'layout' );
				});
				
				jQuery('#infinite_load_more').attr('data-start', parseInt(startItem+loadItems));

	    		jQuery(document).setiLightbox();
	    		jQuery('#infinite_loading').removeClass('visible');
	    		
	    		var newStartItems = parseInt(startItem + loadItems);
	    		if(newStartItems >= 0)
	    		{
	    			jQuery('#infinite_load_more').remove();
	    		}
	    		else
	    		{
	    			jQuery('#infinite_load_more').attr('data-start', newStartItems);
	    			jQuery('#infinite_load_more').show();
	    			
	    								if(jQuery('#infinite_load_more').length > 0)
					{
						Waypoint.destroyAll();
						var waypoint = new Waypoint({
						  element: document.getElementById('infinite_load_more'),
						  handler: function(direction) {
						    jQuery('#infinite_load_more').trigger('click');
						  },
						  offset: '100%'
						});
					}
						    		}
	    	}
	    	else
	    	{
	    		
	    	}
	    }
	})
});
if(jQuery('#infinite_load_more').length > 0)
{
	var waypoint = new Waypoint({
	  element: document.getElementById('infinite_load_more'),
	  handler: function(direction) {
	    jQuery('#infinite_load_more').trigger('click');
	  },
	  offset: '120%'
	});
}

});
