function solve(input) {

    let collectionOfItems = input[0].split("|");
    let budget = input[1];
    let increaseItem = 0;
    let totalCost = 0;
    let profit = 0;
    let newPrices = [];
    
    
    for (const token of collectionOfItems) {
        let item = token.split("->");
        let dress = item[0];
        let price = +item[1];
        
        if (dress === "Clothes") {
            if (price <= 50 && budget - price >= 0) {
                budget -= price;
                increaseItem += price * 0.40 + price;
                profit += price * 0.40;
                totalCost += increaseItem;
                newPrices.push(increaseItem.toFixed(2));
                increaseItem = 0;
            }
        } else if (dress === "Shoes") {
            if (price <= 35 && budget - price >= 0) {
                budget -= price;
                increaseItem += price * 0.40 + price;
                profit += price * 0.40;
                totalCost += increaseItem;
                newPrices.push(increaseItem.toFixed(2));
                increaseItem = 0;
            }
        } else if (dress === "Accessories") {
            if (price <= 20.50 && budget - price >= 0) {
                budget -= price;
                increaseItem += price * 0.40 + price;
                profit += price * 0.40;
                totalCost += increaseItem;
                newPrices.push(increaseItem.toFixed(2));
                increaseItem = 0;
            }
        }
    }

    totalCost += budget;
    console.log(newPrices.join(" "));
    console.log(`Profit: ${profit.toFixed(2)}`);
    if (totalCost >= 150) {
        console.log("Hello, France!" );
    } else {
        console.log("Time to go.");
    }
 
}
solve(["Clothes->43.30|Shoes->25.25|Clothes->36.52|Clothes->20.90|Accessories->15.60", "120"])