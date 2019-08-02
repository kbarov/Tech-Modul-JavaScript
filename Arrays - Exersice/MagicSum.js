function magicSum(array) {
    
    let ourSum = +array[1];
    let myAraay = array[0].split(" ");

    let magic = [];

    for (let i = 0; i < myAraay.length - 1; i++) {
        
        let currentElement = +myAraay[i];

        for (let j = i + 1; j < myAraay.length; j++) {
            
            let secondElement = +myAraay[j];
            if (currentElement + secondElement === ourSum) {
                magic.push(currentElement + " " + secondElement)
            }
        }
        
    }
    console.log(magic.join("\n"));
}
magicSum(['1 7 6 2 19 23', '8']);