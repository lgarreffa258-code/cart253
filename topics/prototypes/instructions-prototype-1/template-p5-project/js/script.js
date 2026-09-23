/**
 * last sunset
 * Luca Garreffa
 * 
 * a beatiful landscape with the sun slowly setting.
 */

"use strict";

/**
 * making the canvas
*/
function setup() {
    createCanvas(1000, 800);
}


/**
 * drawing the scene
*/
function draw() {
    background("#FAD6A5");
    //sunset
    push();
    fill("#d8ca08");
    stroke("#bb740a");
    circle(500, 300, 500);
    pop()
    //snow ground
    push();
    fill("#f8f8f8");
    rect(0, 600, 1000, 400);
    pop()
    //tree number 1
    push();
    fill("#cccac6");
    triangle(100, 700, 200, 700, 150, 500);
    pop()
    //tree number 2
    push();
    fill("#cccac6");
    triangle(0, 600, 100, 600, 50, 400);
    pop()
    //cool tree chad
    push();
    fill("#cccac6");
    triangle(50, 750, 150, 750, 100, 550);
    pop()
    //tree number 4
    push();
    fill("#cccac6");
    triangle(900, 600, 1000, 600, 950, 400);
    pop()
    //tree number 5
    push();
    fill("#cccac6");
    triangle(800, 700, 900, 700, 850, 500);
    pop()
    //lame tree number 6
    push();
    fill("#cccac6");
    triangle(850, 750, 950, 750, 900, 550);
    pop()
}