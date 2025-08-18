// three primitive types
let strType = "rajat"; // if not specified TS will infer the type.
let strTypeExplicit: string = "rajat";
let numType: number = 1;
let boolType: boolean = true;

// any is a special type in typescript that allows for TS to be okay (no static checking)
// if you don't want any implicit any use noImplicitAny
interface Point {
  x: number;
  y: number;
  calculateDistance: (x: number, y: number) => number; // arrow function in interface
  calculateEuclideanDistance(x: number, y: number): number; //normal function in interface, I would prefer to define a method in this way.
}

const sampleResponse: Point = {
  x: 1,
  y: 2,
};

// below example, function's parameter annotation is an example of type aliasing.
// it could have been {x: number, y: number}, instead of that, we made an alias of this type.
function acceptPointsAndDoMagic(point: Point): Promise<Point> {
  return new Promise((resolve) => {
    resolve(sampleResponse);
  });
}
