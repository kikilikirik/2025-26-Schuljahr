export abstract class Shapes {
  abstract get description(): string;

  calculateArea(): number {
    return 0; 
  }
}

export class Rectangle extends Shapes {
  constructor(private height: number, private width: number){
    super();
  }

  get description(): string {
    return `Rectangle (Height: ${this.height}, Width: ${this.width})`;
  }
}

export class Square extends Shapes {
  constructor(private side: number){
    super();
  }

  get description(){
    return `Square (Side: ${this.side})`;
  }
}

export class Line extends Shapes{
  constructor(private length: number){
    super();
  }

  get description(){
    return `Line (Length: ${this.length})`;
  }
}