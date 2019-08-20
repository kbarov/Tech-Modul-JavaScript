function searchForANumber(array1, array2) {
    
    let firstNumber = array2.shift();
    let secondNumber = array2.shift();
    let thirdNumber = array2.shift();

    let firstManipulation = array1.splice(0 , firstNumber);
    let secondManipulation = firstManipulation.splice(0, secondNumber);
    let counter = 0;

    for (const element of firstManipulation) {
        if (element == thirdNumber) {
            counter++;          
        }
    }
    console.log(`Number ${thirdNumber} occurs ${counter} time.`);
    
}
searchForANumber([5, 2, 3, 4, 1, 6], [5, 2, 3]);