function solve(input) {
    
    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/g;

    let result = [];
    let match = '';
    
    while ((match = pattern.exec(input)) !== null) {
        result.push(match[0]);
    }

    console.log(result.join(' '));
    
}
solve("Steven Son, Steven son, steven Son, STeven Son, Michael Braun, MichaelBraun");