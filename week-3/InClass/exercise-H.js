

    const namesArray = [
        "James",
        "Elamin",
        "Ismael",
        "Sanyia",
        "Chris",
        "Antigoni",
      ];
    
 
    
      // the same but written with ternary operator
      function checkName_2(name, array){
        return array.includes(name) ? "Found me" : "Havent found me"
      }
    
      // with .find()
    
 
      console.log(checkName_2("James", namesArray));