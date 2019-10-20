function piccolo(allCarNums) {

    let carNumbsMap = new Map();

    for (const currentCarNumber of allCarNums) {
        let splited = currentCarNumber.split(", ");
        let action = splited.shift();
        let string = splited.join("");
        

        if (action === "IN") {
            carNumbsMap.set(string, 1);
        } else if (action === "OUT") {
            carNumbsMap.delete(string);
        }
    }
    let sortedCarNumbers = [...carNumbsMap].sort((a, b) => a[0].localeCompare(b[0]));

    if (sortedCarNumbers.length > 0) {
        sortedCarNumbers.forEach(e => console.log(e[0]))
    } else {
        console.log("Parking Lot is Empty");
    }

}
piccolo(['IN, CA2844AA',
    'IN, CA1234TA',
    'OUT, CA2844AA',
    'IN, CA9999TT',
    'IN, CA2866HI',
    'OUT, CA1234TA',
    'IN, CA2844AA',
    'OUT, CA2866HI',
    'IN, CA9876HH',
    'IN, CA2822UU'
]);