/* This program is to remove all falsy values from an array.

Hint: Falsy values in JavaScript are false, null, 0, "", undefined, and NaN.  

The Array.prototype.filter method expects a function that returns a Boolean value which takes a single argument 
   and returns true for truthy value or false for falsy value. Hence we pass the built-in Boolean function.        */

function bouncer(arr) {

    return arr.filter(Boolean);  // Convert each value to a Boolean

}

const result = bouncer([1, null, NaN, 2, undefined,true]);

console.log(result); // Output: [1, 2, true]


// The following solutions are INCORRECT ......

function bouncer1(arr) {

      return arr.filter(item => typeof(item) !== "boolean");  // it removes true & false ...
}

const result = bouncer1([true, 1, null, NaN, 2, false, true, undefined,true]);

console.log(result); // [1, null, NaN, 2, undefined]




function bouncer2(arr) {
     let falsyArray = [NaN, false, null, 0, "", undefined];
     let newArr = [];
     for(let i = 0; i < falsyArray.length; i++){
         if(arr.indexOf(falsyArray[i]) >= 0){          // arr.indexOf(NaN) == -1,  so NaN can not be removed in this way
            arr.splice(arr.indexOf(falsyArray[i]), 1);
         }
     }
     return arr;
}
const result = bouncer2([1, null, NaN, 2, false, true, undefined]);

console.log(result); // [1, NaN, 2, true]



// The tricky part is that NaN is actually a number......

let value = NaN;

console.log(typeof(value)); // "number"


let arr = [0, NaN];

let index_1 = arr.indexOf(NaN);

console.log(index_1); // -1


console.log(NaN == NaN); //  false

console.log(NaN === NaN); //  false





/* 
Retrieved from
    https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-algorithm-scripting/falsy-bouncer/       */
