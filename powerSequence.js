function powerSequence(base, length) {
    let output = [base];
    if (length !== 1) output.push((base * base));
    else return output;

    let i = 1;
    while (output.length !== length) {
        output.push((output[i] * base));
        i++;
    }

    return output;
}
