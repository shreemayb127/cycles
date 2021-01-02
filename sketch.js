var bugs = []; // Declare object instance
var counter = 0;

function setup() {
  createCanvas(800, 800);
}

function draw() {

  background(115);
  counter++;
  stroke(255, 226, 55);
  strokeWeight(10);
  line(390, 0, 390, 800);
  line(410, 0, 410, 800);
  noStroke();
  fill(20, 102, 47);
  rect(0, 0, 150, 800);
  rect(650, 0, 150, 800);

  for (var i = 0; i < bugs.length; i++) {
    bugs[i].update();
  }

  if (counter > 90) {
    var newBug = new Jitter(random(200, 600), -70);
    bugs.push(newBug);
    counter = 0;
  }

  for (var b = bugs.length - 1; b >= 0; b--) {
    if (bugs[b].counter > 3) {
      bugs.splice(b, 1);
    }
  }
}

function Jitter(x, y) {
  this.x = x;
  this.y = y;
  this.speed = 1;
  this.c = color(random(0, 255), random(0, 255), random(0, 255));
  this.update = function() {
    this.y += this.speed;

    drawBiker(this.x, this.y, this.c);
  };
}

function drawBiker(x, y, shirtColor) {
  push();
  translate(x, y);

  stroke(0);
  strokeWeight(5);
  line(0, -30, 0, 70);
  line(-15, 45, 15, 45);

  noStroke();

  fill(shirtColor);
  ellipse(0, 15, 30, 50);
  ellipse(0, 25, 40, 20);
  stroke(shirtColor);
  strokeWeight(5);
  line(-18, 25, -18, 50);
  line(18, 25, 18, 50);

  noStroke();
  fill(220);
  ellipse(0, 25, 25, 35);

  pop();
}