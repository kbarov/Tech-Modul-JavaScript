function solve(params) {

    let partyIndex = params.indexOf("PARTY");
    let guestLists = params.slice(0, partyIndex);

    for (let i = partyIndex + 1; i < params.length; i++) {
        let guests = params[i];
        let guestsIndex = guestLists.indexOf(guests);
        guestLists.splice(guestsIndex, 1);
    }

    let result = guestLists.filter(g => Number.isInteger(+g[0]))
        .concat(guestLists.filter(g => !Number.isInteger(+g[0])));
    console.log(`${result.length}\n${result.join("\n")}`);

}
solve(['7IK9Yo0h',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc',
    'tSzE5t0p',
    'PARTY',
    '9NoBUajQ',
    'Ce8vwPmE',
    'SVQXQCbc'
]);