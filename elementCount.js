function elementCount(array){
    let output = new Object();

    for (const element of array){
        if (Object.keys(output).includes(element.toString())) output[element] += 1;
        else output[element] = 1;
    }

    return output;
}
