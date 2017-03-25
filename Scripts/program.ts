/// <reference path="internal-module.ts" />
namespace Program {
    //this is like a using statement
    import Squares = Shapes.Squares;
    import Circles = Shapes.Circles;

    var rect : Squares.IRectangle = new Squares.Rectangle(2, 4);
    var area : number = rect.getArea();
    toastr.info("rectangle area = " + area);

    var circ = new Circles.Circle(55);
    toastr.info("circle radius = " + circ.radius);

}