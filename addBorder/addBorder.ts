export function addBorder(picture: string[]): string[] {
    picture = picture.map((i) => {
        return "*" + i + "*";
      });
      picture.push("*".repeat(picture[0].length));
      picture.unshift("*".repeat(picture[0].length));
      return picture;
}

console.log(addBorder(["abc", "ded"]));