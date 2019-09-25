function rightPlace(string, char, string2) {
    
     let replaceString = string.replace("_", char);
     if (replaceString === string2) {
         console.log("Matched");
     } else {
         console.log("Not Matched");
     }


}
rightPlace('Str_ng', 'I', 'Strong');