function calculator(number, operator, number2) {
    
    let sum = 0;
    if (operator === "+") {
        sum = (number + number2).toFixed(2);
    } else if(operator === "-") {
        sum = (number - number2).toFixed(2);
    } else if(operator === "/") {
        sum = (number / number2).toFixed(2);
    } else if(operator === "*") {
        sum = (number * number2).toFixed(2);
    }
    console.log(sum);
}
calculator(25.5 , "-", 3);