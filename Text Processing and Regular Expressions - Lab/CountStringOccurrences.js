function solve(text, string) {

    let countWord = 0;
    let splitedWord = text.split(" ");
    for (const word of splitedWord) {
        if (word === string) {
            countWord++;
        }
    }
    console.log(countWord);
  
}
solve("This is a word and it also is a sentence", "is");