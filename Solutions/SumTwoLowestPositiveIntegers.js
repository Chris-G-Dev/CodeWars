// Kata Creator: emporio

/* Details: 
Create a function that returns the sum of the two lowest positive numbers 
given an array of minimum 4 positive integers. No floats or non-positive 
integers will be passed.
For example, when an array is passed like [19, 5, 42, 2, 77], 
the output should be 7.
[10, 343445353, 3453445, 3453545353453] should return 3453455.
*/

function sumTwoSmallestNumbers(numbers) {  
  let sorted = numbers
    .sort((a, b) => a - b)
    .filter(a => a > 0);
  
  return sorted[0] + sorted[1];
}

// Examples:
sumTwoSmallestNumbers([-2, -4, 19, 5, 42, 2, 77]); // 7
sumTwoSmallestNumbers([-1, 5, 10, -4, 3, 25]); // 8
sumTwoSmallestNumbers([-200, 45, 820, -4, 26, 55]); // 71
