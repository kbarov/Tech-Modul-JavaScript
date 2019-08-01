function equalsSum(array) {
    
    let result = 'no';
    
    for (let i = 0; i < array.length; i++) {
        let leftSum = 0;
        let rightSum = 0;
        
        for (let j = i - 1; j >= 0; j--) {
            leftSum += array[j];
        }
        for (let k = i + 1; k < array.length; k++) {
            rightSum += array[k];
        }
        if (leftSum === rightSum) {
            result = i;
            break;
        }
    }
    console.log(result);

}
equalsSum([1, 2, 3, 3]);