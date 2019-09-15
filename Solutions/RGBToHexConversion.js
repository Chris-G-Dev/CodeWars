// Kata Creator: jhoffner

/* Details:
The rgb() method is incomplete. Complete the method so that passing
in RGB decimal values will result in a hexadecimal representation
being returned. The valid decimal values for RGB are 0 - 255. Any
(r, g, b) argument values that fall out of that range should be
rounded to the closest valid value.
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