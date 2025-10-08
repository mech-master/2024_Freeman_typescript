let ProductProto = {
    toString: function() {
        return `toString: Name: ${this.name}, Price: ${this.price}`;
    }
}

let hat = {
    name: "Hat",
    price: 100,
    getPriceIncTax() {
        return Number(this.price) * 1.2;
    }
}

let boots = {
    name: "Boots",
    price: 100,
    getPriceIncTax() {
        return Number(this.price) * 1.2;
    }
}

// let hatPrototype = Object.getPrototypeOf(hat);
// hatPrototype.toString = function() {
//     return `toString: Name: ${this.name}, Price: ${this.price}`;
// }

// console.log(`Hat Prototype: ${hatPrototype}`);
//
// let bootsPrototype = Object.getPrototypeOf(boots);
// console.log(`Boots Prototype: ${bootsPrototype}`);
//
// console.log(`Common Prototype: ${hatPrototype === bootsPrototype}`);
//
// console.log(`Hat: ${hat.price}, ${hat.getPriceIncTax() }`);
// console.log(`toString: ${hat.toString()}`);

Object.setPrototypeOf(hat, ProductProto);
Object.setPrototypeOf(boots, ProductProto);

console.log(new Date(), hat.toString());
console.log(new Date(), boots.toString());

console.log(hat.__proto__.__proto__ === {});