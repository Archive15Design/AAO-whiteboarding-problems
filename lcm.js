function lcm (num1, num2) {
    let n = 1;

    while (n < 100000) {
        n++;
        if (n % num1 === 0 && n % num2 === 0){
            return n;
        }
    }

    return null;
}
