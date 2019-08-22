function solve(numOne, numTwo, numThree) {
    let isNegative = convertSignBit(numOne) ^ convertSignBit(numTwo) ^ convertSignBit(numThree);

    if (numOne === 0 || numTwo === 0 || numThree === 0) {
        console.log("Positive")
    } else if (isNegative) {
        console.log("Negative");
    } else {
        console.log("Positive")
    }

    // 0 is equal to +, 1 is equal to -
    function convertSignBit(num) {
        return num < 0 ? 1 : 0;
    }
}
solve(5, 12, -15);