function threeIncreasing(arr){
    for (let i = 0; i < arr.length; i++){
        if (arr[i + 1] === arr[i] + 1 && arr[i + 2] === arr[i] + 2) return true;
    }
    return false;
}
