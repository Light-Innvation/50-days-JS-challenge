function isPrime(num){
    if (num <= 1)return false;
    for (let index = 2; index < Math.sqrt(num); index++) {
       if(num % index === 0) return false;
        
    }
    return true;
}
