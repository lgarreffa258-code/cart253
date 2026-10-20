/**
 * Race
 * Luca Garreffa
 * 
 * made a race where you click to win
 */

"use strict";
let race = false

let showtext = true

let racer1 = {
    //placement
    x:0,
    y:125,
    //size
    size:100
}

let racer2 = {
    //placement
    x:0,
    y:400
}

let startbutton = {
    //placement
    x:650,
    y:250,
    //size
    size:300
}


/**
 * OH LOOK I DIDN'T DESCRIBE SETUP!!
*/
function setup() {
createCanvas(1500, 500)
}


/**
 * 
*/
function draw() {
background("red")

//make racer 1
push()
fill("black")
ellipse(racer1.x, racer1.y, racer1.size)
pop()

//make racer 2
push()
fill("blue")
ellipse(racer2.x, racer2.y, 100)
pop()

//make the start button
push()
fill("yellow")
ellipse(startbutton.x, startbutton.y, startbutton.size)
pop()

//making the text
if (showtext === true){
push()
fill("black")
textSize(64)
text('START', 550, 269)
pop()
}

//make the race start
if (race === true){
    racer2.x = racer2.x + 1
}


}

function mousePressed(){
    const d = dist(mouseX, mouseY, startbutton.x, startbutton.y)
    const overlap = (d < startbutton.size/2)
    console.log(overlap);
    if(overlap) {
        startbutton.size = startbutton.size - 300
        race = true
        showtext = false

    }
    const D = dist(mouseX, mouseY, racer1.x, racer1.y)
const overlap2 = (D < racer1.size / 2)
if (overlap2) {
    racer1.x = racer1.x +15
}
}


