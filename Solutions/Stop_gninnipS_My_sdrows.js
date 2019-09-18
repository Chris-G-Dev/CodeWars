// Kata Creator: xDranik

/* Details: 
Write a function that takes in a string of one or more words, and returns
the same string, but with all five or more letter words reversed (Just 
like the name of this Kata). Strings passed in will consist of only 
letters and spaces. Spaces will be included only when more than one 
word is present.
*/

/* Solution Explanation
1 - Declare empty array
2 - Split the passed argument, str, into an array at any space
3 - Check for the length of each word in the loop. If larger than 5,
    split the word into individual letters, reverse the array, then
    join it back together. Otherwise, if the word is less than 5
    characters, return the word as is. Push to the results array.
4 - Return result after using .join method to obtain a single string.
*/

function spinWords(str){
  const result = [];
  const words = str.split(' ');
  for (let word of words) {
    if (word.length >= 5) {
      result.push(word.split('').reverse().join(''));
    } else {
      result.push(word);
    }
  }
  return result.join(' ');
}

// Examples:
spinWords( "Hey fellow warriors" ); // "Hey wollef sroirraw" 
spinWords( "This is a test"); // "This is a test" 
spinWords( "This is another test" ); // "This is rehtona test"

