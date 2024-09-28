export interface IProduct{
    id: string; 
    name: string; 
    unit: string; 
    unitPrice:number; 
    getPrice(quantity:number):number;

}; 

