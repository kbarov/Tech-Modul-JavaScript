function solve(num, arr) {
    
    let result = [];
    

    for (let i = 0; i < num; i++) {
        let firstElement = arr.shift();
        result.push(firstElement);
        
    }
    let reverse = result.reverse();
    console.log(reverse.join(" "));

}
solve(3, [10, 20, 30, 40, 50])