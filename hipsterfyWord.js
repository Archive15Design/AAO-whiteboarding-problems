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
