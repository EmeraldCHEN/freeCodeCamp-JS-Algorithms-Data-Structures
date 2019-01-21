/* Instructions: Reduce the length of the string or truncate it if it is longer than the given maximum lengths specified and add ... to the end. 
   If it is not that long then we keep it as is.    */
  

/*************  Solution #1 using the join() method  **************************/

function truncateString1(str, num) {
   let i;
   let new_s = [];
   for(i = 0; i < num; i++){
      new_s[i] = str[i];    // Take the string as a character array
   }
   if(str.length > num){
      new_s[i+1] = "...";
   }
   return new_s.join('');
}

let new_s =truncateString1("A-tisket a-tasket A green and yellow basket", 8);
console.log(new_s); // A-tisket...

/*************  Solution #2 using the slice() method  **************************/

function truncateString2(str, num) {
    if (str.length > num) {                // If the string length is greater than the num, 
        return str.slice(0, num) + '...';  // return a slice of the string starting at character 0, and ending at num
                                           // then append '...' to the end of the string
    } else {
        return str;
    }
}
let new_s = truncateString2("A-", 1);
console.log(new_s); // A...


// Retrieved from  https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-algorithm-scripting/truncate-a-string/

