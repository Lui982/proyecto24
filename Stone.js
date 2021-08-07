class Stone{
  constructor(x, y) {
    var options = {
      'density':4,
      'friction': 1.0,
      'restitution':0.5
    }
    this.body = Bodies.rectangle(x, y, 20, 40, options);
    this.width = 20;
    this.height = 40;
    World.add(world, this.body);
  }
  display(){
    var pos = this.body.position;
    var angle = this.body.angle;

    push();
    translate(pos.x, pos.y);
    rotate(angle);
    strokeWeight(1);
    stroke('black');
    fill('Darkred');
    rectMode(CENTER);
    rect(0, 0, this.width, this.height);
    pop();
  }
}
