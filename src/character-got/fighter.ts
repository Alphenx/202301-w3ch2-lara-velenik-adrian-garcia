/* eslint-disable max-params */
import { Character } from './character-template.js';

export class Fighter extends Character {
  weapon;
  skill;

  constructor(
    name: string,
    family: string,
    age: number,
    weapon: string,
    skill: number,
  ) {
    super(name, family, age);
    this.weapon = weapon;
    this.skill = this.skillFilter(skill);
  }

  characterComunication() {
    return `${this.name} dice: 'Primero pego y luego pregunto'`;
  }

  characterDead() {
    this.status = false;
  }

  skillFilter(skill: number) {
    if (skill < 0) {
      return 0;
    }

    if (skill > 10) {
      return 10;
    }

    return skill;
  }
}
