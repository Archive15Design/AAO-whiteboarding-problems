function oddRange(end){
    let output = new Array();
    // check if end is positive
    if (end < 0) return output;

    for (let i = 1; i <= end; i += 2){
        output.push(i);
    }

    return output;
}


console.log(oddRange(13));  // => [ 1, 3, 5, 7, 9, 11, 13 ]
console.log(oddRange(6));  // => [ 1, 3, 5 ]
