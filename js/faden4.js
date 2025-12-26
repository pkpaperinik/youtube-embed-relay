$("#slideshown4 > div:gt(0)").hide();

setInterval(function() {
  $('#slideshown4 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshown4');
}, 20000);