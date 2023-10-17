function arrayDiff(arr1, arr2){
    let output = new Array();

    for (const ele of arr1){
        if (!arr2.includes(ele)) output.push(ele);
    }

    return output;
}
