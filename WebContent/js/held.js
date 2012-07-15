//HELD Klasse

function Held(){

	this.held_x = 75;
	this.held_y = 250;
	this.groese_ball = 10;
	this.speed = 5;
	this.farbe_ball = '#bcd6ec';

	//Tasten
	this.hochTaste = false;
	this.rechtsTaste = false;
	this.linksTaste = false;
	this.runterTaste = false;

	//Blur
	this.blur_ball = 20;
	this.farbe_blur_ball = '#fff';

	//Kugeln
	this.leerTaste = false;
	this.isShooting = false;
	this.kugeln = [];
	this.aktuelleKugel = 0;

	//Wenn wir einen neuen Held erstellen, werden 20 Schuss "geladen"
	for (var i = 0; i < 20; i++){
		this.kugeln[this.kugeln.length] = new Kugel();
	}

}

//Held Objekt

Held.prototype.draw = function() {

	this.tasteCheck();
	
	this.held_nase_x = this.held_x+10;
	this.held_nase_y = this.held_y;

	this.schussCheck();
	this.kugeln_zeichnen();

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


//Da unsere Kugeln nur in x-Richtung vom Held aus fliegen, sind sie alle größer als 0. Der Ursprung findet sich beim Held.
Held.prototype.kugeln_zeichnen = function () {
	for (var i = 0; i < this.kugeln.length; i++){
		if(this.kugeln[i].held_x >= 0) {
			this.kugeln[i].draw();
		}
	}
}


Held.prototype.schussCheck = function () {
	if (this.leerTaste && !this.isShooting) {
		this.isShooting = true;
		this.kugeln[this.aktuelleKugel].geschossen(this.held_nase_x, this.held_nase_y);
		this.aktuelleKugel++;
		//Wiederverwendne der Kugeln
		if (this.aktuelleKugel >= this.kugeln.length){
			this.aktuelleKugel = 0;
		}
	}
	else if (!this.leerTaste) {
		this.isShooting=false;
 	}

}


//KUGEL FUNKTIONEN

function Kugel(){
	this.groese_kugel = 3;
	//Kugeln aufbewahren
	this.drawX = -20;
	this.drawY = 0;
}

Kugel.prototype.draw = function() {

	this.drawX +=3;

	ctx.beginPath();
	ctx.fillStyle = '#ff99ff';
	ctx.arc(this.drawX, this.drawY, this.groese_kugel, 0, Math.PI*2, true);
	ctx.closePath();
	ctx.fill();

	if(this.drawX > width){
		this.drawX = - 20;
	}

};

Kugel.prototype.geschossen = function(startX, startY) {
	//Sagt an was erlaubt ist.
	this.drawX = startX;
	this.drawY = startY;
}


