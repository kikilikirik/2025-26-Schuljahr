import './styles.css'
import { ShapeManager } from './shapemanager';
import { ToolSelection } from './ToolSelection';
 
const shapeManager = new ShapeManager();
const ToolSelectionWidget = new ToolSelection((toolType) => shapeManager.currentToolType = toolType);