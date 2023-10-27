function setup() {
  
    createCanvas(600, 600);
  background("lightblue");
    
  }
  
  function draw() {
    stroke ("rgb(0,0,0)");
    
    fill("white");
    
    if (mouseIsPressed)
      
    rect(mouseX, mouseY, 50, 65);
  
  }