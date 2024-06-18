export const NewArray = (size: number) => {
    let x = [];
    for (let i = 0; i < size; ++i) {
        x[i] = i + 1;
    }
    return x;
}


export const generateUUID = (length = 12) => {
    const chars = "abcdefghijklmnopqrstuvwxyz0123456789";
    let result = "";
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}
