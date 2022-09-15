const birthYears = [1964, 2008, 1999, 2005, 1978, 1985, 1919]

function age(birthYear){
  const currentYear = new Date().getFullYear() // gives you do full current date and you can extract the year by using a Date method .getFullYear()
  return currentYear - birthYear // if we deduct the birht year from current year we get and return the age
}

// we want to iterate over all the years(stored in an array) and call our prepared age function on every element

function ageArray(array){
  return array.map(age) // you pass your prepared function as an argument and it is called by it, map creates a new array
}

console.log(ageArray(birthYears));

