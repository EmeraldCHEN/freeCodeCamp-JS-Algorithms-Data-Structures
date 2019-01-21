/* In JavaScript, regular expressions are also objects that help to match, search, and replace text.

    Here are a couple of regex solutions retrieved from Free Code Camp.  */
    
// Simple password checkers using lookaheads 

let password = "abc123";

let checkPass = /(?=\w{3,6})(?=\D*\d)/;  // looking for between 3 and 6 characters and at least one number

let checker = checkPass.test(password); 

console.log(checker); // true

/**************************************************************************************************************************/

let sampleWord = "abc123";
let pwRegex = /(?=\w{5,})(?=\D*\d{2})/; // match passwords that are greater than 5 characters long and have two consecutive digits
let checker = pwRegex.test(sampleWord);

console.log(checker); // true

/**************************************************************************************************************************/


/* 1) The only numbers in the username have to be at the end. There can be zero or more of them at the end.
   2) Username letters can be lowercase and uppercase.
   3) Usernames have to be at least two characters long. A two-letter username can only use alphabet letter characters.    */

let userCheck = /^[a-z]{2,}\d*$/i;   // the regex userCheck will fit the constraints listed above 

let username = "JackOfAllTrades";

let result = userCheck.test(username);
console.log(result); // true

