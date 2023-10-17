function factorial(n){
    if (n === 1) return n;

    let factorial = n * (n-1);
    n -= 2;

    while (n !== 0) {
        factorial = factorial * n;
        n--;
    }

    return factorial;
}
