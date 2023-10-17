function isPrime(n) {

    for (let i = n-1; i > 1; i--) {
        if (n % i === 0) return false;
    }

    return true;
}

function commonPrimeFactors(n1, n2) {
    let output = new Array();

    let lowN;
    if (n1 < n2) lowN = n1;
    else lowN = n2;

    for (let i = 2; i <= lowN; i++){
        if ((n1 % i === 0 && n2 % i === 0) && isPrime(i)) output.push(i);
    }

    return output;
}
