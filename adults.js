function adults(people){
    const output = new Array();

    people.forEach((person) => {

        if (person.age > 17) output.push(person.name)

    });

    return output;
}

const ppl = [
    {name: 'Jim', age: 13},
    {name: 'John', age: 20},
    {name: 'Jane', age: 18},
    {name: 'Bob', age: 7}
  ];

  const test = adults(ppl); // => [ 'John', 'Jane' ]
  console.log(test);
