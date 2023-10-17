function longWordCount(sentence){
    let words = sentence.split(' ');
    let count = 0;

    for (const word of words){
        if (word.length > 7) count++;
    }

    return count;
}
