function threeUniqueVowels(str) {
    let countObj = new Object();
    const VOWELS = ['a', 'e', 'i', 'o', 'u'];

    for (let i = 0; i < str.length; i++) {
        if (VOWELS.includes(str[i])){
            countObj[str[i]] = true;
        }
    }

    if (Object.keys(countObj).length >= 3) return true;
    else return false;
}
