function collapseString(str){
    // init an array of the string and a string output initialized as the 0th index of chars
    let chars = str.split('');
    let output = chars[0];

    // iterate through every char starting at index 1
    // comparing each char with the previous one, skipping repeats but adding unique chars to output
    for (let i = 1; i < chars.length; i++){
        if (chars[i] === chars[i - 1]) continue;
        else output += chars[i];
    }

    return output;
}
