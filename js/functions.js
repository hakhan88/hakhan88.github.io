$(document).ready(function() {
	$(".scroll").click(function(event){		
	event.preventDefault();
	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 1000);
	});
});

$(document).ready(function() {	
	var windowHeight = $(window).height();
			
	$(".work").css('height', windowHeight),
	$("#contact").css('height', windowHeight);
	
});

$(window).resize(function() {	
	var windowHeight = $(window).height();
			
	$(".work").css('height', windowHeight),
	$("#contact").css('height', windowHeight);
	
});