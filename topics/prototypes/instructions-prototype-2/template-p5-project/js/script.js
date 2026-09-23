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
let sunX = {
    r: 255,
    g: 125,
    b: 37
};

/**
 * drawing the scene
 */
function draw() {
    background("#000000");


    //sun
    push();
    fill(sunX.r, sunX.g, sunX.b);
    circle(500, 300, 500);
    pop()
    sunX.g = sunX.g - 0.6;
    sunX.b = sunX.b - 1;


    //giants deep basically water planet

    push();
    fill("#58615a");
    stroke("#0A2B3D");
    circle(250, 750, 200);
    pop()

    push();
    fill("#a75231");
    circle(900, 550, 100);
    pop()

    push();
    fill("#a75231");
    circle(800, 650, 150);
    pop()

    push();
    fill("#020100");
    circle(550, 150, 100);
    pop()

    // the ship from outer wilds, aka the trauma mobile

    //awesome landing gear
    push();
    stroke("#2d3436");
    strokeWeight(5);
    line(460, 530, 430, 590);
    line(415, 590, 445, 590);
    line(540, 530, 570, 590);
    line(555, 590, 585, 590);
    pop();

    //thruster flames
    push();
    noStroke();
    fill("#ff7675");
    triangle(442, 570, 463, 570, 452, 600);
    triangle(537, 570, 558, 570, 547, 600);
    pop();

    //side fuel tanks
    push();
    stroke("#2d3436");
    strokeWeight(3);
    fill("#b2bec3");
    rect(440, 510, 25, 60, 8);
    rect(535, 510, 25, 60, 8);
    pop();

    //fuel tank caps
    push();
    fill("#7f8c8d");
    rect(440, 510, 25, 12, 8, 8, 0, 0);
    rect(535, 510, 25, 12, 8, 8, 0, 0);
    pop();

    //makeshift duct tape strapping the tanks
    push();
    noStroke();
    fill("#95a5a6");
    rect(455, 505, 20, 8);
    rect(525, 505, 20, 8);
    pop();

    // main cockpit capsule weird woden ball
    push();
    stroke("#3d1f10");
    strokeWeight(4);
    fill("#8b4513");
    circle(500, 500, 90);
    pop();

    // 7. horizontal metal hull strap
    push();
    fill("#636e72");
    noStroke();
    rect(457, 496, 86, 8);
    pop();

    // 8. cyan visor window
    push();
    stroke("#2d3436");
    strokeWeight(3);
    fill("#00cec9");
    rect(480, 470, 40, 26, 12, 12, 6, 6);
    pop();








}