var lines_unten =
	    [{x: 0, y: 500},
	    {x: 0, y: 460},
	    {x: 170, y: 350},
	    {x: 230, y: 340}, 
	    {x: 380, y: 360}, 
	    {x: 460, y: 320}, 
	    {x: 500, y: 340}, 
	    {x: 700, y: 360}, 
	    {x: 800, y: 380}, 
	    {x: 800, y: 500}, 
	];


var lines_oben = 
		[{x: 0, y: 50},
		 {x: 80, y: 120},
		 {x: 290, y: 170},
		 {x: 490, y: 180},
		 {x: 590, y: 170},
		 {x: 690, y: 185},
		 {x: 800, y: 170},
		 {x: 800, y: 0},
		 {x: 0, y: 0},
	];

var random_y = Math.floor(Math.random()*2);
		


function level()
{
	
	var level_color = ctx.createLinearGradient(0,0,0,450);  
	level_color.addColorStop(0.3, '#004b5c');  
	level_color.addColorStop(0.6, '#004b5c'); 


		ctx.shadowBlur = 20;
		ctx.shadowColor = '#212121';

		//Level unten
		ctx.beginPath();
		ctx.fillStyle = level_color;
		stroke();
		ctx.moveTo(lines_unten[0].x, lines_unten[0].y);
		for (var i = 1; i<lines_unten.length; i++)
			ctx.lineTo(lines_unten[i].x, lines_unten[i].y);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();

		//Level oben
		ctx.beginPath();
		ctx.fillStyle = '#004b5c';
		stroke();
		ctx.moveTo(lines_oben[0].x, lines_oben[0].y);
		for (var i = 1; i<lines_oben.length; i++)
			ctx.lineTo(lines_oben[i].x, lines_oben[i].y);
		ctx.closePath();
		ctx.stroke();
		ctx.fill();

			ctx.shadowColor = "transparent";



}

function stroke(){
		ctx.strokeStyle = '#004b5c';
		ctx.lineWidth   = 1;
		ctx.lineJoin = 'round';
}

function move_level(){
	
	// if(lines_unten[2,2].y > 450){
	// 	lines_unten[2,2].y -= random_y;
	// }	
}
