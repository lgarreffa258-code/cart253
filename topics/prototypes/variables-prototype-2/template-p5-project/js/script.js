/**
 * Destruction
 * Luca Garreffa
 * 
 * explode planets
 */

"use strict";

/**
 *making myself a canvas
*/
function setup() {
    createCanvas(500, 500);
}
let spaceship = {
    x : 250,
    y : 250,
    
}
let planetred = {
    x :100,
    y :100,
    size : 50,
    color : "rgb(255, 0, 0)",
}
let planetgreen = {
    x :400,
    y :400,
    size : 50,
    color : "rgb(0, 255, 0)",
}
let planetblue = {
    x :300,
    y :200,
    size : 50,
    color : "rgb(0, 0, 255)",
}

/**
 *time to create some stars and planets
*/
function draw() {

background("rgb(13, 4, 42)");
let explode = dist(mouseX, mouseY, planetred.x, planetred.y);
let explode2 = dist(mouseX, mouseY, planetgreen.x, planetgreen.y);
let explode3 = dist(mouseX, mouseY, planetblue.x, planetblue.y);
//what happens when the spacehip gets close
if (explode < 105){
    planetred.x = random(95,105,true);
}
if (explode < 60){
    planetred.color = "rgb(244, 244, 249)";
}
if (explode < 30){
    planetred.size = 0;
}
if (explode2 < 105){
    planetgreen.x = random(395,405,true);
}
if (explode2 < 60){
    planetgreen.color = "rgb(244, 244, 249)";
}
if (explode2 < 30){
    planetgreen.size = 0;
}
if (explode3 < 105){
    planetblue.x = random(295,305,true);
}
if (explode3 < 60){
    planetblue.color = "rgb(244, 244, 249)";
}
if (explode3 < 30){
    planetblue.size = 0;
}
//spaceship
spaceship.x = mouseX-25;
spaceship.y = mouseY-5;
push();
fill("rgb(177, 72, 123)");
circle(spaceship.x+25, spaceship.y, 40)
pop();
push();
fill("rgb(100, 193, 205)");
rect(spaceship.x, spaceship.y, 50, 10)
pop();

//the stars
circle(170, 90, 5)
circle(250, 100, 5)
circle(500, 260, 5)
circle(350, 200, 5)
circle(450, 160, 5)
circle(250, 250, 5)
circle(90, 170, 5)
circle(100, 250, 5)
circle(260, 500, 5)
circle(200, 350, 5)
circle(160, 450, 5)
circle(400, 350, 5)
circle(65, 370, 5)

//the planets
push();
fill(planetred.color);
circle(planetred.x, planetred.y, planetred.size)
fill(planetgreen.color);
circle(planetgreen.x, planetgreen.y, planetgreen.size)
fill(planetblue.color);
circle(planetblue.x, planetblue.y, planetblue.size)
pop();

//trying to reset the game
if (mouseIsPressed){
    console.log("mouse was pressed")
    planetred.x = 100;
    planetred.y = 100;
    planetred.size = 50;
    planetred.color = "rgb(255, 0, 0)";
    planetgreen.x = 400;
    planetgreen.y = 400;
    planetgreen.size = 50;
    planetgreen.color = "rgb(0, 255, 0)";
    planetblue.x = 300;
    planetblue.y = 200;
    planetblue.size = 50;
    planetblue.color = "rgb(0, 0, 255)";
}   
}
