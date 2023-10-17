function myIndexOf(array, target){

    for (const idx in array){
        if (array[idx] === target) return idx;
    }

    return -1;
}
