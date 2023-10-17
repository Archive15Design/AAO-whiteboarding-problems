function peakFinder(numbers){
    let output = new Array();
    let i = 0;

    for (const num of numbers){
        // create variables for previous and next number, accounting for 0th and last index
        let prev = numbers[i - 1];
        if (prev === undefined) prev = 0;
        let next = numbers[i + 1];
        if (next === undefined) next = 0;

        if (num > prev && num > next) {
            output.push(i);
        };

        i++;
    }

    return output;
}
