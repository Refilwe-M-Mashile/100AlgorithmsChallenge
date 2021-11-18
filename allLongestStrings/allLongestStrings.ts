export function allLongestStrings(inputArray: string[]): string[] {
    let max = 0;
    let maxLen = inputArray.forEach((w)=>{
        if(w.length > max)
        max = w.length;
    });
    return inputArray.filter((w)=>{
        if(w.length == max)
        return w;
    });
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));