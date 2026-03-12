import './styles.css';

import { Shapes, Rectangle, Square, Line } from './shapes';

const shapesList = document.getElementById('shapes-list') as HTMLUListElement;
const totalAreaElement = document.getElementById('total-area') as HTMLSpanElement;

// Array to maintain all shapes
const shapes: Shapes[] = [];

// Function to generate random number between 1 and 100
function getRandomNumber(min: number = 1, max: number = 100): number {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Function to build HTML list and calculate total area
function buildHtmlList(): void {
  shapesList.innerHTML = '';
  let totalArea = 0;
  shapes.forEach(shape => {
    const li = document.createElement('li');
    li.textContent = `${shape.description} - Area: ${shape.calculateArea()}`;
    shapesList.appendChild(li);
    totalArea += shape.calculateArea();
  });
  totalAreaElement.textContent = totalArea.toString();
}

document.getElementById('square')?.addEventListener('click', () => {
  const square = new Square(getRandomNumber());
  shapes.push(square);
  buildHtmlList();
});

document.getElementById('rectangles')?.addEventListener('click', () => {
  const rectangle = new Rectangle(getRandomNumber(), getRandomNumber());
  shapes.push(rectangle);
  buildHtmlList();
});

document.getElementById('line')?.addEventListener('click', () => {
  const line = new Line(getRandomNumber());
  shapes.push(line);
  buildHtmlList();
});
