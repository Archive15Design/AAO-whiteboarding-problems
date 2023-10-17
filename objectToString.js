function objectToString(char){
    let output = '';
    let keys = Object.keys(char);
    let i = 0;

    for (const key in char){
        let currentChar = keys[i];

        for (let j = char[key]; j > 0; j--) {
            output += currentChar;
        }

        i++;
    }

    return output;
}
