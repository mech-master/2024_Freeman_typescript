// let restrictedValue: 1 | 2 | 3 = 1;
//
// let secondValue: 1 | 10 | 100 = 1;

// restrictedValue = secondValue;
// secondValue = 100;
// restrictedValue = secondValue;
// console.log(`Restricted Value: ${restrictedValue}`);

function calculatePrice(quantity: 1 | 2, price: number): number {
    return quantity * price;
}

let total = calculatePrice(2, 19.99);
console.log(`Price: ${total}`);

type numVal = 1 | 2 | 3| 4;

function getRandomValue(): numVal {
    return Math.floor(Math.random() * 4) + 1 as numVal;
}

// enum City { London = "LON", Paris = "PAR", Chicago = "CHI"};
//
// function getMixedValue() : 1 | "Hello" | true | City.London {
//     switch (getRandomValue()) {
//         case 1:
//             return 1;
//         case 2:
//             return "Hello";
//         case 3:
//             return true;
//         case 4:
//             return City.London;
//     }
// }
//
// console.log(`Value: ${getMixedValue()}`);

type cities = "London" | "Paris" | "Chicago";
type cityResponse = `City: ${ cities }`;

function getCityString(city: cities) : `City: ${cities}` {
    return `City: ${city}`;
}

let str = getCityString("London");
console.log(str);