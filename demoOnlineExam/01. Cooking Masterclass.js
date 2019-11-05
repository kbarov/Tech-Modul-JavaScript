function solve(array) {

    let budget = +array[0];
    let students = +array[1];
    let priceOfFlour = +array[2];
    let priceOfEggs = +array[3];
    let priceOfApron = +array[4];


    let apronByPercent = students;
    apronByPercent = Math.ceil(apronByPercent + (apronByPercent * 0.2));
    let freePackege = 0;
    for (let i = 1; i <= students; i++) {
        if (i % 5 === 0) {
            freePackege++;
        }
        
    }
    let sumOfApron = priceOfApron * apronByPercent;
    let sumOfeggs = priceOfEggs * 10 * students;
    let sumOfFlour = priceOfFlour * (students - freePackege);
    let result = sumOfApron + sumOfeggs + sumOfFlour;
    let needed = Math.abs(budget - result);
    
    if (budget >= result) {
        console.log(`Items purchased for ${result.toFixed(2)}$.`);
    } else {
        console.log(`${needed.toFixed(2)}$ more needed.`);
        
    }

}
solve([100, 25, 4.0, 1.0, 6.0]);