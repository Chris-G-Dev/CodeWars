// Kata Creator: jhoffner

/* Details:
The rgb() method is incomplete. Complete the method so that passing
in RGB decimal values will result in a hexadecimal representation
being returned. The valid decimal values for RGB are 0 - 255. Any
(r, g, b) argument values that fall out of that range should be
rounded to the closest valid value.
*/

/* Solution Explanation 
1 - For loop with if statement inside checks each value (r, g, b). 
    If the value is between 0-255, convert to hexadecimal with 
    toString(16), set to uppercase, & push to the variable, hex.
2 - Iterate over hex using the map method. If length is less than 2, 
    add 0 before the value. Leading zeros on values are lost during 
    the conversion to hexadecimal in the for loop. After iteration, 
    join array together into a string and return.
*/

function rgb(...values) {
  let hex = [];
  for (let val of values) {
    if (val > 255) {
      hex.push('FF');
    } else if (val < 0) {
      hex.push('00');
    } else {
      hex.push(val.toString(16).toUpperCase());
    }
  }
  
  return hex.map(a => {
    return a.length < 2 ? a = 0 + a : a;
  }).join('')
}

// Examples:
rgb(255, 255, 255) // FFFFFF
rgb(255, 255, 300) //  FFFFFF
rgb(0,0,0) // 000000
rgb(148, 0, 211) // 9400D3