function pairsToString(arr){
    let output = '';

    for (let i = 0; i < arr.length; i++){
        const currentPair = arr[i];
        const char = currentPair[0];
        const n = currentPair[1];

        const word = char.repeat(n);
        output = output.concat(word);
    }

    return output;
}
