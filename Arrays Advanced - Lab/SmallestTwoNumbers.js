function smallestTwoNumber(array) {
    
    let sortingNumbers = array.sort((a, b) => a - b).slice(0,2).join(" ");
    console.log(sortingNumbers);
    

}
smallestTwoNumber([3, 0, 10, 4, 7, 3]);