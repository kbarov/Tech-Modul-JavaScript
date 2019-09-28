function gladiator(fight, helmetP, swordP, shieldP, armorP) {
    
    let lostFightsCounter = fight;
    let helmedPrice = helmetP;
    let swordPrice = swordP;
    let shieldPrice = shieldP;
    let armorPrice = armorP;

    let totalExpenses = 0;

    for (let i = 1; i <= lostFightsCounter; i++) {
        if (i % 2 === 0) {
            totalExpenses += helmedPrice;
        } 
        if (i % 3 === 0) {
            totalExpenses += swordPrice;
        }
        if (i % 6 === 0) {
            totalExpenses += shieldPrice;
        }
        if (i % 12 === 0) {
            totalExpenses += armorPrice;
        }

    }
    console.log(`Gladiator expenses: ${totalExpenses.toFixed(2)} aureus`)

}
gladiator(7, 2, 3, 4, 5);