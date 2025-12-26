$("#slideshow5 > div:gt(0)").hide();

setInterval(function() {
  $('#slideshow5 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshow6');
}, 20000);