function isPrime(num) {
    if (num < 2) {
        console.log("false");
        return false;
    }
    if (num === 2) {
        console.log("true");
        return false;
    }
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            console.log("false");
        }
    }
    console.log("true");
}
isPrime(8);