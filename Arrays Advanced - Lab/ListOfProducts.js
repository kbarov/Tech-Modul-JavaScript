function listOfProducts(array) {
    
    let splicedArr = array.sort().map((e, i) => (i + 1) + "." + e).join("\n");
    
    console.log(splicedArr);
    

}
listOfProducts(["Potatoes", "Tomatoes", "Onions", "Apples"]);