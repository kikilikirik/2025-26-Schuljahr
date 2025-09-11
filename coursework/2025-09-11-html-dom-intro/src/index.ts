const counterbutton = document.getElementById("counterButton") as HTMLButtonElement;
const counter = document.getElementById(`counter`) as HTMLParagraphElement;
const counterdegrease = document.getElementById("count") as HTMLButtonElement;

let clickcounter = 0;

counterbutton.addEventListener('click', () => {
    clickcounter++;
    counter.textContent = `${clickcounter}`
    if (clickcounter >= 0){
        counter.style.color = 'black';
    }
})
counterdegrease.addEventListener('click', () => {
    clickcounter --;
    counter.textContent = `${clickcounter}` 
    if (clickcounter < 0){
        counter.style.color = 'red';
    }
})