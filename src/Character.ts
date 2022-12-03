import Race, { Elf } from './Races';
import Archetype, { Mage } from './Archetypes';
import Fighter from './Fighter';
import Energy from './Energy';
import getRandomInt from './utils';

export default class Character implements Fighter {
  private _name: string;
  public get name(): string {
    return this._name;
  }

  private _race: Race;
  public get race(): Race {
    return this._race;
  }

  private _archetype: Archetype;
  public get archetype(): Archetype {
    return this._archetype;
  }

  private _maxLifePoints: number;
  public get maxLifePoints(): number {
    return this._maxLifePoints;
  }

  private _lifePoints: number;
  public get lifePoints(): number {
    return this._lifePoints;
  }

  private _strength: number;
  public get strength(): number {
    return this._strength;
  }

  private _defense: number;
  public get defense(): number {
    return this._defense;
  }

  private _dexterity: number;
  public get dexterity(): number {
    return this._dexterity;
  }

  private _energy: Energy;
  public get energy(): Energy {
    return { ...this._energy };
  }

  constructor(name: string) {
    this._name = name;
    this._dexterity = getRandomInt(1, 10);
    this._race = new Elf(this._name, this._dexterity);
    this._archetype = new Mage(this._name);
    this._maxLifePoints = this._race.maxLifePoints / 2;
    this._lifePoints = this._maxLifePoints;
    this._strength = getRandomInt(1, 10);
    this._defense = getRandomInt(1, 10);
    this._energy = { 
      type_: this._archetype.energyType,
      amount: getRandomInt(1, 10),
    };
  }

  receiveDamage(attackPoints: number): number {
    const damage = attackPoints - this._defense;
    if (damage > 0) this._lifePoints -= damage;
    if (damage < 1) this._lifePoints -= 1;
    if (this._lifePoints <= 0) this._lifePoints = -1;
    return this._lifePoints;
  }

  attack(enemy: Fighter): void {
    enemy.receiveDamage(this._strength);
  }

  levelUp(): void {
    this._maxLifePoints += getRandomInt(1, 10);
    this._strength += getRandomInt(1, 10);
    this._dexterity += getRandomInt(1, 10);
    this._defense += getRandomInt(1, 10);
    if (this._maxLifePoints > this._race.maxLifePoints) {
      this._maxLifePoints = this.race.maxLifePoints;
    }
    this._lifePoints = this._maxLifePoints;
    this._energy.amount = 10;
  }

  special(enemy: Fighter): void {
    this._strength = enemy.defense + 1;
    this.attack(enemy);
  }
}
