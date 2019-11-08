function solve(params) {

    params.pop();
    let children = {};
    let presents = {};

    for (const param of params) {
        let [names, toys, price] = param.split('->');
        price = +price;
        if (names === 'Remove') {
            delete children[toys];
        } else {
            if (!children.hasOwnProperty(names)) {
                children[names] = 0;
            }
            if (!presents.hasOwnProperty(toys)) {
                presents[toys] = 0;
            }
            children[names] += price;
            presents[toys] += price;
        }
    }

    console.log('Children:');
    Object.entries(children)
        .sort((a, b) => {
            let result = b[1] - a[1];
            if (result === 0) {
                result = a[0].localeCompare(b[0]);
            }
            return result
        })
        .forEach(c => console.log(`${c[0]} -> ${c[1]}`));
    console.log('Presents:');
    Object.entries(presents)
        .forEach(c => console.log(`${c[0]} -> ${c[1]}`));

}
solve(['Teddy->Clothes->8',
    'Johny->Toys->10',
    'Freddie->Candy->30',
    'Johny->Candy->20',
    'Carrie->Phone->1',
    'Carrie->Tablet->1',
    'Carrie->Candy->10',
    'Teddy->Toys->5',
    'Remove->Teddy',
    'END'
])