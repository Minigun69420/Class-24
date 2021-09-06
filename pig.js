class pig{
    constructor(x,y,w,h){
        var options = {
            'restitution':0,
            'friction':1,
            'density':1.0
        }
        this.body = Matter.Bodies.rectangle(x,y,w,h,options)
    this.width = w
    this.height = h
    Matter.World.add(world,this.body)
   }
    display(){
    push()
    fill("green")    
    translate(this.body.position.x,this.body.position.y)
    rotate(this.body.angle)
    rect(0,0,this.width,this.height)
    pop()
}
}