export function double<This, FieldType extends number>(
        notused: any,
        ctx: ClassFieldDecoratorContext<This, FieldType>) {
    return function (initialValue) {
        return initialValue * 2;
    }
}