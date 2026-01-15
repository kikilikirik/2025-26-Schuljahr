import './stales.css';
import { ToolSelection, ToolType } from './ToolSelection';
import { ShapeManager } from './shapemanager';

const toolSelectionWidget = new ToolSelection((toolType) => console.log(toolType));
const shapeManager = new ShapeManager();