/* eslint-disable max-params */
import { Character } from './character-template';
import { Fighter } from './fighter';
export class Squire extends Character {
    constructor(name, family, age, servedCharacter, pelotismDegree) {
        super(name, family, age);
        this.servedCharacter = servedCharacter;
        this.pelotismDegree = this.pelotismDegreeFilter(pelotismDegree);
        if (servedCharacter instanceof Fighter) {
            this.servedCharacter = servedCharacter;
        }
    }
    characterComunication() {
        return `${this.name} dice: 'Soy un loser'`;
    }
    characterDead() {
        this.status = false;
    }
    pelotismDegreeFilter(pelotismDegree) {
        if (pelotismDegree < 0) {
            return 0;
        }
        if (pelotismDegree > 10) {
            return 10;
        }
        return pelotismDegree;
    }
}
