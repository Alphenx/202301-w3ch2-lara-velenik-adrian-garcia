/* eslint-disable max-params */
import { Character } from './character-template.js';
export class Adviser extends Character {
    constructor(name, family, age, advised) {
        super(name, family, age);
        this.advised = advised;
    }
    characterComunication() {
        return `${this.name} dice: 'No sé por qué, pero creo que voy a morir pronto'`;
    }
    characterDead() {
        this.status = false;
    }
}
