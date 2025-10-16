function calculateTax(amount:number):number {
    return amount * 1.2;
}

function writePrice(product:string, price:number):void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

//enum OtherEnum {First = 10, Two = 20};
//enum Product {Hat = OtherEnum.First + 1, Gloves = 20, Umbrella = Hat + Gloves};

// let productValue: Product = 11;
// let productName: string = Product[productValue];
//
// console.log(`Value: ${productValue}, Name: ${productName}`);
// products.forEach((prod:[Product, number]) => {
//     switch (prod[0]) {
//         case Product.Hat:
//             writePrice("Hat", calculateTax(prod[1]));
//             break;
//         case Product.Gloves:
//             writePrice("Gloves", calculateTax(prod[1]));
//             break;
//         case Product.Umbrella:
//             writePrice("Umbrella", calculateTax(prod[1]));
//             break;
//     }
// });

// enum City {London = "London", Paris = "Paris", NY = "New York"};
// console.log(`City: ${City.London}`);

const enum Product {Hat, Gloves, Umbrella};
let productValue = Product.Hat;
let productName = Product[0];