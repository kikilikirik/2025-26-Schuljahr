import { Shape } from './shapes';

export class ShapeManager {
  private shapes: Shape[] = [];
  private container: SVGSVGElement;

  constructor(svgContainer: string = 'drawing-canvas') {
    this.container = document.getElementById(svgContainer) as unknown as SVGSVGElement;

    this.container?.addEventListener('mousedown', (event) => this.handlMouseDown(event));
    this.container?.addEventListener('mouseup', (event) => console.log('up', event));
    this.container?.addEventListener('mousemove', (event) => console.log('move', event));
    this.container?.addEventListener('mouseleafe', (event) => console.log('leafe', event));
  }

  private handlMouseDown(event: MouseEvent): void {
    const circle = new Circle(this.container);
    this.shapes.push(circle);
  }
}
