function countRepeats(word){
    let count = {};
    let wordArr = word.split('');

    for (let i = 0; i < wordArr.length; i++){
        let currentChar = word[i];
        if (Object.keys(count).includes(currentChar)) {
            count[currentChar] += 1;
        } else {
            count[currentChar] = 0;
        }
    }

    let valuesAboveZero = Object.values(count).filter((value) => value > 0);

    return valuesAboveZero.length;
}
