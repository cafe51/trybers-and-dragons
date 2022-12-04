import Fighter from '../Fighter';
import Battle from './Battle';
// import Character from '../Character';

export default class PVP extends Battle {
  private _fighter1: Fighter;
  private _fighter2: Fighter;

  constructor(fighter1: Fighter, fighter2: Fighter) {
    super(fighter1);
    this._fighter1 = fighter1;
    this._fighter2 = fighter2;
  }

  fight(): number {
    // console.log(`Vida do primeiro lutador:${this._fighter1.lifePoints}`);
    // console.log(`Vida do segundo lutador:${this._fighter2.lifePoints}`);
    this._fighter1.attack(this._fighter2);
    // console.log('O primeiro lutador atacou');
    if (this._fighter2.lifePoints === -1) {
      // console.log('O segundo lutador morreu');
      // console.log(`Vida do primeiro lutador:${this._fighter1.lifePoints}`);
      return 1;
    } 

    this._fighter2.attack(this._fighter1);
    // console.log('O segundo lutador atacou');
    if (this._fighter1.lifePoints === -1) {
      // console.log('O primeiro lutador morreu');
      // console.log(`Vida do segundo lutador:${this._fighter1.lifePoints}`);
      return -1;
    } this.fight();
    // if (this._fighter1.lifePoints > 0) this.fight();
    return 0;
  }
}

// const ana = new Character('ana');
// const bruna = new Character('bruna');

// // console.log(ana);
// // console.log(bruna);
// console.log('a vida da ana é', ana.lifePoints);
// console.log('a vida da bruna é', bruna.lifePoints);
// const batalha1 = new PVP(ana, bruna);
// batalha1.fight();
// console.log('a vida da ana é', ana.lifePoints);
// console.log('a vida da bruna é', bruna.lifePoints);