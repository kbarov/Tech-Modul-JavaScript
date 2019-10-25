function stringSubstrtin(word, text) {

    let someTextArr = text.toLowerCase().split(" ");

    for (let i = 0; i < someTextArr.length; i++) {
        if (someTextArr[i] === word) {
            console.log(word);
            return;
        } 
    }
    
    console.log(`${word} not found!`);
}
stringSubstrtin('python',
    'JavaScript is the best programming language'

);