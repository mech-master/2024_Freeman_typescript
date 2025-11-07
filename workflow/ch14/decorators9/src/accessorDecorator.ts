export function log<This, ValueType extends number>(
    setter: (ValueType) => void,
    ctx: ClassSetterDecoratorContext<This, ValueType>): ((ValueType) => void);

export function log<This, ValueType extends number>(
    getter: () => ValueType,
    ctx: ClassGetterDecoratorContext<This, ValueType>): () => ValueType;

export function log(
    accessor: any,
    ctx: any){
    const accessorName = String(ctx.name);
    return function(this: any, ...args: any[]) {
        if (ctx.kind === "getter") {
            const result = accessor.getter.call(this, ...args);
            console.log(`${accessorName} get returned ${result}`);
            return result;
        } else {
            console.log(`${accessorName} set to ${args}`);
            return accessor.setter.call(this, ...args);
        }
    }
}