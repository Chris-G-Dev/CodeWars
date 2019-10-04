// Kata Creator: EricFreeman

/* Details:
You need to write regex that will validate a password to make sure
it meets the following criteria:

- At least six characters long
- Contains a lowercase letter
- Contains an uppercase letter
- Contains a number
- Valid passwords will only be alphanumeric characters
*/

/* Solution Explanation:
1 - (?=.*?[A-Z])     // Checks for at least one uppercase letter
2 - (?=.*?[a-z])     // Checks for at least one lowercase letter
3 - (?=.*?[0-9])     // Checks for at least one number
4 - [a-zA-Z0-9]{6,}  // Checks for total characters in password to 
be at least 6   
*/

function validate(password) {
  return /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])[a-zA-Z0-9]{6,}$/.test(password);
}

// Examples:
validate('djI38D55') // false
validate('!fdjn345') // false
validate('Password123') // true