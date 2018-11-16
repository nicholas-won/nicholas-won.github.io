$(document).ready(function() {
	$(window).scroll(function() {
		if($(document).scrollTop() > 20) {
			$('#navbar').addClass('shrink');
		}
		else {
			$('#navbar').removeClass('shrink');
		}
	});
});