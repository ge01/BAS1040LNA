// This function returns an array consisting of the largest number from each
// provided sub-array. For simplicity, the provided array will contain exactly
// 4 sub-arrays.

function largestOfFour(arr) {
  // Array for holding largest number from each sub-array
  var largestArray = [];

  // Loop through each sub-array
  for (var i=0; i< arr.length; i++) {
    // Used sort method to sort each sub-array from
    // largest to smallest
    arr[i].sort(function(a,b){return b - a;});

    // Push the first number (largest) of each sub-array into the
    // holding (largestArray) array
    largestArray.push(arr[i][0]);
  }
  // Transfer largest numbers from largestArray to arr
  arr = largestArray;

  return arr;
}

// Test arrays
console.log(largestOfFour([[4, 5, 1, 3], [13, 27, 18, 26], [32, 35, 37, 39], [1000, 1001, 857, 1]]));
console.log(largestOfFour([[4, 9, 1, 3], [13, 35, 18, 26], [32, 35, 97, 39], [1000000, 1001, 857, 1]]));

//Sort Arrays with sort
//https://www.freecodecamp.com/challenges/sort-arrays-with-sort

//Access MultiDimensional Arrays With Indexes
//https://www.freecodecamp.com/challenges/access-multidimensional-arrays-with-indexes

//Accessing Nested Arrays
//https://www.freecodecamp.com/challenges/accessing-nested-arrays

//Iterate Through an Array with a For Loop
//https://www.freecodecamp.com/challenges/iterate-through-an-array-with-a-for-loop

//Nesting For Loops
//https://www.freecodecamp.com/challenges/nesting-for-loops

//Removing an element from an array
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift
