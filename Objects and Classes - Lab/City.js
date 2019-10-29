function solve(name, area, population, country, postCode) {
    
    let obj = {
        name,
        area,
        population,
        country,
        postCode
    };

    for (let key in obj) {
        console.log(`${key} -> ${obj[key]}`);
    }

}
solve("Sofia", "492", "1238438", "Bulgaria", "1000");