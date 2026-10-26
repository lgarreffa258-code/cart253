
/**
 * Light Switch
 * Luca Garreffa
 *
 * made a room where you can turn
 * the lights on and off by clicking
 */

"use strict";

let light = false

let bulb = {
    //placement
    x: 250,
    y: 150,
    //size
    size: 100,
    //color
    r: 100,
    g: 100,
    b: 100
}

let lightswitch = {
    //placement
    x: 250,
    y: 350,
    //size
    size: 80
}

/**
 * make the canvas
 */
function setup() {
    createCanvas(500, 500)
}

/**
 * draw the room and the light
 */
function draw() {
    //change the background
    changeRoom()

    //making the light bulb
    push()
    fill(bulb.r, bulb.g, bulb.b)
    ellipse(bulb.x, bulb.y, bulb.size)
    pop()

    //making the light switch
    push()
    fill("white")
    rect(lightswitch.x - 40, lightswitch.y - 40, 80, 80)
    pop()

    //making the button
    push()
    fill("black")
    rect(lightswitch.x - 10, lightswitch.y - 20, 20, 40)
    pop()
}

/**
 * change the room depending on the light
 */
function changeRoom() {
    if (light === true) {
        background(255, 240, 150)
        bulb.r = 255
        bulb.g = 255
        bulb.b = 0
    }

    if (light === false) {
        background(30, 30, 50)
        bulb.r = 100
        bulb.g = 100
        bulb.b = 100
    }
}

/**
 * turn the light on or off
 */
function changeLight() {
    if (light === false) {
        light = true
    }
    else {
        light = false
    }
}

/**
 * check if the switch is clicked
 */
function mousePressed() {
    const d = dist(mouseX, mouseY, lightswitch.x, lightswitch.y)
    const overlap = (d < lightswitch.size / 2)

    if (overlap) {
        changeLight()
    }
}
