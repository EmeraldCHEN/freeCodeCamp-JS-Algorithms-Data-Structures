/* This program creates a function that looks through an array (first argument) and returns the first element in the array that passes a truth test (second argument).

   If no element passes the test, return undefined.

   And the second solution is to modify that code and return a new array containing all elements in the original array that pass the truth test.  */
   
function findElement(arr, func) {
  for(let i = 0; i < arr.length; i++){
      if(func(arr[i])){
          return arr[i];   // returns the first element in the array that passes a truth test
      }   
  }
  return undefined;
}
let result = findElement([1,2,3,4], num => num % 2 === 0); 

console.log(result); // 2


// Modify the above code to return a new array containing all elements in the original array that pass the truth test

function findElement(arr, func) {
  let newArr = [];
  for(let i = 0; i < arr.length; i++){
      if(func(arr[i])){
          newArr.push(arr[i]);    
      }   
  }
  if(newArr.length > 0)
    return newArr;
  else
    return "No elements in the array that passe a truth test.";
}

let result = findElement([1,2,3,4], num => num % 2 === 0);

console.log(result); // Output: [2,4]


// Received from https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-algorithm-scripting/finders-keepers/

