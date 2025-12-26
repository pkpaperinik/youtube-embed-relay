var timer;
var duration = 5000;
var etna = true;
function appear() {
    $("#slideshowi > div:gt(0)").hide();
    // etna = etna ? false : true;
    // tempo = etna ? 15000 : 5000;

    if (etna ){
        //clearInterval(timer);
        etna = false;
        duration = 5000;
        //interval ();
      } else  {
        clearInterval(timer);
        etna = true;
        duration = 15000;
        appear ();
   }     
    
    interval = setInterval(function () {  
        console.log(etna, duration);
        $("#slideshowi > div:first")
            .fadeOut(1500)
            .next()
            .fadeIn(1500)
            .end()
            .appendTo('#slideshowi');
        
    }, duration); 

};