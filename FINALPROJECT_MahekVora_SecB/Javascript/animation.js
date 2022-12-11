function setup() {
    createCanvas(1000, 800);
    background(220);
  }
  
  function draw() {
    
    
    fill("lightblue")
    rect(frameCount/3+200,300,100,70,70);
    fill("pink")
    rect(mouseX+100, 100,200,100);
    fill("olive")
    rect(mouseX-50, 90,100,100);
    fill("rgb(255,255,181)")
    rect(mouseX/2, 25,50,50);
    //fill("rgb(146,146,207)")
    if ((frameCount% 400)> 10)
    {
      fill("rgb(146,146,207)")
    }
    else
      {
        fill("rgb(111,236,149)")
      }
    rect( frameCount % 400,25,50,50)
    
    rect(25,mouseX/2,50,50,15);
    fill("rgb(212,141,212)")
    circle(25, 400-frameCount/2, 10+frameCount/20)
    fill("rgb(90,10,10)")
    rect(frameCount/1+20,200,65,35,20)
    fill("rgb(228,214,82)")
    rect(300+50,frameCount/1,65,35,20)
    if (mouseX>200 & mouseY<100)
    {
      fill("grey")
    }
    else
      {
        fill("rgb(111,236,149)")
      }
    rect( frameCount % 400,25,50,50)
    
    if (mouseIsPressed === true)
      {
        if(mouseX < 200 && mouseY < 200)
          {
            fill("red")
          }
        else if( mouseX > 200 && mouseY < 200)
          {
            fill("blue")
          }
        else if (mouseX < 200 && mouseY > 200)
          {
            fill("green")
          }
        else
          {
            fill("yellow")
          }
        rect (mouseX, mouseY, 25,25)
      }
   
    
  }