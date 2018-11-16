$(document).ready(function() {
    $('#nav-container').load('nav.html #navbar');
    setTimeout(function(){
        $('a.navresume').addClass("active");
        $('a.navwork').addClass("active");
    }, 0);
});