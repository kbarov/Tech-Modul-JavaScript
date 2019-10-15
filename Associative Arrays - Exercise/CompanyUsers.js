function solve(params) {

    let companies = {};

    for (const param of params) {
        
        let tokens = param.split(" -> ");
        let company = tokens[0];
        let id = tokens[1];

        if (!companies.hasOwnProperty(company)) {
            companies[company] = [];
        }
        if (!companies[company].includes(id)) {
            companies[company].push(id);
        }
    }

    let sortedCompanies = Object.entries(companies)
            .sort((a, b) => a[0].localeCompare(b[0]));

    for (const [company, idData] of sortedCompanies) {
        console.log(company);
        for (const id of idData) {
            console.log(`-- ${id}`);
            
        }
    }
}
solve(['SoftUni -> AA12345',
    'SoftUni -> BB12345',
    'Microsoft -> CC12345',
    'HP -> BB12345'
]);