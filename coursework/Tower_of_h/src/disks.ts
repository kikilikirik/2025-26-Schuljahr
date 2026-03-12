export class Disks {
  button1 = document.getElementById('first') as HTMLButtonElement;
  button2 = document.getElementById('second') as HTMLButtonElement;
  button3 = document.getElementById('third') as HTMLButtonElement;
  private lastTower: number | null = null;

  constructor() {
    this.button1.addEventListener('click', () => {
      this.towerClick(1);
      console.log('first');
    });

    this.button2.addEventListener('click', () => {
      this.towerClick(2);
      console.log('second');
    });

    this.button3.addEventListener('click', () => {
      this.towerClick(3);
        console.log('third');
    });
  }

  private towerClick(tower: number) {
    if (this.lastTower !== null && tower !== this.lastTower ) {
      console.log(`moved from ${this.lastTower} to ${tower}`);

    }
    this.lastTower = tower;
  }
}
