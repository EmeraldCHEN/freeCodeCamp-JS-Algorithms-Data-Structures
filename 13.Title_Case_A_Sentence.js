/* Instructions:
   Return the provided string with the first letter of each word capitalized.
   Also capitalize connecting words like "the" and "of".
   Make sure the rest of the word is in lower case.             */


/******  Solution #1   ********************************************************************************************************/

function titleCase1(str) {

  let convertToArray = str.toLowerCase().split(' ');  // Make the entire string lowercase and then convert it into an array
  
  // Then using map function to replace the lowercase character with uppercase 
  
  let resultArray = convertToArray.map(function(element){
      return element.replace(element.charAt(0), element.charAt(0).toUpperCase());
  });
  
  // With an arrow function, the code looks as follows
  
  // let result = convertToArray.map(element => element.replace(element.charAt(0), element.charAt(0).toUpperCase()));
 
  return resultArray.join(' ');  // Finally returning the string using join method
}

console.log(titleCase1("a banana haha")); // Output: "A Banana Haha"



/******  Solution #2   ********************************************************************************************************/

function titleCase2(str) {

    return str.toLowerCase().replace(/(^|\s)\S/g, function(L) { return L.toUpperCase()});
}
  /* Using an arrow function expression: 
     return str.toLowerCase().replace(/(^|\s)\S/g, (L) => L.toUpperCase());
     
     
     Code Explanation:
  1) Lowercase the whole string using str.toLowerCase()
  2) Replace every word’ first character to uppercase using .replace
  3) Search for character at the beginning of each word 
     i.e. matching any character following a space or matching the first character of the whole string
     * Find all non-whitespace characters (\S)
     * At the beginning of string (^) or after any whitespace character (\s)
     * Use the g modifier to perform a global match                                                                */

console.log(titleCase2("read search ask")); // Output: "Read Search Ask"


// Retrieved from
// https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-algorithm-scripting/title-case-a-sentence/
