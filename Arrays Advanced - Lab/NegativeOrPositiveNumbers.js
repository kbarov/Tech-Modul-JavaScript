function solve(array) {
    
    let result = [];

    for (const elements of array) {
        
        if (elements < 0) {
            result.unshift(elements);
        } else {
            result.push(elements);
        }

    }

    console.log(result.join("\n"));
}
solve([7, -2, 8, 9]);