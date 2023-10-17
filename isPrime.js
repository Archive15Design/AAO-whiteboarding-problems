// time: O(n)
// space: O(1)

function isPrime(n) {

    for (let i = n-1; i > 1; i--) {
        if (n % i === 0) return false;
    }

    return true;
}
