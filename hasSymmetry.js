function hasSymmetry(array){
    let reversed = array.toReversed();

    for (let i = 0; i < array.length; i++){
        if (array[i] !== reversed[i]) return false;
    }

    return true;
}

console.log(hasSymmetry([1, 2, 3, 3, 2, 1])); // => true
console.log(hasSymmetry([1, 2, 3, 3, 4, 1])); // => false
console.log(hasSymmetry(['cat', 'dog', 'bird', 'dog', 'cat'])); // => true
console.log(hasSymmetry(['cat', 'dog', 'bird', 'bird', 'cat'])); // => false
