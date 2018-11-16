$(document).ready(function() {

$(".stamp").hover(function() {
    $(this).find("img").fadeTo(400, 1);
	}, function() {
    $(this).find("img").fadeTo(400, 0.5);
});

})