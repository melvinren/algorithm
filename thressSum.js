/**
 * 
给定一个包含 n 个整数的数组 nums，判断 nums 中是否存在三个元素 a，b，c ，使得 a + b + c = 0 ？找出所有满足条件且不重复的三元组。

注意：答案中不可以包含重复的三元组。

例如, 给定数组 nums = [-1, 0, 1, 2, -1, -4]，

满足要求的三元组集合为：
[
  [-1, 0, 1],
  [-1, -1, 2]
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/3sum
 * 
 */

/**
 * 三数之和为0
 * @param {Array} nums 
 * @returns {Array}
 */
function threeSum(nums){
  if(!nums || nums.length < 3){
    return
  }
  var res = []
  // 先排序
  nums.sort((a,b) => a-b )
  var len = nums.length
  if(nums[0] <= 0 && nums[len-1] >= 0){

    for(var i = 0; i < len - 2; i++){
      // 数组排序的， 第一个数应该是负数，否则都是整数相加不可能为0
      if(nums[i] > 0) {
        break;
      }
      if(i > 0 && nums[i] === nums[i-1]) continue  // 去掉重复的元素

      var first = i + 1;
      var last = len - 1;
      
      while(first < last) {
        if(nums[last] < 0) { break; } // 第一个是负数，最后一个肯定不能是负数

        var result = nums[i] + nums[first] + nums[last]
        if(result === 0){
          res.push([nums[i], nums[first], nums[last]])
          while(first < last && nums[last] === nums[--last]){}
          while(first < last && nums[first] === nums[++first]){}
        } else if (result > 0 ) {          
          last--
        } else {
          first++
        }
      } 
      
    }  
  }

  return res
}
