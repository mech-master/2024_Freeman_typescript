function calculateTax(amount:number):number {
    return amount * 1.2;
}

function writePrice(product:string, price:number):void {
    console.log(`Price for ${product}: $${price.toFixed(2)}`);
}

type tuple = [string, number];

let hat:tuple = ["Hat", 100];
let gloves:tuple = ["Gloves", 75];

writePrice(hat[0], hat[1]);
writePrice(gloves[0], gloves[1]);