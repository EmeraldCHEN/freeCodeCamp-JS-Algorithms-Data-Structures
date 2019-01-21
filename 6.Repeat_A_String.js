
/* Instructions:
   Repeat a given string str (first argument) for num times (second argument). 
   Return an empty string if num is not a positive number.  
   
   Four ways to repeat a string using a while loop || recursion || ES6 repeat() method || conditional (ternary) operator

   This program simply takes a variable and return that variable being repeated certain amount of times. No need to add space or anything, just keep repeating it into one single string. */

*/

/********************   Solution #1 using recursion  **************************/

let repeatStringRecursion = function(str,num){ 
  while(num > 0){
    if(num !== 1){
      num--;
      return str + repeatStringRecursion(str,num); 
    }else{
      return str;
    }   
  }
  if(num <= 0){
    return " ";
  } 
}
const result = repeatStringRecursion("*", 3);
console.log(result); // "***"


/*******************  Solution #2 using the repeat() method  **************************/

let repeatString = function(str,num){ 
  if(num > 0)  
    return str.repeat(num);
  else
    return " ";
}
console.log(repeatString("ABC",3)); // ABCABCABC


/*******************  Solution #3 using a while loop  **************************/

function repeatStringNumTimes(str, num) {
  var accumulatedStr = '';

  while (num > 0) {
    accumulatedStr += str;
    num--;
  }

  return accumulatedStr;
}
console.log(repeatStringNumTimes("?",3)); // ???


/******************  Solution #4 using the conditional (ternary) operator  *******************/

function repeatStringTimes(str, num) {
   
   return (num > 0 ? str.repeat(num) : "");
}



/*
Retrieved from
https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-algorithm-scripting/repeat-a-string-repeat-a-string/
*/

