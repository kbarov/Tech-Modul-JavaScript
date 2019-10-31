function solve(arr) {

    class Song {
        constructor(songType, name, time) {
            this.songType = songType
            this.name = name
            this.time = time
        }
    }

    let songs = [];

    for (let i = 1; i < arr.length - 1; i++) {
        let token = arr[i].split("_");
        let songType = token[0];
        let songName = token[1];
        let songTime = token[2];
        let currentSong = new Song(songType, songName, songTime);
        songs.push(currentSong);
    }

    let songType = arr[arr.length - 1];
    if (songType !== "all") {
        songs = songs.filter(song => song.songType === songType);
    }
    songs.forEach(song => console.log(song.name));

}
solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater'
]);