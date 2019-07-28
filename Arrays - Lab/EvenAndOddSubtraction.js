function evenOddSubtraction(array) {
    
    let sumEven = 0
    let sumOdd = 0

    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 == 0) {
            sumEven += array[i];
        } else {
            sumOdd += array[i];
        }
        
    }
    let result = sumEven - sumOdd;
    console.log(result);

}
evenOddSubtraction([1,2,3,4,5,6]);