/* Write a function that:

- Takes one number n as a parameter
- Adds all numbers from 0 to n. For example, if the input is 3, the output should be 0 + 1 + 2 + 3
- You should use a while loop

*/

let n = 4;
let sum=0;
let i = 1;
function sumTillNum(num){
	//your code here
	while (i <= num) {
		sum += i;
		i++;
	}
return sum;
}

console.log("Sum from 0 to " + n + " is: " + sumTillNum(n));
