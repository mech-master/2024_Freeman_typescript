export function double(
    unused: any,
    ctx: ClassFieldDecoratorContext) {
    return function(initialValue) {
        return initialValue * 2;
    }
}