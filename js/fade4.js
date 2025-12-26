$("#slideshow4 > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow4 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow4');
}, 10000);
