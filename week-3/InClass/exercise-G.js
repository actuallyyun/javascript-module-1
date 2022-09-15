const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919]

function age(birthYear) {
    return 2022 - birthYear
}

function canYouDrive(birthYear) {
    const personAge = age(birthYear)
    if (personAge >= 17) {
        console.log(`Born in ${birthYear} can drive`)
    } else {
        console.log(`Born in ${birthYear} can drive in ${17 - personAge} years`)
    }
}



birthYears.map(canYouDrive)

const peopleCanDrive = birthYears.filter(year => age(year) > 17)

console.log(peopleCanDrive)