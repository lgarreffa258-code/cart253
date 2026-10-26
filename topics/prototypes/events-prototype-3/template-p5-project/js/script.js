
/**
 * Catch the Ball
 * Luca Garreffa
 *
 * made a game where you have to click
 * the ball before it hits the ground
 */

"use strict";

let game = true

let ball = {
    //placement
    x: 250,
    y: 0,
    //size
    size: 80,
    //speed
    speed: 2,
    //color
    r: 255,
    g: 255,
    b: 0
}

let floor = {
    //placement
    x: 0,
    y: 450,
    //size
    size: 500,
    //color
    r: 0,
    g: 150,
    b: 0
}

/**
 * make the canvas
 */
function setup() {
    createCanvas(500, 500)
}

/**
 * draw the ball and floor and make
 * the ball fall down
 */
function draw() {
    background("lightblue")

    //making the floor
    push()
    noStroke()
    fill(floor.r, floor.g, floor.b)
    rect(floor.x, floor.y, floor.size, 50)
    pop()

    //making the ball
    push()
    fill(ball.r, ball.g, ball.b)
    ellipse(ball.x, ball.y, ball.size)
    pop()

    //make the ball fall
    if (game === true) {
        ball.y = ball.y + ball.speed
    }

    //check if the ball hits the floor
    if (ball.y + ball.size / 2 >= floor.y) {
        game = false
    }

    //game over text
    if (game === false) {
        push()
        fill("red")
        textSize(64)
        text("GAME OVER", 50, 250)
        pop()
    }
}

/**
 * check if the mouse clicks the ball
 * and move it back to the top
 */
function mousePressed() {
    const d = dist(mouseX, mouseY, ball.x, ball.y)
    const overlap = (d < ball.size / 2)

    //if you click the ball
    if (overlap && game === true) {

        //move the ball back to the top
        ball.y = 0
        ball.x = random(50, 450)

        //make the ball faster
        ball.speed = ball.speed + 0.5
    }
}
