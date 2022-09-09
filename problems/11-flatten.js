/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

flatten([]); // []
flatten([1, 2]); // [1, 2]
flatten([1, [2, [3]]]); // [1, 2, 3]
***********************************************************************/

// your code here
// basic case rest array.length = 0.
// recursive step -  if 1st el is array then arr[0].concat(arr.slice(1)
//                      (explanation : arr[0] lowers nesting to one, 
//                                     arr.slice keep nesting level)
//                   else if 1st el is not an array, then take 1st el,
//                           wrap it to 1 level array and concat with
//                           recursive on rest. rest is (slice(1))
//              
function flatten(arr) {
  if (arr.length === 0) return []; // base case. arr = rest of array
  
  if (Array.isArray(arr[0])) {
    return flatten(arr[0].concat(arr.slice(1)))
  }  else {
    return [arr[0]].concat(flatten(arr.slice(1)))
  }
}
  
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
