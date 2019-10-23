function palindromes(inputArr) {

    let palindroms = [];

    inputArr.forEach(element => {
        let textArr = element.split(" ").join("");
        let reverseTextArr = textArr.split("").reverse().join("");

        if (textArr === reverseTextArr) {
            palindroms.push(textArr);
        }
    });

    if (palindroms.length > 0) {
        console.log(palindroms.join(", "));
    } else {
        console.log("No palindromes found");
    }

}
palindromes([' stella won no wallets',
    'not a palindrome'
]);