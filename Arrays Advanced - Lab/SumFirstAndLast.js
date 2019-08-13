function solve(arr) {
    
    let lastElement = arr.pop();
    let firstElement = arr.shift();

    return Number(firstElement) + Number(lastElement);
    
}
solve(['20', '30', '40']);