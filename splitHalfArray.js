function splitHalfArray(array){
    let output = new Array();

    if (array.length % 2 === 0){
        let half = array.splice(array.length / 2);
        output.push(array, half);
    } else {
        let first = array.splice(0, (array.length / 2));
        let second = array.splice(1);
        output.push(first, second);
    }

    return output;
}
