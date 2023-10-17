function logBetween (lowN, highN){
    let outputArray = new Array();

    // empty return if lowN is greater than highN
    if (lowN > highN) return outputArray;

    // insert lowest number on index 0
    outputArray[0] = lowN;

    // iterate through every number up to and including high number
    for (let i = lowN + 1; i <= highN; i++) {
        outputArray.push(i);
    }

    // return finished output array
    return outputArray;
}
