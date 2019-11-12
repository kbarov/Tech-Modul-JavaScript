function solve(params) {

    let shops = params.shift().split(' ');
    let countOfshops = params.shift();

    for (const line of params) {
        let [command, args1, args2] = line.split(' ');
        if (command === 'Include') {
            shops.push(args1);
        } else if (command === 'Visit') {
            if (shops.length > args2) {
                if (args1 === 'first') {
                    shops.splice(0, args2)

                } else if (args1 === 'last') {
                    shops.splice(args2)
                }
            }
        } else if (command === 'Prefer') {
            let firstIndex = args1;
            let secondIndex = args2;

            if (shops.length >= firstIndex && shops.length >= secondIndex) {
                let a = shops.splice(firstIndex, 1, shops[args2]);
                let b = shops.splice(secondIndex, 1, a[0]);

            }
        } else if (command === 'Place') {
            let shop = args1;
            let index = +args2;
            if (shops.length >= index) {
                shops.splice(index + 1, 0, shop);

            }

        }

    }
    console.log('Shops left:');
    console.log(shops.join(' '));
}
// solve(['Boutique Flowers CandyStore ThriftShop Versace Groceries ToyStore PeakStore',
//     '6',
//     'Visit first 9',
//     'Visit last 4',
//     'Prefer 3 8',
//     'Prefer 0 1',
//     'Place Store 7',
//     'Place ShoeAquarium 2'
// ]);
solve(['Bershka CandyStore ThriftShop Armani Groceries ToyStore PeakStore',
    '5',
    'Include HM',
    'Visit first 2',
    'Visit last 1',
    'Prefer 3 1',
    'Place Library 2'
]);