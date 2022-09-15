let myClass = ['Hanna', 'Zakaria', 'Lucia', 'Muazza']
let anotherClass = ['Bob', 'Jane', 'Linda', 'Sara']


let allClass = myClass.concat(anotherClass)
console.log(allClass.sort())

function isNameHere(name, arrayOfNames) {
    if (arrayOfNames.includes(name)) {
        return `${name} is at the class with ${arrayOfNames.join(", ")}`
    } else {
        return `${name} is not at the class with ${arrayOfNames.join(",  ")}`
    }
}

console.log(isNameHere('Tim', allClass))
console.log(isNameHere('Bob', allClass))
