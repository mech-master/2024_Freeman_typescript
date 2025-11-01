import { time } from "./methodDecorator.js";

export class City {
    constructor(public name: string, public population: number) {}

    @time
    getSummary(): string {
        return `City: ${this.name}, Population: ${this.population}`
    }
}