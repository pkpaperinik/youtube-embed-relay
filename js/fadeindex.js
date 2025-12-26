var timer;
var tempo = 1000;
var etna = true;
$(function slideshow(t) {
    $("#slideshowi > div:gt(0)").hide();
     clearInterval(timer);
    timer = setInterval(function() {
        $("#slideshowi > div:first")
            .fadeOut(1500)
            .next()
            .fadeIn(1500)
            .end()
            .appendTo('#slideshowi');
        
        if (etna) {
            etna = false;
            slideshow(25000);
        } else {
            etna = true;
            slideshow(40000);
        }
    }, t); 
});