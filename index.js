/**
 * Find the nth Fibonacci number
 */

 function fibonacciIterative(n){
     let result = 0
     let val = [0, 1, 1];
     for(let i = 3; i <= n; i++){
         result = val[i - 1] + val[i - 2];
         val[i] = result
     }

     return result;
 }

 function fibonacciRecursive(n){
     if(n <= 2){
         return 1;
     }

     return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2)
 }

 console.log(fibonacciIterative(10))
 console.log(fibonacciRecursive(10))