export function addTwoDigits(n: any): number {

    return parseInt(String(n)[0]) + parseInt(String(n)[1]);
}

console.log(addTwoDigits(29));