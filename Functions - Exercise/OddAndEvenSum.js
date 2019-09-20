function oddAndEvenSum(number) {
    let oddSum = 0;
    let evenSum = 0;

    let myArr = number.toString().split("").map(Number);

    for (let i = 0; i < myArr.length; i++) {
        
        if (myArr[i] % 2 == 0) {
            evenSum += myArr[i];
        } else {
            oddSum += myArr[i];
        }
        
    }
    
    console.log(`Odd sum = ${oddSum}, Even sum = ${evenSum}`)

}
oddAndEvenSum(1000435);

