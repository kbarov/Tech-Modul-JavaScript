function intAndParse(num1, num2, num3) {
    
    let sum = num1 + num2 + num3;
    let result = sum % 1;
    if (result === 0) {
        console.log(`${sum} - Integer`);
    } else {
        console.log(`${sum} - Float`);
    }

}
intAndParse(9, 100, 1.1);