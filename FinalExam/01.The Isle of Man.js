function solve(params) {
    let regex = /([\#\$\%\*\&])([A-Za-z]+)(\1)=([0-9]+)!!(.+)/;
    for (const line of params) {
        let result = line.match(regex)

        if ((result = line.match(regex)) && (+result[4] === +result[5].length)) {
            let group = result[5]
                .split('')
                .map(c => String.fromCharCode(c.charCodeAt(0) + (+result[4])))
                .join('')
            console.log(`Coordinates found! ${result[2]} -> ${group}`);
            break;
        } else {
            console.log("Nothing found!");
        }
    }
}
solve(['%GiacomoAgostini%=7!!hbqw',
    '&GeoffDuke*=6!!vjh]zi',
    'JoeyDunlop=10!!lkd,rwazdr',
    'Mike??Hailwood=5!![pliu',
    '#SteveHislop#=16!!df%TU[Tj(h!!TT[S'
])