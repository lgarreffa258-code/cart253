/**
 * outer wilds
 * Luca Garreffa
 * 
 * a tribute to the game outer wilds, this is a simple scene of a planet with a sun in the background.
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
    background("#000000");

    //sun
    push();
    fill("#FF7D25");
    stroke("#bb740a");
    circle(500, 300, 500);
    pop()
    //giants deep basically water planet

    push();
    fill("#58615a");
    stroke("#0A2B3D");
    circle(250, 750, 200);
    pop()


}