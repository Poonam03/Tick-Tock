var hr, min, sec,clock,scmap;

function setup() {
  createCanvas(800,400);
 // createSprite(400, 200, 50, 50);
 angleMode(DEGREES);
}

function draw() {
  background(0); 
  hr=hour();
  min =minute();
 sec=second();
  push();
  fill(255);
  noStroke();
  text(hr+":"+min+":"+sec, 200,20);
  pop();
  translate(200,200);
  rotate(-90);
  push();
  strokeWeight(8);
  stroke(255,100,150);
  noFill();
  //arc(x,y,width.height,start arc,end arc)
  //clock=arc(200,200,300,300,0,360)----> draw full arc
  //clock=arc(200,200,300,300,0,180)----->draw half arc
  scmap=map(sec,0,60,0,360);
  clock=arc(0,0,300,300,0,scmap);
  pop();
  /*strokeWeight(4)
  stroke ( 255)
  noFill();
  ellipse(200,200,300,300)*/
  push();
  strokeWeight(8);
  stroke(150,100,255);
  noFill();
  minmap=map(min,0,60,0,360);
  clock=arc(0,0,280,280,0,minmap);
  pop();

  push();
  strokeWeight(8);
  stroke(150,255,100);
  noFill();
  //counterclockwise rotation (0 to -90; total  rotation in p5 editor is 270)
  hrmap=map(hr%12,0,11,0,360);
  clock=arc(0,0,260,260,0,hrmap);
  pop();

  push();
  rotate(scmap);
  strokeWeight(4);
  stroke(255,100,150);
  line (0,0,100,0);
  pop();

  push();
  rotate(minmap);
  strokeWeight(4);
  stroke(150,100,255);
  line (0,0,75,0);
  pop();

  push();
  rotate(hrmap);
  strokeWeight(4);
  stroke(150,255,100);
  line (0,0,50,0);
  pop();
  
  drawSprites();
}