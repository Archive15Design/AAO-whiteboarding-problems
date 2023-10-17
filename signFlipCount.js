function signFlipCount(nums){
    let count = 0;
    let isPositive = true;
    if (nums[0] < 0) isPositive = false;

    for (const n of nums){
        if (n < 0 && isPositive) {
            isPositive = false;
            count++;
        } else if (n > 0 && !isPositive) {
            isPositive = true;
            count++;
        }
    }

    return count;
}
