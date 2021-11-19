export function areEquallyStrong(
    yourLeft: number,
    yourRight: number,
    friendsLeft: number,
    friendsRight: number
): boolean {
    let friendsArm = [friendsLeft, friendsRight];
    return yourLeft + yourRight == friendsLeft + friendsRight && friendsArm.includes(yourLeft) && friendsArm.includes(yourRight);
}

console.log(areEquallyStrong(10, 15, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 10));
console.log(areEquallyStrong(15, 10, 15, 9));
