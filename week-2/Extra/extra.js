// 1. Create a function that will find the largest number in an array
const arr = [2, 45, 3, 67, 34, 567, 34, 345, 123];


function largestNumber(arr) {
    let largest = arr[0]
    for (i = 0; i < arr.length; i++) {
        if (largest < arr[i]) {
            largest = arr[i]
        }
    }
    return largest
}

console.log(largestNumber(arr))

// Create a program that allows you to buy fresh falafels, until you run out money. Price is 5eur, and it takes your budget as an paramater and it console.log "You bought falafel, you have x money left " . Use loop. At the end consolelog how many falafels you bought

let price = 5
let expense = 0
let falafel = 0
function moreFalafels(budget) {
    while ((budget - expense) >= 5) {
        expense = price + expense
        falafel++
        console.log(`You bought falafel, you have ${budget - expense} euros left.`)
    }
    console.log(`You bought ${falafel} falafels!`)

}

moreFalafels(30)


myFavoriteFood = ['blueberry', 'pizza', 'veggies', 'tofu', 'ice']
function hasFalafel(arr) {
    for (i = 0; i < arr.length; i++) {
        if (!arr[i].includes("falafel")) {
            arr[arr.length] = ['falafel']
            console.log("mnam mnam...")
        }
    }
}

function hasI(arr) {
    for (i = 0; i < arr.length; i++) {
        if (arr[i][0] === "i") {
            console.log("Is it icecream?")
            if (arr[i] === "icecream") {
                console.log("I knew it!")
            } else {
                console.log("What is it?")
                arr[i] = "icecream"
            }
        }
    }
}

hasFalafel(myFavoriteFood)
hasI(myFavoriteFood)