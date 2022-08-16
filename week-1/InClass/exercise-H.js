//myFunction recieves two strings and 1 num as parameter, and returns a new string and a new number.

function myFunction(str1, str2, num) {
    str = str1 + str2
    newNum = Math.sin(num)
    return `Now I have a new string: ${str} and a new number:${newNum}`
}

newThing = myFunction("hi", "there", 3)
console.log(newThing)