import './styles.css'
import { ShapeManager } from './shapemanager';
import { ToolSelection } from './ToolSelection';
 
const ToolSelectionWidget = new ToolSelection((toolType) => console.log(toolType));
const shapeManager = new ShapeManager();