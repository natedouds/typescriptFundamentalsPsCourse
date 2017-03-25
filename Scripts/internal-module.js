/// <reference path="../node_modules/@types/toastr/index.d.ts" />
//create an internally named module (and will extend any existing module named 'Shapes' as well
var Shapes;
(function (Shapes) {
    var Squares;
    (function (Squares) {
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
        Squares.Rectangle = Rectangle;
    })(Squares = Shapes.Squares || (Shapes.Squares = {}));
})(Shapes || (Shapes = {}));
//var myRectangle = Shapes.________ -> it cannot get at Shapes here without Shapes being exported first
//extend the shapes module
(function (Shapes) {
    var Circles;
    (function (Circles) {
        var Circle = (function () {
            function Circle(radius) {
                this.radius = radius;
            }
            return Circle;
        }());
        Circles.Circle = Circle;
    })(Circles = Shapes.Circles || (Shapes.Circles = {}));
})(Shapes || (Shapes = {}));
