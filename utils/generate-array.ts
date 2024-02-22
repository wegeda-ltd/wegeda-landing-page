export const NewArray = (size: number) => {
    let x = [];
    for (let i = 0; i < size; ++i) {
        x[i] = i + 1;
    }
    return x;
}