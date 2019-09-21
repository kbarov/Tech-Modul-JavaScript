function perfectNum(number) {

    let result = 0;
    let arr = [];
    for (let i = 1; i <= number / 2; i++) {

        if (number % i === 0) {
            result += i;
            arr.push(i);
        }

    }
    if (number === result) {
        console.log("We have a perfect number!");
      
    } else {
        console.log("It’s not so perfect.");
    }

}
perfectNum(28);

