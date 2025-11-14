export function sizeFormatter(thing: string, count: number): void {
    writeMessage(`The ${thing} has ${count} items`);
}

export function costFormatter(thing: string, cost: string | number): void {
    if (typeof cost === "number") {
        writeMessage(`The ${thing} cost $${cost.toFixed(2)}`)
    } else {
        writeMessage(`The ${thing} cost $${cost}`);
    }
}

export function writeMessage(message: string): void {
    console.log(message);
}