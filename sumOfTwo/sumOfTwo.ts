export function sumOfTwo(a: number[], b: number[], v: number): boolean {
    for (let n of a) {
        if (b.includes(v - n)) return true;
    }

    return false;
}

console.log(sumOfTwo([1, 7, 3], [10, 20, 30, 40], 42));