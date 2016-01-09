$("#skillsButton").on('click',function(e){
	jQuery(document).ready(function(){
	jQuery('.progressbar').each(function(){
	jQuery(this).find('.progressbar-bar').animate({
	width:jQuery(this).attr('data-percent')
			},4500);
		});
	});
});

$("#skills").on('hover', function(e){
	jQuery(document).ready(function(){
	jQuery('.progressbar').each(function(){
	jQuery(this).find('.progressbar-bar').animate({
	width:jQuery(this).attr('data-percent')
			},4500);
		});
	});
});