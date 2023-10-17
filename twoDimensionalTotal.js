function twoDimensionalTotal(arrays) {
    let total = 0;

    for (const arr of arrays){
        for (const num of arr){
            total += num;
        }
    }

    return total;
}
