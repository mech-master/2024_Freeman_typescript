let hatPrice = 100;
console.log(`Hat price: ${hatPrice}`);
let boostPrice = "100";
console.log(`Boost price: ${boostPrice}`);

// if (hatPrice === boostPrice) {
//     console.log("Prices are the same");
// } else {
//     console.log("Prices are different");
// }
//
// let totalPrice = Number(hatPrice) + Number(boostPrice);
// console.log(`Total price: ${totalPrice}`);
//
// let myVariable = "Adam";
// console.log(`Type: ${typeof myVariable}`);
//
// myVariable = 100;
// console.log(`Type: ${typeof myVariable}`);
//
// let firstCity;
// let secondCity = firstCity || "London";
// console.log(`City: ${secondCity}`);

// let taxRate;
// console.log(`Tax rate: ${taxRate ?? 10}%`);
// taxRate = 0;
// console.log(`Tax rate: ${taxRate ?? 10}%`);

// function sumPrices(first, second, third) {
//     return first + second + third;
// }
//
// let totalPrice = sumPrices(hatPrice, boostPrice);
// console.log(`Total: ${totalPrice} ${typeof totalPrice}`);
//
// totalPrice = sumPrices(100, 200, 300);
// console.log(`Total: ${totalPrice} ${typeof totalPrice}`);
//
// totalPrice = sumPrices(100, 200);
// console.log(`Total: ${totalPrice} ${typeof totalPrice}`);

// let hat = {
//     name: "Hat",
//     price: 100
// };
//
// let boots = {
//     name: "Boots",
//     price: "100"
// }
//
// let gloves = {
//     productName: "Gloves",
//     price: "40"
// }
//
// gloves.name = gloves.productName;
// delete gloves.productName;
// gloves.price = 20;
//
// let sumPrices = (...numbers) => numbers.reduce(
//     (total, val) => total + (Number.isNaN(val) ? 0 : Number(val))
// )
//
// let totalPrice = sumPrices(hat.price, boots.price, gloves.price);
// console.log(`Total: ${totalPrice} ${typeof  totalPrice}`);

// let hat = {
//     name: "Hat",
//     _price: 100,
//     priceIncTax: 100 * 1.2,
//
//     set price(newPrice) {
//         this._price = newPrice;
//         this.priceIncTax = this._price * 1.2;
//     },
//
//     get price() {
//         return this._price;
//     },
//
//     writeDetails: () => console.log(`${this.name}: ${this.price}, ${this.priceIncTax}`)
// };
//
// let boots = {
//     name: "Boots",
//     price: "100",
//
//     get priceIncTax() {
//         return Number(this.price) * 1.2;
//     }
// };
//
// hat.writeDetails();
// hat.price = 120;
// hat.writeDetails();
//
// console.log(`Boots: ${boots.price}, ${boots.priceIncTax}`);
// boots.price = "120";
// console.log(`Boots: ${boots.price}, ${boots.priceIncTax}`);

let myObject = {
    greeting: "Hi, there",

    getWriter() {
        return (message) => console.log(`${this.greeting}, ${message}`);
    }
}

greeting = "Hello";

let writer = myObject.getWriter();
writer("It is raining today");

let standAlone = myObject.getWriter;
let standAloneWriter = standAlone();
standAloneWriter("It is sunny today");