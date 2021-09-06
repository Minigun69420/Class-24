const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;
    box2 = new Box(700,300,100,100)
    box1 = new Box(950,300,100,100);
    pig1 = new pig(825,300,70,80)
    box3 = new Box(700,270,100,100)
    box4 = new Box(950,270,100,100)
    pig2 = new pig(825,270,70,80)
    log1 = new log(825,280,400)
    log2 = new log(825,260,400)
    box5 = new Box(825,250,100,100)
    log3 = new log(880,240,200)
    log4 = new log(750,240,200)
    g = new ground();
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
   box2.display();
    g.display();
    pig1.display();
    pig2.display();
    box3.display();
    box4.display();
    log1.display();
    log2.display();
    box5.display();
    log3.display();
    log4.display();
}
