export class Point{
 
   
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