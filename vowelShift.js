function vowelShift(sentence){
    const VOWELS = ['a', 'e', 'i', 'o', 'u'];
    let chars = sentence.split('');

    for (let i = 0; i < chars.length; i++){
        let char = chars[i];
        if (VOWELS.includes(char)){
            chars.splice(i, 1, VOWELS[VOWELS.indexOf(char) + 1]);
        }
    }

    return chars.join('');
}
