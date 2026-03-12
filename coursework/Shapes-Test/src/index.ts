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
function buildHtmlList(): void {}

document.getElementById('square')?.addEventListener('click', () => {
  const square = new Square(getRandomNumber());
  shapes.push(square);
  buildHtmlList();
});
