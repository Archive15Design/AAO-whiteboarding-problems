function evenSumArray(array){
    let output = new Array();

    for (const num of array) {
        let newNum = 0;
        for (let i = 0; i <= num; i += 2){
            newNum += i;
        }
        output.push(newNum);
    }

    return output;
}

console.log(evenSumArray([6, 7, 5])); // => [ 12, 12, 6 ]
console.log(evenSumArray([2, 8, 3, 5])); // => [ 2, 20, 2, 6 ]
