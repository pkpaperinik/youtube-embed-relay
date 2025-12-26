$("#slideshown2 > div:gt(0)").hide();

setInterval(function() {
  $('#slideshown2 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshown2');
}, 20000);