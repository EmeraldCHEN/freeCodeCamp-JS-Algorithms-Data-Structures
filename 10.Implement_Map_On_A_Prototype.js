/* This program uses the keyword this to give us access to the object we are calling myMap.
   From there we can use the forEach method to add elements to already declared empty array as we modify each element with the given callback method. */

// the global Array
var s = [23, 65, 98, 5];

Array.prototype.myMap = function(callback){       // Array.prototype.myMap() behaves exactly like Array.prototype.map()
  var newArray = []; 
  this.forEach(element => newArray.push(callback(element)));    // use the forEach method
  return newArray;
};

var new_s1 = s.myMap(function(item){
  return item * 2;
});
console.log(new_s1); // Output: [46, 130, 196, 10]

let new_s2 = s.myMap(item => item *100);

console.log(new_s2); // Output: [2300, 6500, 9800, 500]


////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

Array.prototype.aMap = function (callback) {
  var newArray = [];

  this.forEach(function (element) {
   // if (callback(element)) {      // Output:[23, 65, 98, 5] as newArray.push(element) instead of newArray.push(callback(element))
   if (callback(element) == true) { // Output:[]  as item * 2 !== true
      newArray.push(element);
    }
  });
  return newArray;
};

var new_s = s.myMap(function (item) {
  return item * 10;
});
console.log(new_s);


// Retrieved from https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/functional-programming/implement-map-on-a-prototype/
