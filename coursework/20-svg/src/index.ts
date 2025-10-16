const svg = document.getElementById('svg') as unknown as SVGCircleElement;
const clear = document.getElementById('clear all') as HTMLButtonElement;
const add = document.getElementById('add') as HTMLButtonElement;
const select = document.getElementById('select') as HTMLSelectElement;

add.addEventListener('click', () => {
  if(select.value ='circle'){
     const circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle') as SVGCircleElement;
   const r = Math.random()* 60;
   const cx = Math.random() * (600 - r * 2) + r;
   const cy = Math.random() * (600 - r * 2) + r;
   const col1 = Math.random() * 255;
   const col2 = Math.random() * 255;
   const col3 = Math.random() * 255;
   circle.setAttribute('cx', String(cx));
   circle.setAttribute('cy', String(cy));
   circle.setAttribute('r', String(r));
   circle.setAttribute('fill', `rgb(${col1}, ${col2}, ${col3})`);
   
  svg.appendChild(circle);
  
  }
})