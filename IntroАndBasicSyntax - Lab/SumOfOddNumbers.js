function sumOfOddNum(number) {
    let counter = 1;
    let sum = 0;

    for (let i = 1; i <= 100; i+=2) {
            if (counter <= number) {
                console.log(i)
                counter++;
                sum = sum + i;
            } else if (counter > 5){
                break;
            }
            
    }
    console.log("Sum: " + sum);
}
sumOfOddNum(3);