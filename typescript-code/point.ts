export class Point{
 
   
    constructor(private x:number,private y?:number){
      
    }
    draw(){
        console.log("hello"+this.x+" "+this.y);
    }
    distance(anotherPoint:Point){

        console.log('xx');
    }
    get X(){
        return this.x;
    }
    set X(value){
        this.y=value;
    }
}