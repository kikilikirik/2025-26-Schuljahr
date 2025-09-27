const svg = document.getElementById('svg') as unknown as SVGCircleElement;
const add = document.getElementById('add') as HTMLButtonElement;
const select = document.getElementById('select') as HTMLSelectElement;
const clear = document.getElementById('claer') as HTMLButtonElement;
const WIDTH = 600;
const HEIGHT = 400;

add.addEventListener('click', () => {
  if ((select.value ==='circle')) {
    const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle') as SVGCircleElement;
    const r = Math.random() * 50;
    const red = `${Math.random() * 255}`;
    const green = `${Math.random() * 255}`;
    const blue = `${Math.random() * 255}`;
    const circleout1 = `${Math.random() * 255}`;
    const circleout2 = `${Math.random() * 255}`;
    const circleout3 = `${Math.random() * 255}`;
    circle.setAttribute('stroke-width', `4`)
    circle.setAttribute('fill', `rgb(${red},${green},${blue})`);
    circle.setAttribute('stroke',`rgb(${circleout1},${circleout2},${circleout3})`)
    circle.setAttribute('cx', `${Math.random() * (WIDTH - r * 2) + r}`);
    circle.setAttribute('cy', `${Math.random() * (HEIGHT - r * 2) + r}`);
    circle.setAttribute('r', String(r));
    svg.appendChild(circle);
  } else if (select.value === 'rectangle') {
    const rectangle = document.createElementNS('http://www.w3.org/2000/svg', 'rect') as SVGRectElement;
    const rwidth = Math.random() * 100 ;
    const rheight = Math.random() * 90;
    const red = `${Math.random() * 255}`;
    const green = `${Math.random() * 255}`;
    const blue = `${Math.random() * 255}`;

    rectangle.setAttribute('fill', `rgb(${red},${green},${blue})`);
    rectangle.setAttribute('x', `${Math.random() * (WIDTH - rwidth)}`);
    rectangle.setAttribute('y', `${Math.random() * (HEIGHT - rheight)}`);
    rectangle.setAttribute('width', String(rwidth));
    rectangle.setAttribute('height', String(rheight));
    svg.appendChild(rectangle);
  }
});
