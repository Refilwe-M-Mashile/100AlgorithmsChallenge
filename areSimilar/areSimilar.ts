export function areSimilar(a: number[], b: number[]): boolean {
    let count = 0;
    for (let i in a) {
        if (a[i] != b[i]) count++;
    }

    return count==0 || count == 2;

}

console.log(areSimilar([1, 2, 3], [1, 2, 3]));
console.log(areSimilar([1, 2, 3], [2, 1, 3]));
console.log(areSimilar([1, 2, 2], [2, 1, 1]));
