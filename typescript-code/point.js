"use strict";
exports.__esModule = true;
var Point = /** @class */ (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.draw = function () {
        console.log("hello" + this.x + " " + this.y);
    };
    Point.prototype.distance = function (anotherPoint) {
        console.log('xx');
    };
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.setX = function (value) {
        this.y = value;
    };
    return Point;
}());
exports.Point = Point;
