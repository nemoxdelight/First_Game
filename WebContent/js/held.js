//HELD Klasse


function Held(){

	this.held_x = 75;
	this.held_y = 250;
	this.groese_ball = 10;
	this.speed = 7;
	this.farbe_ball = '#bcd6ec';

	//Tasten
	this.hochTaste = false;
	this.rechtsTaste = false;
	this.linksTaste = false;
	this.runterTaste = false;

	//Blur
	this.blur_ball = 20;
	this.farbe_blur_ball = '#fff';

}

//Held Objekt

Held.prototype.draw = function() {

	this.tasteCheck();

	ctx.beginPath();
	ctx.fillStyle = this.farbe_ball;
	ctx.arc(this.held_x, this.held_y, this.groese_ball, 0, Math.PI*2, true);
	ctx.arc(this.held_x-17	, this.held_y, this.groese_ball-3, 0, Math.PI*2, true);
	ctx.shadowBlur = this.blur_ball;	
	ctx.shadowColor = this.farbe_blur_ball;
	ctx.closePath();
	ctx.fill();
	ctx.shadowColor = "transparent";

};



Held.prototype.tasteCheck = function() {
	if(this.hochTaste)	{
		this.held_y -= this.speed;
	}
	if(this.rechtsTaste){
		this.held_x += this.speed;
	}
	if(this.linksTaste){
		this.held_x -= this.speed;
	}
	if(this.runterTaste){
		this.held_y += this.speed;
	}
};

//ERWEITERUNG FÜR BEWEGUNG


// function rechts(){
// 	held1.held_x+=held1.speed;
// 	if (held1.held_x===790) {held1.held_x--};
// }

// function links(){
// 	held1.held_x-=held1.speed;
// 	if (held1.held_x===10) {held1.held_x++};
// }

// function hoch(){
// 	held1.held_y-=held1.speed;
// 	if (held1.held_y===10) {held1.held_y++};
// }held1

// function runter(){
// 	held1.held_y+=held1.speed;
// 	if (held1.held_y===490) {held1.held_y--};
// }
