function solve(input) {

    let firstLetter = input;
    let secondLetter = input;

    let halfFirstWord = firstLetter.substr(0, firstLetter.length / 2);
    let halfSecondWord = secondLetter.substr(secondLetter.length / 2, secondLetter.length - 1);

    let resultOfFirstWord =  halfFirstWord.split("").reverse().join("");
    let resultOfSecondWord =  halfSecondWord.split("").reverse().join("");

    console.log(resultOfFirstWord);
    console.log(resultOfSecondWord);

}
solve('tluciffiDsIsihTgnizamAoSsIsihT');