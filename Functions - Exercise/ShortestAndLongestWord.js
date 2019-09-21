function shortestAndLongestWord(sentence) {
    sentence = sentence.split(' ').filter(x => x !== '');
    let longest = sentence[0];
    let shortest = sentence[0];
 
    for (let i = 1; i < sentence.length; i++) {
        let current = sentence[i];
        if (shortest.length > current.length) {

            shortest = current;
        }
 
        if (longest.length < current.length) {

            longest = current;
        }
    }
    console.log(`Longest -> ${longest}\nShortest -> ${shortest}`);
 
 
}
 
shortestAndLongestWord('Hello people, are you familiar with the terms of application at the software university?');



// function solve(str) {
//     let words = str.split(/[\,\.\!,\?\s]+/).filter(x => x !== '');       //сплитваме стринга и махаме празните елементи в него
//     let sortedWords = words.slice().sort((a, b) => a.length - b.length); //клонираме масива и го сортираме по дължината на стринговете
//     let shortestLength = sortedWords[0].length;                          //вземаме дължината на най-кратката дума
//     let longestLength = sortedWords[sortedWords.length - 1].length;      //вземаме дължината на най-дългата дума
//     let shortestWord = words.find(w => w.length === shortestLength);     //вземаме първата срещната дума с дължина=shortestLength
//     let longestWord = words.find(w => w.length === longestLength);       //вземаме първата срещната дума с дължина=longestLength
//     console.log(`Longest -> ${longestWord}\nShortest -> ${shortestWord}`);
// }