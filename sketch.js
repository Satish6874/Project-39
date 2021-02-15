
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var ground,canvas,bg;
var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;

function preload(){
  bg = loadImage("background.png.jpg");
}

function setup() {
  canvas = createCanvas(displayWidth-20,displayHeight-30);
  rectMode(CENTER);


  engine = Engine.create();
  world = engine.world;

  for(var k = 0; k<= width; k = k + 110){
    divisions.push(new Divisions(k,height-divisionHeight/2,10,divisionHeight));
   }

   for (var j = 75; j <=width; j=j+70) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 50; j <=width-10; j=j+70) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+70) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+70) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

  ground = new Ground(displayWidth/2,displayHeight,displayWidth,20);

  Engine.run(engine);
}

function draw() {
  background(bg); 
  rectMode(CENTER);

  for(var k = 0;k < divisions.length;k++){
    divisions[k].display();
  }

  for(var i = 0;i < plinkos.length;i++){
    plinkos[i].display();
  }

  if(frameCount%100===0){
    particles.push(new Particle(random(width/2-10,width/2+10),10,10));
  }
  if(frameCount%150===0){
    particles.push(new Particle(random(width-400,width-200),10,10));
  }

  if(frameCount%200===0){
    particles.push(new Particle(random(width-500,width-600),10,10));
  }

  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  ground.display();
  
  
}