function addAndSubtract(array) {
    
    let sumFirstArr = 0;
    let sumSecondArr = 0;
    for (let i = 0; i < array.length; i++) {
        sumFirstArr += array[i];
        if (array[i] % 2 === 0) {
            array[i] += i;
        } else {
            array[i] -= i;
        }
        sumSecondArr += array[i];
    }
    console.log(array);
    console.log(sumFirstArr);
    console.log(sumSecondArr);

}
addAndSubtract([5, 15, 23, 56, 35])