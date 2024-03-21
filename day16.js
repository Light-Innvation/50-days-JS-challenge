//  Create a function that will return a booloean specifying if it is prime or not
// function isPrime(num){
//     if(num <= 1){
//         return false;
//     }
//     if(num <= 3){
//         return true;
//     }
//     if(num % 2 === 0 || num % 3 === 0){
//         return true;
//     }
//     for (let i = 5; i * i <= num; i += 6) {
//         if (num % i === 0 || num % (i + 2) === 0) {
//             return false;
//         }
        
//     }
//     return true;
// }
// const number = 23;
// console.log(`is ${number} prime`, isPrime(number));
// output

// This is another method to check

function isPrime(num){
    if (num <= 1) {
        return false;
        
    }
    for (let i = 2; i <=Math.sqrt(num); i++) {
        if (num % i === 0) {
            return false;
            
        }
        
    }
    return true;
}
const number = 23;
 console.log(`is ${number} prime`, isPrime(number));
// output