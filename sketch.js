const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;

var rain;


function preload(){
    
}

function setup(){
    createCanvas(480,800);

    engine = Engine.create();
    world = engine.world;
    
    rain = new Drops(random(0,480),-5);
    
}

function draw(){
  background(0,0,0);  
  rain.display();
  rain.update();
}   

