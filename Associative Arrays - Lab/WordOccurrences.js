function solve(words) {

    let occurences = {};

    for (const word of words) {
        if (!occurences.hasOwnProperty(word)) {
            occurences[word] = 0;
        }
        occurences[word]++;
    }

    let sortedOcuurences = Object.entries(occurences)
        .sort((a, b) => b[1] - a[1]);

    for (const occurences of sortedOcuurences) {
        console.log(`${occurences[0]} -> ${occurences[1]} times`);  
    }

}
solve(["Here", "is", "the", "first", "sentence", "Here", "is", "another", "sentence", "And", "finally", "the", "third", "sentence"]);