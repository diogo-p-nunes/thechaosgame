var seeds;
var colors;
var MAX_SEEDS;
var rule = 1;
var myPoint;
var previousChoice, secondPreviousChoice;

function setup() {
  createCanvas(800, 600);
  angleMode(RADIANS);
  updateMaxSeeds(3);
  myPoint = createVector(0,0);
}

function resetDrawing() {
  background(50);
}

function updateMaxSeeds(value) {
  background(50);
  MAX_SEEDS = value;
  seeds = [];
  colors = [];
  previousChoice = null;
  secondPreviousChoice = null;
  for(var i = 0; i < MAX_SEEDS; i++) {
    var angle = i * (TWO_PI / MAX_SEEDS);
    var v = p5.Vector.fromAngle(angle);
    v.mult(width / 3);
    v.add(width / 2, height / 2);
    seeds.push(v);
    colors.push(color(random(255), random(255), random(255)));
  }
}

function draw() {
  // draw
  for(var i = 0; i < MAX_SEEDS; i++) {
    strokeWeight(3);
    stroke(255);
    point(seeds[i].x, seeds[i].y);
  }

  for(var k = 0; k < 200; k++) {
    // update
    var choice = floor(random(MAX_SEEDS));

    switch(rule){
      case 1:
        // any choice is good
        break;
      case 2:
        // cannot equal the previous
        if(choice == previousChoice) {
          continue;
        }
        previousChoice = choice;
        break;
      case 3:
        // cannot equal the previous choice clock-wise
        if(choice == previousChoice) {
          continue;
        }
        previousChoice = (choice + 1) % MAX_SEEDS;
        break;
      case 4:
        // cannot equal the previous choice clock-wise
        if(choice == previousChoice) {
          continue;
        }
        previousChoice = (choice + 2) % MAX_SEEDS;
        break;
    }
      
    myPoint.x = lerp(myPoint.x, seeds[choice].x, 0.5);
    myPoint.y = lerp(myPoint.y, seeds[choice].y, 0.5);
    

    // draw
    strokeWeight(1);
    stroke(colors[choice]);
    point(myPoint.x, myPoint.y);
  }
}
