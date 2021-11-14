export function addBorder(picture: string[]): string[] {
    picture =  picture.map((i)=>{
        let elem = picture[i].split("").push("*");
        return elem.unshift("*").join("");
    });
    picture.push("*".repeat(picture[0].length))
    picture.unshift("*".repeat(picture[0].length))
}

// console.log(addBorder(["abc", "ded"]));