const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine, world

var ground

function setup() {
  createCanvas(800,400);
  
  engine = Engine.create(); //world gest created automatically, you just have to save that world in a variable
  world = engine.world;

  var options = {
    isStatic : true
  }

  ground = Bodies.rectangle(400,380,800,20,options);
  World.add(world,ground);

  console.log(ground);




}

function draw() {
  background("red");  
  Engine.update(engine);
  
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20)
}