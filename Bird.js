class Bird extends baseclass{
    constructor(x, y) {
    
     
      super(x, y, 50, 50);
      
      this.image= loadImage("sprites/bird.png")
    }
    display(){
      var pos =this.body.position;
      
      super.display();
      
    }
  };