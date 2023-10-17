function printReverse(min, max) {
    let outputArray = new Array();
    // check that min is less than max
    if (min > max) return outputArray;

    // create array of numbers in reverse order
    for (let i = max-1; i > min; i--){
        outputArray.push(i);
    }

    return outputArray;
}
