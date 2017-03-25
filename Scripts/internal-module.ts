/// <reference path="../node_modules/@types/toastr/index.d.ts" />
//create an internally named module (and will extend any existing module named 'Shapes' as well

namespace Shapes {
    //export the rectangle on the shapes module
    export class Rectangle implements IRectangle {
        constructor (public height: number, public width: number) {}
        getArea() {
            return this.height * this.width
        }
    }

    export interface IRectangle {
        height: number;
        width: number;
        getArea(): number;
    }
}

//var myRectangle = Shapes.________ -> it cannot get at Shapes here without Shapes being exported first
var myRectangle : Shapes.IRectangle = new Shapes.Rectangle(10,5);

var area : number = myRectangle.getArea();
toastr.info("area = " + area);

//extend the shapes module
namespace Shapes {
    export class Circle {
        constructor (public radius: number) {}
    }
}