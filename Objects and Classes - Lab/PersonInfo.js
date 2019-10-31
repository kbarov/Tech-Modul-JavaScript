function personalinfo(firstName, lastName, age) {
    let result = {
        firstName,
        lastName,
        age
    };
    let entries = Object.entries(result);

    for (const pair of entries) {
        console.log(`${pair[0]}: ${pair[1]}`);
    }

}
personalinfo("Peter", "Pan", "20");