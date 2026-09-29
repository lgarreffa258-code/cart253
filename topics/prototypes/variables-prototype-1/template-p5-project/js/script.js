/**
 * Title of Project
 * Luca Garreffa
 * 
 * controlling the day/night
 */

"use strict";

// the sun or moon depending how it feels
let lightsource = {
  // Position and size
  x: 200,
  y: 200,
  size: 100,
  // Colour
  fill: {
    r: 255,
    g: 225,
    b: 0,
  }
};

//the sky as time changes
let sky = {
    r : 160,
    g : 180,
    b : 200,
}
/**
 * Create the canvas
 */
function setup() {
  createCanvas(500, 500);
}

/**
 * making the landscape 
 */
function draw() {
    background(sky.r, sky.g, sky.b)
    

}
