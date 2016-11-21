$(function(){
	$.material.init();
	$('[data-toggle="tooltip"]').tooltip()
	$('.nav a').on('click', function(){
		$('.nav').find('.active').removeClass('active');
		$(this).parent().addClass('active');
	})
});