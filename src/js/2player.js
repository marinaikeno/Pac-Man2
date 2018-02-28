// 0 empty, 1 coin, 2 brick , 3 cherry
// array that contains arrays for the game display
var world =[
				[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
				[2, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
				[2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
				[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
				[2, 1, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 1, 2],
				[2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2],
				[2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2],
				[0, 0, 0, 0, 0, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 2, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 2, 1, 1, 1, 1, 1, 2, 2, 0, 2, 2, 1, 1, 1, 1, 1, 2, 0, 0, 0, 0, 0], // center
				[0, 0, 0, 0, 0, 2, 1, 2, 1, 1, 1, 2, 0, 0, 0, 2, 1, 1, 1, 2, 1, 2, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 2, 1, 2, 1, 1, 1, 2, 2, 0, 2, 2, 1, 1, 1, 2, 1, 2, 0, 0, 0, 0, 0],
				[0, 0, 0, 0, 0, 2, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 3, 2, 1, 2, 0, 0, 0, 0, 0],	
				[2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2],
				[2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
				[2, 1, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 1, 2],
				[2, 1, 1, 1, 1, 2, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 2, 1, 1, 1, 1, 2],
				[2, 2, 2, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 1, 2, 2, 2, 2],
				[2, 1, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 2, 1, 1, 1, 1, 1, 1, 2],
				[2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 1, 2],
				[2, 1, 1, 3, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2],
				[2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2]
			];

// pacman's 'current' position. value is initial starting point	
// global variable for pacman's position	
var pacman = {
	current_x: 20, // initial x 
	current_y: 15 // initial y
};
var msPacman = {
	msX: 6, 
	msY: 15
}
var ghosts = { 
	redGhost: {x:13, y:7},
	blueGhost: {x:12, y:9}, 
	pinkGhost: {x:13, y:9}, 
	orangeGhost: {x:14, y:9}, 
	brown: {x:6, y:3}, 
	movingBlue: {x:1, y:18}, 
	movingPink: {x:20, y:3},
	dancer: {x:25, y:18}
}; 

var life = 5; // Pacman has 5 lives
var score = 0; // intial score is 0
var msScore = 0; 
var msLife = 5; 

function displayGhost(obj, ghostId) {
	document.getElementById(ghostId).style.top = obj["y"]*20+"px";
	document.getElementById(ghostId).style.left = obj["x"]*20+"px";
}
function moveGhost(obj) {
	// if the left side is a wall, then can only move up, right, or down (-y, +y, +x)
	// if the right side is a wall, then can only move up, left, or down (-y, +y, -x)
	// if top is a wall, then can only move left, right, down (-x, +x, +y)
	// if bottom is a wall, then can only move left, right, up (-x, +x, -y)
	for (var group in obj) { 
		var movePosition = Math.round(Math.random()*31);
		if (movePosition<=7 && world[obj[group]["y"]][obj[group]["x"]+1]!=2) { // right  
			obj[group]["x"]++; 
		} else if (movePosition>=8 && movePosition<=15 && world[obj[group]["y"]][obj[group]["x"]-1]!=2) { // left 
			obj[group]["x"]--;

		} else if (movePosition>=16 && movePosition<=23&& world[obj[group]["y"]+1][obj[group]["x"]]!=2) { // down  
			obj[group]["y"]++;

		} else if (movePosition>=24 && movePosition<=31 && world[obj[group]["y"]-1][obj[group]["x"]]!=2) { // up  
			obj[group]["y"]--;
		}
		displayGhost(obj[group], group);
	}
}

// edits the top and left position of Pacman. 20 is multiplied bc that is the size of each "box"
function displayPacman(){
	document.getElementById('pacman').style.top = pacman.current_y*20 +"px";
	document.getElementById('pacman').style.left = pacman.current_x*20+"px";
}; 
function displayMsPacman() {
	document.getElementById('msPacman').style.top = msPacman.msY*20 +"px";
	document.getElementById('msPacman').style.left = msPacman.msX*20+"px";
}
// function that reads the array and generate html for the game display
function displayWorld(arr) {
	var htmlString = "";
	for(var i = 0; i < arr.length; i++) {
		htmlString+='<div class="row">';
		for(var j = 0; j < arr[i].length; j++) {
			if(arr[i][j]==2) {
				htmlString+='<div class="brick"></div>';
			} else if (arr[i][j]==1) {
				htmlString+='<div class="empty"><div class="dot"></div></div>';
			} else if (arr[i][j]==0) {
				htmlString+='<div class="empty"></div>';
			} else if (arr[i][j]==3) {
				htmlString+='<div class="cherry"></div>';
			}
		}
		htmlString+='</div>';
	}
	this.loop = function(){
		moveGhost(ghosts);
	}
	document.getElementById('container').style.width = (arr[0].length)*20+"px";
	document.getElementById('world').innerHTML = htmlString;
};

function displayScore() { // displays the score on the page
	document.getElementById('score').innerHTML = "Pacman Score: " + score;
};
function msPacmanScore() {
	document.getElementById('msScore').innerHTML = "Ms. Pacman Score: " + msScore;
}
// Pacman loses life
function displayLife() {
	document.getElementById('life').innerHTML = "Pacman Life: "+ life;
}
function msPacmanLife() {
	document.getElementById('msLife').innerHTML = "Ms. Pacman Life: " + msLife;
}
function restartPacman() {
	pacman.current_x=20; 
	pacman.current_y=15; 
}
function msPacmanRestart() {
	msPacman.msX=6; 
	msPacman.msY=15;
}
function losePoints(obj) {
	for (var group in obj) {
		if (obj[group]["x"]==pacman.current_x && obj[group]["y"]==pacman.current_y) {
			life--;
			displayLife();
			restartPacman();
		}
	}
	// if (life==0) {

	// }
}
function msLose(obj) {
	for (var group in obj) {
		if (obj[group]["x"]== msPacman.msX && obj[group]["y"]==msPacman.msY) {
			msLife--;
			msPacmanLife();
			msPacmanRestart();
		}
	}
	// if (msLife==0) {

	// }
}

var display = new displayWorld(world); // call function to build world
displayPacman();
displayMsPacman();

msPacmanScore();
displayScore();
setInterval(display.loop, 100);

msPacmanLife();
displayLife();



// function to move Pacman
// down: 40, left: 37, right: 39, up: 38
// everytime the key is pressed, it moves one box space in that direction.
document.onkeydown = function(event) {
	// ms Pacman 
		if(event.keyCode == 65 && world[msPacman.msY][msPacman.msX-1]!=2) {
		// move left
		// rotates to face left
		document.getElementById('msPacman').style.transform = 'rotate(0deg)'; 
		msPacman.msX--;

	} else if (event.keyCode == 87 && world[msPacman.msY-1][msPacman.msX]!=2) {
		// move up
		// rotates to face up
		document.getElementById('msPacman').style.transform = 'rotate(90deg)';
		msPacman.msY--;

	} else if (event.keyCode == 68 && world[msPacman.msY][msPacman.msX+1]!=2) {
		// move right
		// rotates to face down
		document.getElementById('msPacman').style.transform = 'scale(-1,1)';
		msPacman.msX++;
		
	} else if (event.keyCode == 83 && world[msPacman.msY+1][msPacman.msX]!=2) {
		// move down
		// rotates to face down
		document.getElementById('msPacman').style.transform = 'rotate(270deg)';
		msPacman.msY++;
		
	}
	if(world[msPacman.msY][msPacman.msX]==1) {
		msScore+=10; // when pacman gets coin, you get 10 points
		world[msPacman.msY][msPacman.msX]=0; // when pacman gets coin, coin div becomes empty
		displayWorld(world);
		msPacmanScore();
	}
	if(world[msPacman.msY][msPacman.msX]==3) {
		msScore+=50; // when pacman gets cherry, you get 50 points
		world[msPacman.msY][msPacman.msX]=0; // when pacman gets coin, coin div becomes empty
		displayWorld(world);
		msPacmanScore();
	}
	// pacman
	if(event.keyCode == 37 && world[pacman.current_y][pacman.current_x-1]!=2) {
		// move left
		// rotates to face left
		document.getElementById('pacman').style.transform = 'rotate(180deg)'; 
		pacman.current_x--;

	} else if (event.keyCode == 38 && world[pacman.current_y-1][pacman.current_x]!=2) {
		// move up
		// rotates to face up
		document.getElementById('pacman').style.transform = 'rotate(270deg)';
		pacman.current_y--;

	} else if (event.keyCode == 39 && world[pacman.current_y][pacman.current_x+1]!=2) {
		// move right
		// rotates to face down
		document.getElementById('pacman').style.transform = 'rotate(0deg)';
		pacman.current_x++;
		
	} else if (event.keyCode == 40 && world[pacman.current_y+1][pacman.current_x]!=2) {
		// move down
		// rotates to face down
		document.getElementById('pacman').style.transform = 'rotate(90deg)';
		pacman.current_y++;
		
	}
	if(world[pacman.current_y][pacman.current_x]==1) {
		score+=10; // when pacman gets coin, you get 10 points
		world[pacman.current_y][pacman.current_x]=0; // when pacman gets coin, coin div becomes empty
		displayWorld(world);
		displayScore();
	}
	if(world[pacman.current_y][pacman.current_x]==3) {
		score+=50; // when pacman gets cherry, you get 50 points
		world[pacman.current_y][pacman.current_x]=0; // when pacman gets coin, coin div becomes empty
		displayWorld(world);
		displayScore();
	}
/////////////////////////
	losePoints(ghosts); 
	msLose(ghosts);
	displayPacman();
	displayMsPacman();
};
