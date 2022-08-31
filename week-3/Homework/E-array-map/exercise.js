// Using the .map() method, create a new array with `numbers` multiplied by 100
// Write multiple solutions using different syntax (as shown in the README)

var numbers = [0.1, 0.2, 0.3, 0.4, 0.5];

function multiply100(num) {
    return num * 100
}

const newNumbers = numbers.map(multiply100)

//In oneline
const newNumbers_2 = numbers.map(num => num * 100)

// A bit longer
const newNumbers_3 = numbers.map(num => {
    return num * 100
})

//Use the function keyword
const newNumbers_4 = numbers.map(function (num) {
    return num * 100
})

