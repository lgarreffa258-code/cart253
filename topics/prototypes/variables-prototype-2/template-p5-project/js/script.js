/**
 * Destruction
 * Luca Garreffa
 * 
 * explode planets
 */

"use strict";

/**
 *making myself a canvas
*/
function setup() {
    createCanvas(500, 500);
}
let spaceship = {
    x : 250,
    y : 250,
    
}

/**
 *time to create some stars and planets
*/
function draw() {
background("rgb(13, 4, 42)");
//spaceship
spaceship.x = mouseX-25;
spaceship.y = mouseY-5;
push();
fill("rgb(177, 72, 123)");
circle(spaceship.x+25, spaceship.y, 40)
pop();
push();
fill("rgb(100, 193, 205)");
rect(spaceship.x, spaceship.y, 50, 10)
pop();

//the stars
circle(170, 90, 5)
circle(250, 100, 5)
circle(500, 260, 5)
circle(350, 200, 5)
circle(450, 160, 5)
circle(250, 250, 5)
circle(90, 170, 5)
circle(100, 250, 5)
circle(260, 500, 5)
circle(200, 350, 5)
circle(160, 450, 5)
circle(400, 350, 5)
circle(65, 370, 5)

//the planets
push();
fill("rgb(255, 0, 0)");
circle(100, 100, 50)
fill("rgb(0, 255, 0)");
circle(400, 400, 50)
fill("rgb(0, 0, 255)");
circle(300, 200, 50)
pop();
}