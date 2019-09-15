// Kata Creator: MysteriousMagenta

/* Details: 
Welcome. In this kata, you are asked to square every digit of a number.
For example, if we run 9119 through the function, 811181 will come out, 
because 92 is 81 and 12 is 1.
Note: The function accepts an integer and returns an integer
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