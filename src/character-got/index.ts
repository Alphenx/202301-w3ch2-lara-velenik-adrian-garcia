import { King } from './king.js';
import { Fighter } from './fighter.js';
import { Adviser } from './adviser.js';
import { Squire } from './squire.js';

const joffrey = new King('Joffrey', 'Baratheon', 16, 2);
const jaime = new Fighter('Jaime', 'Lannister', 45, 'Espada', 7);
const daenerys = new Fighter('Daenerys', 'Targaryen', 30, 'Dragones', 10);
const tyrion = new Adviser('Tyrion', 'Lannister', 40, daenerys);
const bronn = new Squire('Bronn', 'AguasNegras', 54, jaime, 0);
