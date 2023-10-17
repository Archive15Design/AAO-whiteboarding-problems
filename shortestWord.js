function shortestWord(sentence){
    let words = sentence.split(' ');

    let shortest = words.reduce((current, next) => {
        if (current.length > next.length) return next;
        else return current;
    });

    return shortest;
}

console.log(shortestWord('app academy is cool')) // => 'is'
console.log(shortestWord('programming bootcamp')) // => 'bootcamp'
