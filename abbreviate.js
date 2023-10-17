function abbreviate(sentence){
    let output = sentence.split(' ');
    const vowels = ['a', 'e', 'i', 'o', 'u'];

    for (let word of output){
        if (word.length > 4) {
            let abbrWord = word.split('');

            for (let i = 0; i < abbrWord.length; i++){
                let char = abbrWord[i];

                if (vowels.includes(char)){
                    abbrWord.splice(abbrWord.indexOf(char), 1);
                    i--;
                }
            }
            output.splice(output.indexOf(word), 1, abbrWord.join(''));

        }
    }

    return output.join(' ');
}
