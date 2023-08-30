var runway,runwayImage,plane,planeImage,city0,city0Image,city1,city1Image


function preload(){
  runwayImage=loadImage("runway.webp")
  planeImage=loadImage("plane.png")
  city0Image=loadImage("city0.jpg")
  city1Image=loadImage("city1.1.jpg")
}

function setup() {
  createCanvas(windowWidth,windowHeight);
   runway=createSprite(windowWidth/2,windowHeight/2,width,height)

  runway.addImage(runwayImage)
  runway.scale=2.3
  runway.visible=true
  city0=createSprite(windowWidth/2,windowHeight/2,width,height)

  city0.addImage(city0Image)
  city0.scale=4.95
  city0.visible=false

  city1=createSprite(windowWidth/2,windowHeight/2,width,height)
  
  city1.addImage(city1Image)
  city1.visible=false
  city1.scale=5.2
  plane=createSprite(windowWidth/2,windowHeight/2,width,height)

  plane.addImage(planeImage)
 // runway.scale=2.3
}

function draw() {
  background("green")

  //console.log(city)
  if(keyDown("UP_ARROW")){
    plane.y=plane.y-5
    plane.scale=plane.scale-0.01
    console.log(plane.y)
    console.log(plane.scale)
  }

  if(keyDown("DOWN_ARROW")){
    plane.y=plane.y+5
    plane.scale=plane.scale+0.01
  }
  if(keyDown("LEFT_ARROW")){
    plane.x=plane.x-6.5
    
  }
  if(keyDown("RIGHT_ARROW")){
    plane.x=plane.x+6.5
    
  }
  if(plane.y<1.6 && runway.visible==true){
    runway.visible=false
    city0.visible=true
    plane.y=550
    plane.scale=1
 
  }
  
  if(plane.y<100 && city0.visible==true){
    runway.visible=false
    city0.visible=false
    city1.visible=true
    plane.y=550
    plane.scale=1

  }

   if(plane.y>625 && city1.visible==true){
    runway.visible=false
    city0.visible=true
    city1.visible=false
    plane.y=50
    plane.scale=0.1
   }
   if(plane.y>625 && city0.visible==true){
    runway.visible=true
    city0.visible=false
    plane.scale=0.25
    plane.y=50
   }
  drawSprites();
}

