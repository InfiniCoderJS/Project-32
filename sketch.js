const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var ground1, ground2, ground3, ground4 
var  division1, division2, division3, division4, division5
var particles = [];
var plinkos = [];

function preload() {
    //getBackgroundImg();
}

function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
   
    ground1 = new Ground(600,height,1200,20);
    ground2 = new Ground(600,0,1200,20);
    ground3 = new Ground(0,400,20,1200);
    ground4 = new Ground(480,400,20,1200);
    
    division1 = new Division(80,678,5,300);
    division2 = new Division(160,678,5,300);
    division3 = new Division(240,678,5,300);
    division4 = new Division(320,678,5,300);
    division5 = new Division(400,678,5,300);
    
    for(var j = 40; j <= width; j = j+50){
        plinkos.push(new Plinko(j,100));
    }

   for(var q = 40; q <= width; q = q+50){
       plinkos.push(new Plinko(q,150))
   }
 
   for(var e = 40; e <= width; e = e+50){
    plinkos.push(new Plinko(e,200))
}

for(var b = 40; b <= width; b = b+50){
    plinkos.push(new Plinko(b,250));
}
    
}

function draw(){
    background("black")  
    Engine.update(engine);
    //strokeWeight(4);
       
     

     for(var i=0; i < plinkos.length; i++){
         plinkos[i].display()
     }

    if(frameCount%60===0){
        particles.push(new Particle(random(width/2-10,width/2+10),10,10))
    }


    ground1.display()
    ground2.display()
    ground3.display()
    ground4.display()
    
    division1.display()
    division2.display()
    division3.display()
    division4.display()
    division5.display()
    
    
    

    for(var o=0; o < particles.length; o++){
        particles[o].display()
    }
    


}





