class Cannon {
    constructor(x,y,width,height,angle){
        var options={
            isStatic:true
        }
        this.width = width;
        this.height = height;
        this.angle = angle;
        //this.bodies = Bodies.rectangle
    }

    display(){
       push()
       translate(this.x,this.y);
       rotate(this.angle);
       rect(-10,-20,this.width,this.height,arc);
       pop()
       arc(this.x-40,this.y+50,180,230,PI,TWO_PI);

    }
}