
// This program is to check if a string (first argument, str) ends with the given target string (second argument, target)

/*******************  Solution #1 using the slice() method  ***************************/

function confirmEnding1_1(str, target) {
  let newStr = str.slice(-target.length);
  if(newStr == target){
    return true;
  }else{
    return false;
  }     
}
confirmEnding1_1("Bastian", "n"); // Return true

/*************   OR   ***************************/

function confirmEnding1_2(str, target) {
  return str.slice(str.length - target.length) === target;
}
confirmEnding1_2("Never give up and good luck will find you", "you"); // Return true


/**********************   Solution #2 using the endsWith() method   ***************************/

function confirmEnding2(str, target) {  
  return str.endsWith(target);
}
confirmEnding2("Never give up and good luck will find you.", "you."); // Return true


// Retrieved from https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-algorithm-scripting/confirm-the-ending/

