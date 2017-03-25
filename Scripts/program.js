/// <reference path="internal-module.ts" />
var Program;
(function (Program) {
    //this is like a using statement
    var Squares = Shapes.Squares;
    var Circles = Shapes.Circles;
    var rect = new Squares.Rectangle(2, 4);
    var area = rect.getArea();
    toastr.info("rectangle area = " + area);
    var circ = new Circles.Circle(55);
    toastr.info("circle radius = " + circ.radius);
})(Program || (Program = {}));
