function isPrime(n) {

    for (let i = n-1; i > 1; i--) {
        if (n % i === 0) return false;
    }

    return true;
}

function firstNPrimes(n) {
    let output = new Array();

    if (n < 1) return output;
    else if (n === 1) output.push(2);
    else {
        for (let i = 2; output.length < n; i++){
            if (isPrime(i)) output.push(i);
        }
    }

    return output;
}
