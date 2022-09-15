function InputChecker(input) {
    if (input=="happy") {
      return `${input} Good job, you're doing great!`;
    } else if (input == "Sad") {
      return `${input} Every cloud has a silver lining`;
    } else if (input== "number") {
      return `${input}} Beep beep boop`;
    } else {
      return `${input} I'm sorry, I'm still learning about feelings`;
    }
  }
  console.log(InputChecker("happy"))
  console.log(InputChecker("Sad"))
  console.log(InputChecker(50))