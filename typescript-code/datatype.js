function doSomething() {
    for (var i = 0; i < 5; i++) {
        console.log(i);
    }
}
doSomething();
var count = 2;
var abc = 'abc';
var check = true;
var names = 'abc';
var k = [1, 2, 3];
var ColorRed = 0;
var ColorBlue = 1;
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["blue"] = 1] = "blue";
    Color[Color["red"] = 2] = "red";
})(Color || (Color = {}));
;
var testColor = Color.blue;
console.log(count);
console.log(names);
