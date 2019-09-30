// Kata Creator: dreadknight2008

/* Details:
You should write a simple function that takes a string as input and
checks if it is a valid Russian postal code, returning true or false.

A valid postcode should be 6 digits with no white spaces, letters or
other symbols. Empty string should also return false.

Please also keep in mind that a valid post code cannot start with
0, 5, 7, 8, or 9
*/

/* Solution Explanation:
1 - Using the match method, we check to see if the postcode matches
    the provided criteria in our regex expression.
2 - In our regex expression, we have the following criteria:
    a.) String must start with 1, 2, 3, 4, or 6
    b.) There has to be 5 characters after the first, and they have
        to be numbers
*/

function zipvalidate(postcode){
  return postcode.match(/^[12346]\d{5}$/) ? true : false;
}

// Examples:
zipvalidate('243323'); // true
zipvalidate('543124'); // false
zipvalidate('24@124'); // false
zipvalidate(''); // false