import Archetype from './Archetypes';
import { EnergyType } from '../Energy';

export default class Warrior extends Archetype {
  private _energyType: EnergyType;
  static _instance = 0;

  constructor(name: string) {
    super(name);
    this._energyType = 'stamina';
    Warrior._instance += 1;
  }

  get energyType(): EnergyType {
    return this._energyType;
  }

  static createdArchetypeInstances(): number {
    return this._instance;
  }
}