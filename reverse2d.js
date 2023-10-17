function reverse2D(array){
    let output = '';

    for (let i = array.length - 1; i > -1; i--){
        for (let j = array[i].length - 1; j > -1; j--){
            output += array[i][j];
        }
    }

    return output;
}
