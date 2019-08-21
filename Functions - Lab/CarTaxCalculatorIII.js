function solve(type, volumeOrpower, age) {
    let baseTax = 0;
    let totalTax = 0;
    

    if (type == "motorcycle") {
        baseTax = calculateMotorcycleBaseTax(volumeOrpower);
        totalTax = baseTax;
    } else {
        baseTax = calculateBaseCarTax(volumeOrpower);
        venicleCoefficient = calculateVehiclecoefficient(age);
        totalTax = baseTax * venicleCoefficient;
    }

    console.log(totalTax.toFixed(2) + " lv.")

    function calculateBaseCarTax(power) {
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

    function calculateMotorcycleBaseTax(volume) {
        
        if (volume > 750) {
            return 125;
        } 
        if (volume > 490) {
            return 94;
        }
        if (volume > 350) {
            return 63;
        }
        if (volume > 250) {
            return 44;
        }
        if (volume > 125) {
            return 31;
        }
        return 15;

    }
    
    function calculateVehiclecoefficient(age) {
    
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

solve('motorcycle', 450, 10);