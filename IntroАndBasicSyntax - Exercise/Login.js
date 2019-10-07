function reverseString(username) {
    let user = username[0];
    let user2 = user.split("").reverse().join("");
    let counter = 1;

    while (true) {
        let pass = username[counter];
        if (pass === user2) {
            console.log(`User ${user} logged in.`);
            break;
        } else if (counter >= username.length - 1) {
            console.log(`User ${user} blocked!`);
            break;
        } else {
            console.log("Incorrect password. Try again.");
            counter++;
        }
    }
}
reverseString(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);