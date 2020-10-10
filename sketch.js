var car , wall
var speed , weight

function setup() {
  createCanvas(800,400);
  car = createSprite(50, 200, 50, 50);

  wall = createSprite(600,200,60,400)
  wall.shapeColor = "black"

  speed = random(55,90)
  weight = random(400,1500)

  car.velocityX = speed
  car.shapeColor = "white"
}

function draw() {
  background("blue");  
  if(wall.x - car.x <(car,width + wall.width )/2) {
    car.velocityX = 0
    carDeformation = 0.5 * weight * speed * speed /22509
    if (carDeformation > 180){
      car.shapeColor = "red"
    }

  if(carDeformation < 180 && carDeformation > 100){
    car.shapeColor = "yellow"
  }

  if(carDeformation < 100){
    car.shapeColor = "green"
  }
}

  drawSprites();
}