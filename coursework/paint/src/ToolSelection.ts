export enum ToolType {
  CIRCLE,
  RECTANGLE,
  POINTER,
}

type ToolChangeCallback = (tool: ToolType) => void;

export class ToolSelection {

  private toolContainer: HTMLDivElement;

  constructor(private callbback: ToolChangeCallback, toolContainerId: string = 'tool-container') {
    this.toolContainer = document.getElementById(toolContainerId) as HTMLDivElement;

    this.toolContainer.appendChild(this.createToolButton(ToolType.POINTER, 'Pointer'));
    this.toolContainer.appendChild(this.createToolButton(ToolType.CIRCLE, 'Circle'));
    this.toolContainer.appendChild(this.createToolButton(ToolType.RECTANGLE, 'Rectangle'));
  }

  private createToolButton(toolType: ToolType, label: string, isSelected: boolean = false): HTMLButtonElement {
    const button = document.createElement('button');
    button.innerText = label;
    button.addEventListener('click', () => {
        this.unselectAll();
        button.className = 'selected';
        this.callbback(toolType);
    });
    if (isSelected) {button.className= 'selected';}
    return button;
  }

  private unselectAll (){
    for (const child of this.toolContainer.children){
        child.className = '';
    }
  }
}
