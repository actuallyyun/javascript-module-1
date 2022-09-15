function birthYear(age) {
    const currentYear = 2022;
    let birthYear = currentYear - age;
    return birthYear
}
let year = birthYear(25)
console.log(year);

//function take name and age and display a message with name, age and birth year in sentence

function statement(name, age) {
    let statement = `hi, i am ${name} i am ${age} years old, i was born in ${year}`;
    return statement
}
let answer = statement("Abubaker", 25)
console.log(answer)