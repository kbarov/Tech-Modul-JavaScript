function addRemove(array) {

    let ourArr = [];

    for (let i = 0; i <= array.length; i++) {
        if (array[i] === "add") {
            ourArr.push(i + 1);
        } else if (array[i] === "remove") {
            ourArr.pop(i);
        }
    }

    if (ourArr.length === 0) {
        console.log("Empty");
    } else {
        console.log(ourArr.join(" "));
    }



}
addRemove(['remove', 'remove', 'remove']);