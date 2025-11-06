export function log<This, ValueType extends number>(
    accessor: any,
    ctx: ClassSetterDecoratorContext | ClassGetterDecoratorContext) {
    const accessorName = String(ctx.name);
    return function(this: any, ...args: any[]) {
        if (ctx.kind === "getter") {
            const result = accessor.call(this, ...args);
            console.log(`${accessorName} get returned ${result}`);
            return result;
        } else {
            console.log(`${accessorName} set to ${args}`);
            return accessor.call(this, ...args);
        }
    }
}