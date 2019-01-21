/*This program creates a function to return true if the string in the first element of the array contains all of the letters of the string in the second element of the array.

For example, ["hello", "Hello"], should return true because all of the letters in the second string are present in the first, ignoring case.

The arguments ["hello", "hey"] should return false because the string "hello" does not contain a "y".

Lastly, ["Alien", "line"], should return true because all of the letters in "line" are present in "Alien"                 */

/*****  Solution #1          ******************************************************************************************************/

function mutation(arr) {
    let str1 = arr[0].toLowerCase().split('');
    let str2 = arr[1].toLowerCase().split('');    
    
    let count = 0;
    for(let i = 0; i < str1.length; i++){
        for(let j = 0; j < str2.length; j++){
            if(str2[j] == str1[i]){
                count++;                            
            }
        }     
    }
    let newArr = [];
    let timeSameChar = 0;
    for(let x = 0; x < arr.length; x++){                    
        newArr = str1.filter(item => item == str1[x]);
        timeSameChar = newArr.length - 1;
    }
    
    if(timeSameChar > str2.length){
        return false;
    }
    else if(count >= str2.length){
        return true;
    }else{
        return false;
    }
  }
  
console.log(mutation(["Mary", "Army"]));  // true




/*****  Solution #2         ******************************************************************************************************/

function mutation_2(arr) {
     
    var firstStr = arr[0].toLowerCase();  // Make the two strings in the array lowercase
    var secondStr = arr[1].toLowerCase(); 
    for (var i = 0; i < test.length; i++) {  // Loop through the second string's characters 
        
       if (firstStr.indexOf(secondStr[i]) < 0)  // if any of them is not found 
           return false;
    }
    return true;  
   }
  
console.log(mutation_2(["Alien", "line"])); // true




/*****  Solution #3         ******************************************************************************************************/

function mutation_3(arr) {
    
    const lowerCaseStr1 = arr[0].toLowerCase();
    const lowerCaseArray2 = arr[1].toLowerCase().split('');

    return lowerCaseArray2
           .every(letter => lowerCaseStr1.indexOf(letter) >= 0);  // make sure every one of the second string's letters is a part of the first string
}
mutation_3(["voodoo", "no"]); // Return false



// Retrieved from
// https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-algorithm-scripting/mutations/
