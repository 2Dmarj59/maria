let cor;
let CirculoX; // horizontal
let CirculoY; // vertical

function setup() {
  createCanvas(400, 400);
  background(color(100, 0, 0));
  cor = color(random(0, 255), random(0, 255), random(0, 255))
  
  CirculoX = [0, 0, 0];
  CirculoY = [random(height), random(height), random(height)];
}

function draw() {
  fill(cor);
  
 for(let contador in CirculoX) {
   circle(CirculoX[contador], CirculoY[contador],50);
   CirculoX[contador]+= random(0,3);
   CirculoY[contador]+= random(-3,3);

   if(CirculoX[contador] >= width){
     CirculoX[contador] = 0;
     CirculoY[contador] = random(height);
   }  
 }
  if(mouseIsPressed){
    cor = color(random,(0,255), random(0,255), random(0,255), random(0, 100));
  }
}
