function solve(params) {

    let gifts = params.shift().split(' ');
    gifts
    for (const line of params) {
        if (line === 'No Money') {
            break;
        }

        let [command, gift, index] = line.split(' ');
        if (command === 'OutOfStock') {
            for (let i = 0; i < gifts.length; i++) {
                let indexProduct = gifts.indexOf(gift);
                if (gifts.includes(gifts[indexProduct])) {
                    gifts.splice(indexProduct, 1, 'None');
                }
            }
            gifts
        } else if (command === 'Required') {
            if (gifts.length >= index) {
                gifts.splice(+index, 1, gift);
            }
            gifts
        } else if (command === 'JustInCase') {
            gifts.splice(gifts.length - 1, 1,gift )
        }
        gifts
    }
    if (gifts.includes('None')) {
        for (let i = 0; i < gifts.length; i++) {
            let index = gifts.indexOf('None')
            if (gifts.includes('None')) {
                gifts.splice(index,1);
            }
        }

    }
    gifts
    console.log(gifts.join(' '));
     
}
solve(['Eggs StuffedAnimal Cozonac Sweets EasterBunny Eggs Clothes',
    'OutOfStock Eggs',
    'Required Spoon 2',
    'JustInCase ChocolateEgg',
    'No Money'
]);