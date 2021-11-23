export function arrayChange(inputArray: number[]): number {
    let moves = 0;
    for (let i = 0; i < inputArray.length - 1; i++) {
        if (i < inputArray.length - 1) {
            if (inputArray[i] == inputArray[i + 1]) {
                inputArray[i + 1]++;
                moves++;
            }
            if (inputArray[i] < inputArray[i + 1]) {
                moves += (inputArray[i + 1] - inputArray[i]) + 1;
                inputArray[i + 1] += (inputArray[i + 1] - inputArray[i]) + 1;
            }
        }
    }
    return moves;
}

console.log(arrayChange([1, 2, 1]));