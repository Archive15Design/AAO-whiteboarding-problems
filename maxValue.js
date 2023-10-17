// time: O(n)
// space: O(n)

function maxValue(array){
    let maxValue = null;

    for (const num of array){
        if (num > maxValue) maxValue = num;
    }

    return maxValue;
}

console.log(maxValue([12, 6, 43, 2]));  // => 43
console.log(maxValue([]));  // => null
console.log(maxValue([-4, -10, 0.43]));  // => 0.43
