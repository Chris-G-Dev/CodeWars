// Kata Creator: Frzy

/* Details
Description
Middle Earth is about to go to war. The forces of good will have many
battles with the forces of evil. Different races will certainly be 
involved. Each race has a certain worth when battling against others. On 
the side of good we have the following races, with their associated worth:

Hobbits: 1
Men: 2
Elves: 3
Dwarves: 3
Eagles: 4
Wizards: 10
On the side of evil we have:

Orcs: 1
Men: 2
Wargs: 2
Goblins: 2
Uruk Hai: 3
Trolls: 5
Wizards: 10

Although weather, location, supplies and valor play a part in any battle,
if you add up the worth of the side of good and compare it with the worth 
of the side of evil, the side with the larger worth will tend to win.

Thus, given the count of each of the races on the side of good, followed by
 the count of each of the races on the side of evil, determine which side wins.

Input:
The function will be given two parameters. Each parameter will be a string
separated by a single space. Each string will contain the count of each 
race on the side of good and evil.

The first parameter will contain the count of each race on the side 
of good in the following order:

Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
The second parameter will contain the count of each race on the side
 of evil in the following order:

Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

Output:
Return "Battle Result: Good triumphs over Evil" if good wins, "Battle Result: Evil eradicates all trace of Good" if evil wins, or "Battle Result: No victor on this battle field" if it ends in a tie.
*/

/* Solution Explanation:
1 - Using destructuring, declare variables of goodArr/evilArr from
    good/evil arguments passed to the function. During the destructuring,
    the function also splits good/evil into an array.
2 - Declare variables for the scores of goodArr/evilArr, multiplying each
    value by their respective worth according to the worths specified in the
    Kata details.
3 - Return outcome   
*/

function goodVsEvil(good, evil){
  // Using destructure, split good/evil args into array of single numbers
  const [goodArr, evilArr] = [good.split(' '), evil.split(' ')];
  // Add scores for goodArr/evilArr according to specified unit worth
  const goodScore = goodArr[0]*1 + goodArr[1]*2 + goodArr[2]*3 + goodArr[3]*3 + 
                    goodArr[4]*4 + goodArr[5]*10;
  const evilScore = evilArr[0]*1 + evilArr[1]*2 + evilArr[2]*2 + evilArr[3]*2 + 
                    evilArr[4]*3 + evilArr[5]*5 + evilArr[6]*10;
  
  if (goodScore > evilScore) {
    return 'Battle Result: Good triumphs over Evil';
  } else if (evilScore > goodScore) {
    return 'Battle Result: Evil eradicates all trace of Good'
  } else {
    return 'Battle Result: No victor on this battle field'
  }
}

// Examples:
goodVsEvil('1 1 1 1 1 1', '1 1 1 1 1 1 1'); /* Battle Result: Evil
eradicates all trace of Good' */
goodVsEvil('0 0 0 0 0 10', '0 1 1 1 1 0 0'); /* Battle Result: Good 
triumphs over Evil */
goodVsEvil('1 0 0 0 0 0', '1 0 0 0 0 0 0'); /* Battle Result: No 
victor on this battle field */