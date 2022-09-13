/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var moveZeroes = function (nums) {
  let l = nums.length;
  for (let i = l - 1; i >= 0; i--) {
    if (nums[i] === 0) {
      nums.push(nums.splice(i, 1)[0]);
    }
  }
  return nums;
};

console.log(moveZeroes([0, 1, 0, 3, 12]));
//[ 1, 3, 12, 0, 0 ]
