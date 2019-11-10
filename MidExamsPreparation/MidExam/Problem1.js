function solve(array) {

    let days = +array.shift();
    let players = +array.shift();
    let energy = +array.shift();
    let water = +array.shift();
    let food = +array.shift();

    let totalWater = days * players * water;
    let totalFood = days * players * food;


    for (let i = 0; i < array.length; i++) {
        energy -= +array[i];
        if (energy <= 0) {
            console.log(`You will run out of energy. You will be left with ${totalFood.toFixed(2)} food and ${totalWater.toFixed(2)} water.`);

            return;
        }
        if (i % 2 === 1) {
            energy += energy * 0.05;
            totalWater -= totalWater * 0.30;
        }
        
        if (i === 2 || i === 5 || i === 8|| i === 11 || i === 14 || i === 17) {
            totalFood -= (totalFood / players);
            energy += energy * 0.10;

        }
    }
    console.log(`You are ready for the quest. You will be left with - ${energy.toFixed(2)} energy!`);


}
solve(["10", "7", "5035.5", "11.3", "7.2", "942.3",
    "500.57", "520.68", "540.87", "505.99", "630.3",
    "784.20", "321.21", "456.8", " 330"
]);


