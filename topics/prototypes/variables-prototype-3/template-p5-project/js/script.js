/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
createCanvas(200, 600);
}

let spaceship = {
    x : 250,
    y : 250,
    
}


/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
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
circle(random([0], [600]), random([0], [600]), 5)
circle(random([0], [600]), random([0], [600]), 5)
circle(random([0], [600]), random([0], [600]), 5)
circle(random([0], [600]), random([0], [600]), 5)
circle(random([0], [600]), random([0], [600]), 5)
circle(random([0], [600]), random([0], [600]), 5)
circle(random([0], [600]), random([0], [600]), 5)
circle(random([0], [600]), random([0], [600]), 5)
circle(random([0], [600]), random([0], [600]), 5)
circle(random([0], [600]), random([0], [600]), 5)
circle(random([0], [600]), random([0], [600]), 5)
circle(random([0], [600]), random([0], [600]), 5)

//the planets
push();
fill("rgb(255, 0, 0)");
circle(random([0], [600]), random([0], [600]), 50)
fill("rgb(0, 255, 0)");
circle(random([0], [600]), random([0], [600]), 50)
fill("rgb(0, 0, 255)");
circle(random([0], [600]), random([0], [600]), 50)
pop();


}