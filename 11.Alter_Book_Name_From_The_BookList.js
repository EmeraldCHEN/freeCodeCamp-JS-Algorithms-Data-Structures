/* Two distinct principles for functional programming:

Don't alter a variable or object - create new variables and objects and return them if need be from a function.

Declare function arguments - any computation inside a function depends only on the arguments, and not on any global object or variable.

The code is about the global array being not changed inside either function.           */


let bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// This function adds a book to the list and return the list 
function add(bookList, bookName){
    let newBookList = [...bookList]; // Copy the bookList array to a new array 
    newBookList.push(bookName); // Add bookName parameter to the end of the new array 
    return newBookList;    
}
// This function removes a book from the list and return the list 
function remove (bookList, bookName){
    let newBookList = [...bookList];
    let bookNameIndex = newBookList.indexOf(bookName);
    if(bookNameIndex >= 0){   // Check whether the bookName parameter is in the new array
        newBookList.splice(bookNameIndex, 1);  // Remove the given parameter from the new array 
    }
    return newBookList;
}
console.log(add(bookList,'A Brief History of Time'));
console.log(remove(add(bookList,'A Brief History of Time'), 'A Brief History of Time'));


/******************************    Below is another solution    ***************************************************************/


function add_(bookList, bookName) {
    return [...bookList, bookName];
}

function remove_(bookList, bookName) {
  if (bookList.indexOf(bookName) >= 0) {
       return bookList.filter(book => book != bookName);
  }
}



// Retrieved from https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/functional-programming/refactor-global-variables-out-of-functions/
