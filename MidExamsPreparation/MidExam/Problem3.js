function solve(array) {

    let collectionOfWords = array[0].split(" ");


    for (let i = 1; i < array.length; i++) {
        let splitedCommand = array[i].split(" ");
        let command = splitedCommand[0];
        let firstToken = splitedCommand[1];
        let secondToken = splitedCommand[2];

        if (command === "Delete") {
            collectionOfWords.splice(+firstToken + 1, 1);
        } else if (command === "Swap") {
            let firstIndex = collectionOfWords.indexOf(firstToken);
            let secondIndex = collectionOfWords.indexOf(secondToken);
            if (collectionOfWords.includes(firstToken)) {
                if (collectionOfWords.includes(secondToken)) {
                    collectionOfWords.splice(firstIndex, 1, secondToken);
                    collectionOfWords.splice(secondIndex, 1, firstToken);
                }
            }
        } else if (command === "Put") {
            if (secondToken > 0 && secondToken <= collectionOfWords.length + 1) {
                collectionOfWords.splice(+secondToken - 1, 0, firstToken);
            }
        } else if (command === "Sort") {
            collectionOfWords.sort().reverse();
        } else if (command === "Replace") {
            let index = collectionOfWords.indexOf(secondToken);
            if (collectionOfWords.includes(secondToken)) {
                collectionOfWords.splice(index, 1, firstToken);
            }
        } else if (command === "Stop") {
            console.log(collectionOfWords.join(" "));
        }

    }

}
// solve(["Congratulations! You last also through the have challenge!", "Swap have last", "Replace made have", "Delete 2", "Put it 4","Stop"]);
solve(["This the my quest! final", "Put is 2", "Swap final quest!", "Delete 2", "Stop"]);