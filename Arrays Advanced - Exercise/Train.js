function train(wagons) {

    let firstElement = wagons
        .shift()
        .split(" ")
        .map(Number);
    let maxPassengers = +wagons.shift();


    for (const commands of wagons) {
        let currentCommand = commands.split(" ");
        
        if (currentCommand[0] === "Add") {
            firstElement.push(+currentCommand[1]);
        } else {

            for (let i = 0; i < firstElement.length; i++) {
               if (firstElement[i] + Number(currentCommand[0]) <= maxPassengers) {
                 firstElement[i] += Number(currentCommand[0]);
                 break;
               }
                
            }
        }

    }

    console.log(firstElement.join(" "));
    
}

train(['32 54 21 12 4 0 23', '75', 'Add 10', 'Add 0', '30', '10', '75']);