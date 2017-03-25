//everything in this file will create a module, and it will EXTEND the global namespace (window object)
var Point = (function () {
    function Point(x, y) {
        this.x = x;
        this.y = y;
    }
    Point.prototype.doMath = function () { return this.x * this.y; };
    return Point;
}());
var p = new Point(3, 4);
var dist = p.doMath();
