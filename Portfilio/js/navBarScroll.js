$(document).on('scroll', function (e) {

    var alpha = $(document).scrollTop() / 450;

    $('.navbar-default').css('background-color', 'rgba(0, 0, 0,' + alpha + ')');

$("#skillsButton").on('click',function(e){
	jQuery(document).ready(function(){
	jQuery('.progressbar').each(function(){
	jQuery(this).find('.progressbar-bar').animate({
	width:jQuery(this).attr('data-percent')
			},4000);
		});
	});
});

$("#skills").hover(function(){
	jQuery(document).ready(function(){
	jQuery('.progressbar').each(function(){
	jQuery(this).find('.progressbar-bar').animate({
	width:jQuery(this).attr('data-percent')
			},4000);
		});
	});
});

});