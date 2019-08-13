function processOddNumber(array) {
    

    let redused = array.filter(e => array.indexOf(e) % 2 != 0).map(e => e * 2).reverse().join(" ");

    console.log(redused);
    
}
processOddNumber([10, 15, 20, 25]);