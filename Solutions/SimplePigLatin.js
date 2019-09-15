// Kata Creator: user2505876

/* Details:
Move the first letter of each word to the end of it, 
then add "ay" to the end of the word. 
Leave punctuation marks untouched.
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