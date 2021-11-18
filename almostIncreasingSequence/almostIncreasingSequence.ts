export function almostIncreasingSequence(sequence: number[]): boolean {
    let i = -1, removals = 0;
    for (let n of sequence) {
        if (n < i) removals++;
        else
            i = n;

        if (removals > 1) return false
    }

    return true
}

console.log(almostIncreasingSequence([1, 3, 2, 1]))
console.log(almostIncreasingSequence([1, 3, 2]))