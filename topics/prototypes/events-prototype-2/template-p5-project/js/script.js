/**
 * Title of Project
 * Author Name
 * 
 * HOW EMBARRASSING! I HAVE NO DESCRIPTION OF MY PROJECT!
 * PLEASE REMOVE A GRADE FROM MY WORK IF IT'S GRADED!
 */

"use strict";
let transition = false

let sun = {
    //placement
    x:250,
    y:350,
    //size
    size:100,
    //color
    r:255,
    g:255,
    b:0,
}

let sky = {
    //color
    r:0,
    g:0,
    b:255
}

let floor = {
    //placement
    x:0,
    y:400,
    //color
    r:0,
    g:0,
    b:150,
    //size
    size:500
}

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
    background(sky.r, sky.g, sky.b)

    //the sun
    push()
    fill(sun.r, sun.g, sun.b)
    ellipse(sun.x, sun.y, sun.size)
    pop()
     if (transition === true){
        sun.x = mouseX
        sun.y = mouseY
    }

    //bottom layer floor or ocean
    push()
    fill(floor.r, floor.g, floor.b)
    rect(floor.x, floor.y, floor.size)
    pop()
}

function mousePressed() {
    const d = dist(mouseX, mouseY, sun.x, sun.y)
    const overlap = (d < sun.size/2)
    if (overlap) {
        transition = true
    }
}
