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
  function magicFunction(array){
    return array.map(e => e.toUpperCase()).sort() // map returns a new array ie. copy of the original one with the modification you performed by your code; I am using an arrow function here
    // if your function fits into oneline and you don't use {} there is no need for return keyword
  }
  

  // we could also not chain and do the operations with multiple steps
  function magicFunction_2(array){
    const magicArray = array.map(function(e){
      return e.toUpperCase() 
    })
    // return needs to be always the last statement in the function 
    return magicArray.sort()  // save the new array in a variable and then return it's sorted result. 
  }
  
  
  // we want to call the function passing our function as an argument
  // we want to probably console.log the returned value ie. uppercased array
  console.log(magician(magicFunction)) // no need to call it, you just pass it and it will be called from the magician function
  console.log(magician(magicFunction_2)) // same result
  
  