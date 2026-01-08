abstract class Shapes {
  abstract get description(): string;

  calculateArea(): number {
    return 0; 
  }
}

class Rectangle extends Shapes {
  constructor(private width: number, private height: number) {
    super();
  }
  get description(): string {
    return `Rectangle (width: ${this.width}, height: ${this.height})`;
  }

  calculateArea(): number {
    return this.width * this.height;
  }
}

class Square extends Rectangle {
  constructor(private side: number) {
    super(side, side);
  }
  get description(): string {
    return `Square (side: ${this.side})`;
  }
}
class Line extends Shapes {
  constructor(private length: number) {
    super();
  }

  get description(): string {
    return `Line (length: ${this.length})`;
  }
}
export { Shapes, Rectangle, Square, Line };