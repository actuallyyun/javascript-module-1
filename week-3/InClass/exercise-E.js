function age(birthYear) {
    return 2022 - birthYear
}

const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919]

// const ages = birthYears.map(e => {
//     return age(e)
// })
const ages = birthYears.map(age)

const ages_2 = birthYears.map(e => {
    return 2022 - e
})


console.log(ages)
console.log(ages_2)
console.log(birthYears)