interface Point{
    x:number,
    y:number;
}

let draw=function(point:Point){
    console.log('drawing '+point.x+" "+point.y);
}
draw({x:3,y:5});