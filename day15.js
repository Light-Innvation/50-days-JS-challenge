function fib(n) {
    if (n <= 1) {
        return n;
    } else{
        
        fib( n- 1) + fib(n - 2);
    }
   
}
console.log(fib(10));