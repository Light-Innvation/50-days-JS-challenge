//Creste a function that will return in an array containig the first "p" prime number greater then n
function getPrime(p, n) {
    const prime = [];
    let currentNumber = n + 1; // star checking number grester than n

    while (prime.length < p) {
        if (isPrime(currentNumber)) {
            prime.push(currentNumber)
        }
        currentNumber ++;
    }
    return prime;
}
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
const p = 5;
const n =10;
console.log(`first ${p} prime numbers greater than ${n}`, getPrime(p, n))
