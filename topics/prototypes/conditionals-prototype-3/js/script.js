/**
 * your followed
 * Luca Garreffa
 * 
 * make man who is a circle follow you, you lose if he catches you,
 * and it tells you to RUN at the start!
 */

"use strict";

// Define the follower's attributes
let follower = {
    x: 250,
    y: 250,
    size: 40,
    speed: 0.04,
    fillColor: "#ff4444"
};

// Track game states and timer
let gameOver = false;
let startTimer = 120; // 120 frames = roughly 2 seconds at 60fps

/**
 * create the canvas
*/
function setup() {
    createCanvas(500, 500);
}

/**
 * make the man follow you and check for game over
*/
function draw() {
    // 1. CHECK GAME STATE: If player already lost, stop running game logic
    if (gameOver) {
        drawGameOverScreen();
        return;
    }

    background("#222222"); // Dark background

    // 2. TIMED MOVEMENT AND RUN DISPLAY
    if (startTimer > 0) {
        // Countdown the timer frame by frame
        startTimer--;

        // Display giant "RUN" text over the screen
        push();
        fill("#ffcc00"); // Bright warning yellow
        textAlign(CENTER, CENTER);
        textSize(80);
        textStyle(BOLD);
        text("RUN!", width / 2, height / 2);
        pop();

        // Note: The follower's movement code is skipped while startTimer is active,
        // giving the player a 2-second head start to move away!
    } else {
        // Timer is finished! Move the follower toward the mouse coordinates
        follower.x = lerp(follower.x, mouseX, follower.speed);
        follower.y = lerp(follower.y, mouseY, follower.speed);
    }

    // 3. COLLISION CHECK: Has the circle caught the mouse pointer?
    let d = dist(follower.x, follower.y, mouseX, mouseY);
    if (d < follower.size / 2) {
        gameOver = true;
    }

    // 4. RENDER: Draw the follower circle
    push();
    noStroke();
    fill(follower.fillColor);
    ellipse(follower.x, follower.y, follower.size);
    pop();
}

/**
 * Displays a red screen with game over text
 */
function drawGameOverScreen() {
    background("#7a0000"); // Dark red screen

    fill("#ffffff");
    textAlign(CENTER, CENTER);

    textSize(40);
    text("GAME OVER", width / 2, height / 2 - 20);

    textSize(16);
    text("The circle caught you!", width / 2, height / 2 + 20);
    text("Click anywhere to restart", width / 2, height / 2 + 50);
}

/**
 * Reset the game state if the player clicks after losing
 */
function mousePressed() {
    if (gameOver) {
        // Reset follower to the center
        follower.x = 250;
        follower.y = 250;

        // Reset game state and start timer flags
        gameOver = false;
        startTimer = 120;
    }
}
