function fuelMoney(distance, passengers, price) {
    
    let neededFuel = (distance / 100) * 7;
    neededFuel += passengers * 0.100;
    let neededMoney = price * neededFuel;

    console.log(`Needed money for that trip is ${neededMoney}lv.`);

}
fuelMoney(90, 14, 2.88);