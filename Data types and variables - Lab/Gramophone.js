function gramophone(nameOfTheband, nameOfTheAlbum, holdingSongName) {
    
    let time = (nameOfTheband.length * nameOfTheAlbum.length) * holdingSongName.length / 2;
    let rotation = Math.ceil(time / 2.5);
    console.log(`The plate was rotated ${rotation} times.`)

}
gramophone('Black Sabbath', 'Paranoid', 'War Pigs');