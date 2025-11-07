export function autolog<This, ValueType extends number>(
    accessor: ClassAccessorDecoratorTarget<This, ValueType>,
    ctx: ClassAccessorDecoratorContext<This, ValueType>): ClassAccessorDecoratorResult<This, ValueType> {
    const name = String(ctx.name);
    return {
        get() {
            const result = accessor.get.call(this);
            console.log(`Auto-accessor ${name} get returned ${result}`);
            return result;
        },
        set(newValue) {
            console.log(`Auto-accessor ${name} set to ${newValue}`);
            return accessor.set.call(this, newValue);
        },
        init(value) {
            console.log(`Auto-accessor initialized to ${value}`);
            return value;
        }
    }
}