/**
 * smiley face
 * Luca Garreffa
 * 
 *a big smiley face
 */

"use strict";

/**
 * making the canvas
*/
function setup() {
    createCanvas(1000, 1000);
}


/**
 * drawing the scene
*/
function draw() {
    background("#dd8a15");

    push();
    fill("#c1f700");
    circle(500, 500, 500);
    pop()

    push();
    fill("#0a0101");
    ellipse(400, 400, 50, 100);
    pop()

    push();
    fill("#0a0101");
    ellipse(600, 400, 50, 100);
    pop()

    push();
    fill("#020202");
    arc(500, 600, 200, 100, 0, PI);
    pop()

    push();
    fill("#020202");
    arc(500, 600, 200, 100, 0, PI);
    pop()
}