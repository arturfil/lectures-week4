const loopSearch = (target, array) => {
  for(let i = 0; i < array.length; i++) {
    console.log("This is round: ", i+1);
    if (target === array[i]) {
      return target;
    }
  }
}

// 9, 11, 13


// 9, 11, 13
// target is: 11

let nums = [];

for(let i = 0; i < 1000000; i++) {
  nums[i] = i;
}

// console.log(nums);

const binarySearch = (target, array) => {
  let end = array.length -1;
  let round = 0;
  let start = 0;  
  while(start < end) {
    console.log("This is round: ", round+1);
    let mid = Math.floor((start  + end) / 2);
    if (target == array[mid]) {
      console.log('Target found', target);
      return array[mid];
    } 

    if (target > array[mid]) {
      start = mid;
    } else { // target < array[mid]
      end = mid;
    } 
    round++;
  }
}

// binarySearch(525604, nums);
// loopSearch(525604, nums);

class TreeNode {
  constructor(val, left = null, right = null) {
    this.val = val
    this.left = left;
    this.right = right;
  }
}

// create root & nodes
const root = new TreeNode(6);
const node2 = new TreeNode(2);
const node3 = new TreeNode(3);
const node5 = new TreeNode(5);
const node8 = new TreeNode(8);
const node9 = new TreeNode(9);
const node13 = new TreeNode(13);

// assign children
root.left = node3;
root.right = node9;
node3.left = node2;
node3.right = node5;
node9.left = node8;
node9.right = node13;

// node 8
console.log(root.right.left.val);