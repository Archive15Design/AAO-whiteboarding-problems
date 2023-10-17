function commonFactors(n1, n2) {
    let output = new Array();

    let lowN;
    if (n1 < n2) lowN = n1;
    else lowN = n2;

    for (let i = 1; i <= lowN; i++){
        if (n1 % i === 0 && n2 % i === 0) output.push(i);
    }

    return output;
}
