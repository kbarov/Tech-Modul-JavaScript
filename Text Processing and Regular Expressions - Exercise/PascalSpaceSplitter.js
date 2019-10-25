function solve(text) {

     let pattern = text.match(/[A-Z][a-z]*/g);
    console.log(pattern.join(", "));
 
}
solve('SplitMeIfYouCanHaHaYouCantOrYouCan');