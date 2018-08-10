class Point{
 
   
    constructor(private x:number,private y?:number){
      
    }
    draw(){
        console.log("hello"+this.x+" "+this.y);
    }
    distance(anotherPoint:Point){

        console.log('xx');
    }
    getX(){
        return this.x;
    }
    setX(value){
        this.y=value;
    }
}

let p =new Point(1,2);

let p1:Point=new Point(4);
p.draw();
p1.draw();
p.distance(p1);