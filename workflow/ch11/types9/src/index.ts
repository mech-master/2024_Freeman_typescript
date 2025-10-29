interface Product {
    name: string;
    price: number;
}

class SportProduct implements Product {
    constructor(public name: string, public category: string,
                public price: number) {
        //не требуется никаких операторов
    }
}

class ProductGroup {
    constructor(...initialProducts: [string, Product][]) {
        initialProducts.forEach(p => this[p[0]] = p[1]);
    }

    [propertyName: string]: Product;
}

let group = new ProductGroup(["shoes", new SportProduct("Shoes", "Running", 90.50)]);
group.hat = new SportProduct("Hat", "Skiing", 20);

//Object.keys(group).forEach(k => console.log(`Property Name: ${k}`));
// if (group.hatt && group.boots) {
//     let total = group.hat.price + group.boots.price;
//     console.log(`Total: ${total}`);
// }

let total = group.hat.price + (group.boots?.price ?? 0);
console.log(`Total: ${total}`);