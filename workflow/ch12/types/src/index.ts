import { Person, Product } from "./dataTypes.js";

let people = [
    new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York")
];
let products = [
    new Product("Running Shoes", 100),
    new Product("Hat", 25)
];

type dataType = Person | Product;

class PeopleCollection {
    private items: dataType[] = [];
    constructor(initialItems: Person[]) {
        this.items.push(...initialItems);
    }

    add(newItem: dataType) {
        this.items.push(newItem);
    }

    getNames(): string[] {
        return this.items.map(item => item.name);
    }

    getItem(index: number) {
        return this.items[index];
    }
}

let peopleData = new PeopleCollection(people);
console.log(`Names: ${peopleData.getNames().join(", ")}`);

let firstPerson = peopleData.getItem(0);
if (firstPerson instanceof Person) {
    console.log(`First Person: ${firstPerson.name}, ${firstPerson.city}`);
}