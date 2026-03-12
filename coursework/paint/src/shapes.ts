export abstract class Shape {
  constructor(
    protected svgContainer: SVGSVGElement,
    protected start: Point,
  ) {}

  public abstract updatePosition(start: Point, end: Point): void;
  public abstract contains(p: Point): boolean;
  public abstract set tempMode(isTemp: boolean);
}

export type Point = {
  x: number;
  y: number;
};

export class Circle extends Shape {
  private center: Point = { x: 0, y: 0 };
  private radius = 0;
  private circleElement: SVGCircleElement;

  constructor(
    svgContainer: SVGSVGElement,
    protected start: Point,
  ) {
    super(svgContainer, start);
    this.circleElement = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
    svgContainer.appendChild(this.circleElement);
  }

  public override contains(p: Point): boolean {
    const distance = Math.sqrt(Math.pow(p.x - this.center.x, 2) + Math.pow(p.y - this.center.y, 2));
    return distance <= this.radius;
  }

  public override updatePosition(start: Point, end: Point): void {
    this.radius = Math.sqrt(Math.pow(end.x - start.x, 2) + Math.pow(end.y - start.y, 2));

    this.center = start;

    this.circleElement.setAttribute('cy', `${start.y}`);
    this.circleElement.setAttribute('cx', `${start.x}`);
    this.circleElement.setAttribute('r', `${this.radius}`);
  }

  public override set tempMode(isTemp: boolean) {
    if (isTemp) {
      this.circleElement.classList.add('temp');
    } else {
      this.circleElement.classList.remove('temp');
    }
  }
}
export type Size = {
  width: number;
  height: number;
};

export class Rectangle extends Shape {
  private position: Point = { x: 0, y: 0 };
  private size: Size = { width: 0, height: 0 };
  private rectElement: SVGRectElement;

  constructor(
    svgContainer: SVGSVGElement,
    protected start: Point,
  ) {
    super(svgContainer, start);
    this.rectElement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
    svgContainer.appendChild(this.rectElement);
  }

  public override contains(p: Point): boolean {
    const distanceX = p.x - this.position.x;
    const distanceY = p.y - this.position.y;
    return distanceX >= 0 && distanceX <= this.size.width && distanceY >= 0 && distanceY <= this.size.height;
  }

  public override updatePosition(start: Point, end: Point): void {
    this.size = {
      width: Math.abs(end.x - start.x),
      height: Math.abs(end.y - start.y),
    };

    this.rectElement.setAttribute('x', `${Math.min(start.x, end.x)}`);
    this.rectElement.setAttribute('y', `${Math.min(start.y, end.y)}`);
    this.rectElement.setAttribute('width', `${this.size.width}`);
    this.rectElement.setAttribute('height', `${this.size.height}`);
  }

  public override set tempMode(isTemp: boolean) {
    if (isTemp) {
      this.rectElement.classList.add('temp');
    } else {
      this.rectElement.classList.remove('temp');
    }
  }
}

export class Line extends Shape {

  private startp: Point = { x: 0, y: 0 };
  private endp: Point = { x: 0, y: 0};
  
  private lineElement: SVGLineElement;

  constructor(
    svgContainer: SVGSVGElement,
    protected start: Point,
  ) {
    super(svgContainer, start);
    this.lineElement = document.createElementNS('http://www.w3.org/2000/svg', 'line');
    svgContainer.appendChild(this.lineElement);
  }

  public override contains(p: Point): boolean {
    const distanceX = p.x - this.startp.x;
    const distanceY = p.y - this.startp.y;
    return distanceX >= 0 && distanceX <= this.endp.x && distanceY >= 0 && distanceY <= this.endp.y;
  }

  public override updatePosition(start: Point, end: Point): void {
    this.startp = start;
    this.endp = end;
    this.lineElement.setAttribute('x1', `${start.x}`);
    this.lineElement.setAttribute('y1', `${start.y}`);
    this.lineElement.setAttribute('x2', `${end.x}`);
    this.lineElement.setAttribute('y2', `${end.y}`);
  }

  public override set tempMode(isTemp: boolean) {
    if (isTemp) {
      this.lineElement.classList.add('temp');
    } else {
      this.lineElement.classList.remove('temp');
    }
  }
}

export class Triangle extends Shape {

  private startp: Point = { x: 0, y: 0 };
  private endp: Point = { x: 0, y: 0};
  
  private triangleElement: SVGPolygonElement;

  constructor(
    svgContainer: SVGSVGElement,
    protected start: Point,
  ) {
    super(svgContainer, start);
    this.triangleElement = document.createElementNS('http://www.w3.org/2000/svg', 'polygon');
    svgContainer.appendChild(this.triangleElement);
  }

  public override contains(p: Point): boolean {
    const distanceX = p.x - this.startp.x;
    const distanceY = p.y - this.startp.y;
    return distanceX >= 0 && distanceX <= this.endp.x && distanceY >= 0 && distanceY <= this.endp.y;
  }

  public override updatePosition(start: Point, end: Point): void {
    this.startp = start;
    this.endp = end;
    const points = `${start.x},${end.y} ${(start.x + end.x) / 2},${start.y} ${end.x},${end.y}`;
    this.triangleElement.setAttribute('points', points);

  }

  public override set tempMode(isTemp: boolean) {
    if (isTemp) {
      this.triangleElement.classList.add('temp');
    } else {
      this.triangleElement.classList.remove('temp');
    }
  }
}