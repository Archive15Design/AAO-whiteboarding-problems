function countInnerElement(arrays) {
    let output = new Object();

    for (const arr of arrays){
        const keys = Object.keys(output);

        for (const ele of arr){
            if (keys.includes(ele.toString())) output[ele] = output[ele] + 1;
            else output[ele] = 1;
        }
    }

    return output;
}
