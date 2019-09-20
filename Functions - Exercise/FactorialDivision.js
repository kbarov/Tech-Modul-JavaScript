function factorialDivision(numberOne, numberTwo) {
    
    function factorialCalculator(number) {
        
        let factorial = 1;
        for (let i = 2; i <= number; i++) {
            
            factorial *= i;

        }
        return factorial;
    }
    let firstNumFac = factorialCalculator(numberOne);
    let secondNumFac = factorialCalculator(numberTwo);

    let result = firstNumFac / secondNumFac;
    console.log(result.toFixed(2));
}
factorialDivision(5, 2);