// const number = [ 1,2,3,4,5,6,-1,-2,-3,-4,-5,-6]
// for (let i = 0; i < i.length; i++) {
//     if (number[i] > 0 ) {
//         console.log("The positive numbers are",[i]);

//     }
//     console.log("hello")
    
// }
function getPositiveNumber(number){
    return number.filter(num => num > 0);
}
const number = [1,2,3,4,5,6,-1,-2,-3,-4,-5,-6]
console.log("The positive numbers are ",getPositiveNumber(number))