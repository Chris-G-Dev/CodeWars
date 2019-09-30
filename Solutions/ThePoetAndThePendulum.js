// Kata Creator: MrZizoScream

/* Details:
Given an array/list [] of n integers, arrange them in a way similar to
the to-and-fro movement of a pendulum.

The SMALLEST element of the list of integers, must come in the CENTER
position of the array/list.
The HIGHER THAN SMALLEST, goes to the RIGHT.
The NEXT HIGHER number goes to the LEFT OF THE MINIMUM NUMBER, and so on,
in a to-and-fro manner similar to that of a pendulum.
*/

/* Solution Explanation:
1 - Initial variable declarations - Using destructuring, I assigned
    true/false to variables named left and right. I also set up a 
    variable to hold the result in the form of an array.
2 - Using the sort array method, I sort the values according from
    lowest to highest.
3 - After sorting, using
*/

function pendulum(values) {
  let [left, right] = [true, false];
  const result = [];
  
  values
    .sort((a, b) => a - b)
    .map(num => {
      if (right) {
        result.push(num);
        [left, right] = [true, false];
      } else if (left) {
        result.unshift(num);
        [left, right] = [false, true];
      }
    });
  return result;
}

// Examples:
pendulum([1, 2, 3, 4, 5, 6]); // [5, 3, 1, 2, 4, 6]
pendulum([2, 4, 6, 8, 10]); // [10, 6, 2, 4, 8]
pendulum([1, 8, 9, 4, 5, 12, 24]); // [24, 9, 5, 1, 4, 8, 12]