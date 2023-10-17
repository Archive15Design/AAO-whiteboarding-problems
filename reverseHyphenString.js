function reverseHyphenString(string) {
    let output = string.split('-');

    output.reverse();

    return output.join('-');
}
