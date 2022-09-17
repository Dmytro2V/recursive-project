/***********************************************************************
Write a recursive function `makeTree(categories, parent)` that takes an array of
categories objects, each of which have an id property, and a parent property and
returns a nested tree of those objects using the parent properties to construct
the tree.

A parent value of null means you are at the bottom of the tree and the category
has no parent, so the default value parent is be null if no parent is
provided.

Example 1:

Given an array of objects with id properties to create our tree:

const categories1 = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' }
];

const tree1 = makeTree(categories1, null);

We should return a tree like this:

{
  animals: {
    mammals: {}
  }
}

Example 2:
Now imagine we have a database that returns a bunch of rows of data:

const categories2 = [
    { id: 'animals', 'parent': null },
    { id: 'mammals', 'parent': 'animals' },
    { id: 'cats', 'parent': 'mammals' },
    { id: 'dogs', 'parent': 'mammals' },
    { id: 'chihuahua', 'parent': 'dogs' },
    { id: 'labrador', 'parent': 'dogs' },
    { id: 'persian', 'parent': 'cats' },
    { id: 'siamese', 'parent': 'cats' }
];

Then we call the function with the categories:
const tree2 = makeTree(categories2, null);

The call above should return the tree below:

{
    animals: {
        mammals: {
            dogs: {
                chihuahua: {},
                labrador: {}
            },
            cats: {
                persian: {},
                siamese: {}
            }
        }
    }
}
console.log();
fuction getAdress(Tree,parentId,) {
  if (parentId in Tree.keys) return 'Tree.' + parentId 
}
***********************************************************************/
const makeTree = (categories, parentId, Tree = {}) => {
  // your code here  
  let levelParent = parentId;

  for (let i = 0; i < categories.length; i++) {
    let el = categories[i];
    if (el.parent  === levelParent) { // found element with current parrent      
      let newArray = categories.slice();
      newArray.splice(i, 1) // removing element from array
      let newParent = el.id
      let newTree ={};
      Tree[el.id] = makeTree(newArray, newParent, newTree);      
    }
  }

  return Tree;
}
const categories0 = [];
const tree0 = makeTree(categories0, null, {});
console.log('tree0, ', tree0);

const categories1 = [  { id: 'animals', 'parent': null }  ];
const tree1 = makeTree(categories1, null);
console.log('tree1, ', tree1);

const categories2 = [
  { id: 'animals', 'parent': null },
  { id: 'mammals', 'parent': 'animals' }
];
const tree2 = makeTree(categories2, null);
console.log('tree2, ', tree2);

const categories3 = [
  { id: 'animals', 'parent': null },
  { id: 'mammals', 'parent': 'animals' },
  { id: 'cats', 'parent': 'mammals' },
  { id: 'dogs', 'parent': 'mammals' },
  { id: 'chihuahua', 'parent': 'dogs' },
  { id: 'labrador', 'parent': 'dogs' },
  { id: 'persian', 'parent': 'cats' },
  { id: 'siamese', 'parent': 'cats' }
];

const tree3 = makeTree(categories3, null);
console.log('tree3, ', JSON.stringify(tree3, null,2));

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = makeTree;
} catch (e) {
  module.exports = null;
}

// This problem was inspired by a Fun Fun Function video:
// https://www.youtube.com/watch?v=k7-N8R0-KY4
