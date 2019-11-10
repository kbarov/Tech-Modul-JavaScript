function solve(input) {

    let collection = input[0].split(" ").map(Number);

    for (let i = 1; i < input.length; i++) {

        let splitedInput = input[i].split(" ");
        let command = splitedInput[0];
        let paintingNumber = +splitedInput[1];
        let changingNumber = +splitedInput[2];

        if (command === "Change") {
            let index = collection.indexOf(paintingNumber);
            if (collection.includes(paintingNumber)) {
                collection.splice(index, 1, changingNumber)
            }
        } else if (command === "Hide") {
            let index = collection.indexOf(paintingNumber);
            if (collection.includes(paintingNumber)) {
                collection.splice(index, 1, );
            }
        } else if (command === "Switch") {
            let firstIndex = collection.indexOf(paintingNumber);
            let secondIndex = collection.indexOf(changingNumber);
            if (collection.includes(paintingNumber)) {
                if (collection.includes(changingNumber)) {
                    collection.splice(firstIndex, 1, changingNumber);
                    collection.splice(secondIndex, 1, paintingNumber);
                }
            }
        } else if (command === "Insert") {
            if (paintingNumber <= collection.length + 1) {
                collection.splice(paintingNumber + 1, 0, changingNumber)
            }

        } else if (command === "Reverse") {
            collection.reverse();
        } else if (command === "END") {
            console.log(collection.join(" "));
        }
    }
}
// solve(["115 115 101 114 73 111 116 75", "Insert 5 114", "Switch 116 73", "Hide 75", "Reverse ", "Change 73 70", "Insert 10 85", "END"]);
solve(["77 120 115 101 101 97 78 88 112 111 108 101 111 110", "Insert 5 32", "Switch 97 78", "Hide 88", "Change 120 117", "END"]);