function solve(params) {

    let regex = /^[A-Z][a-z' ]+\:[A-Z ]+$/;

    for (const param of params) {
        if (param === "end") {
            break;
        }
        if (!param.match(regex)) {
            console.log("Invalid input!");
        } else {
            let key = param.split(':')[0].length;
            let ecryptedResult = param.split('');

            for (let index = 0; index < ecryptedResult.length; index++) {
                let currentSymbol = ecryptedResult[index];
                let ascii = currentSymbol.charCodeAt(0);
                ascii += key;
                 
                if (currentSymbol.match(/[A-Za-z]/)) {
                    if (currentSymbol.match(/[A-Z]/) && ascii > 90) {
                        ascii = (ascii % 90) + 64;
                    } else if (currentSymbol.match(/[a-z]/) && ascii > 122) {
                        ascii = (ascii % 122) + 96;
                    }
                    ecryptedResult[index] = String.fromCharCode(ascii);
                }
            }
            console.log(`Successful encryption: ${ecryptedResult.join('').replace(':','@')}`);
        }
    }
  
}
solve(['Eminem:VENOM',
    'Linkin park:NUMB',
    'Drake:NONSTOP',
    'Adele:HELLO',
    'end'
]);