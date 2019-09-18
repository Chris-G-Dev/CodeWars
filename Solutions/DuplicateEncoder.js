// Kata Creator: obnounce

/* Details:
The goal of this exercise is to convert a string to a new string where
each character in the new stirng is "(" if that character appears only
once n the original string, or ")" if that character appears more than
once in the original string. Ignore capitalization when determing if a
character is a duplicate.
*/

function duplicateEncode(word){
  const charSet = {};
  const letters = word.toLowerCase().split('');
  let result = '';

  // Loop through characters to see if it's been added to 'charSet' yet.
  // If so, add 1. If not, create it and set it to 1  
  for (let char of letters) {
    charSet[char] ? charSet[char]++ : charSet[char] = 1;
  }

  /* 
  Map over letters. Check value in charSet for each letter 
  If equal to 1, return '('. Otherwise, return ')'.
  */
  letters.map((char) => {
    charSet[char] === 1 ? result += '(' : result += ')';
  });
  
  return result;
}

// Examples:
duplicateEncode("din");     // (((
duplicateEncode("recede");  // ()()()
duplicateEncode("Success"); // )())())
duplicateEncode("(( @");    // ))((