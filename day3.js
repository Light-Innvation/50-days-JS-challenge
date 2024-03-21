function isPrime(num){
    if (num <= 1)return false;
    for (let index = 2; index < Math.sqrt(num); index++) {
       if(num % index === 0) return false;
        
    }
    return true;
}
let count = 0;
let number = 2;
while ( count < 100){
    if(isPrime(number)){
        console.log(number);
        count ++;
    }
    number ++;
}
// function that display prim number from 1 to 100