function maxNum(array) {

    let topIntegers = [];

    for (let i = 0; i < array.length; i++) {
        let currentElement = array[i];
        let isTopInteger = true;

        for (let j = i + 1; j < array.length; j++) {

            if (currentElement <= array[j]) {
                isTopInteger = false;
                break;
            }
        }
        if (isTopInteger) {
            topIntegers.push(currentElement);
        }

    }
console.log(topIntegers.join(" "));

}
maxNum([27, 19, 42, 2, 13, 45, 48]);