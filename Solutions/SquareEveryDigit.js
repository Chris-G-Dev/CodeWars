// Kata Creator: MysteriousMagenta

/* Details: 
Welcome. In this kata, you are asked to square every digit of a number.
For example, if we run 9119 through the function, 811181 will come out, 
because 92 is 81 and 12 is 1.
Note: The function accepts an integer and returns an integer
*/

/* Solution Explanation:
1 - Declare variable to hold the numbers. Turn the number into a string,
    and split it into individual numbers.
2 - Run our numArray through a for of loop. Due to type coercion, even
    though our values are now strings, we can still multiply them together
    to return the square of each number, and push it to result.
3 - Return result after joining the values back into a string. Then using
    parseInt, turn the string back into a numerical value.
*/
function squareDigits(num){
  //may the code be with you
  const numArray = num.toString().split('')
  const result = [];
  for (let index of numArray) {
    result.push(index * index);
  }
  return (parseInt(result.join('')));
}

// Examples:
squareDigits(9119); // 811181
squareDigits(99); // 8181
squareDigits(22); // 44