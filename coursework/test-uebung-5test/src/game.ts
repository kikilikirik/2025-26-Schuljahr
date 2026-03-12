export class Game {
  private stacks: [Disk[], Disk[]] = [[], []];
  private selected: 0 | 1 | null = null;
  constructor() {
    for (let i = 0; i < 4; i++) {
      this.stacks[0].push(new Disk(100, 300 - 40 * i));
    }
  }

  addplates(lane: 0 | 1) {
    if (this.selected === null) {
      this.selected = lane;
      return;
    }

    const from = this.selected;
    const to = lane;
    this.selected = null;

    if (from === to) {
      return;
    }

    const disk = this.stacks[from].pop();
    if (!disk) {
      return;
    }
    const length = this.stacks[to].length
    const y = 300 - 40 * length;
    const x = 100 + to * 200;

     disk.updatePos(x, y);
    this.stacks[to].push(disk);


}
   

}

export class Disk {
  private svg = document.getElementById('svg') as unknown as SVGSVGElement;

  private rectelement: SVGRectElement;
  private y: number;
  private x: number;

  constructor(x: number, y: number) {
    this.x = x;
    this.y = y;
    this.rectelement = document.createElementNS('http://www.w3.org/2000/svg', 'rect');

    this.rectelement.setAttribute('x', this.x.toString());
    this.rectelement.setAttribute('y', this.y.toString());
    this.rectelement.setAttribute('width', '100');
    this.rectelement.setAttribute('height', '30');
    this.rectelement.setAttribute('fill', '#60A5FA');

    this.svg.appendChild(this.rectelement);
  }

   public updatePos(x: number, y: number) {
    this.x = x;
    this.y = y;

    this.rectelement.setAttribute('x', `${this.x}`);
    this.rectelement.setAttribute('y', `${this.y}`);
  }
}

