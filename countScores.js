function countScores(people){
    let output = new Object();

    people.forEach( (person) => {
        if (Object.keys(output).includes(person.name)) output[person.name] += person.score;
        else output[person.name] = person.score;
    })

    return output;
}
