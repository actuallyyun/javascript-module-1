function numberChecker(num) { //This function accepts one parameter
  if (num > 20) { //It then compares this parameter to the integer number 20.First comparison is bigger than 20
    return `${num} is greater than 20`;//If the first condition is met, it then returns a string.
  } else if (num === 20) {//Then it checks if the parameter is equal to 20
    return `${num} is equal to 20`;//If the condition is met, it returns the correspondent string.
  } else if (num < 20) {//It then checks if it is smaller than 20
    return `${num} is less than 20`;//It also returns a string
  } else {//last condition. If none of the previous conditions are met
    return `${num} isn't even a number :(`;//It returns a different string
  }
}

