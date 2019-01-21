// Two solutions to find the largest number in 2D arrays and return an array consisting of the largest number from each provided sub-array.

/*****************  Solution #1 using for loops  ******************************/
function largestOfFour1(arr) {
    let subArrayMax = [];
    let max;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            max = Math.max(...arr[i]);
        }
        subArrayMax.push(max);
    }
    return subArrayMax;
}

largestOfFour1([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]); // return [5, 27, 39, 1001]


/*****************  Solution #2 using .map() & .reduce() & ternary operator  ******************************/

function largestOfFour2(arr) {
    return arr.map(group => group.reduce((prev, current) => (current > prev) ? current : prev));
}
largestOfFour2([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]); // return [9, 35, 97, 1000000]


// Retrieved from https://guide.freecodecamp.org/certifications/javascript-algorithms-and-data-structures/basic-algorithm-scripting/return-largest-numbers-in-arrays/

