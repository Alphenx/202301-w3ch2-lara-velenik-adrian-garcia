import { Character } from './character-template.js';
export class King extends Character {
    constructor(name, family, age, reignYears) {
        super(name, family, age);
        this.rol = 'King';
        this.reignYears = reignYears;
    }
    characterComunication() {
        return `${this.name} dice: 'Vais a morir todos'`;
    }
    characterDead() {
        this.status = false;
    }
}
