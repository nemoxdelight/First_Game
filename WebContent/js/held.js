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
	if(this.hochTaste == true)	{
		this.held_y -= this.speed;
	}
	if(this.rechtsTaste == true){
		this.held_x += this.speed;
	}
	if(this.linksTaste == true){
		this.held_x -= this.speed;
	}
	if(this.runterTaste == true){
		this.held_y += this.speed;
	}
};

