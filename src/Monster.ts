import { SimpleFighter } from './Fighter';

export default class Monster implements SimpleFighter {
  protected _lifePoints: number;
  public get lifePoints(): number {
    return this._lifePoints;
  }

  protected _strength: number;
  public get strength(): number {
    return this._strength;
  }

  constructor() {
    this._lifePoints = 85;
    this._strength = 63;
  }
  
  receiveDamage(attackPoints: number): number {
    if (attackPoints > 0) this._lifePoints -= attackPoints;
    if (attackPoints < 1) this._lifePoints -= 1;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  attack(enemy: SimpleFighter): void {
    enemy.receiveDamage(this._strength);
  }
}