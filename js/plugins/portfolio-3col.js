jQuery(window).load(function(){ 
jQuery("#1602504501539903905").imagesLoaded( function(){
    jQuery("#1602504501539903905").children(".element").children(".gallery_type").each(function(){
	    jQuery(this).addClass("slideUp");
    });
});

jQuery('#infinite_load_more_1602504501539903905').click(function(){
	jQuery(this).hide();
    jQuery('#infinite_loading_1602504501539903905').addClass('visible');
    
    var startItem = parseInt(jQuery(this).attr('data-start'));
    var loadItems = parseInt(jQuery(this).attr('data-items'));
    
    jQuery.ajax({
	    url:"#",
	    type:'POST',
	    data:'action=grandphotography_script_grid_gallery_pagination_load&gallery_id=1602504501539903905&start='+startItem+'&items='+loadItems+'&columns=3&type=grid&photoframe=0&justified=0',
	    success:function(results) {
	    	if(results != '')
	    	{
				jQuery('#1602504501539903905').append(results);
	    		jQuery(document).setiLightbox();
	    		jQuery('#infinite_loading_1602504501539903905').removeClass('visible');
	    		
	    		var newStartItems = parseInt(startItem + loadItems);
	    		if(newStartItems >= 0)
	    		{
	    			jQuery('#infinite_load_more_1602504501539903905').remove();
	    		}
	    		else
	    		{
	    			jQuery('#infinite_load_more_1602504501539903905').attr('data-start', newStartItems);
	    			jQuery('#infinite_load_more_1602504501539903905').show();
	    			
	    								if(jQuery('#infinite_load_more_1602504501539903905').length > 0)
					{
						Waypoint.destroyAll();
						var waypoint = new Waypoint({
						  element: document.getElementById('infinite_load_more_1602504501539903905'),
						  handler: function(direction) {
						    jQuery('#infinite_load_more_1602504501539903905').trigger('click');
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

if(jQuery('#infinite_load_more_1602504501539903905').length > 0)
{
	var waypoint = new Waypoint({
	  element: document.getElementById('infinite_load_more_1602504501539903905'),
	  handler: function(direction) {
	    jQuery('#infinite_load_more_1602504501539903905').trigger('click');
	  },
	  offset: '120%'
	});
}

});


jQuery(window).load(function(){ 
jQuery("#16025045021308629446").imagesLoaded( function(){
    jQuery("#16025045021308629446").children(".element").children(".gallery_type").each(function(){
	    jQuery(this).addClass("slideUp");
    });
});

jQuery('#infinite_load_more_16025045021308629446').click(function(){
	jQuery(this).hide();
    jQuery('#infinite_loading_16025045021308629446').addClass('visible');
    
    var startItem = parseInt(jQuery(this).attr('data-start'));
    var loadItems = parseInt(jQuery(this).attr('data-items'));
    
    jQuery.ajax({
	    url:"#",
	    type:'POST',
	    data:'action=grandphotography_script_grid_gallery_pagination_load&gallery_id=1329&start='+startItem+'&items='+loadItems+'&columns=3&type=grid&photoframe=0&justified=0',
	    success:function(results) {
	    	if(results != '')
	    	{
				jQuery('#16025045021308629446').append(results);
	    		jQuery(document).setiLightbox();
	    		jQuery('#infinite_loading_16025045021308629446').removeClass('visible');
	    		
	    		var newStartItems = parseInt(startItem + loadItems);
	    		if(newStartItems >= 12)
	    		{
	    			jQuery('#infinite_load_more_16025045021308629446').remove();
	    		}
	    		else
	    		{
	    			jQuery('#infinite_load_more_16025045021308629446').attr('data-start', newStartItems);
	    			jQuery('#infinite_load_more_16025045021308629446').show();
	    			
	    								if(jQuery('#infinite_load_more_16025045021308629446').length > 0)
					{
						Waypoint.destroyAll();
						var waypoint = new Waypoint({
						  element: document.getElementById('infinite_load_more_16025045021308629446'),
						  handler: function(direction) {
						    jQuery('#infinite_load_more_16025045021308629446').trigger('click');
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
if(jQuery('#infinite_load_more_16025045021308629446').length > 0)
{
	var waypoint = new Waypoint({
	  element: document.getElementById('infinite_load_more_16025045021308629446'),
	  handler: function(direction) {
	    jQuery('#infinite_load_more_16025045021308629446').trigger('click');
	  },
	  offset: '120%'
	});
}

});


jQuery(window).load(function(){ 
jQuery("#16025045041663295387").imagesLoaded( function(){
    jQuery("#16025045041663295387").children(".element").children(".gallery_type").each(function(){
	    jQuery(this).addClass("slideUp");
    });
});

jQuery('#infinite_load_more_16025045041663295387').click(function(){
	jQuery(this).hide();
    jQuery('#infinite_loading_16025045041663295387').addClass('visible');
    
    var startItem = parseInt(jQuery(this).attr('data-start'));
    var loadItems = parseInt(jQuery(this).attr('data-items'));
    
    jQuery.ajax({
	    url:"#",
	    type:'POST',
	    data:'action=grandphotography_script_grid_gallery_pagination_load&gallery_id=1309&start='+startItem+'&items='+loadItems+'&columns=3&type=grid&photoframe=0&justified=0',
	    success:function(results) {
	    	if(results != '')
	    	{
				jQuery('#16025045041663295387').append(results);
	    		jQuery(document).setiLightbox();
	    		jQuery('#infinite_loading_16025045041663295387').removeClass('visible');
	    		
	    		var newStartItems = parseInt(startItem + loadItems);
	    		if(newStartItems >= 12)
	    		{
	    			jQuery('#infinite_load_more_16025045041663295387').remove();
	    		}
	    		else
	    		{
	    			jQuery('#infinite_load_more_16025045041663295387').attr('data-start', newStartItems);
	    			jQuery('#infinite_load_more_16025045041663295387').show();
	    			
	    								if(jQuery('#infinite_load_more_16025045041663295387').length > 0)
					{
						Waypoint.destroyAll();
						var waypoint = new Waypoint({
						  element: document.getElementById('infinite_load_more_16025045041663295387'),
						  handler: function(direction) {
						    jQuery('#infinite_load_more_16025045041663295387').trigger('click');
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
if(jQuery('#infinite_load_more_16025045041663295387').length > 0)
{
	var waypoint = new Waypoint({
	  element: document.getElementById('infinite_load_more_16025045041663295387'),
	  handler: function(direction) {
	    jQuery('#infinite_load_more_16025045041663295387').trigger('click');
	  },
	  offset: '120%'
	});
}

});


jQuery(window).load(function(){ 
jQuery("#16025045061567612400").masonry({
  itemSelector: ".element",
  gutter: 0,
  columnWidth: Math.floor(jQuery("#16025045061567612400").width()/ 3)
});

jQuery(window).resize(function () {
	jQuery("#16025045061567612400").masonry({
	  itemSelector: ".element",
	  gutter: 0,
	  columnWidth: Math.floor(jQuery("#16025045061567612400").width()/ 3)
	});
});
jQuery("#16025045061567612400").imagesLoaded( function(){
    jQuery("#16025045061567612400").children(".element").children(".portfolio_type").each(function(){
        jQuery(this).addClass("slideUp");
    });
});

jQuery('#infinite_load_more_16025045061567612400').click(function(){
	jQuery(this).hide();
    jQuery('#infinite_loading_16025045061567612400').addClass('visible');
    
    var startItem = parseInt(jQuery(this).attr('data-start'));
    var loadItems = parseInt(jQuery(this).attr('data-items'));
    
    jQuery.ajax({
	    url:"#",
	    type:'POST',
		data:'action=grandphotography_script_metro_portfolio_pagination_load&start='+startItem+'&items='+loadItems+'&columns=3&type=metro&largecounter='+jQuery(this).attr('data-largecounter')+'&nextnumbertoadd='+jQuery(this).attr('data-nextnumbertoadd')+'&nexttrigger='+jQuery(this).attr('data-nexttrigger'),
	    success:function(results) {
	    	if(results != '')
	    	{
				var html = jQuery(results);
				jQuery("#16025045061567612400").append(html).masonry( 'appended', html ).masonry();
				
				jQuery("#16025045061567612400").imagesLoaded( function(){
					jQuery("#16025045061567612400").masonry( 'reloadItems' );
					jQuery("#16025045061567612400").masonry( 'layout' );
				});
				
				jQuery('#infinite_load_more_16025045061567612400').attr('data-start', parseInt(startItem+loadItems));

	    		jQuery(document).setiLightbox();
	    		jQuery('#infinite_loading_16025045061567612400').removeClass('visible');
	    		
	    		var newStartItems = parseInt(startItem + loadItems);
	    		if(newStartItems >= 12)
	    		{
	    			jQuery('#infinite_load_more_16025045061567612400').remove();
	    		}
	    		else
	    		{
	    			jQuery('#infinite_load_more_16025045061567612400').attr('data-start', newStartItems);
	    			jQuery('#infinite_load_more_16025045061567612400').show();
	    			
	    								if(jQuery('#infinite_load_more_16025045061567612400').length > 0)
					{
						Waypoint.destroyAll();
						var waypoint = new Waypoint({
						  element: document.getElementById('infinite_load_more_16025045061567612400'),
						  handler: function(direction) {
						    jQuery('#infinite_load_more_16025045061567612400').trigger('click');
						  },
						  offset: '100%'
						});
					}
						    		}
	    	}
	    }
	})
});

if(jQuery('#infinite_load_more_16025045061567612400').length > 0)
{
	var waypoint = new Waypoint({
	  element: document.getElementById('infinite_load_more_16025045061567612400'),
	  handler: function(direction) {
	    jQuery('#infinite_load_more_16025045061567612400').trigger('click');
	  },
	  offset: '120%'
	});
}

});


jQuery(window).load(function(){ 

jQuery("#16025045121121891306").masonry({
  itemSelector: ".element",
  columnWidth: ".element",
  gutter: 30,
  transitionDuration: 0
});
jQuery("#16025045121121891306").imagesLoaded( function(){
    jQuery("#16025045121121891306").children(".element").each(function(){
        jQuery(this).addClass("slideUp");
    });
});

jQuery('#infinite_load_more_16025045121121891306').click(function(){
	jQuery(this).hide();
    jQuery('#infinite_loading_16025045121121891306').addClass('visible');
    
    var startItem = parseInt(jQuery(this).attr('data-start'));
    var loadItems = parseInt(jQuery(this).attr('data-items'));
    
    jQuery.ajax({
	    url:"#",
	    type:'POST',
	    data:'action=grandphotography_script_grid_gallery_pagination_load&gallery_id=16025045121121891306&start='+startItem+'&items='+loadItems+'&columns=3&type=masonry&photoframe=1&justified=0',
	    success:function(results) {
	    	if(results != '')
	    	{
				var html = jQuery(results);
				jQuery("#16025045121121891306").append(html).masonry( 'appended', html ).masonry();
				
				jQuery("#16025045121121891306").imagesLoaded( function(){
					jQuery("#16025045121121891306").masonry( 'reloadItems' );
					jQuery("#16025045121121891306").masonry( 'layout' );
				});
				
				jQuery('#infinite_load_more_16025045121121891306').attr('data-start', parseInt(startItem+loadItems));

	    		jQuery(document).setiLightbox();
	    		jQuery('#infinite_loading_16025045121121891306').removeClass('visible');
	    		
	    		var newStartItems = parseInt(startItem + loadItems);
	    		if(newStartItems >= 0)
	    		{
	    			jQuery('#infinite_load_more_16025045121121891306').remove();
	    		}
	    		else
	    		{
	    			jQuery('#infinite_load_more_16025045121121891306').attr('data-start', newStartItems);
	    			jQuery('#infinite_load_more_16025045121121891306').show();
	    			
	    								if(jQuery('#infinite_load_more_16025045121121891306').length > 0)
					{
						Waypoint.destroyAll();
						var waypoint = new Waypoint({
						  element: document.getElementById('infinite_load_more_16025045121121891306'),
						  handler: function(direction) {
						    jQuery('#infinite_load_more_16025045121121891306').trigger('click');
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
if(jQuery('#infinite_load_more_16025045121121891306').length > 0)
{
	var waypoint = new Waypoint({
	  element: document.getElementById('infinite_load_more_16025045121121891306'),
	  handler: function(direction) {
	    jQuery('#infinite_load_more_16025045121121891306').trigger('click');
	  },
	  offset: '120%'
	});
}

});


jQuery(window).load(function(){ 
jQuery("#portfolio_filter_wrapper").imagesLoaded( function(){
    jQuery("#portfolio_filter_wrapper").children(".element").children(".gallery_type").each(function(){
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
	    data:'action=grandphotography_script_grid_gallery_pagination_load&gallery_id=1349&start='+startItem+'&items='+loadItems+'&columns=2&type=grid&photoframe=0&justified=0',
	    success:function(results) {
	    	if(results != '')
	    	{
				jQuery('#portfolio_filter_wrapper').append(results);
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

if(jQuery('#tg_portfolio_filterable_link').val()!=1)
{
jQuery('#portfolio_wall_filters li a').click(function(){
	jQuery('#portfolio_wall_filters li a').removeClass('active');
    jQuery(this).addClass('active');
    jQuery('#horizontal_gallery_wrapper tbody tr').remove();
    
    var selectedSet = jQuery(this).attr('data-filter');
    
    jQuery('#infinite_loading').addClass('visible');

    jQuery.ajax({
	    url:"#",
	    type:'POST',
		data:'action=grandphotography_script_horizontal_portfolio_pagination_load&type=horizontal&portfolio_set='+selectedSet,
		success:function(results) {
	    	if(results != '')
	    	{
	    		jQuery('#infinite_loading').removeClass('visible');
				jQuery('#horizontal_gallery_wrapper').html(results);
	    		jQuery(document).setiLightbox();
	    		
	    		jQuery('#horizontal_gallery_wrapper tbody tr td .gallery_image_wrapper').children('.horizontal_gallery_img').each(function(index, value)
				{
				   	var calScreenWidth = jQuery(window).width();
				   	var calScreenHeight = parseInt(jQuery(window).height()*0.75);
				   	
				   	jQuery(this).css('height', calScreenHeight+'px');
				    jQuery(this).parent().addClass('visible');
				});
	    		
	    		var scrollToPos = parseInt(jQuery('#horizontal_gallery_wrapper').offset().top);
    
			    jQuery('body,html').animate({
					scrollTop: scrollToPos
				}, 300);
	    	}
	    }
	});
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
		data:'action=grandphotography_script_metro_gallery_pagination_load&gallery_id=6282&start='+startItem+'&items='+loadItems+'&columns=3&type=metro&largecounter='+jQuery(this).attr('data-largecounter')+'&nextnumbertoadd='+jQuery(this).attr('data-nextnumbertoadd')+'&nexttrigger='+jQuery(this).attr('data-nexttrigger'),
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
	    		if(newStartItems >= 18)
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
jQuery("#16025046562140563925").masonry({
  itemSelector: ".element",
  columnWidth: ".element",
  gutter: 30,
  transitionDuration: 0
});
jQuery("#16025046562140563925").imagesLoaded( function(){
    jQuery("#16025046562140563925").children(".element").each(function(){
        jQuery(this).addClass("slideUp");
    });
});

jQuery('#infinite_load_more_16025046562140563925').click(function(){
	jQuery(this).hide();
    jQuery('#infinite_loading_16025046562140563925').addClass('visible');
    
    var startItem = parseInt(jQuery(this).attr('data-start'));
    var loadItems = parseInt(jQuery(this).attr('data-items'));
    
    jQuery.ajax({
	    url:"#",
	    type:'POST',
	    data:'action=grandphotography_script_grid_portfolio_pagination_load&start='+startItem+'&items='+loadItems+'&columns=3&type=grid&photoframe=1',
	    success:function(results) {
	    	if(results != '')
	    	{
				var html = jQuery(results);
				jQuery("#16025046562140563925").append(html).masonry( 'appended', html ).masonry();
				
				jQuery("#16025046562140563925").imagesLoaded( function(){
					jQuery("#16025046562140563925").masonry( 'reloadItems' );
					jQuery("#16025046562140563925").masonry( 'layout' );
				});
				
				jQuery('#infinite_load_more_16025046562140563925').attr('data-start', parseInt(startItem+loadItems));

	    		jQuery(document).setiLightbox();
	    		jQuery('#infinite_loading_16025046562140563925').removeClass('visible');
	    		
	    		var newStartItems = parseInt(startItem + loadItems);
	    		if(newStartItems >= 12)
	    		{
	    			jQuery('#infinite_load_more_16025046562140563925').remove();
	    		}
	    		else
	    		{
	    			jQuery('#infinite_load_more_16025046562140563925').attr('data-start', newStartItems);
	    			jQuery('#infinite_load_more_16025046562140563925').show();
	    			
	    								if(jQuery('#infinite_load_more_16025046562140563925').length > 0)
					{
						Waypoint.destroyAll();
						var waypoint = new Waypoint({
						  element: document.getElementById('infinite_load_more_16025046562140563925'),
						  handler: function(direction) {
						    jQuery('#infinite_load_more_16025046562140563925').trigger('click');
						  },
						  offset: '100%'
						});
					}
						    		}
	    	}
	    }
	})
});

if(jQuery('#infinite_load_more_16025046562140563925').length > 0)
{
	var waypoint = new Waypoint({
	  element: document.getElementById('infinite_load_more_16025046562140563925'),
	  handler: function(direction) {
	    jQuery('#infinite_load_more_16025046562140563925').trigger('click');
	  },
	  offset: '120%'
	});
}

});
