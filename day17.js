// Calculate the sum of digits of a positive interger number
function sumOfDigit(num){
    let sum = 0;
    while (num > 0) {
        sum += number % 10;
        num = Math.floor(num / 10);
    }
    return sum;
}
const number = 12345;
console.log(`thesum of digits of ${number} is`, sumOfDigit(number));