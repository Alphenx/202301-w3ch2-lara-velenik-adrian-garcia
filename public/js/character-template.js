// export interface characterInterface {
//   name: string;
//   family: string;
//   age: number;
//   status: string;
//   serie: string;
//   rol: string;
//   characterComunication(): string;
//   characterDead(): string;
// }
export class Character {
    constructor(name, family, age) {
        this.status = true;
        this.serie = 'Juego de Tronos';
        this.name = name;
        this.family = family;
        this.age = age;
    }
    characterComunication() {
        return `${this.name} dice: `;
    }
    characterDead() {
        this.status = false;
    }
}
