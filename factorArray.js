function factorArray(array, n){
    let output = new Array();

    for (const factor of array){
        if (n % factor === 0) output.push(factor);
    }

    return output;
}
