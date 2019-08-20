function solve(input) {

    input = input.sort(compareLength)
     
    function compareLength(a, b) {
        if (a.length < b.length) {
            return a.length - b.length;
        } else if (a.length === b.length) {
            return a > b
        } else if (a.length > b.length) {
            return a.length - b.length;
        }
    }

    console.log(input.join("\n"))
}
solve(["Isacc", "Theodor", "Jack", "Harrison", "George"]);