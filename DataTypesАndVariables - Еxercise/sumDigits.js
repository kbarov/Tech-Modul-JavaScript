function sumDigit(number) {
    let value = number;
    let sum = 0;

while (value) {
    sum += value % 10;
    value = Math.floor(value / 10);
}

console.log(sum);
}
sumDigit(245678);
