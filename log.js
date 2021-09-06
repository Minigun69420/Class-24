class log{
    constructor(x,y,w){
        var options = {
            'restitution':0,
            'friction':1,
            'density':1.0
        }
        this.body = Matter.Bodies.rectangle(x,y,w,15,options)
    Matter.World.add(world,this.body)
    this.width = w
}
display(){
    push()
    fill("brown")
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    rect(0,0,this.width,15)
    pop()
    }
}