function greatestCommonFactor(num1, num2) {
    let lowNum = 0;
    if (num1 > num2) {lowNum = num2}
    else {lowNum = num1}

    let largest = 0;

    for (let i = 1; i < lowNum; i++){
        if (num1 % i === 0 && num2 % i === 0){
            largest = i;
        }
    }

    return largest;
}
