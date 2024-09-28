import type { IProduct } from "../interfaces/IProduct.ts"; 
import {v4 as uuidv4 } from "uuid"; 

export class Citron implements IProduct{
    id=uuidv4(); 
    name = "Citron"; 
    unit = "unité"; 
    unitPrice=0.5; 

    getPrice(quantity: number): number{
        return this.unitPrice*quantity;
    }
}

export class TomatesCerises implements IProduct{
    id = uuidv4(); 
    name = "Tomates Cerise"; 
    unit = "kg"; 
    unitPrice = 3.5; 
    
    getPrice (quantity:number):number{
        return this.unitPrice*quantity; 
    }
}

export class HuileOlive implements IProduct {
    id = uuidv4();
    name = "Huile d'olive";
    unit = "litre";
    unitPrice = 5; 

    getPrice(quantity: number): number {
        return this.unitPrice * quantity;
    }
}

export class Sucre implements IProduct {
    id = uuidv4();
    name = "Sucre";
    unit = "kg";
    unitPrice = this.getRandomPrice();

    private getRandomPrice(): number {
        return Math.random() * (4 - 3) + 3; 
    }

    getPrice(quantity: number): number {
        return this.unitPrice * quantity;
    }
}