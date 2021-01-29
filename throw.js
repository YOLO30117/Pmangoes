class Throw{
    constructor(bobo,pointB){
        var option ={
            bodyA:bobo,
            pointB:pointB,
            stiffness:0.01,
            length:10
        }
        this.pointB = pointB;
        this.throw1 = Matter.Constraint.create(option)
        World.add(world,this.throw1)
    }
    fly(){
        this.throw1.bodyA = null
    }
    pheko(bb){
        this.throw1.bodyA = bb
    }
    display(){
        if(this.throw1.bodyA){
            var posA = this.throw1.bodyA.position;
            var posB = this.pointB
            line(posA.x,posA.y,posB.x,posB.y)
        }
    }
}