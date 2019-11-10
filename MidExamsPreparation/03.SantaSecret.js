function solve(params) {

    let key = +params.shift();
    params.pop();

    let pattern = /@([A-Za-z]+)[^\@\-!:>]+!G!/;

    for (const param of params) {
        let encriptedString = param.split("")
            .map(s => String.fromCharCode(s.charCodeAt(0) - key))
            .join("")
            
            let result = encriptedString.match(pattern);
            if (result) {
                console.log(result[1]);
            } 
    }
}
solve([3,
    'N}eideidmk$(mnyenmCNlpamnin$J$',
    'ddddkkkkmvkvmCFrqqru-nvevek$J$nmgievnge',
    'ppqmkkkmnolmnnCEhq/vkievk$Q$',
    'yyegiivoguCYdohqwlqh/kguimhk$J$',
    'end'
])