"use strict";


function init() 
{
  canvas = document.getElementById("canvas");
  canvas.width  = width;
  canvas.height = height;
  ctx = canvas.getContext("2d");

  startLoop();
  start_feinde_zeichnen();

  document.onkeydown = o_move_paddle;
  document.onkeyup   = o_stop_paddle;
}

function clearCanvas(){
  ctx.clearRect(0,0,width,height);
}


window.requestAnimFrame = (function(){
      return  window.requestAnimationFrame       || 
              window.webkitRequestAnimationFrame || 
              window.mozRequestAnimationFrame    || 
              window.oRequestAnimationFrame      || 
              window.msRequestAnimationFrame     || 
              function(/* function */ callback, /* DOMElement */ element){
                window.setTimeout(callback, 1000 / 60);
              };
})();


function startLoop() {

 loop();
 requestAnimFrame(startLoop);

}

function loop(){
  clearCanvas();
  level();
  held1 = new Held();
  held1.draw();
  feinde_zeichnen();
  // snd.play();
}


function o_move_paddle(p_event)
{
  if (p_event.keyCode == KEY_RIGHT){
    // rechts();
    held1.rechtsTaste = true;
    p_event.preventDefault(); 
  }
  if (p_event.keyCode == KEY_LEFT){
    // links();
    held1.linksTaste = true;
    p_event.preventDefault();
  }
  if (p_event.keyCode == KEY_UP){
    // hoch();
    held1.hochTaste = true;
    p_event.preventDefault();
  }
  if (p_event.keyCode == KEY_DOWN){
    // runter();
    held1.runterTaste = true;
    p_event.preventDefault();
  }
}

function o_stop_paddle(p_event)
{
  console.log("up");
}

