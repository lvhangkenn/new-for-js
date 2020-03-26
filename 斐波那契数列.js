function Fibonacci(n){
    if(n==1) return 1;
    else if(n==2) return 1;
    else if(n>=3) return Fibonacci(n-1)+Fibonacci(n-2);
    else  return 0;
}
