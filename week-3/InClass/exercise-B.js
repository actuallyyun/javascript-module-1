const groupOfPeople =["Ali", "Moazum", "AB", "Lucia", "Nono"];
const secondGroup =["Seba", "Musti", "Salman", "Lucky"];


const allPeople=groupOfPeople.concat(secondGroup);
//allPeople.splice(0, 0, "NewName");
allPeople.sort();
console.log(allPeople);
 const array=["AB", "Musti", "ALi", "Salman"];
function checkIfInTheArray(name, array){
if(array.includes(name)){ 
   
    return `${name} is in the class with ${array} `
  }else{
    
    return `${name} is not in the class with ${array.join(", ")}` 
  }
}

console.log(checkIfInTheArray("AB",array))
console.log(checkIfInTheArray("Linda",array))