
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint=Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];

function setup() {
	createCanvas(800,800);

	engine = Engine.create();
	world = engine.world;

	ground1=new Ground(600,795,1200,10)
	division1=new Divisions(0,700,10,185)
	division2=new Divisions(100,700,10,185)
	division3=new Divisions(200,700,10,185)
	division4=new Divisions(300,700,10,185)
	division5=new Divisions(400,700,10,185)
	division6=new Divisions(500,700,10,185)
	division7=new Divisions(600,700,10,185)
	division8=new Divisions(700,700,10,185)
	division9=new Divisions(800,700,10,185)


	particle1=new Particle(650,100,10)

	for (var j = 15; j <= width; j = j + 50){
		plinkos.push(new Plinko(j, 75));
	  }
	  for (var j = 45; j <= width - 10; j = j + 50){
		plinkos.push(new Plinko(j, 175));
	  }
	  for (var j = 15; j <= width; j = j + 50){
		plinkos.push(new Plinko(j,275));
	  }
	  for (var j = 45; j <= width - 10; j = j + 50){
		plinkos.push(new Plinko(j, 375));
	  }
	
}


function draw() {
	background("black");
	Engine.update(engine);


	if (frameCount % 60 === 0){
		particles.push(new Particle(random(width/2-20, width/2+20), 10, 10));
	  }

	  
  for (var k = 0; k < particles.length; k++){
    particles[k].display();
  }
	ground1.display()
	division1.display();
	division2.display();
	division3.display()
	division4.display();
	division5.display();
	division6.display()
	division7.display();
	division8.display();
	division9.display();



	particle1.display();
	
	

	for (var j = 0; j < plinkos.length; j++){
		plinkos[j].display();
	  }
 
	
}

