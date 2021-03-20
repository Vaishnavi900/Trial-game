var ballon;

function setup(){
    database = firebase.database()
    createCanvas(500,500);
    ballon = createSprite(250,250,10,10);
    ballon.shapeColor = "blue";
    ballonref = database.ref('ballon/position')
    ballonref.on("value",reafposition,errormessage)
   
}

function draw(){
    background("white");
    if(keyDown(LEFT_ARROW)){
        updateposition(-1,0);
    }
    else if(keyDown(RIGHT_ARROW)){
        updateposition(1,0);
    }
    else if(keyDown(UP_ARROW)){
        updateposition(0,-1);
    }
    else if(keyDown(DOWN_ARROW)){
        updateposition(0,+1);
    }
    drawSprites();
}

function changePosition(x,y){
    ballon.x = ballon.x + x;
    ballon.y = ballon.y + y;
}

function readposition(data)
{
  position = data.val()
  ballon.x = position.x
  ballon.y = position.y
}

function errormessage()
{
  console.log("errorindatabase")
}

function updateposition(x,y)
{
  database.ref('ballon/position').update({

   x:position.x+x,
   y:position.y+y

  })
}