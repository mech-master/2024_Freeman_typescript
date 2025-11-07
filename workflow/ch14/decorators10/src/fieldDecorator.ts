export function double(
    unused: any,
    ctx: ClassFieldDecoratorContext) {
    const fieldName = String(ctx.name);
    return function(initialValue) {
        return initialValue * 2;
    }
}