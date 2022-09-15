/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  let singleNum = 0;
  for (let i = 0; i < nums.length; i++) {
    singleNum ^= nums[i];
  }

  return singleNum;
};

console.log(singleNumber([2, 2, 1])); //1
console.log(singleNumber([4, 1, 2, 1, 2])); //4
