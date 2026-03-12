import { Circle, Shape, Point, Rectangle, Line} from './shapes';
import { ToolType } from './ToolSelection';

type DrawingState = {
  currentTool: Shape;
  start: Point;
};

export class ShapeManager {
  private shaped: Shape[] = [];
  private container: SVGSVGElement;
  private currentTool: DrawingState | undefined = undefined;
  public currentToolType = ToolType.CIRCLE;

  constructor(svgContainerId: string = 'drawing-canvas') {
    this.container = document.getElementById(svgContainerId) as unknown as SVGSVGElement;
    this.container?.addEventListener('mousedown', (event) => this.handleMouseDown(event));
    this.container?.addEventListener('mouseup', (event) => this.handleMouseUp(event));
    this.container?.addEventListener('mousemove', (event) => this.handleMouseMove(event));
    this.container?.addEventListener('mouseleave', (event) => this.handleMouseLeave(event));
    this.container?.addEventListener('mouseenter', (event) => this.handleMouseMove(event));


  }
  
  private handleMouseDown(event: MouseEvent): void {
    if (this.currentToolType === ToolType.POINTER) {
      this.handleMousePinterMouseDown(event);
    }else{
      this.startDrawingState(event);
    }
  }
  
  private handleMousePinterMouseDown(event: MouseEvent): void {
    const clickPoint = this.getSVGCoordinates(event);
    for (let i = this.shaped.length - 1; i >= 0; i--) {
      const shape = this.shaped[i];
      if (shape.contains(clickPoint)) {
        console.log('Shape clicked:', shape);
        // You can add more logic here to handle the selected shape
        break; // Stop after the first shape is found
      }
    }

   

  }
  
  
  private startDrawingState(event: MouseEvent): void {
    const start = this.getSVGCoordinates(event);

    let newShape: Shape;
    if (this.currentToolType === ToolType.CIRCLE) {
      newShape = new Circle(this.container, start);
    
    }else if (this.currentToolType === ToolType.RECTANGLE) {
      newShape = new Rectangle(this.container, start);
    }else {
      newShape = new Line(this.container, start);
    }
    newShape.tempMode = true;
    this.shaped.push(newShape);
    this.currentTool = {
      currentTool: newShape,
      start: start,
    };
  }
  private handleMouseUp(event: MouseEvent): void {

    
    if (this.currentTool){
    this.currentTool!.currentTool.tempMode = false;
    this.currentTool = undefined;

  }
}

  private handleMouseMove(event: MouseEvent): void {

    if (this.currentTool) {
      this.currentTool.currentTool.updatePosition(
        this.currentTool.start,
        this.getSVGCoordinates(event)
      );
  }}

  private handleMouseLeave(event: MouseEvent): void {

    if (this.currentTool){
    this.currentTool!.currentTool.tempMode = false;
    this.currentTool = undefined;

  }
}


  private getSVGCoordinates(event: MouseEvent): Point {
    // This method converts mouse event coordinates to SVG coordinates
    // (position relatSVGCoortive to the SVG's left/top, taking viewBox into account)
    // ⚠️ This method is a little bit tricky due to SVG coordinate systems.
    // Don't worry about the details for now. Just use it as a template
    // whenever you need to convert mouse event coordinates to SVG coordinates.
    // If you want to fully understand it, use your favorite AI assistant
    // to explain.

    // Mouse events give us screen coordinates (pixels from window edge)
    // But we need SVG coordinates (units from viewBox origin)
    const svgPoint = this.container.createSVGPoint();
    svgPoint.x = event.clientX;
    svgPoint.y = event.clientY;

    // Transform: screen space → SVG user space
    const transformed = svgPoint.matrixTransform(this.container.getScreenCTM()?.inverse());

    return {
      x: transformed?.x || 0,
      y: transformed?.y || 0,
    };
  }
}
