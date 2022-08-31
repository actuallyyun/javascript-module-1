/* 
  You are given an array of names.
  Using .find(), we'd like to find the first name which starts with A and is longer than 7 letters.
*/

// write your code here

let names = ["Rakesh", "Antonio", "Alexandra", "Andronicus", "Annam", "Mikey", "Anastasia", "Karim", "Ahmed"];

const longNameThatStartsWithA = findLongNameThatStartsWithA(names);

function findLongNameThatStartsWithA(names) {
  return names.find(name => name[0] === "A" && name.length > 7)
}

//In one line

const longNameThatStartsWithA_2 = names.find(name => name[0] === "A" && name.length > 7)

console.log(longNameThatStartsWithA);
console.log(longNameThatStartsWithA_2)




/* EXPECTED OUTPUT */
// "Alexandra"
