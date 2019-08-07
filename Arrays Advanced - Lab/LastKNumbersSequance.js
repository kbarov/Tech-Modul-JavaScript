function solve(n, k) {
    
    let result = [1];

    for (let i = 1; i < n; i++) {
        let index = i - k;
        if (index < 0) {
            index = 0;
        }
        
        let sumArr = result.slice(index);
        let sum = 0;
        for (const num of sumArr) {
            sum += num;
        }
        result.push(sum);
    }
    console.log(result.join(" "));
}
solve(6, 3);