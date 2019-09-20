function loadingBar(input) {

    let result = '[';
    let number = input / 10;
    if (number === 10) {
        for (let j = 0; j < number; j++) {

            result += "%";
        }
        console.log(input + "%" + " " + "Complete!" + "\n" + result + "]")
    } else {
        for (let i = 0; i < 10; i++) {
            if (i < number) {
                result += "%"
            } else {
                result += "."
            }


        }
        console.log(input + "%" + " " +  result + "]" + "\n" + "Still loading...")
    }

}
loadingBar(50);