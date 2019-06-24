/**
 * 给定一个整数数组 nums 和一个目标值 target，请你在该数组中找出和为目标值的那 两个 整数，并返回他们的数组下标。
 * 
 * 给定 nums = [2, 7, 11, 15], target = 9
 * 因为 nums[0] + nums[1] = 2 + 7 = 9
 * 所以返回 [0, 1]
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/two-sum
 */

/**
 * 暴力法两次循环
 */
function twoSum(nums, target){
  for(var i = 0, len = nums.length; i < len; i++){
    for(var j = i+1; j < len; j++){
      if(nums[i] + nums[j] == target){
        return [i,j]
      }
    }
  }
  throw Error('error')
} 


 
/**
 * 哈希表
 * @param  {Array} nums
 * @param  {Number} target
 */
function twoSum(nums, target){
  var map = {};
  for(var i = 0, len = nums.length; i < len; i++){
    var next = target - nums[i];
    if(map[next] !== undefined){
      return [i, map[next]]
    }
    map[nums[i]] = i;
  }
  throw Error('error')
} 
