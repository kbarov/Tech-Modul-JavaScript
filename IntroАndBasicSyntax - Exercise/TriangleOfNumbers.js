function triangleOfNumbers(number) {

    let sequence = "";

    for (let i = 1; i <= number; i++) {
        for (let y = 1; y <= i; y++) {
            sequence += i + " ";

        }
        console.log(sequence);
        sequence = "";
    }

}
triangleOfNumbers(3);