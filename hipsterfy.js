function hipsterfyWord(word){
    const vowels = 'aeiou';
    let split = word.split('');

    for (let i = split.length - 1; i >= 0; i--) {
        let char = split[i];

        if (vowels.includes(char.toLowerCase())){
            split.splice(i, 1);
            break
        }
    }

    return split.join('')
}

function hipsterfy(sentence) {
    let words = sentence.split(' ');
    let i = 0;

    for (let word of words){
        let hipsterWord = hipsterfyWord(word);
        words.splice(i, 1, hipsterWord);
        i++;
    }

    return words.join(' ');
}
