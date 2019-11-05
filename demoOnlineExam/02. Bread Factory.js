function solve(input) {

    let splited = input[0].split("|");
    let initial = [100, 100];

    for (const element of splited) {
        let splitedElement = element.split("-");

        if (splitedElement[0] === "rest") {
            let currentHealth = initial[0];
            initial[0] += Number(splitedElement[1]);

            if (initial[0] > 100) {
                console.log(`You gained ${100 - currentHealth} energy.`);
                console.log(`Current energy: ${100}.`);
                initial[0] = 100;
            } else {
                console.log(`You gained ${Number(splitedElement[1])} energy.`);
                console.log(`Current energy: ${initial[0]}.`);
            }
        } else if (splitedElement[0] === "order") {
            initial[1] += Number(splitedElement[1]);
            initial[0] -= 30;
            if (initial[0] >= 0) {
                console.log(`You earned ${splitedElement[1]} coins.`);
            } else if (initial[0] < 0) {
                initial[1] -= Number(splitedElement[1]);
                initial[0] += 80;
                console.log(`You had to rest!`);
            }

        } else {
            initial[1] -= Number(splitedElement[1]);
            if (!(initial[1] <= 0)) {
                console.log(`You bought ${splitedElement[0]}.`);

            } else if (initial[1] <= 0){
                console.log(`Closed! Cannot afford ${splitedElement[0]}.`);
                return;

            }

        }

    }
    if (initial[0] > 0 ) {
        console.log(`Day completed!`);
        console.log(`Coins: ${initial[1]}`);
        console.log(`Energy: ${initial[0]}`);
        
    }

}
solve(["order-10|order-10|order-10|flour-100|order-100|oven-100|order-1000"]);