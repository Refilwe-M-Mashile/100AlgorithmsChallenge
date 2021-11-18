export function adjacentElementsProduct(inputArray: number[]): number {
    let max = 1, prod = 1;
    for (let i = 0; i < inputArray.length - 1; i++) {
        prod = inputArray[i] * inputArray[i + 1];
        if (max < prod)
            max = prod;
    }
    return max;
}

console.log(adjacentElementsProduct([3, 6, -2, -5, 7, 3]));