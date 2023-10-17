function twoDiff(array) {
    let output = new Array();

    for (let i = 0; i < array.length; i++){
        let num1 = array[i];
        for (let j = i; j < array.length; j++){
            let num2 = array[j];
            let diff = num1 - num2;

            if (Math.abs(diff) === 2) {
                let pair = [i, j];
                output.push(pair);
            }
        }
    }

    return output;
}
