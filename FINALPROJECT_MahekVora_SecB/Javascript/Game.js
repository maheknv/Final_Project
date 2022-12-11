let Hslider, Vslider, sldWidth, sldHeight, sldCorner, RdShape, CPShape1, CPShape2, param1, param2


function setup() {
  createCanvas(1500, 800);
  Hslider = createSlider(1, 9, 9)
  Hslider.position(610,25)
  Hslider.style(width,'160px')
  
  Vslider = createSlider(2, 10, 10)
  Vslider.position(610,50)
  Vslider.style(width,'160px')
  
  sldWidth = createSlider(1 , 100, 25)
  sldWidth.position(610, 80)
  sldWidth.style(width, '160px') 
  
  sldHeight = createSlider(1 , 100, 25)
  sldHeight.position(610, 110)
  sldHeight.style(width, '160px') 
  
  RdShape = createRadio()
  RdShape.option("Rect")
  RdShape.option("RoundRect")
  RdShape.option("Circle")
  
  RdShape.selected("Rect")
  RdShape.position(610, 150)
  RdShape.style(width, '160px')
  
  CPShape1 = createColorPicker('#B88CBE');
  CPShape1.position(610, 215);
  CPShape1.style(height,"25px")
  
  CPShape2 = createColorPicker('#EBE5B1');
  CPShape2.position(670, 215)
  CPShape2.style(height,"25px")
  
}

function draw() {
  background(220);
  text ("No. of rows", 550, 40)
  text ("No. of colums", 550, 60) 
  text (param1, 550, 95)
  text (param2, 550, 120)
    
  for (m=0 ; m<Vslider.value() ; m++)
    {
        
      for (i=0 ; i<Hslider.value() ; i++)
          { if (i%2==1 && m%2==1)
            {
              fill (CPShape1.color())
            }
            else if (i%2==0 && m%2==0)
            {
              fill (CPShape1.color())
            }
            else
            {
              fill (CPShape2.color())
            }
            if(RdShape.value()== "Rect")
              { param1 = "Width"
                param2 = "Height"
                sldHeight.show()
                rect(60*i+20,60*m,sldWidth.value() , sldHeight.value())
              }
            else if(RdShape.value()=="RoundRect")
              {  param1 = "Width"
                 param2 = "Height"
                 sldHeight.show()
                rect(60*i+20,60*m,sldWidth.value() , sldHeight.value(),10)
              }
            else
              { param1 = "Radius"
                param2 = ""
                sldHeight.hide()
                circle(60*i+50,60*m,sldWidth.value())
              }
            
          }
      
    }
}