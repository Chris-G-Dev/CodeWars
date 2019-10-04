// Kata Creator: Iv.D

/* Details:
Write a program that will calculate the number of trailing zeros
in a factorial of a given number:

N! = 1 * 2 * 3 ... * N

Be careful: 1000! has 2568 digits
zeros(12), or 12! = 479001600 --> Has 2 trailing zeros 

Hint: You're not meant to calculate the factorial. Find another way
to find the number of zeros.
*/

/*
Function adds to the result variable the truncated factors of 5^(n+1).
This value will be the amount of 
*/

function zeros (num) {
  let count = 1;
  let result = 0;

  while ((num / Math.pow(5, count)) > 0) {
    result += Math.floor((num / Math.pow(5, count)));
    count++;
  }
  return result;
}

// Examples:
zeros(3); // 3! = 6 -> 0 leading zeros
zeros(12); // 12! = 479,001,600 -> 2 leading zeros
zeros(20); // 20! = 2,432,902,008,176,640,000 -> 4 leading zeros
