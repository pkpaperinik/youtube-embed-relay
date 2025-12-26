$("#slideshown > div:gt(0)").hide();

setInterval(function() {
  $('#slideshown > div:first')
    .fadeOut(1500)
    .next()
    .fadeIn(1500)
    .end()
    .appendTo('#slideshown');
}, 30000);