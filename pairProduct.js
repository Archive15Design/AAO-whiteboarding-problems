function pairProduct(arr, num) {
    let output = new Array();

    let i = 0;
    while (i < arr.length) {
        let j = i + 1;
        while (j < arr.length){
            if (arr[i] * arr[j] === num) output.push([i, j]);
            j++
        }
        i++;
    }

    return output;
}
