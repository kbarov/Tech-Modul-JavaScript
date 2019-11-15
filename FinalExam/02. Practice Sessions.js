function solve(params) {

    params.pop();
    let firstRace = {};
    for (const param of params) {
        let tokens = param.split("->");
        let command = tokens[0];
        let roat = tokens[1];
        let racer = tokens[2];

        if (command === "Add") {
            if (!firstRace.hasOwnProperty(roat)) {
                firstRace[roat] = [];
            }
            if (!firstRace[roat].includes(racer)) {
                firstRace[roat].push(racer)
            }
        } else if (command === "Move") {
            let tokens = param.split('->');
            let currentRoad = tokens[1];
            let racer = tokens[2];
            let nextRoad = tokens[3];

            if (firstRace.hasOwnProperty(currentRoad)) {
                let index = firstRace[currentRoad].indexOf(racer)
                if (firstRace[currentRoad].includes(racer)) {
                    firstRace[currentRoad].splice(index, 1,)
                    firstRace[nextRoad].push(racer);
                }
            }
        } else if (command === "Close") {
            let tokens = param.split('->');
            let road = tokens[1];
            
            if (firstRace.hasOwnProperty(road)) {
                delete firstRace[road];

            }
        }
    }
    console.log('Practice sessions:');
    
    Object.entries(firstRace).sort((a, b) => {
        let result = b[1].length - a[1].length;
        if (result === 0) {
            result = a[0].localeCompare(b[0]);
        }
        return result;
    }).forEach(([road,racer]) => {
        console.log(road);
        for (const race of racer) {
            race.split(',')
            console.log(`++${race}`);
            
        }
    })
}
solve(['Add->Glen Vine->Steve Hislop',
    'Add->Ramsey road->John McGuinness ',
    'Add->Glen Vine->Ian Hutchinson',
    'Add->Ramsey road->Dave Molyneux',
    'Move->Ramsey road->Hugh Earnsson->Glen Vine',
    'Add->A18 Snaefell mountain road->Mike Hailwood',
    'Add->Braddan->Geoff Duke',
    'Move->A18 Snaefell mountain road->Mike Hailwood->Braddan',
    'Move->Braddan->John McGuinness->Glen Vine',
    'Close->A18 Snaefell mountain road',
    'Close->Ramsey',
    'END'
]);