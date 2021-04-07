var box1,box2,box3,box4;
var ball;
var music;

function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    ball = createSprite(random(10,750),300,20,20)
    ball.shapeColor = "white";
    //create ball
    box1 = createSprite(100,590,180,20);
    box1.shapeColor = "red";

    box2 = createSprite(300,590,180,20);
    box2.shapeColor = "yellow";

    box3 = createSprite(500,590,180,20);
    box3.shapeColor = "blue";

    box4 = createSprite(700,590,180,20);
    box4.shapeColor = "green";
    //create 4 different surfaces


    ball.velocityX = 2;
    ball.velocityY = 2;
    //create box sprite and give velocity

}

function draw() {
    background(rgb(10,10,10));

    if(ball.x<0){
        music.stop();
        
        ball.velocityX = 3
    }else if(ball.x>800){
     music.stop();
     
     ball.velocityX = -3
    }




    ball.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();

    createEdgeSprites();
    //create edgeSprite


    if(box1.isTouching(ball) && ball.bounceOff(box1)){
        ball.shapeColor = "red";
    }
    
    if(box2.isTouching(ball) && ball.bounceOff(box2)){
        ball.shapeColor = "yellow";
    }
    
    if(box3.isTouching(ball) && ball.bounceOff(box3)){
        ball.shapeColor = "blue";
    }
    
    if(box4.isTouching(ball) && ball.bounceOff(box4)){
        ball.shapeColor = "green";
    }
    if (ball.y<0){
        ball.velocityY = 3
    }


    //add condition to check if box touching surface and make it box
}

