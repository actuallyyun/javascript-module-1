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
  
  // we can use also anonynous function as a argument in map()
  function magicFunction_2(array){
    return array.map(function(e){
      // e is the current element of the array
      return e.toUpperCase() // you need return keyword to get the result
    }).sort() // we can chain the methods since map return a new array so we can use an array method 
  }
  

  
  // we want to call the function passing our function as an argument
  // we want to probably console.log the returned value ie. uppercased array
  console.log(magician(magicFunction)) // no need to call it, you just pass it and it will be called from the magician function
  console.log(magician(magicFunction_2)) // same result
  
  