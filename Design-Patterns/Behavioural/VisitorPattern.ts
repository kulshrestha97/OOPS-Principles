// Visitor Pattern helps in following the open closed principle as in visitor pattern 
// we are not changing the core business logic of the class, just to accomodate more functionality
// instead we create visitor classes that implements a base visitor.
// we also create product interface that has an accept method which takes visitor base interface instance 

interface ShapeVisitor {
  visitDot(shape: Dot);
  visitCircle(shape: Circle);
  visitRectangle(shape: Rectangle);
}
interface Shape {
  accept(visitor: ShapeVisitor);
}

class Explainer implements ShapeVisitor {
  visitCircle(shape: Circle) {
    const radius = shape.getRadius();
    console.log(`This is a circle of radius - ${radius}`);
  }
  visitDot(shape: Dot) {
    console.log("This is a dot");
  }
  visitRectangle(shape: Rectangle) {
    const [length, width] = [shape.getLength(), shape.getWidth()];
    console.log(
      `This is a rectangle of length - ${length} and width - ${width}`
    );
  }
}
class PriceCalculator implements ShapeVisitor {
  visitDot(shape: Dot) {
    console.log({ shape });
    console.log(1);
    
  }
  visitRectangle(shape: Rectangle) {
    const price = shape.calculateArea() * 12;
    console.log({price});
    
  }
  visitCircle(shape: Circle) {
    const price = shape.calculateArea() * 11;
    console.log({price});
  }
}

class Rectangle implements Shape {
  private length: number;
  private width: number;
  constructor(length: number, width: number) {
    this.length = length;
    this.width = width;
  }
  accept(visitor: ShapeVisitor) {
    visitor.visitRectangle(this);
  }
  calculateArea() {
    return this.length * this.width;
  }
  getLength() {
    return this.length;
  }
  getWidth() {
    return this.width;
  }
}
class Circle implements Shape {
  private radius: number;
  constructor(radius: number) {
    this.radius = radius;
  }
  accept(visitor: ShapeVisitor) {
    visitor.visitCircle(this);
  }
  getRadius() {
    return this.radius;
  }
  calculateArea() {
    return Math.PI * Math.pow(this.radius, 2);
  }
}
class Dot implements Shape {
  accept(visitor: ShapeVisitor) {
    visitor.visitDot(this);
  }
}

const dot = new Dot();
const rectangle = new Rectangle(12, 32);
const circle = new Circle(12);
const priceCalculator = new PriceCalculator();
const explainer = new Explainer();

// Visitor 1
dot.accept(priceCalculator);
rectangle.accept(priceCalculator);
circle.accept(priceCalculator);
// Visitor 2
dot.accept(explainer);
rectangle.accept(explainer);
circle.accept(explainer);
