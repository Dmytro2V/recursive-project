/***********************************************************************
Write a recursive method permutations(array) that calculates all the
permutations of the given array. For an array of length n there are n! different
permutations. So for an array with three elements we will have 3 * 2 * 1 = 6
different permutations.

Examples:

permutations([1, 2]) // [[1, 2], [2, 1]]
permutations([1, 2, 3]) // [[1, 2, 3], [1, 3, 2],
                        // [2, 1, 3], [2, 3, 1],
                        // [3, 1, 2], [3, 2, 1]]
***********************************************************************/

// your code here
function permutations(arr) {
  if (arr.length === 0 || arr.length === 1) return [arr]; // base
  let prevArr = permutations(arr.slice(0,-1)) // prev level 
  let newEl = arr.slice(-1)
  let newArr =[]
  for (let i = 0; i < prevArr.length; i++) {  // all inner arrays
    let innArr = prevArr[i];
    for (let j = 0; j < innArr.length +1; j++) {// inside inner array all positions; arr.length = prev.arr.length     
      newArr.push(innArr.slice(0,j).concat(newEl).concat(innArr.slice(j)))
    }
  }
  return newArr;
}
console.log(permutations([]));
console.log(permutations([1]));
console.log(permutations([1, 2]));
console.log(permutations([1, 2, 3]));
console.log(permutations([1, 2, 3,4]));
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = permutations;
} catch (e) {
  module.exports = null;
}
