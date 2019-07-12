/**
 * 给定一个字符串，请你找出其中不含有重复字符的 最长子串 的长度。

@example
示例 1:
输入: "abcabcbb"
输出: 3 
解释: 因为无重复字符的最长子串是 "abc"，所以其长度为 3。

示例 2:
输入: "bbbbb"
输出: 1
解释: 因为无重复字符的最长子串是 "b"，所以其长度为 1。

示例 3:
输入: "pwwkew"
输出: 3
解释: 因为无重复字符的最长子串是 "wke"，所以其长度为 3。
     请注意，你的答案必须是 子串 的长度，"pwke" 是一个子序列，不是子串。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-substring-without-repeating-characters
 */


/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if(!s || typeof s !== 'string') return 0;
    var map = {};
    var max = 0;
    for(var start=0, end=0, len = s.length; end < len; end++){
      var c = s[end];
      if(map[c]){
        start = Math.max(map[c], start)
      }
      max = Math.max(end-start+1, max)
      map[c] = end + 1;
    }
    return max;
};

/**
 * 思路：滑动窗口
 */