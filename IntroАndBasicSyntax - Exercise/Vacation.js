function vacation(arg1, arg2, arg3) {
    let numOfPeople = arg1;
    let typeOfTheGroup = arg2;
    let dayOfWeek = arg3;

    let price = 0;
    let result = 0;
    switch (dayOfWeek) {
        case "Friday":
            if (typeOfTheGroup === "Students") {
                price = 8.45;
            } else if (typeOfTheGroup === "Business") {
                price = 10.90;
            } else if (typeOfTheGroup === "Regular") {
                price = 15;
            }
            break;
        case "Saturday":
            if (typeOfTheGroup === "Students") {
                price = 9.80;
            } else if (typeOfTheGroup === "Business") {
                price = 15.60;
            } else if (typeOfTheGroup === "Regular") {
                price = 20;
            }
            break;
        case "Sunday":
            if (typeOfTheGroup === "Students") {
                price = 10.46;
            } else if (typeOfTheGroup === "Business") {
                price = 16;
            } else if (typeOfTheGroup === "Regular") {
                price = 22.50;
            }
            break;
    }

    if (numOfPeople >= 30 && typeOfTheGroup === "Students") {
        result = numOfPeople * (price * 0.85);
    } else if (numOfPeople >= 100 && typeOfTheGroup === "Business") {
        result = (price * numOfPeople) - (10 * price);
    } else if (numOfPeople >= 10 && numOfPeople <= 20 && typeOfTheGroup === "Regular") {
        result = (price * 0.95) * numOfPeople;
    } else {
        result = price * numOfPeople;
    }
    console.log("Total price: " + result.toFixed(2));
}
vacation(40, "Regular", "Saturday");