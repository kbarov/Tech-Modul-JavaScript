function printElement(array) {

    let ourArr = [];

    for (let i = 0; i < array.length - 1; i += +array[array.length - 1]) {

        ourArr.push(array[i]);
        
    }
    console.log(ourArr.join(" ")); 


}
printElement(['dsa', 'asd', 'test', 'test', '2']);