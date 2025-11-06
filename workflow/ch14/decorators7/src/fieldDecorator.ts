export function double(
    notused: any,
    ctx: ClassFieldDecoratorContext) {
    const fieldName = String(ctx.name);
    return function(initialValue) {
        return initialValue * 2;
    }
}