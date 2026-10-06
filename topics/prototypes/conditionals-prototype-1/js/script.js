/**
 * remote powered sun
 * Luca Garreffa
 * 
 * click on the sun to turn it off 
 */

"use strict";

let night = false

let sky = {
    //color
    r: 0,
    g: 78,
    b: 255,
}

let grass = {
    //postion
    x: 0,
    y: 400,
    //color
    r: 0,
    g: 255,
    b: 0,
    //size
    size: 500
}

let sun = {
    //position
    x: 250,
    y: 150,
    //color
    r: 255,
    g: 255,
    b: 0,
    //size
   size: 100,
}

let housesquare = {
    //position
    x: 300,
    y: 300,
    //color
    r: 100,
    g: 100,
    b: 0,
    //size
   size: 100,       
}
let housetriangle = {
    //position
    x: 300,
    y: 300,
    //color
    r: 100,
    g: 100,
    b: 0,
    //size
   size: 100,       
}

/**
 * making a landsacpe
*/
function setup() {
    createCanvas(500, 500)

}

/**
 * making everything and controlling the night day cycle with a click
*/
function draw() {
//sky
background(sky.r, sky.g, sky.b)

//sun
push()
fill(sun.r, sun.g, sun.b)
ellipse(sun.x, sun.y, sun.size)

//grass

push()
fill (grass.r, grass.g, grass.b)
rect(grass.x, grass.y, grass.size)
pop()

if(night===true) {
 //dirt
push()
fill("brown")
ellipse(102, 406, 30, 5)

//skeleton hand
 push()
 fill(255)
 stroke(255)
 strokeWeight(5)
 line(100, 405, 100, 375)
 line(105, 405, 105, 375)
 line(105, 375, 115, 370)
 line(102, 375, 105, 355)
 line(103, 375, 112, 360)
 line(99, 375, 95, 355)
 line(99, 375, 90, 370)
 pop()

}

 //house
 push()
 fill(housesquare.r, housesquare.g, housesquare.b)
 rect(housesquare.x, housesquare.y, housesquare.size)
 triangle(housetriangle.x, housetriangle.y, housetriangle.x+housesquare.size, housetriangle.y, housetriangle.x+housesquare.size/2, housetriangle.y-50)
 pop()
}

function mousePressed() {

//check if the sun was clicked
const D = dist(mouseX, mouseY, sun.x, sun.y)
const overlap = (D < sun.size/2)
if(overlap) {
    if(night===false){
    sun.r = 246;
    sun.g = 241;
    sun.b = 213;
    sky.r = 0;
    sky.g = 0;
    sky.b = 60;
    grass.g = 100;
    night = true
    }
    else {
    sun.r = 255;
    sun.g = 255;
    sun.b = 0;
    sky.r = 0;
    sky.g = 0;
    sky.b = 255;
    grass.g = 100;
    night = false
    }
}
}


