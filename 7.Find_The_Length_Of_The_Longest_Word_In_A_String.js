/* Two solutions to find the length of the longest word in a string.

/*******************   Solution #1 using a for loop  **********************/

function findLongestWordLength(str) {
    let maxLength = 0;
    let subStr = str.split(' ');
    for(let i = 0; i < subStr.length; i++){
        if(subStr[i].length > maxLength){
            maxLength = subStr[i].length;
        }
    }
    return maxLength; 
}
findLongestWordLength("What if we try a super-long word such as otorhinolaryngology"); // return 19


/*******************  Solution #2 using the reduce() method  **********************/

function findLongestWordLength(str) {
    return str.split(" ").reduce((x, y) => Math.max(x, y.length), 0);
}
findLongestWordLength("May the force be with you"); // return 5

/*  callback                                   return value
    
    first call: Math.max(0,'May'.length)           3
    
    second call:Math.max(3,'the'.length)           3
    
    third call: Math.max(3,'force'.length)         5
    
    ...and so on   */
    

// Retrieved from https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-algorithm-scripting/find-the-longest-word-in-a-string/
