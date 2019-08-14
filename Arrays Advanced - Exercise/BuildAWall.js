function wall(array) {

    let totalUserConcrete = [];
    let totalPrice = 0;
    let isComplete = false;
    while (!isComplete) {
        isComplete = true;
        let currentUsedConcrete = 0;

        for (let i = 0; i < array.length; i++) {
            if (array[i] < 30) {
                array[i]++;
                currentUsedConcrete += 195;
                isComplete = false;
            }


        }
        if (!isComplete) {
            totalUserConcrete.push(currentUsedConcrete);
            totalPrice += currentUsedConcrete * 1900;
        }
    }
    console.log(`${totalUserConcrete.join(", ")}\n${totalPrice} pesos`);

}
wall([21, 25, 28]);