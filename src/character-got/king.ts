import { Character } from './character-template.js';

export class King extends Character {
  reignYears;
  rol = 'King';
  constructor(name: string, family: string, age: number, reignYears: number) {
    super(name, family, age);
    this.reignYears = reignYears;
  }

  characterComunication() {
    return `${this.name} dice: 'Vais a morir todos'`;
  }
  characterDead() {
    this.status = false;
  }
}
