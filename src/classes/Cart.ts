import type { IProduct } from "../interfaces/IProduct";

interface OrderLine {
    product: IProduct;
    quantity: number;
}

export  class Cart {
    private orderLines: OrderLine[] = [];

    add(product: IProduct, quantity: number): void {
        this.orderLines.push({ product, quantity });
    }

    calculateAmountByProduct(productId: string): number {
        const orderLine = this.orderLines.find(line => line.product.id === productId);
        return orderLine ? orderLine.product.getPrice(orderLine.quantity) : 0;
    }

    calculateAmount(): number {
        return this.orderLines.reduce((total, line) => total + line.product.getPrice(line.quantity), 0);
    }

    displayDetails(): string[] {
        return this.orderLines.map(line => {
            const amount = line.product.getPrice(line.quantity);
            return `ID: ${line.product.id}, Produit: ${line.product.name}, Prix unitaire: ${line.product.unitPrice}€/${line.product.unit}, Quantité: ${line.quantity}, Montant: ${amount}€`;
        });
    }
}