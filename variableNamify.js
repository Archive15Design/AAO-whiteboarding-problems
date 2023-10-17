function upCase(word) {
    let split = word.toLowerCase().split('');
    const newChar = word[0].toUpperCase();
    split.splice(0, 1, newChar);
    return split.join('');
}

function variableNameify(words){
    let output = '';

    for (let i = 0; i < words.length; i++){
        if (i ===0) output = words[i].toLowerCase();
        else {
            let upCased = upCase(words[i]);
            output += upCased;
        }
    }

    return output;
}
