var seeds = [];
const MAX_SEEDS = 4;
var myPoint;
var previousChoice;

function setup() {
  createCanvas(800, 600);
  angleMode(RADIANS);
  for(var i = 0; i < MAX_SEEDS; i++) {
    var angle = i * (TWO_PI / MAX_SEEDS);
    var v = p5.Vector.fromAngle(angle);
    v.mult(width / 3);
    v.add(width / 2, height / 2);
    seeds.push(v);
  }
  myPoint = createVector(0,0);

  background(50);
}


function draw() {

  // draw
  for(var i = 0; i < MAX_SEEDS; i++) {
    strokeWeight(3);
    stroke(255);
    point(seeds[i].x, seeds[i].y);
  }

  for(var k = 0; k < 100; k++) {
    // update
    var choice = floor(random(MAX_SEEDS));
    if(choice == previousChoice) continue;
    myPoint.x = lerp(myPoint.x, seeds[choice].x, 0.5);
    myPoint.y = lerp(myPoint.y, seeds[choice].y, 0.5);
    previousChoice = choice;

    // draw
    strokeWeight(3);
    stroke(255, 0, 0, 100);
    point(myPoint.x, myPoint.y);
  }

  //if(frameCount % 1000 == 0) noLoop();
}
