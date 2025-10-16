const svg = document.getElementById("diagram")! as unknown as SVGSVGElement;

let months = {
month1: document.getElementById("month1") as HTMLInputElement,
month2: document.getElementById("month2") as HTMLInputElement,
month3: document.getElementById("month3") as HTMLInputElement,
month4: document.getElementById("month4") as HTMLInputElement,
month5: document.getElementById("month5") as HTMLInputElement,
month6: document.getElementById("month6") as HTMLInputElement,
month7: document.getElementById("month7") as HTMLInputElement,
month8: document.getElementById("month8") as HTMLInputElement,
month9: document.getElementById("month9") as HTMLInputElement,
month10: document.getElementById("month10") as HTMLInputElement,
month11: document.getElementById("month11") as HTMLInputElement,
month12: document.getElementById("month12") as HTMLInputElement,
}

const generate = document.getElementById("generate") as HTMLButtonElement;

const threshold = document.getElementById("threshold") as HTMLInputElement;


const height = 600;
const width = 1200;

const value: string[] = [];

function generateDiagram() {
  const maxValue = 12;
  const maxHeight = 600;
 
  for (let i = 0; i < 12; i++) {
    const diagram = document.createElementNS('http://www.w3.org/2000/svg', 'rect') as SVGRectElement;
 
    const height = (months[i] / maxValue) * maxHeight;
    const y = maxHeight - height;
 
    diagram.setAttribute('x', String(i * 100));
    diagram.setAttribute('y', String(y));
    diagram.setAttribute('width', '90');
    diagram.setAttribute('height', String(height));
    diagram.setAttribute('fill', 'blue');
 
    svg.appendChild(diagram);
  }
}
 
 
generate.addEventListener('click', () => {
 
  getValues();
  generateDiagram();
});