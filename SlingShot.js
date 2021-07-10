class SlingShot {
    constructor(bodyA,pointB){
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.04,
            length:1
        }
        
        this.Sling=Constraint.create(options)
        World.add(world,this.Sling) 
    }

    attach(body){
        this.Sling.bodyA=body
    }

fly(){
    this.Sling.bodyA=null
}

display(){
    if(this.Sling.bodyA){
        
    strokeWeight(3)
    line(this.Sling.bodyA.position.x,this.Sling.bodyA.position.y,this.Sling.pointB.x,this.Sling.pointB.y)
}
}   
}