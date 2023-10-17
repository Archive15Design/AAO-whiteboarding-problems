function divisibleByThreePairSum (numbers) {
    let output = new Array();

    // test every number against other nums
    for (let i = 0; i < numbers.length; i++){
        for (let j = i + 1; j < numbers.length; j++) {
            // create number and sum variable
            let num = numbers[i];
            let otherNum = numbers[j];
            let sum = num + otherNum;

            //check if sum is multiple of 3, if so then create pair and push to output
            if (sum % 3 === 0) {
                let pair = [i, j];
                output.push(pair);
            }
        }
    }

    return output;
}

const arr1 = divisibleByThreePairSum([1, 6, 3, 4, 2, 0]);
console.log(arr1) // => [[0, 4], [1, 2], [1, 5], [2, 5], [3, 4]]

const arr2 = divisibleByThreePairSum([8, 3, 5, 9, 2]);
console.log(arr2) // => [[1, 3]]
