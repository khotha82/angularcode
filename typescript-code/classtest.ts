import {Point} from './point'

let p =new Point(1,2);

let p1:Point=new Point(4);
console.log(p1.getX());
p.draw();
p1.draw();
p.distance(p1);