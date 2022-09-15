const birthYears = [1964, 2008, 1999, 2015, 1978, 1985, 1919]
function age(birthYear){
    const currentYear = new Date().getFullYear() // gives you do full current date and you can extract the year by using a Date method .getFullYear()
    return currentYear - birthYear // if we deduct the birht year from current year we get and return the age
  }
function getDrivers(array){
    return array.filter(e => age(e) >= 17) // returns a new array with only those elements that fit the condition. Written in arrow syntax
  }
  
  
  console.log(getDrivers(birthYears));
 