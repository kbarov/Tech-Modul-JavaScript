function solve(input) {

    let map = new Map();
    let myArr = input.toLowerCase().split(" ");

    for (const word of myArr) {
        if (!map.has(word)) {
            map.set(word, 1);
        } else {
            map.set(word, map.get(word) + 1);
        }
    }
    
    let result = "";
    for (const [key, value] of map) {
        if (value % 2 !== 0) {
            result += key + " ";
        }
    }

    console.log(result);
    
}
solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');