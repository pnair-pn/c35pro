var balloon, balloonImage, backgroundImage;
var database, position;

function preload() {
  backgroundImage = loadImage("images/Hot Air Ballon-01.png")
  balloonImage = loadImage("images/Hot Air Ballon-02.png")
}

function setup() {
  var canvas = createCanvas(500,500);
  balloon = createSprite(100, 200, 50, 50);
  balloon.addImage(balloonImage)
  balloon.scale = 0.3
}

function draw() {
  background(backgroundImage); 
 
    if(keyDown(LEFT_ARROW)){
        balloon.x = balloon.x - 10;
    }
    else if(keyDown(RIGHT_ARROW)){
        balloon.x = balloon.x + 10;
    }
    else if(keyDown(UP_ARROW)){
        balloon.y = balloon.y - 10;
    }
    else if(keyDown(DOWN_ARROW)){
        balloon.y = balloon.y + 10;
    }

  drawSprites();
}


