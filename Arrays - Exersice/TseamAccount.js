function tseamAccount(arr, game) {
    let games = arr;
    let instal = `Install ${game}`;
    let uninstal = `Uninstall ${game}`;
    let update = `Update ${game}`;
    let expansion = `Expansion ${game}`;
switch (game) {
    case instal:
        games.push(game);
        console.log(games);
        break;

    default:
        break;
}
console.log(games);

}
tseamAccount(["CS", "WoW", "Diablo"],
             "Install LoL",
             "Uninstall WoW",
             "Update Diablo",
             "Expansion CS-Go",
             " Play!")