function solve(array) {

    let firerWithTheirCells = array[0].split("#");
    let water = +array[1];
    let countFire = 0;
    let cellsAvailable = [];
    let totalEford = 0;

    for (let command of firerWithTheirCells) {
        let splited = command.split(" = ");
        let level = splited[0];
        let amount = +splited[1];

        if (level === "High") {
            if (amount >= 81 && amount <= 125) {
                if (water - amount >= 0) {
                    countFire += amount;
                    totalEford += amount * 0.25;
                    cellsAvailable.push(amount);
                    water -= amount;
                }
            }
        } else if (level === "Medium") {
            if (amount >= 51 && amount <= 80) {
                if (water - amount >= 0) {
                    countFire += amount;
                    totalEford += amount * 0.25;
                    cellsAvailable.push(amount);
                    water -= amount;
                }
            }
        } else if (level === "Low") {
            if (amount >= 1 && amount <= 50) {
                if (water - amount >= 0) {
                    countFire += amount;
                    totalEford += amount * 0.25;
                    cellsAvailable.push(amount);
                    water -= amount;
                }
            }
        } else if (water <= 0) {
            break;
        }
    }
    console.log('Cells:');

    for (let element of cellsAvailable) {
        console.log(' - ' + element);
    }
    console.log(`Effort: ${totalEford.toFixed(2)}`);
    console.log(`Total Fire: ${countFire}`);
}
solve(["High = 89#Meduim = 53#Low = 28#Medium = 77#Low = 23", "1250"]);