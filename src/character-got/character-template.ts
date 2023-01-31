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
  name;
  family;
  age;
  status = true;
  serie = 'Juego de Tronos';

  constructor(name: string, family: string, age: number) {
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
