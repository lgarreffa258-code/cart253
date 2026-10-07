/**
 * sissyphus
 * Luca Garreffa
 *
 * pushing rock i named excalibur up a hill
 */


let winner = false
const Excalibur = {
    x: 200,
    y: 200,
    size: 100,
    fill: "#9b7c7c"
};
const Hand = {
    x: undefined,
    y: undefined,
    size: 75,
    fill: "#000000"
};
const Win = {
    //win area
    x: 200,
    y: 50,
    size: 50

}
/**
 * Create the canvas
 */
function setup() {
    createCanvas(400, 400);
}
/**
 * move excalibur and hand, check for overlap
 */
function draw() {
    background("#237010");
    // Move hand
    moveHand();
    // move excalibur
    moveExcalibur();
    //stop Excalibur
    stopExcalibur();
    // Draw the hand and excalibur
    drawHand();
    drawExcalibur();
    win();
}
/**
 * Sets the hand position to the mouse position
 */
function moveHand() {
    Hand.x = mouseX;
    Hand.y = mouseY;
}
/**
 * Displays the hand circle
 */
function drawHand() {
    push();
    noStroke();
    fill(Hand.fill);
    ellipse(Hand.x, Hand.y, Hand.size);
    pop();
}
/**
 * Displays the excalibur circle
 */
function drawExcalibur() {
    push();
    noStroke();
    fill(Excalibur.fill);
    ellipse(Excalibur.x, Excalibur.y, Excalibur.size);
    pop();
}
function stopExcalibur() {
    const d = dist(Excalibur.x, Excalibur.y, Win.x, Win.y);
    const overlap = (d < Win.size / 2);
    console.log(overlap)
    if (overlap) {
        winner = true
    }
}
function win() {
    if (winner === true) {
        push()
        fill("yellow")
        textSize(32)
        text("You Win!", 150, 200)
        pop()
    }
}
function moveExcalibur() {
    //distance between excalibur and hand
    const d = dist(Hand.x, Hand.y, Excalibur.x, Excalibur.y);
    const overlap = (d < Hand.size / 2 + Excalibur.size / 2);
    let positiondifferncex = Hand.x - Excalibur.x
    let positiondifferncey = Hand.y - Excalibur.y
    if (winner === false) {
        if (positiondifferncex < -2) {
            Excalibur.y = Excalibur.y + 2
        }
        if (positiondifferncex > 2) {
            Excalibur.y = Excalibur.y + 2
        }
        if (positiondifferncex = 0) {
            Excalibur.y = Excalibur.y - 1
        }
        if (overlap) {
            let positiondifferncex = Hand.x - Excalibur.x
            let positiondifferncey = Hand.y - Excalibur.y

            if (positiondifferncey < 0) {
                Excalibur.y = Excalibur.y + 0
            }
            if (positiondifferncey > -1) {
                Excalibur.y = Excalibur.y - 1
            }
        }
    }
    if (winner === true) {
        Excalibur.x = Win.x
        Excalibur.y = Win.y
    }
}







