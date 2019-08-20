function sorting(array) {

    let sortingArr = array.sort((a, b) => b - a);
    let finalArr = [];

    while (array.length > 0) {
        finalArr.push(sortingArr.shift());
        finalArr.push(sortingArr.pop());
    }
    console.log(finalArr.join(" "));

}
sorting([1, 21, 3, 52, 69, 63, 31, 2, 18, 94]);