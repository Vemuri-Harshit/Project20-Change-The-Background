
var r = 0;
var g = 50;
var b=255;

// INITIALIZE ALL YOUR VARIABLES
// Ideally you would create 3 variables. red blue green or r, g, b


function setup(){

  createCanvas(1200,400);
}


function draw(){
  r = map(mouseX,0,1100,0,855);
  g = map(mouseX,0,1300,0,700);
  b = map(mouseX,0,1600,0,500);

  background(r,g,b);

  console.log(r);

  ellipse(mouseX,200,70,100);
  

}