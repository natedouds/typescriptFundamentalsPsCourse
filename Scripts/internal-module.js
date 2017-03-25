/// <reference path="../node_modules/@types/toastr/index.d.ts" />
//create an internally named module (and will extend any existing module named 'Shapes' as well
var Shapes;
(function (Shapes) {
    //export the rectangle on the shapes module
    var Rectangle = (function () {
        function Rectangle(height, width) {
            this.height = height;
            this.width = width;
        }
        Rectangle.prototype.getArea = function () {
            return this.height * this.width;
        };
        return Rectangle;
    }());
    Shapes.Rectangle = Rectangle;
})(Shapes || (Shapes = {}));
//var myRectangle = Shapes.________ -> it cannot get at Shapes here without Shapes being exported first
var myRectangle = new Shapes.Rectangle(10, 5);
var area = myRectangle.getArea();
toastr.info("area = " + area);
//extend the shapes module
(function (Shapes) {
    var Circle = (function () {
        function Circle(radius) {
            this.radius = radius;
        }
        return Circle;
    }());
    Shapes.Circle = Circle;
})(Shapes || (Shapes = {}));