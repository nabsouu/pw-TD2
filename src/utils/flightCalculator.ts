import type Starship from "../Starship";
import type Planet from "../Planet"; 

export function calculateFlightDurationFromEarth(planet : Planet,starship : Starship):number {
   return planet.distancefromearth / starship.speed; 
}