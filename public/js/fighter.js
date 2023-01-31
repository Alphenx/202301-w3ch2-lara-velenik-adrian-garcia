/* eslint-disable max-params */
import { Character } from './character-template.js';
export class Fighter extends Character {
    constructor(name, family, age, weapon, skill) {
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
    skillFilter(skill) {
        if (skill < 0) {
            return 0;
        }
        if (skill > 10) {
            return 10;
        }
        return skill;
    }
}
