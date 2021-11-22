export function evenDigitsOnly(n: number): boolean {

   return n.toString().split("").every((v)=>{
        parseInt(v)%2 == 0
    });

}

console.log(evenDigitsOnly(248622));
console.log(evenDigitsOnly(642386));

