const number = [ 1, 2, 3, 4,5]
let sum = 0;

for (let index = 0; index < number.length; index++) {
    sum += number[index];
    
}
let total_number = number.length;
var average = sum / total_number;

console.log("the sum of nmbers is ",sum)
console.log("the average is ",average);