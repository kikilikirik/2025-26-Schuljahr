import './styles.css';

console.log('Hello World');

type Player = "red" | "yellow";
type Cellstate = Player | "empty";

class ConnectFourGame {
    private boardElement: HTMLDivElement
    private currentPlayer: Player = "red";

    constructor() {
        this.boardElement = document.getElementById("colored-rect") as HTMLDivElement;
        this.createBoardCells();
    }

    private createBoardCells(): void {
    // We create six rows and seven colums of white circles(divs)
    for(let row= 0; row < 6; row++){
        for(let colum = 0; colum < 7; colum++){
            const cell = document.createElement('div');
            cell.className = 'cell';
            this.boardElement.appendChild(cell);
        }
    }
    }

    private switchPlayer(){
        if(this.currentPlayer === "red"){
            this.currentPlayer = "yellow"
        }else{
            this.currentPlayer = "red"
        }
    }
}

const game = new ConnectFourGame();
