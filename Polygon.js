  
class Polygon {
    constructor(x, y, radius){
        var options = {
            isStatic : true,
            restitution : 0.3,
            friction: 0.5,
            density: 1.2
        }
        this.body = Bodies.circle(x, y, radius);
        this.radius = radius;

        World.add(world, this.body);

        this.trajectory = [];
    }
    display() {
        if(this.body.velocity.x > 10 && this.body.position.x > 200){
            var position = [this.body.position.x, this.body.position.y];
            this.trajectory.push(position);
          }
      
        var pos = this.body.position;
        fill("brown");
        ellipseMode(CENTER);
        ellipse(pos.x, pos.y, this.radius, this.radius);
    }    
}