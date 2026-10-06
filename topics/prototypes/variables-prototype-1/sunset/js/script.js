/**
 * Timezones
 * Luca Garreffa
 * 
 * controlling the day/night
 */

"use strict";

// the sun or moon depending how it feels
let lightsource = {
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
  r: 0,
  g: 0,
  b: 255,
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
  let sundistance = dist(mouseX, mouseY, width / 2, height / 2);
  let suncolor = map(mouseY, 0, 500, 255, 0)
  let skycolor = map(mouseY, 0, 150, 255, 200)
  //making the sky color aka time of day
  push();
  noStroke();
  sky.r = -skycolor;
  sky.g = 0;
  sky.b = skycolor;
  fill(sky.r, sky.g, sky.b);
  rect(0, 0, 500, 500);
  pop();
  //control the sun/moon
  push();
  noStroke();
  lightsource.fill.r = suncolor;
  lightsource.fill.g = suncolor;
  lightsource.fill.b = 0;
  fill(lightsource.fill.r, lightsource.fill.g, lightsource.fill.b);
  ellipse(mouseX, mouseY, lightsource.size, lightsource.size);
  pop();
  //touch grass
  push();
  noStroke();
  fill(0, 100, 0);
  rect(0, 400, 500, 100);
  pop();
}


