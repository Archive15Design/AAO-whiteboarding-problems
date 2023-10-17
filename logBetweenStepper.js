function logBetweenStepper (lowN, highN, step){
    let outputArray = new Array();

    // empty return if lowN is greater than highN
    if (lowN > highN) return outputArray;

    // iterate through every number up to and including high number
    for (let i = lowN; i <= highN; i += step) {
        outputArray.push(i);
    }

    // ensure that last number is highN
    if (outputArray[outputArray.length-1] !== highN) outputArray.push(highN);

    // return finished output array
    return outputArray;
}
