function fib(n) {
    if (n <= 1) {
        return n;
    } else{
        
        fib( n- 1) + fib(n - 2);
    }
   
}
console.log(fib(10));
// create a function that will find the nth Fibonacci number using recursion 