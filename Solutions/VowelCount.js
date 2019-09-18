// Kata Creator: jayeshcp

/* Details
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata.
The input string will only consist of lower case and/or spaces.
*/

/* Solution Explanation
1 - Declare variable/array to reference our vowels
2 - Split the passed argument (str) into an array.
3 - Filter the array, returning only the letters that are also 
    included in our vowels array.
4 - Return the length of this final array
*/

function getCount(str) {
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  return str.split('').filter(letter => vowels.includes(letter)).length;
}

// Examples
getCount('abracadabra') // 5
getCount('Christopher') // 3
getCount('developer') // 4