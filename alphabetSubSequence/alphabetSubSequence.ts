export function alphabetSubsequence(s: string): boolean {
    s = s.toLowerCase();
    let ascii = s.charCodeAt(0);
    let newS = [...new Set(s)];
    if(newS.length != s.length) return false;
    for (let c of newS) {
        if(c.charCodeAt(0) < ascii) return false;
        ascii = c.charCodeAt(0) ;
    }
    return true;
}

console.log(alphabetSubsequence('zab'))
console.log(alphabetSubsequence('effg'))
console.log(alphabetSubsequence('cdce'))
console.log(alphabetSubsequence('ace'))
console.log(alphabetSubsequence('bxz'))
