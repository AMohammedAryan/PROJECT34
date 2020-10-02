//Create variables here

var Dog, dog, happyDog, database, foodS, foodStock;

function preload()
{
  //load images here
  
  dog = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);

  database = firebase.database();

  foodStock = database.ref('Food');
  foodStock.on("value", readFoodStock);
  
  Dog = createSprite(200, 200, 50, 50);

  Dog.addImage(dog);
  Dog.scale = 0.5;

}


function draw() {  
  background(46, 139, 87);

  textSize(20);
  fill("black");
  text(foodStock, 250, 150);

  if(keyWentDown(UP_ARROW)){

    foodStock = foodStock - 1;
    Dog.addImage(happyDog);
  }

  drawSprites();
  //add styles here

}

function readFoodStock(data){

  position = data.val();
}
