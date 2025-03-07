export function factorializeANumber(num: number): number {
    return (num <= 2) ? num : num * factorializeANumber(num - 1);
}

console.log(factorializeANumber(5));
console.log(factorializeANumber(10));