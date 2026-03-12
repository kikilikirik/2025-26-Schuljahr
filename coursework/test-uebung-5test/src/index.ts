import { Game } from "./game";
const button1 = document.getElementById('1') as HTMLButtonElement;
const button2 = document.getElementById('2') as HTMLButtonElement;

const game = new Game()

button1.addEventListener('click', () => {
    console.log(1);
    game.addplates(0);
})
button2.addEventListener('click', () => {
    console.log(2);
    game.addplates(1);
})