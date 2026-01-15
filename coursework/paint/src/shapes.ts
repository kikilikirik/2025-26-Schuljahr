export abstract class Shape {
  constructor(protected svgContainer: SVGSVGElement) {}
}

export type Pointer = {
    x: number;
    y: number;
}

export class Circle extends Shape {
    private center: Pointer = {x: 0, y: 0};
    public radius: number = 0;
  constructor(svgContainer: SVGSVGElement) {
    super(svgContainer);
    const circleElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    svgContainer.appendChild(circleElement);
  }
}

export type Size = {
    width: number;
    height: number;
}

export class Rectangle extends Shape {

  private position: Pointer = {x: 0, y: 0};
  private size: Size = {width: 0, height: 0};

  constructor(svgContainer: SVGSVGElement) {
    super(svgContainer);
    const circleElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    svgContainer.appendChild(circleElement);
  }
}
