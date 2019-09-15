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

  for (let char of letters) {
    charSet[char] ? charSet[char]++ : charSet[char] = 1;
  }

  letters.map((char) => {
    charSet[char] === 1 ? result += '(' : result += ')';
  }).join('');
  
  return result;
}

// Examples:
duplicateEncode("din");     // (((
duplicateEncode("recede");  // ()()()
duplicateEncode("Success"); // )())())
duplicateEncode("(( @");    // ))((