jQuery(document).ready(function(){ 
	"use strict";
	
	jQuery('#horizontal_gallery_wrapper tbody tr td .gallery_image_wrapper').children('.horizontal_gallery_img').each(function(index, value)
	{
	   	var calScreenWidth = jQuery(window).width();
	   	var calScreenHeight = parseInt(jQuery(window).height()*0.75);
	   	
	   	jQuery(this).css('height', calScreenHeight+'px');
	    jQuery(this).parent().addClass('visible');
	});
	
	jQuery('.horizontal_gallery_wrapper tbody tr td .gallery_image_wrapper').children('.horizontal_gallery_img').each(function(index, value)
	{
	   	var calScreenWidth = jQuery(window).width();
	   	var dataHeight = jQuery(this).attr('data-height');
	   	if (undefined != dataHeight)
	   	{
		   	var calHeightRatio = dataHeight/100;
	   	}
	   	else
	   	{
		   	var calHeightRatio = 0.75;
	   	}
	   	
	   	var calScreenHeight = parseInt(jQuery(window).height()*calHeightRatio);
	   	
	   	jQuery(this).css('height', calScreenHeight+'px');
	    jQuery(this).parent().addClass('visible');
	});
	
	jQuery('#horizontal_gallery_wrapper tbody tr td .gallery_image_wrapper a').children('.horizontal_gallery_img').each(function(index, value)
	{
	   	var calScreenWidth = jQuery(window).width();
	   	var calScreenHeight = parseInt(jQuery(window).height()*0.75);
	   	
	   	jQuery(this).css('height', calScreenHeight+'px');
	    jQuery(this).parent().addClass('visible');
	});
	
	jQuery('.horizontal_gallery_wrapper tbody tr td .gallery_image_wrapper a').children('.horizontal_gallery_img').each(function(index, value)
	{
	   	var calScreenWidth = jQuery(window).width();
	   	var dataHeight = jQuery(this).attr('data-height');
	   	if (undefined != dataHeight)
	   	{
		   	var calHeightRatio = dataHeight/100;
	   	}
	   	else
	   	{
		   	var calHeightRatio = 0.75;
	   	}
	   	
	   	var calScreenHeight = parseInt(jQuery(window).height()*calHeightRatio);
	   	
	   	jQuery(this).css('height', calScreenHeight+'px');
	    jQuery(this).parent().addClass('visible');
	});
	
	jQuery('#horizontal_gallery_wrapper tbody tr td .gallery_image_wrapper .gallery_img_slides li').children('.static').each(function(index, value)
	{
	   	var calScreenWidth = jQuery(window).width();
	   	var calScreenHeight = parseInt(jQuery(window).height()*0.75);
	   	
	   	jQuery(this).css('height', calScreenHeight+'px');
	    jQuery(this).parent().addClass('visible');
	});
	
	var calScreenWidth = jQuery(window).width();
	
	jQuery('#horizontal_gallery').imagesLoaded(function(){
		if(calScreenWidth >= 480)
		{
			jQuery('#horizontal_gallery .gallery_image_wrapper').addClass('visible');
			jQuery(this).addClass('visible');
		}
	});
	
	jQuery('.horizontal_gallery').imagesLoaded(function(){
		if(calScreenWidth >= 480)
		{
			jQuery('#horizontal_gallery .gallery_image_wrapper').addClass('visible');
			jQuery(this).addClass('visible');
		}
	});
	
	jQuery(window).resize(function() {
		jQuery('#horizontal_gallery_wrapper tbody tr td .gallery_image_wrapper').children('.horizontal_gallery_img').each(function(index, value)
		{
		   	var calScreenWidth = jQuery(window).width();
		   	var calScreenHeight = parseInt(jQuery(window).height()*0.75);
		   	
		   	jQuery(this).css('height', calScreenHeight+'px');
		    jQuery(this).parent().addClass('visible');
		});
		
		jQuery('.horizontal_gallery_wrapper tbody tr td .gallery_image_wrapper').children('.horizontal_gallery_img').each(function(index, value)
		{
		   	var calScreenWidth = jQuery(window).width();
		   	var dataHeight = jQuery(this).attr('data-height');
		   	if (undefined != dataHeight)
		   	{
			   	var calHeightRatio = dataHeight/100;
		   	}
		   	else
		   	{
			   	var calHeightRatio = 0.75;
		   	}
		   	
		   	var calScreenHeight = parseInt(jQuery(window).height()*calHeightRatio);
		   	
		   	jQuery(this).css('height', calScreenHeight+'px');
		    jQuery(this).parent().addClass('visible');
		});
		
		jQuery('#horizontal_gallery_wrapper tbody tr td .gallery_image_wrapper .gallery_img_slides li').children('.static').each(function(index, value)
	{
	   	var calScreenWidth = jQuery(window).width();
	   	var calScreenHeight = parseInt(jQuery(window).height()*0.75);
	   	
	   	jQuery(this).css('height', calScreenHeight+'px');
	    jQuery(this).parent().addClass('visible');
	});
	});
	
});