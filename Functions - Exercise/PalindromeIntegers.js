function palindromeInt(numbers) {
    
    let isPalindrome = (a, b) => a === b;

    for (let i = 0; i < numbers.length; i++) {
        let currentNum = numbers[i];
        let reversedNumber = Number(currentNum.toString().split("").reverse().join(""));
        
        console.log(isPalindrome(currentNum,reversedNumber));
    }

}
palindromeInt([123,323,421,121]);