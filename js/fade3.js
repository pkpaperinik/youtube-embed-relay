$("#slideshow3 > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow3 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow3');
}, 20000);