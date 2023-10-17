function threeInARow(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1] && arr[i] === arr[i + 2]) return true;
    }
    return false;
}
