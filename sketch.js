
let food = [];
let numFood = 7;
let button; 
let wrds;



function preload(){
  food[0] = loadImage('cake.png')
  food[1] = loadImage('cupcake.png')
  food[2] = loadImage('chocolate.png')
  food[3] = loadImage('coffee.png')
  food[4] = loadImage('cookie.png')
  food[5] = loadImage('donut.png')
  food[6] = loadImage('cone.png')
  food[7] = loadImage('mad.png')  //can't eat icon
  food[8] = loadImage('pancake.png')
  food[9] = loadImage('waffle.png')
  food[10] = loadImage('icecream.png')
  food[11] = loadImage('pie.png')
  food[12] = loadImage('macaron.png')
  food[13] = loadImage('pudding.png')
  food[14] = loadImage('popsical.png')
  food[15] = loadImage('water.png')
  //
  foods = ["chocolate", "cupcakes", "chocolate", "coffee", "cookie", "donut", "cone","mad", "pancake", "waffle", "icecream", "pie", "macaron", "pudding", "popsical", "water"];
  
}


function setup() {
  
  var canvas = createCanvas(250, 250);
  canvas.parent ('sketch-holder');
  bgColor();
  resetSketch();
  buttonClick();
  var button = createButton('CLICK ME!');
  button.parent ('button-holder');
  button.mousePressed(bgColor)
  button.mousePressed(resetSketch);
  
  
  noLoop();
  background(255, 226, 122);
  frameRate(10);
  intText();
    
}

function bgColor() {
  let val = random(242, 220, 162);
  background(val);
}

function buttonClick(){
  
}

function draw() {
}

function resetSketch(){
  background(255, 226, 122);
  imageMode(CENTER);
  randoImg = int(random(food.length));
  
    if  (randoImg === 7){
    fill(119, 132, 168);
    textAlign(CENTER);
    text ('You cannot eat!', width*0.5, height*0.8);
  }
  
  if  (randoImg === 15){
    fill(119, 132, 168);
    textAlign(CENTER);
    text ('You are dehydrated, drink water.', width*0.5, height*0.8);
  }
  
  image(food[randoImg], width/2, height/2);

}


function intText(){
  
}










