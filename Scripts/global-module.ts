//everything in this file will create a module, and it will EXTEND the global namespace (window object)

interface IPoint {
    doMath(): number;
}

class Point implements IPoint {
    constructor (public x: number, public y: number) {}
    doMath() {return this.x * this.y}
}

var p: IPoint = new Point(3, 4);
var dist = p.doMath();