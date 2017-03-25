/// <reference path="../node_modules/@types/toastr/index.d.ts" />
//create an internally named module (and will extend any existing module named 'Shapes' as well

namespace Shapes.Squares {
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

//extend the shapes module
namespace Shapes.Circles {
    export class Circle {
        constructor (public radius: number) {}
    }
}