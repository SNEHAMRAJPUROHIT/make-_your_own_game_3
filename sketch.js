var bg,bg2;
var play1;
var playbg;
var gameState="intro";
function preload(){
    bg=loadImage("images/bg1.png")
    bg2=loadImage("images/bg road 4.png")
}
function setup(){
    createCanvas(windowWidth,windowHeight)
    play1= createSprite(windowWidth/2+150,windowHeight/2+180,250,100);
    play1.visible=false
playbg=createSprite(windowWidth/2+270,windowHeight/2+90,800,400)
playbg.addImage(bg2)
playbg.visible==false

}
function draw(){
    background("aqua")
   
    if (gameState==="intro"){
        background("orange")
       image(bg,windowWidth/2-850,windowHeight/2-410,width,height)
       // fill("blue")
       //textSize(40)
        //text("GO CORONA GO ",windowWidth/2-150,windowHeight/2-250)
       // fill("red")
       play1.visible=false
       playbg.visible=false
      fill("yellow")
        textSize(30)
        text("π»πΌπππΎβπΌπ» πΉπ πβπΌβπΈ π βπΈπβπβπβππ",windowWidth/2-0.5,windowHeight/2+280)
        fill("purple")
        text("[ββπΌππ πΈββππ ππΌπ ππ ππππΌ]",windowWidth/2-0.5,windowHeight/2+320)
        fill("blue")
        text ("βππβπ βππΈπ ππ πππΈβπ",windowWidth/2-0.5,windowHeight/2+360)
        //text("press space to start",windowWidth/2-250,windowHeight/2+200)
      
        //button.position(800, 500,300,500);
        
        if(mousePressedOver(play1)){
            gameState="play"
        }

    }

    if(gameState=="play"){
       playbg.visible=true
        console.log(gameState)
        
    }
    drawSprites()
}
