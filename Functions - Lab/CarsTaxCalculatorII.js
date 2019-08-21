function solve(power, age) {
    let baseTax = calculateBaseTax(power);
    let carCoefficient = calculateCoefficient(age);
    let totalTax = baseTax * carCoefficient;

    console.log(totalTax.toFixed(2) + " lv.")

    function calculateBaseTax(power) {
        let result = '';
    
        if (power <= 37) {
            result = power * 0.43;
        } else if (37 < power && power <= 55) {
            result = power * 0.50;
        } else if (55 < power && power <= 74) {
            result = power * 0.68;
        } else if (74 < power && power <= 110) {
            result = power * 1.38;
        } else if (power > 110) {
            result = power * 1.54;
        }
        return result;
    }
    
    function calculateCoefficient(age) {
    
        let coefficient = 0;

        if (age < 5) {
            coefficient = 2.8;
        } else if(5 <= age && age < 14){
            coefficient = 1.5;
        } else {
            coefficient = 1;
        }
        return coefficient;
    }

}



solve(45,10);