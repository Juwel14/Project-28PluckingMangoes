class Ground {
  constructor(x, y, width, height) {
    var options = {
        isStatic: true
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = 3000;
    this.height = 20;
    World.add(world, this.body);
  }
  display(){
    //var pos = this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(500, 590, 3000, 20);
  }
}