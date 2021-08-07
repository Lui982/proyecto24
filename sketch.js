const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var stone1, rubber, hierro1;


function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    plane = new Plane(600,height,1200,20)
    hammer = new Hammer(10,100);
    stone1 = new Stone(450,550);
    hierro1 = new Hierro(610,550);
    rubber = new Rubber(810,550,40);


}

function draw(){
    background("lightBlue");
    Engine.update(engine);


    plane.display();
    hammer.display();

    stone1.display();
    rubber.display();
    hierro1.display();
 
}