function solve(input) {
    
    let k = input.shift();
    let firstElement =input.slice(0, k);
    let lastElement = input.slice(input.length - k);

    console.log(firstElement.join(" "));
    console.log(lastElement.join(" "));
    


}
solve([2, 7, 8, 9]);