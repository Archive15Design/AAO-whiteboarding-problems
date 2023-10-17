function valueConcat(array, obj){
    let output = new Array();

    for (const key of array){
        let value = obj[key];
        let concat = '';

        if (value !== undefined) concat = key + value;
        else concat = key;

        output.push(concat);
    }

    return output;
}

const arr = ['alex', 'maurice', 'meagan', 'ali'];
const obj = { alex: 'bronca', ali: 'harris' }
console.log(valueConcat(arr, obj)); // => [ 'alexbronca', 'maurice', 'meagan', 'aliharris' ]
console.log(valueConcat(['a', 'b', 'c'], { b: 2, c: 3 })); // => [ 'a', 'b2', 'c3' ]
