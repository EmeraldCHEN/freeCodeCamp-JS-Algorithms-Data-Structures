/* Arrow functions work really well with higher order functions, such as map(), filter(), and reduce(), that take other functions as arguments for processing collections of data.

    The code computes the square of only the positive integers in the array using map() & filter()  */
    
 const realNumberArray = [4, 5.6, -9.8, 3.14, 42, 6, 8.34, -2];

// compute the square of only the positive integers in the array above and store the new array in the variable squaredIntegers

/********  Solution #1  **************************************/

 const squareList = (arr) => arr.map(num => num > 0 && Math.floor(num) === num && Math.pow(num,2) ).filter(num => num!=false);

/********  Solution #2  **************************************/

const squareList = (arr) => {
  "use strict";
  const squaredIntegers = arr.filter((num) => num > 0 && num % parseInt(num) === 0).map((num) => Math.pow(num, 2));
  return squaredIntegers;
};

const squaredIntegers = squareList(realNumberArray);

console.log(squaredIntegers);  // output: [16, 1764, 36]


// Retrieved from 
// https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/es6/write-higher-order-arrow-functions/

