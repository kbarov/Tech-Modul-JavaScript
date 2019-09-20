function CharactersInRange(starChar, endChar) {

    let start = starChar.charCodeAt(0);
    let end = endChar.charCodeAt(0);
    let charsInRange = [];

    if (start > end) {
        let temp = start;
        start = end;
        end = temp;
    }

    for (let i = start + 1; i < end; i++) {
        
        charsInRange.push(String.fromCharCode(i));
        
    }
    console.log(charsInRange.join(" "));
}
CharactersInRange('a','d');