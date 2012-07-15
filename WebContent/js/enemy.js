//FEIND Klasse

//Alle 2 Sekunden 2 neue Gegner.
var haeufigkeit;
var haeufigkeit_zeit = 2000;
var feinde_menge = 1; 
var feinde_anzahl = 0;
var feinde = [];


function Feind(){

   	this.feind_speed = 1;
    this.feind_x = Math.floor(Math.random()*800)+width;
    this.feind_y = Math.floor(Math.random()*500);
    this.groese_feind_x = 5;
    this.groese_feind_y = 15;
}

Feind.prototype.draw = function() {

	this.angriff();

	ctx.beginPath();
	ctx.fillStyle = '#e4c463';
	ctx.arc(this.feind_x, this.feind_y, this.groese_feind_x, 0, Math.PI*2, true);
	ctx.closePath();
	ctx.fill();

	this.checkCanvasVerlassen();

}


//LÖSCHEN DER FEINDE NACH VERLASSEN DES CANVASES - PERFORMANCE!

Feind.prototype.checkCanvasVerlassen = function() {
	if (this.feind_x <= -800) {
		//löschen des Feindes
		this.loeschenFeinde();
	}
}


Feind.prototype.loeschenFeinde = function() {
	//Splice löscht Elemente aus Listen. Das this meint den Gegner um den es geht. Dieser wird dann gelöscht
	feinde.splice(feinde.indexOf(this), 1);
	feinde_anzahl--;
}


//FLIEGEN DER FEINDE IN RICHTUNG X-

Feind.prototype.angriff = function(){
	this.feind_x -= this.feind_speed;
}


//ERSTELLEN DER FEINDE UND AUSGSABE AUF DEM CANVAS

function feinde_erstellen(n){
	for (var i = 0; i < n; i++){
		feinde[feinde_anzahl] = new Feind();
		feinde_anzahl++;
	}
}

function feinde_zeichnen() {
	for (var i = 0; i < feinde.length; i++){
		feinde[i].draw();
	}
}

function start_feinde_zeichnen(){
	//Damit falls man die Funktion zweimal aufruft nich doppelt viele Feinde kommen
	stop_feinde_zeichnen();
	//Feinde werden alle 2000ms erstellt. Anonyme Funktion
	haeufigkeit = setInterval(function (){feinde_erstellen(feinde_menge);}, haeufigkeit_zeit);
}

function stop_feinde_zeichnen(){
	clearInterval(haeufigkeit);
}

