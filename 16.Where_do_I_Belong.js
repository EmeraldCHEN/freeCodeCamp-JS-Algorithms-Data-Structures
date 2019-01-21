/* This program will create a JavaScript funtion to return the lowest index at which a value (second argument) should be inserted into an array (first argument) once it has been sorted.

For example, getIndexToIns([1,2,3,4], 1.5) should return 1 because it is greater than 1 (index 0), but less than 2 (index 1).

Likewise, getIndexToIns([20,3,5], 19) should return 2 because once the array has been sorted it will look like [3,5,20] and 19 is less than 20 (index 2) and greater than 5 (index 1).      */


/*****  Solution #1    *******************************************************************************************/

function getIndexToIns(arr, num) {
    arr.sort(function(a, b){   // Sort the array using .sort(callbackFuntion) to sort it by lowest to highest from left to right
        return a - b;
    }); 
    if(arr.length === 0){
        return 0;
    }
    if(arr[arr.length-1] <= num){
        return arr.length;
    }
    for(let i = 0; i < arr.length; i++){
        if(arr[i] - num >= 0){
            return i;
        }
    }
}


// The code below is to simplify the above code

function getIndexToIns1(arr, num) {
    
    arr.sort((a, b) => a - b);
    
    for(let i = 0; i < arr.length; i++){
        if(arr[i] >= num){
            return i;
        }
    }
    return arr.length;
}

getIndexToIns([40, 1, 60], 50); // Return 2



/*****  Solution #2       *******************************************************************************************/

function getIndexToIns2(arr, num) {
   
   arr.push(num);   // Add num to the array using push() which adds it as the last element of the array
   
   arr.sort((a, b) => a - b);   // Sort the numbers in ascending order
   
   return arr.indexOf(num);    // Return the index of num in the array with the indexOf() function
}
getIndexToIns2([], 1); // Return 0


/*****  Solution #3       *******************************************************************************************/

function getIndexToIns3(arr, num) {
     
    // Use method-chaining to invoke one method after another to solve the problem in a single line 
    // First merge arr and num by invoking the arr.concat(num) method
    
    return arr.concat(num).sort((a,b) => a > b).indexOf(num);
}
getIndexToIns3([5, 2, 10], 15); // Return 3


/*****  Solution #4 doesn't sort the array    *******************************************************************************************/

function getIndexToIns4(arr, num) {
    var count = 0; 
    for (var i = 0; i < arr.length; i++){
      if(arr[i] < num){
          count++;    // Counts how many array values are smaller than num
        } 
    }     
    return count;  // count equals num's position in a sorted array
}




// Retrieved from
// https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-algorithm-scripting/where-do-i-belong/
