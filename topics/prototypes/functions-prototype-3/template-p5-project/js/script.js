
/**
 * Teleporting Ball
 * Luca Garreffa
 *
 * made a ball that moves to random
 * places and changes when clicked
 */

"use strict";

let ball = {
    //placement
    x: 250,
    y: 250,
    //size
    size: 100,
    //color
    r: 255,
    g: 0,
    b: 0
}

/**
 * make the canvas
 */
function setup() {
    createCanvas(500, 500)
}

/**
 * draw the ball
 */
function draw() {
    background("lightblue")

    //making the ball
    push()
    fill(ball.r, ball.g, ball.b)
    ellipse(ball.x, ball.y, ball.size)
    pop()
}

/**
 * move the ball to a random place
 */
function moveBall() {
    ball.x = random(50, 450)
    ball.y = random(50, 450)
}

/**
 * change the color of the ball
 */
function changeColor() {
    ball.r = random(0, 255)
    ball.g = random(0, 255)
    ball.b = random(0, 255)
}

/**
 * make the ball smaller
 */
function changeSize(size) {
    if (size > 30) {
        return size - 10
    }
    else {
        return 100
    }
}

/**
 * check if the ball is clicked
 */
function mousePressed() {
    const d = dist(mouseX, mouseY, ball.x, ball.y)
    const overlap = (d < ball.size / 2)

    if (overlap) {
        moveBall()
        changeColor()
        ball.size = changeSize(ball.size)
    }
}
