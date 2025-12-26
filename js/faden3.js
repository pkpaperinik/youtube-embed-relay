$("#slideshown3 > div:gt(0)").hide();

setInterval(function() {
  $('#slideshown3 > div:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#slideshown3');
}, 20000);