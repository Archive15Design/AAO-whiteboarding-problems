function countAdjacentSums(arr, n){
    let count = 0;

    for (let i = 0; i < arr.length; i++){
        let current = arr[i];
        let adjacent = arr[i + 1];

        if (current + adjacent === n) count++ ;
    }

    return count;
}
