$("#slideshown1 > div:gt(0)").hide();

setInterval(function() {
  $('#slideshown1 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshown1');
}, 20000);