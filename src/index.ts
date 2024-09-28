import { isUUID } from "validator";
import Starship from "./Starship"; 
import Planet from "./Planet";
import { calculateFlightDurationFromEarth } from "./utils/flightCalculator"; 
import { Cart } from './classes/Cart';
import { Citron, TomatesCerises, HuileOlive, Sucre } from './classes/Product';


/*const prometheus = new Starship("Prometheus", 100000);
console.log(prometheus);*/

/*prometheus.takeOff(); 
prometheus.land(); 
prometheus.fly; 
prometheus.park; */

/*
const starshipId = new Starship("Enterprise", 95000);
console.log(starshipId);

const planets: Planet[] = [
    { name: "Mercury", distancefromearth: 91.7 },
    { name: "Venus", distancefromearth: 41.4 },
    { name: "Mars", distancefromearth: 78.3 },
    { name: "Jupiter", distancefromearth: 628.7 },
    { name: "Saturn", distancefromearth: 1275.0 },
    { name: "Uranus", distancefromearth: 2720.0 },
    { name: "Neptune", distancefromearth: 4350.0 },
  ];

  planets.sort((a,b)=> a.distancefromearth-b.distancefromearth); 
  console.log("tri par ordre croissant:", planets); 

  planets.sort ((a,b)=> a.name.localeCompare(b.name)); 
  console.log("tri par nom:", planets); 

  planets.sort((a,b)=>b.name.localeCompare(a.name)); 
  console.log("tri par ordre décroissant:", planets); 

const totalDistance = planets.reduce((sum, planet) => sum + planet.distancefromearth, 0);
const Distancemoyenne= totalDistance / planets.length;
console.log("Distance moyenne de la Terre aux planètes:", Distancemoyenne);

*/
const cart = new Cart();

const citron = new Citron();
const huileOlive = new HuileOlive();
const sucre = new Sucre();
const tomatesCerise = new TomatesCerises();

cart.add(citron, 2); // 2 citrons
cart.add(huileOlive, 1.5); // 1,5 litre d'huile d'olive
cart.add(sucre, 0.5); // 500g de sucre
cart.add(citron, 5); // 5 citrons
cart.add(sucre, 3); // 3kg de sucre
cart.add(tomatesCerise, 1.5); // 1,5kg de tomates cerise

console.log(`Nombre de types de produits dans le panier: ${cart['orderLines'].length}`);

const montantTomates = cart.calculateAmountByProduct(tomatesCerise.id);
console.log(`Montant pour les tomates cerise: ${montantTomates}€`);

const montantTotal = cart.calculateAmount();
console.log(`Montant total du panier: ${montantTotal}€`);

console.log("Détails du panier:");
cart.displayDetails().forEach(detail => console.log(detail));