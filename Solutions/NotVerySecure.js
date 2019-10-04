// Kata Creator: mayrsascha

/* Details:
In this example you have to validate if a user input string is 
alphanumeric. The given string is not nil/null/NULL/None, so you
don't have to check that.

The string has the following conditions to be alphanumeric:

1. At least one character ("" is not valid)
2. Allowed characters are uppercase / lowercase latin letters 
   and digits from 0 to 9
3. No whitespaces / underscore
*/

function alphanumeric(string){
  return string.match(/^[a-zA-Z0-9]+$/) ? true : false;
}

// Examples:
alphanumeric("Mazinkaiser")  // true
alphanumeric("hello world_") // false
alphanumeric("PassW0rd")     // true
alphanumeric("     ")        // false