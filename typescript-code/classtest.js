"use strict";
exports.__esModule = true;
var point_1 = require("./point");
var p = new point_1.Point(1, 2);
var p1 = new point_1.Point(4);
console.log(p1.getX());
p.draw();
p1.draw();
p.distance(p1);
