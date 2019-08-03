function magic(array) {
    
    let digit = array.map(( str => parseInt(str)))
    let firstSum = 0;
    let secondSum = 0;

    for (let i = 0; i < digit.lenth; i++) {
        firstSum += digit[i];
        for (let j = 1; j < digit.length; j++) {
            for (let k = 2; k < digit.length; k++) {
                
                
                secondSum += digit[j];
                console.log(firstSum);
                console.log(secondSum);
            }
            
        }
         
    }
    console.log();
    
}
magic([[11, 32, 45], [21, 0, 1], [21, 1, 1]] );