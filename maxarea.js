/**
给定 n 个非负整数 a1，a2，...，an，每个数代表坐标中的一个点 (i, ai) 。在坐标内画 n 条垂直线，垂直线 i 的两个端点分别为 (i, ai) 和 (i, 0)。找出其中的两条线，使得它们与 x 轴共同构成的容器可以容纳最多的水。

说明：你不能倾斜容器，且 n 的值至少为 2。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/container-with-most-water
**/

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var i = 0, j = height.length - 1;
  var max = 0
  while(i < j)  {
    max = Math.max(max, Math.min(height[i], height[j])*(j-i))
    if(height[i] > height[j]){
      j--
    } else {
      i++
    }
  }
  return max;
};


/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
  var max = 0;
  for(var i = 0, len = height.length; i < len; i++){
    for(var j = i + 1; j < len; j++){
      max = Math.max(max, Math.min(height[i], height[j]) * (j-i))
    }
  }
  return max;
}

