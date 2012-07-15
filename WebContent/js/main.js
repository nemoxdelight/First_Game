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

 loop();
 requestAnimFrame(startLoop);

}

function loop(){
  clearCanvas();
  held1.draw();
  feinde_zeichnen();
  level();

  // snd.play();
}


function move_held(p_event)
{
  if (p_event.keyCode == KEY_RIGHT){
    // rechts();
    // held1.rechtsTaste = true;
    held1.held_y += held1.speed;
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

function stop_held(p_event)
{
  console.log("up");
}

