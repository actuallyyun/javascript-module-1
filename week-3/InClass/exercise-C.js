
function magician(yourFunc) {
    console.log(
        "I am magician! Watch as I mutate an array of strings to your heart's content!"
    );
    const namesArray = [
        "James",
        "Elamin",
        "Ismael",
        "Sanyia",
        "Chris",
        "Antigoni",
    ];

    const magicOutput = yourFunc(namesArray);

    return magicOutput;
}

// ForEach solution
// function yourFunc(array) {
//     array.forEach((e, i) => {
//         array[i] = e.toUpperCase()
//     })
//     return array.sort()
// }

//.map solution
function magicFunc(array) {
    return array.map(e => e.toUpperCase())
}

console.log(magician(magicFunc))