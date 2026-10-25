/**
 * manual sunset
 * Luca Garreffa
 * 
 * make the sun  be able to be moved witht the mouse when clicked and then placed back in certain locations that chnage the background depemding on where it is.
 */

"use strict";
let transition = false

// Remember the last location to snap back to if dropped in an invalid spot
let lastValidX = 250
let lastValidY = 150

let sun = {
    //placement
    x: 250,
    y: 150,
    //size
    size: 100,
    //color
    r: 255,
    g: 255,
    b: 0,
}

let place1 = {
    //placement
    x: 150,
    y: 400,
    //size
    size: 100,
}

let place2 = {
    //placement
    x: 350,
    y: 400,
    //size
    size: 100,
}

let sky = {
    //color
    r: 0,
    g: 0,
    b: 255
}

let floor = {
    //placement
    x: 0,
    y: 400,
    //color
    r: 0,
    g: 0,
    b: 150,
    //size
    size: 500
}

// Track which place the sun is in: 0 for sky, 1 for place1, 2 for place2
let currentSetting = 0

/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
    createCanvas(500, 500)
}

/**
 * OOPS I DIDN'T DESCRIBE WHAT MY DRAW DOES!
*/
function draw() {
    // Change the sky color based on where the sun is placed
    if (currentSetting === 0) {
        sky.r = 100
        sky.g = 150
        sky.b = 255
    }
    if (currentSetting === 1) {
        sky.r = 230
        sky.g = 90
        sky.b = 120
    }
    if (currentSetting === 2) {
        sky.r = 20
        sky.g = 10
        sky.b = 40
    }

    background(sky.r, sky.g, sky.b)

    // Detailed Sky: Add different details depending on the setting
    if (currentSetting === 0) {
        // Day details: A bright sun cloud
        push()
        noStroke()
        fill(255, 230)
        ellipse(300, 120, 120, 40)
        pop()
    }
    if (currentSetting === 1) {
        // Sunset 1 details: Soft clouds
        push()
        noStroke()
        fill(255, 255, 255, 150)
        ellipse(100, 150, 80, 40)
        ellipse(400, 100, 100, 50)
        pop()
    }
    if (currentSetting === 2) {
        // Sunset 2 details: Stars and a small moon
        push()
        noStroke()
        fill(255)
        // Stars
        ellipse(80, 80, 4)
        ellipse(200, 50, 3)
        ellipse(420, 120, 4)
        // Moon
        fill(240, 240, 200)
        ellipse(400, 80, 40)
        pop()
    }

    //making the first location
    push()
    noStroke()
    fill(255, 255, 255, 50)
    ellipse(place1.x, place1.y, place1.size)
    pop()

    //making the second location
    push()
    noStroke()
    fill(255, 255, 255, 50)
    ellipse(place2.x, place2.y, place2.size)
    pop()

    //the sun
    if (transition === true) {
        sun.x = mouseX
        sun.y = mouseY
    }
    push()
    fill(sun.r, sun.g, sun.b)
    ellipse(sun.x, sun.y, sun.size)
    pop()

    //bottom layer floor or ocean
    push()
    fill(floor.r, floor.g, floor.b)
    rect(floor.x, floor.y, floor.size, 100)
    pop()
}

function mousePressed() {
    // Check for picking up the sun
    if (transition === false) {
        const d = dist(mouseX, mouseY, sun.x, sun.y)
        const overlap = (d < sun.size / 2)
        if (overlap) {
            transition = true
        }
        return // Stop the function here so it doesn't immediately drop it
    }

    // Check for dropping the sun
    if (transition === true) {
        const d1 = dist(sun.x, sun.y, place1.x, place1.y)
        const overlap1 = (d1 < place1.size / 2)

        const d2 = dist(sun.x, sun.y, place2.x, place2.y)
        const overlap2 = (d2 < place2.size / 2)

        if (overlap1) {
            sun.x = place1.x
            sun.y = place1.y
            lastValidX = sun.x
            lastValidY = sun.y
            currentSetting = 1
            transition = false
        }

        if (overlap2) {
            sun.x = place2.x
            sun.y = place2.y
            lastValidX = sun.x
            lastValidY = sun.y
            currentSetting = 2
            transition = false
        }

    }
}
