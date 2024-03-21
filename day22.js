//reverse aa string
function reverseString(str) {
    let str2 = "";
    for (let i = str.length -1; i >= 0; i--) {
        str2 += str[i];
        
        
    }
    return str2;
}
const string = "JavaScript"
console.log("the reverse array is", reverseString(string));
