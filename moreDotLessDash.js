function moreDotLessDash(str) {
    let counter = {'.': 0, '-': 0};

    for (let i = 0; i < str.length; i++){
        let char = str[i];
        if (Object.keys(counter).includes(char)){
            counter[char] += 1;
        }
    }

    if (counter['-'] < counter['.']) return true;
    else return false;
}

console.log(moreDotLessDash('2-D arrays are fun. I think.'));  // => true
console.log(moreDotLessDash('.-.-.'));  // => true
console.log(moreDotLessDash('.-'));  // => false
console.log(moreDotLessDash('..--'));  // => false
