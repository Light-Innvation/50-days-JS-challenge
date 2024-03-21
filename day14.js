function firstFibonnaci(n){
    let fib = [0, 1];
    for (let i = 2; i < n; i++) {
        fib[i] = fib[i - 1] + fib[ i - 2];
        
    }
    return fib.slice( 0,n);

}
console.log(firstFibonnaci(10));

// create a function that will find the nth Fibonacci number  without using recursion 