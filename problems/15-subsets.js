/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples: 

subsets([]) // [[]]
subsets([1]) // [[], [1]]
subsets([1, 2]) // [[], [1], [2], [1, 2]]
subsets([1, 2, 3]) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/

let arr = []
console.log(subsets(arr)); // [[]]
arr = [1]
console.log(subsets(arr)); // [[], [1]]
arr = [1,2]
console.log(subsets(arr)); // [[], [1], [2], [1, 2]]
arr = [1,2,3]
console.log(subsets(arr)); // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

// your code here
function subsets(arr) {
  if (arr.length === 0) return [[]]; // base

  let el = arr.slice(-1)
  let prev = subsets(arr.slice(0, -1))
  return prev.concat(addEl(prev,el))
  //can be instead iterative: return prev.concat(prev.map(x => x.concat([el])));  
}

function addEl(arrA, el) {
  let firstEl = arrA[0];
  let rest = arrA.slice(1)

  if (arrA.length === 1) return [firstEl.concat(el)]; // base

  return [firstEl.concat(el)].concat(addEl(rest, el)) 
}
/*
function subsets(arr) {
  if (arr.length === 0) return []
  
  
  let prevRes = subsets(arr.slice(0, -1))
  console.log(arr);
  let lastEl = arr.slice(-1)
  
  let firstElPrevRes = prevRes[0]
  let restOfPrevRes = prevRes.slice(1)
  console.log(firstElPrevRes,lastEl,);
  return [firstElPrevRes.concat(lastEl)].concat(subsets(restOfPrevRes))

}
*/


//let arr1 = [[], [1], [2], [1, 2]]
//let el = [3]
//console.log(addEl(arr,el));

//console.log('asde**** ', [[2]].push([[3]]));
/*function subsets (arr) {) {
  
  
      return [accum[0].concat(arr.slice(-1))].concat(subsets(arr, accum.slice(1), isLast)) 
                      // making last set on all elements of prev acc  

    } else if (accum.length === 0) {

      return arr.slice(-1);
    }
    
      } else if (isLast === false) {
    
    

  }


}

if (isDeep) { //calculating n-1
  if (arr.length = 0) return [];

  return subsets(arr.slice(0,-1), accum, isDeep).concat(subsets)

}
*/



/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = subsets;
} catch (e) {
  module.exports = null;
}
