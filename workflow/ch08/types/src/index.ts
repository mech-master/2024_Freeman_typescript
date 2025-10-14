function calculateTax(amount:number):number;
function calculateTax(amount:null):null;
function calculateTax(amount:number | null):number | null {
    if (amount != null) {
        return (amount * 1.2)
    } else {
        return null;
    }
}

function writeValue(label:string, value:number):void {
    console.log(`${label} : ${value}`);
}

// let taxValue = calculateTax(100, 0);
// console.log(`2 args: ${taxValue}`);
// taxValue = calculateTax(100);
// console.log(`1 args: ${taxValue}`);
// taxValue = calculateTax(100, 10, 20);
// console.log(`3 args: ${taxValue}`);
// taxValue = calculateTax(100, 10, 20, 1, 30, 7);
// console.log(`6 args: ${taxValue}`);

let taxValue:number = calculateTax(100);
console.log(`Tax value: ${taxValue}`);