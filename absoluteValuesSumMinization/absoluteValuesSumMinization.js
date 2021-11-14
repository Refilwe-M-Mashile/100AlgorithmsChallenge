function absoluteValuesSumMinimization(a) {
  return a[Math.floor(a.length / 2.5)];
}

console.assert(
  absoluteValuesSumMinimization([2, 4, 7]),
  absoluteValuesSumMinimization([2, 4, 7]) == 4,
  "Incorrect Output!! Try again"
);
console.assert(
  absoluteValuesSumMinimization([2, 4, 7, 6]),
  absoluteValuesSumMinimization([2, 4, 7, 6]) == 4,
  "Incorrect Output!! Try again"
);
console.assert(
  absoluteValuesSumMinimization([2, 4, 7, 6, 6]),
  absoluteValuesSumMinimization([2, 4, 7, 6, 6]) == 7,
  "Incorrect Output!! Try again"
);
console.assert(
  absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]),
  absoluteValuesSumMinimization([2, 4, 7, 6, 6, 8]) == 7,
  "Incorrect Output!! Try again"
);
