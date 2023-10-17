function twoDimensionalSize(array){
    let output = 0;

    for (let i = 0; i < array.length; i++){
        output += array[i].length;
    }

    return output;
}
