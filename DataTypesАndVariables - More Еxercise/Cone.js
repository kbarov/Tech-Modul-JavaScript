function cone(radius, height) {
    
    let slant = Math.sqrt(radius * radius + height * height)
    let area = Math.PI * radius * (radius + slant);
    let volume = Math.PI * radius * radius * (height / 3);

    console.log(`volume = ${volume.toFixed(4)}`);
    console.log(`area = ${area.toFixed(4)}`);

}
cone(3, 5);