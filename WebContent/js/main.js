"use strict";


function init() 
{
  canvas = document.getElementById("canvas");
  canvas.width  = width;
  canvas.height = height;
  ctx = canvas.getContext("2d");
  
  held1 = new Held();

  startLoop();
  start_feinde_zeichnen();

  document.onkeydown = move_held;
  document.onkeyup   = stop_held;
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

 laeuft = true;
 loop();
 requestAnimFrame(startLoop);

}

function loop(){
  if(laeuft = true){
  clearCanvas();
  level();
  held1.draw();
  feinde_zeichnen();
  // snd.play();
 }
}


function move_held(p_event)
{
  if (p_event.keyCode == KEY_RIGHT){
    held1.rechtsTaste = true;
    p_event.preventDefault(); 
  }
  if (p_event.keyCode == KEY_LEFT){
    held1.linksTaste = true;
    p_event.preventDefault();
  }
  if (p_event.keyCode == KEY_UP){
    held1.hochTaste = true;
    p_event.preventDefault();
  }
  if (p_event.keyCode == KEY_DOWN){
    held1.runterTaste = true;
    p_event.preventDefault();
  }
    if (p_event.keyCode == SPACEBAR){
    held1.leerTaste = true;
    p_event.preventDefault();
  }

}

function stop_held(p_event)
{
  if (p_event.keyCode == KEY_RIGHT){
    held1.rechtsTaste = false;
    p_event.preventDefault(); 
  }
  if (p_event.keyCode == KEY_LEFT){
    held1.linksTaste = false;
    p_event.preventDefault();
  }
  if (p_event.keyCode == KEY_UP){
    held1.hochTaste = false;
    p_event.preventDefault();
  }
  if (p_event.keyCode == KEY_DOWN){
    // runter();
    held1.runterTaste = false;
    p_event.preventDefault();
  }
  if (p_event.keyCode == SPACEBAR){
    held1.leerTaste = false;
    p_event.preventDefault();
  }

}

