function zipArray (arr1, arr2) {
    let output = new Array();
    let i = 0;

    for (const ele of arr1){
        const pair = [arr1[i], arr2[i]];
        output.push(pair);
        i++;
    }

    return output;
}

const a1 = ['a', 'b', 'c', 'd'];
const a2 = [10, 20, 30, 40];

const result = zipArray(a1, a2);
console.log(result); // => [ [ 'a', 10 ], [ 'b', 20 ], [ 'c', 30 ], [ 'd', 40 ] ]
