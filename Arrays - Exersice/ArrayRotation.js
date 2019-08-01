function rotation(arr, num) {
    
for (let i = 0; i < num; i++) {
    
    let cut = arr.shift();
    cut = arr.push(cut);
    
}
console.log(arr.join(" "));

}
rotation([51, 47, 32, 61, 21],2);