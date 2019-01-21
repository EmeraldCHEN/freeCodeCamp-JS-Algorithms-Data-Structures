/* The goal of this program is to take all of the elements from arr1 and insert them into arr2 starting with index position n. 
   At the same time we must ensurethat neither arr or arr2 have been mutated.
   E.g. frankenSplice([1, 2, 3], [4, 5], 1) should return [4, 1, 2, 3, 5]
        frankenSplice([1, 2, 3], [4, 5], 2) should return [4, 5, 1, 2, 3]  
                                                                                                                                          */
        
/*****   Solution #1 using the array method slice only   ********************************************************************************************************/

function frankenSplice1(arr1, arr2, n) {

    let arr2Part1 = arr2.slice(0,n);

    let arr2Part2 = arr2.slice(n);

    let resultingArray = [...arr2Part1,...arr1,...arr2Part2];
  
    return resultingArray;
 }
 
 
 
 /*****   Solution #2 using the array methods slice and splice    ********************************************************************************************************/
 
 function frankenSplice2(arr1, arr2, n) {

  let localArray = arr2.slice();    /* Using the slice() function to create an exact replica of arr2 
                                       and assign the result of the operation to a variable, localArray   */
  for (let i = 0; i < arr1.length; i++) {
      localArray.splice(n, 0, arr1[i]);   // Iterate through every item in the first array & use the splice() function to insert the item into index n of localArray
      n++;                     // increment the index n by one to ensure that every item from the arr1 is inserted into localArray in the proper index position
  }
  return localArray;
}

const resultArray = frankenSplice2([1, 2], ['a', 'b', 'c'], 2);

console.log(resultArray); // Output: ['a', 'b', 1, 2, 'c']


// The following solution is INCORRECT ...

function frankenSplice(arr1, arr2, n) {

   let newArr2 = [...arr2];

   newArr2.splice(n, 0, arr1.slice()); // Sytax should be: array.splice(start[, deleteCount[, item1[, item2[, ...]]]])

   return newArr2;
}

const result = frankenSplice([1, 2], ['a', 'b'], 1);

console.log(result); // Output: ["a", Array(2), "b"]

/* 
 Retrieved from 
 https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-algorithm-scripting/slice-and-splice/
*/