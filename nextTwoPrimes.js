function isPrime(n) {

    for (let i = n-1; i > 1; i--) {
        if (n % i === 0) return false;
    }

    return true;
}

function nextTwoPrimes(num){
    let output = new Array();
    num++;

    while (output.length < 2){
        if (isPrime(num)) output.push(num);
        num++;
    }

    return output;
}
