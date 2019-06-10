// Recover A Tree From Preorder Traversal
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {string} S
 * @return {TreeNode}
 */

function TreeNode(val) {
  this.val = val;
  this.left = this.right = null;
}

var recoverFromPreorder = function(S) {
// Input: a string representing a preorder traversal, with dashes representing depth
// Output: a binary tree representation of the tree
// Constraints: none
// Edge cases: end of string

// The function will take the input string and rebuild a binary tree based on the string's values
// This is done through iterating through the string, and inserting the nodes at the correct depth length indicated by the dashes

// Pseudocode:
// const tree = new TreeNode(S[0])
// const nodeStack = []
// Loop through string:
  // let currVal = string[i]
  // let depth = 0
  // If currVal = '-':
    // Increment depth by 1
  // Else:
    // While nodeStack.length > depth
      // Pop node off nodeStack
    // Create new node with currVal
    // Add new node to last element in nodeStack:
      // If last element in nodeStack.left is not null, add to nodeStack.right
      // Else add to nodeStack.left
    // Push new node into nodeStack
    // set depth = 0

const nodeStack = [];

let depth = 0;
let currVal;
let currNum = '';
for (let i = 0; i < S.length; i += 1) {
  currVal = S[i];

  if (currVal === '-') {
    depth += 1;
  } else {
    // Check whether number is complete
    if (i >= S.length - 1 || S[i + 1] === '-') {
      currNum += currVal;
      currVal = Number.parseInt(currNum);

      while (nodeStack.length > depth) {
       nodeStack.pop();
      }

      const newNode = new TreeNode(currVal);
      if (nodeStack.length === 0) {
        nodeStack.push(newNode);
      } else if (nodeStack[nodeStack.length - 1].left) {
        nodeStack[nodeStack.length - 1].right = newNode;
      } else {
        nodeStack[nodeStack.length - 1].left = newNode;
      }
      nodeStack.push(newNode);
      depth = 0;
      currNum = '';
    } else {
      currNum += currVal;
    }
  }
}

return nodeStack[0];
};
