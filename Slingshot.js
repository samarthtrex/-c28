class Slingshot{
    constructor(bodyA,pointB){
       var options={
           bodyA:bodyA,
           pointB:pointB,
           length:10,
           stiffness:0.04
       }
       this.slingshot=Constraint.create(options);
       World.add(world,this.slingshot)
    }
    display(){

        if(this.slingshot.bodyA){
            var point1=this.slingshot.bodyA.position;
            var point2=this.slingshot.pointB;
            strokeWeight(3);
            line(point1.x,point1.y,point2.x,point2.y);
        }
        
    }

    fly(){
        this.slingshot.bodyA=null;
    }
}