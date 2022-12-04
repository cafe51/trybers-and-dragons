import Fighter, { SimpleFighter } from '../Fighter';
import Battle from './Battle';
// import Character from '../Character';
// import Monster from '../Monster';

export default class PVE extends Battle {
  private _fighter1: Fighter;
  private _fighter2: SimpleFighter[];

  constructor(fighter1: Fighter, fighter2: SimpleFighter[]) {
    super(fighter1);
    this._fighter1 = fighter1;
    this._fighter2 = fighter2;
  }

  monstersAlive(): SimpleFighter[] {
    const a = this._fighter2.filter((m) => m.lifePoints >= 1);
    return a;
  }

  letsKillMonsters() {
    // console.log(`ainda restam ${this.monstersAlive().length} monstros`);
    this._fighter1.attack(this.monstersAlive()[0]);

    // console.log(
    //   `o lutador ataca, a vida dos montros é:
    //   ${this._fighter2.map((m) => ` ${m.lifePoints}`)}`,
    // );

    for (let i = 0; i < this.monstersAlive().length; i += 1) {
      this.monstersAlive()[i].attack(this._fighter1);

      // console.log(
      //   `o ${i + 1}o montro ataca e a vida do lutador agora é
      //   ${this._fighter1.lifePoints}`,
      // );
      if (this._fighter1.lifePoints === -1) {
        // console.log('o lutador morreu'); 
        return -1; 
      }
    } this.fight();
  }

  iAmAlive() {
    if (this.monstersAlive().length > 0) {
      this.letsKillMonsters();
    } else {
      // console.log('o lutador venceu todos os montros'); 
      return 1;
    }
  }

  fight(): number {
    if (this._fighter1.lifePoints !== -1) {
      this.iAmAlive();
    } else {
      // console.log('o lutador morreu'); 
      return -1;
    }
    return this._fighter1.lifePoints === -1 ? -1 : 1;
  }

  //   this._fighter1.attack(this._fighter2[0]);
  //   // console.log('O primeiro lutador atacou');
  //   if (this._fighter2.lifePoints === -1) {
  //     return 1;
  //   } 

  //   this._fighter2.attack(this._fighter1);
  //   // console.log('O segundo lutador atacou');
  //   if (this._fighter1.lifePoints === -1) {
  //     return -1;
  //   } this.fight();
  //   return 0;
  // }
}

// const lutador = new Character('lutador');

// // const lutador2 = new Character('lutador2');
// // const lutador3 = new Character('lutador3');
// // const lutador4 = new Character('lutador4');

// const monstro1 = new Monster();
// const monstro2 = new Monster();
// const monstro3 = new Monster();

// const montros = [monstro1, monstro2, monstro3];
// // const montros = [lutador2, lutador3, lutador4];

// // console.log(lutador);

// // console.log(montros);

// const batalha = new PVE(lutador, montros);

// lutador.levelUp();
// lutador.levelUp();
// lutador.levelUp();
// lutador.levelUp();
// lutador.levelUp();

// batalha.fight();