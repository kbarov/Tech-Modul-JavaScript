function houseParty(commands) {

    let guestsArr = [];

    for (const command of commands) {

        let name = command.split(" ")[0];

        if (!command.includes("not")) {
            if (!guestsArr.includes(name)) {
                guestsArr.push(name);
            } else if (guestsArr.includes(name)) {
                console.log(`${name} is already in the list!`);
            }
        } else if (command.includes("not")) {
            if (guestsArr.includes(name)) {
                let index = guestsArr.indexOf(name);
                guestsArr.splice(index , 1);
            } else if (!guestsArr.includes(name)) {
                console.log(`${name} is not in the list!`);
                
            }
        }
    }
    guestsArr.forEach(name => console.log(name));
    

}
houseParty(['Allie is going!',
    'George is going!',
    'John is not going!',
    'George is not going!'
]);