function oddWordsOut(sentence){
    let words = sentence.split(' ');

    for (let i = 0; i < words.length; i++){
        let word = words[i]
        if (word.length % 2 !== 0) {
            words.splice(i, 1);
            i--;
        }
    }

    return words.join(' ');
}
