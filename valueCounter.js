function valueCounter(obj, val) {
    let values = Object.values(obj);
    let filteredValues = values.filter((value) => value === val)
    return filteredValues.length;
}
