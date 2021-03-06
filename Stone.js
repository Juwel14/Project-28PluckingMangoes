class Stone
{
  constructor(x, y, r)
	{
    var options=
    {
		isStatic:false,
		friction:1,
		density:1.2,
		restitution : 0.5
    }
    
	this.x = x;
	this.y = y;
	this.r = r
	this.image = loadImage("stone.png");
	this.body = Bodies.circle(this.x, this.y, this.r, options)
	World.add(world, this.body);

	}
	display()
	{
		var pos = this.body.position;		
		push()
		translate(pos.x, pos.y);
		//this.body.setCollider = circle(0, 0, 60);
		fill(255, 0, 255)
		imageMode(CENTER);
		ellipseMode(RADIUS)
		image(this.image, 0, 0, 60, 60)
		pop()

	}

} 