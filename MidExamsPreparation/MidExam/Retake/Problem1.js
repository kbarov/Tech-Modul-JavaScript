function solve(params) {

    let budget = +params[0];
    let priceForOnekgFloor = +params[1];
    let priceForOnepackEggs = priceForOnekgFloor * 0.75;
    let priceForOneLiterMilk = priceForOnekgFloor * 1.25 / 4;
    let totalRecipe = priceForOnekgFloor + priceForOnepackEggs + priceForOneLiterMilk;
    let count = 0;
    let eggs = 0;


    for (let i = 0; i < 100; i++) {
        if (budget - totalRecipe < 0) {
            break;
        } else {
            budget -= totalRecipe;
            count++;
            eggs += 3;

            if (i === 2 || i === 5 || i === 8 || i === 11 || i === 14 || i === 17 || i === 20) {
                eggs -= (count - 2);
            }
        }
    }
    console.log(`You made ${count} cozonacs! Now you have ${eggs} eggs and ${budget.toFixed(2)}BGN left.`);
  
}
solve(['20.50', '1.25'])