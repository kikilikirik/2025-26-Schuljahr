const ns = 'http://www.w3.org/2000/svg';

const movement: SVGElement[][] = [[]];

export class Game {
  private svg: SVGSVGElement;

  constructor() {
    const svg = document.getElementById('svg') as unknown as SVGSVGElement;
    this.svg = svg;

    for (let i = 0; i < 3; i++) {
      const tower = document.createElementNS(ns, 'rect');
      tower.setAttribute('x', String(i * 250 + 125));
      tower.setAttribute('y', '100');
      tower.setAttribute('width', '20');
      tower.setAttribute('height', '250');
      tower.setAttribute('fill', 'gray');
      this.svg.appendChild(tower);
    }

    const colors = ['#6366F1', '#06B6D4', '#22C55E', '#EAB308'];
    for (let i = 0; i < 4; i++) {
      const disk = document.createElementNS(ns, 'rect');
      const width = 160 - i * 30;
      disk.setAttribute('x', String(125 - width / 2 + 10));
      disk.setAttribute('y', String(320 - i * 26));
      disk.setAttribute('width', String(width));
      disk.setAttribute('height', '26');
      disk.setAttribute('rx', '6');
      disk.setAttribute('fill', String(colors[i]));
      this.svg.appendChild(disk);
      movement.push(disk);
    }

    const floor = document.createElementNS(ns, 'rect');
      floor.setAttribute('x', '0');
      floor.setAttribute('y', '346');
      floor.setAttribute('width', '900');
      floor.setAttribute('height', '54');
      floor.setAttribute('fill', '#672400');
      this.svg.appendChild(floor);
  }
}


