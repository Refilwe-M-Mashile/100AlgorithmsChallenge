export function alphabeticShift(inputString: string): string {
    let output = "";
    for (let c of inputString) {
        let ascii = c.charCodeAt(0);
        if (ascii == 122) ascii = 96;
        if (ascii == 90) ascii = 65;
        output += String.fromCharCode(ascii + 1);
    }
    return output;
}

console.log(alphabeticShift('crazy'));
console.log(alphabeticShift('abc'));