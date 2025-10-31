import { Person, Product, City, Employee } from "./dataTypes.js";

let people = [
    new Person("Bob Smith", "London"),
    new Person("Dora Peters", "New York")
];

let products = [
    new Product("Running Shoes", 100),
    new Product("Hat", 25)
];

let cities = [
    new City("London", 8136000),
    new City("Paris", 2141000)
];

let employees = [
    new Employee("Bob Smith", "Sale"),
    new Employee("Alice Jones", "Sale")
];

class DataCollection<T> {
    protected items: T[] = [];

    constructor(initialItems: T[]) {
        this.items.push(...initialItems);
    }

    filter<V extends T>(predicate: (target) => target is V): V[] {
        return this.items.filter(item => predicate(item)) as V[];
    }

    static reverse<ArrayType>(items: ArrayType[]): ArrayType[] {
        return items.reverse();
    }
}

let mixedData = new DataCollection<Person | Product>([...people, ...products]);
function isProduct(target) : target is Product {
    return target instanceof Product;
}
let filteredProducts = mixedData.filter<Product>(isProduct);
filteredProducts.forEach(p => console.log(`Product: ${p.name}, ${p.price}`));

let reversedCities: City[] = DataCollection.reverse<City>(cities);
reversedCities.forEach(c => console.log(`City: ${c.name}, ${c.population}`));