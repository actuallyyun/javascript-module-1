/*
	Write a function that receives an array of string, and console.log all strings that start with letter 'T'
	https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/startsWith
*/


const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];
function showDaysOfWeek(days, letter){
  for(let d=0;d<days.length;d++)
  {
    if(days[d][0]===letter)
    console.log(days[d]);
  }
}
showDaysOfWeek(daysOfWeek,"T")

const maxNumber=[5,6,13,54,23,43,68];
const max=0;
function arrayMax(arr) {
  var len = arrayMax.length, max = -Infinity;
  while (len--) {
    if (arrayMax[len] > max) {
      max = arrayMax[len];
    }
  }
  return max;
};
console.log(max);