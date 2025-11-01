import { time } from "./methodDecorator.js";
import { serialize } from "./classDecorator.js";

@serialize
export class Product {
    constructor(public name: string, public price: number) {}

    @time
    getDetail(): string {
        return `Product: ${this.name}, Price: ${this.price}`;
    }

    @time
    getPrice(): number {
        return this.price;
    }
}