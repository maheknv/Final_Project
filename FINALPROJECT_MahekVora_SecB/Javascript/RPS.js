let btnRock, btnPaper, btnScissors, btnGame, btn3Game, btn5Game, btnReplay, btnExit;
let RndNumber = 0;

//variable for text
let notes= "Welcome to My Game, plz choose your option"
let result = ""
function setup() {
  createCanvas(600, 600);
  
  RndNumber = round ( random(0.5,3.5) )
  
  btnGame= createButton("Single Game")
  btnGame.position(75,190)
  btnGame.style("width","100px")
  btnGame.mousePressed(showRPS)
  //btnGame.hide
  
  btn3Game= createButton("Best of Three")
  btn3Game.position(250,190)
  btn3Game.style("width","100px")
  //btn3Game.hide
  
  btn5Game= createButton("Best of Five")
  btn5Game.position(425,190)
  btn5Game.style("width","100px")
  //btn5Game.hide
  
  btnRock= createButton("Rock")
  btnRock.position(75,190)
  btnRock.style("width","100px")
  btnRock.mousePressed(compRock)
  btnRock.hide()
  
  btnPaper= createButton("Paper")
  btnPaper.position(250,190)
  btnPaper.style("width","100px")
  btnPaper.mousePressed(compPaper)
  btnPaper.hide()
  
  btnScissors= createButton("Scissors")
  btnScissors.position(425,190)
  btnScissors.style("width","100px")
  btnScissors.mousePressed(compScissors)
  btnScissors.hide()
  
  btnReplay= createButton("New Game")
  btnReplay.position(125,350)
  btnReplay.style("width","100px")
  btnReplay.mousePressed(showRPS)
  btnReplay.hide()
  
  btnExit= createButton("Exit")
  btnExit.position(300,350)
  btnExit.style("width","100px")
  btnExit.mousePressed()
  btnExit.hide()
}

function draw() {
  background(220);
  //increase the size of the text
  
  text("My Game Rock Paper Scissor", 220, 50)
  
  text(notes, 180, 120)
  
  text(result, 150,300)
  
  text (RndNumber , 300, 300)
}

function showRPS()
{
  notes = "Please choose one out of Rock,Paper or Scissor "
  btnGame.hide()
  btn3Game.hide()
  btn5Game.hide()
  
  btnRock.show()
  btnPaper.show()
  btnScissors.show()
  
  btnReplay.hide()
  btnExit.hide()
  
  result = " "
  
  RndNumber = round ( random(0.5,3.5) )
  
}

function compRock()
{
  if(RndNumber==2)
    {
      result="You Won!"
    }
  else if (RndNumber == 3)
        {
          result = 'Computer Won !!'
        }
  else
        {
          result = "It's Tie"
        }
  hideRPS();
}

function compPaper()
{
  if(RndNumber==3)
    {
      result="You Won!"
    }
  else if (RndNumber == 1)
        {
          result = 'Computer Won !!'
        }
  else
        {
          result = "It's Tie"
        }
  hideRPS();
}

function compScissors()
{
  if(RndNumber==1)
    {
      result="You Won!"
    }
  else if (RndNumber == 2)
        {
          result = 'Computer Won !!'
        }
  else
        {
          result = "It's Tie"
        }
  hideRPS();
}

function hideRPS()
{
  btnPaper.hide()
  btnRock.hide()
  btnScissors.hide()
  
  notes = ""
  
  btnReplay.show()
  btnExit.show()
  
}