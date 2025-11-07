import { time } from "./methodDecorator.js";

export class City {
    constructor(public name: string, public population: number) {}

    @time({
        time: true,
        label: "City.getSummary"
    })
    getSummary() {
        return `City: ${this.name}, Population: ${this.population}`;
    }
}