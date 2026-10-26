
/**
 * Growing Garden
 * Luca Garreffa
 *
 * made a garden where you can click
 * to grow flowers in different places
 */

"use strict";

let flower = {
    //placement
    x: 250,
    y: 250,
    //size
    size: 50,
    //color
    r: 255,
    g: 0,
    b: 0
}

let grass = {
    //placement
    x: 0,
    y: 400,
    //size
    size: 500
}

/**
 * make the canvas
 */
function setup() {
    createCanvas(500, 500)
    background("lightblue")
}

/**
 * draw the grass and flowers
 */
function draw() {
    //making the grass
    push()
    fill("green")
    noStroke()
    rect(grass.x, grass.y, grass.size, 100)
    pop()
}

/**
 * make a flower wherever you click
 */
function makeFlower(x, y, r, g, b) {
    //making the stem
    push()
    stroke("green")
    strokeWeight(8)
    line(x, y, x, y + 80)
    pop()

    //making the flower
    push()
    fill(r, g, b)
    ellipse(x - 20, y, 40)
    ellipse(x + 20, y, 40)
    ellipse(x, y - 20, 40)
    ellipse(x, y + 20, 40)
    pop()

    //middle of the flower
    push()
    fill("yellow")
    ellipse(x, y, 30)
    pop()
}

/**
 * check where the mouse is clicked
 */
function mousePressed() {
    if (mouseY < 400) {
        if (mouseX < 250) {
            makeFlower(mouseX, mouseY, 255, 0, 0)
        }

        if (mouseX >= 250) {
            makeFlower(mouseX, mouseY, 255, 0, 255)
        }
    }
}
