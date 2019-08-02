function max(params) {

    let array = params[0].split(" ");
    let longestSequence = [];
    for (let i = 0; i < array.length; i++) {
        let tempSequence = [];
        for (let j = i; j < array.length; j++) {
            if (array[i] === array[j]) {
                tempSequence.push(array[i]);
            } else {
                break;
            }

        }
        if (longestSequence.length < tempSequence.length) {
            longestSequence = tempSequence;
        }
    }
    console.log(longestSequence.join(" "));
}
max(['2 1 1 2 3 3 2 2 2 1']);