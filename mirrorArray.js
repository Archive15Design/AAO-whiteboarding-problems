function mirrorArray(array){
    let output = new Array();
    let reverse = array.toReversed();

    output = array.concat(reverse);

    return output;
}
