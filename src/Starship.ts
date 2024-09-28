import { StarshipStatus } from "./StarshipStatus";
import { v4 as uuidv4 } from 'uuid';
import validator from 'validator';
 
 class Starship {
    ref: string;
    speed: number;
    status: StarshipStatus;
    id:string; 
  
    constructor(ref: string, speed: number, id?: string) { 
      this.ref = ref;
      this.speed = speed;
      this.status = StarshipStatus.PARKED; 
  
      if (id && validator.isUUID(id, 4)) {
        this.id = id;
      } else if (!id) {
        this.id = uuidv4();
      } else {
        console.log("L'ID fourni n'est pas un UUID (v4) valide, un nouveau UUID sera généré.");
        this.id = uuidv4(); 
      }
    }
    
  

  takeOff():void {
    if (this.status == StarshipStatus.PARKED){
        this.status = StarshipStatus.TAKING_OFF; 
    }
    else {
        console.log("l'avion n'est pas stationné"); 
    }
  }
  
  park():void{
    if (this.status==StarshipStatus.LANDING){
        this.status=StarshipStatus.PARKED; 
    }
    else{
        console.log("l'avion n'est pas en cours d'atterrissage"); 
    }
  }
  fly() : void {
    if(this.status==StarshipStatus.TAKING_OFF){
        this.status=StarshipStatus.FLYING; 
    }else{
        console.log("l'avion n'est pas en cours de décollage"); 
    }
  }

  land():void{
    if(this.status==StarshipStatus.FLYING){
        this.status=StarshipStatus.LANDING; 
    }else {
        console.log("l'avion n'est pas en vol"); 
    }
  }
}
  export default Starship; 