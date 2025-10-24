type Product = {
    id: number,
    name: string,
    price?: number
}

type Person = {
    id: string,
    name: string,
    city: string
}


function isPerson(testObj: any): testObj is Person {
    return testObj.city !== undefined;
}

let hat: Product = {id: 1, name: "Hat", price: 100};
let gloves: Product = {id: 2, name: "Gloves", price: 75};
let umbrella: Product = {id: 3, name: "Umbrella", price: 30};
let bob: Person = {id: "bsmith", name: "Bob", city: "London"};

let dataItems: (Product | Person)[] = [hat, gloves, umbrella, bob];

dataItems.forEach(item => {
    if (isPerson(item)) {
        console.log(`Person: ${item.name}: ${item.city}`)
    } else {
        console.log(`Product: ${item.name}: ${item.price}`)
    }
});