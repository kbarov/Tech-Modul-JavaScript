function rotate(array) {

    let ourArr = array;
    let num = array.pop();

    for (let i = 0; i < num; i++) {
        
        let pop = ourArr.pop();
        ourArr.unshift(pop);
    }
    console.log(ourArr.join(" "));
    
}
rotate(['Banana', 'Orange', 'Coconut', 'Apple', '15']);