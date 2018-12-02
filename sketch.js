var seeds;
var MAX_SEEDS;
var rule = 1;
var myPoint;
var previousChoice;

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
  for(var i = 0; i < MAX_SEEDS; i++) {
    var angle = i * (TWO_PI / MAX_SEEDS);
    var v = p5.Vector.fromAngle(angle);
    v.mult(width / 3);
    v.add(width / 2, height / 2);
    seeds.push(v);
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
    }
      
    myPoint.x = lerp(myPoint.x, seeds[choice].x, 0.5);
    myPoint.y = lerp(myPoint.y, seeds[choice].y, 0.5);

    // draw
    strokeWeight(1);
    stroke(255, 0, 0);
    point(myPoint.x, myPoint.y);
  }
}
