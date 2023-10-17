// time: O(n) n = max
// space: O(n)

function fizzBuzz(max){
    let output = new Array();

    for (let i = 0; i < max; i++){
        if ((i % 3 === 0 && i % 5 !== 0) || (i % 3 !== 0 && i % 5 === 0)) {
            output.push(i);
        }
    }

    return output
}
