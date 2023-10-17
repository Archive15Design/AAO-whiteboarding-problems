function reverb(word){
    let split = word.split('');
    vowels = 'aeiou';

    for (let i = split.length-1; i > -1; i--) {
        let char = split[i].toLowerCase();
        if (vowels.includes(char)) {
            let copy = split.slice(i);
            let newWord = copy.join('')
            split.push(newWord);
            break;
        }
    }

    return split.join('')
}
