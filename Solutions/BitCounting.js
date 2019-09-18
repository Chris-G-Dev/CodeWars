// Kata Creator: xcthulhu

/* Details:
Write a function that takes an integer as input, and returns the 
number as bits that are equal to one in the binary representation
of that number. You can guarantee that input is non-negative.

The binary representation of 1234 is 10011010010, so the function
return 5 in this case.
*/

function countBits(n) {
  // Convert int to base ten, split number into array.
  // Filter array to only have 1's, then get the length.
  return n
  .toString(2)
  .split('')
  .filter(int => int === '1')
  .length;
};

// Examples:
countBits(25);  // 3 - Binary number is 11001
countBits(125); // 6 - Binary number is 1111101
countBits(837); // 7 - Binary number is 1101000101
