// Kata Creator: A.Partridge

/* Details:
Simple, remove the spaces from the string, then return the
resultant string.
*/

/* Solution Explanation:
1 - Split x at any spaces into an array: ['a b c'] -> ['a', 'b', 'c']
2 - Join the array elemnts with zero spacing ['a', 'b', 'c'] -> ['abc'] 
*/
function noSpace(x){
  return x.split(' ').join('');
}

// Examples:
noSpace('aa b b c d e 1 4 8 a p l o') // 'aabbcde148aplo'
noSpace('8 m j l k t rs o b 1 g ! 8') // '8mjlktrsob1g!8'