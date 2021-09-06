class ground{
constructor(){
    this.body = Matter.Bodies.rectangle(600,580,1200,30,{isStatic:true})
World.add(world,this.body)
}
display(){
    rect(this.body.position.x,this.body.position.y,1200,30)
}
}