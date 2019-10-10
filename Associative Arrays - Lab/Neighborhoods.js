function solve(input) {

    let result = new Map()
    input
        .shift()
        .split(", ")
        .forEach(n => result.set(n,[]));
        

    for (const line of input) {
        let [neighborhood, name] = line.split(" - ");

            if (result.has(neighborhood)) {
                let people = result.get(neighborhood);
                people.push(name);
                result.set(neighborhood, people);
            }   
    }
    
    let output = [...result.entries()];

    output.sort((a, b) => b[1].length - a[1].length);
    
    for (const [neighborhood, people] of output) {
        console.log(`${neighborhood}: ${people.length}`);
        for (const person of people) {
            console.log(`--${person}`);
            
        }
        
    }
    
  
}

solve(['Abbey Street, Herald Street, Bright Mews',
    'Bright Mews - Garry',
    'Bright Mews - Andrea',
    'Invalid Street - Tommy',
    'Abbey Street - Billy'
]);