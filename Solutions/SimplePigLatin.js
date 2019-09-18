// Kata Creator: user2505876

/* Details:
Move the first letter of each word to the end of it, 
then add "ay" to the end of the word. 
Leave punctuation marks untouched.
*/

/* Solution One Explanation 
1 - Declare variable to hold punctuation characters
2 - Loops over words to check if it's puncuation. If so, returns the character.
    Otherwise, split the word, push the first letter to the end. Then uses shift
    to remove first letter. Then returns the joined word with 'ay at the end
    using a template literal.
3 - Return the result. It will have a space at the end due to the above for 
    loop. Remove the space at the end, then return result.
*/

// First Solution
function pigIt1 (str) {
  const punctuation = `!@#$%^&*()1234567890{}[]/=?+-_',."\<>~`;
  let result = '';
  const words = str.split(' ');
  for (let word of words) {
    if (punctuation.includes(word)) {
      result += word;
    } else {
    const chars = word.split('');
    chars.push(chars[0])
    chars.shift();
    result += `${chars.join('')}ay `;
    }
  }
  return result.endsWith(' ') ? result.slice(0, -1) : result;
}

/* Solution Two Explanation 
1 - Declare variable to hold punctuation characters
2 - Split the string with the split method. Iterate over each item with 
    .map,  checking if it's punctuation. If not, uses a template literal
    to slice the first letter, and places the first letter at the end of 
    the word, then adds 'ay'.
3 - Then joins the string back together with .join
*/

// Second Solution
function pigIt(str) {
  const punct = `!@#$%^&*()1234567890{}[]/=?+-_',."\<>~`;
  return str
  .split(' ')
  .map(w => punct.includes(w) ? w : `${w.slice(1)}${w[0]}ay`
  )
  .join(' ');
}

// Examples:
pigIt('Hello World !'); // 'elloHay orldWay !'
pigIt('Pig latin is cool'); // igPay atinlay siay oolcay