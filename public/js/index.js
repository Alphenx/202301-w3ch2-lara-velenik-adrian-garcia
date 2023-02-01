import { King } from './king.js';
import { Fighter } from './fighter.js';
import { Adviser } from './adviser.js';
import { Squire } from './squire.js';
const joffrey = new King('Joffrey', 'Baratheon', 16, 2);
const jaime = new Fighter('Jaime', 'Lannister', 45, 'Espada', 7);
const daenerys = new Fighter('Daenerys', 'Targaryen', 30, 'Dragones', 10);
const tyrion = new Adviser('Tyrion', 'Lannister', 40, daenerys);
const bronn = new Squire('Bronn', 'AguasNegras', 54, jaime, 0);
const characters = [joffrey, jaime, daenerys, tyrion, bronn];
const container = document.getElementById('container');
const card = document.createDocumentFragment();
for (const charac of characters) {
    const listItem = document.createElement('li');
}
const listItem = document.createElement('li');
// <li class="character col">
//         <div class="card character__card">
//           <img src="img/no-one.jpg" alt="Nombre y familia del personaje" class="character__picture card-img-top" />
//           <div class="card-body">
//             <h2 class="character__name card-title h4">Nombre y familia</h2>
//             <div class="character__info">
//               <ul class="list-unstyled">
//                 <li>Edad: X años</li>
//                 <li>
//                   Estado:
//                   <i class="fas fa-thumbs-down"></i>
//                   <i class="fas fa-thumbs-up"></i>
//                 </li>
//               </ul>
//             </div>
//             <div class="character__overlay">
//               <ul class="list-unstyled">
//                 <li>Años de reinado: X</li>
//                 <li>Arma: XXX</li>
//                 <li>Destreza: X</li>
//                 <li>Peloteo: X</li>
//                 <li>Asesora a: X</li>
//                 <li>Sirve a: X</li>
//               </ul>
//               <div class="character__actions">
//                 <button class="character__action btn">habla</button>
//                 <button class="character__action btn">muere</button>
//               </div>
//             </div>
//           </div>
//           <i class="emoji"></i>
//         </div>
//       </li>
