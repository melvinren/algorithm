/**
 * 最长回文子串
 * 给定一个字符串 s，找到 s 中最长的回文子串。你可以假设 s 的最大长度为 1000。

示例 1：

输入: "babad"
输出: "bab"
注意: "aba" 也是一个有效答案。
示例 2：

输入: "cbbd"
输出: "bb"

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/longest-palindromic-substring

*/

/**
 * 中心扩展算法
 * @param {*} s 
 */
var longestPalindrome = function(s){
  if(!s || s.length < 1) return "";

  var start = 0, end = 0;
  for(var i = 0, l = s.length; i <l ; i++){
    var len1 = expandAroundCenter(s, i, i);
    var len2 = expandAroundCenter(s, i, i+1);
    var len = Math.max(len1, len2);
    if(len > end - start){
      start = i - Math.floor((len-1)/2); // len - 1 , 避免索引变成-1
      end = i + Math.floor(len/2);
    }
  }
  return s.substring(start, end+1)
}
/**
 * 中心扩展
 * @param {*} s 
 * @param {*} left 
 * @param {*} right 
 */
function expandAroundCenter(s, left, right){
  var L = left, R = right;
  while(L >=0 && R < s.length && s[L] === s[R]){
    L--;
    R++;
  }
  return R - L - 1;
}

/**
 * 暴力法
 * @param {*} s 
 */
var longestPalindrome = function(s){
  if(!s || s.length < 1) return ""
  var result = "";
  for(var i = 0, l = s.length; i < l; i++){
    for(var j = i; j < l; j++){
      var str = s.substring(i, j+1);
      if(isPalindrome(str)){
        if(str.length > result.length){
          result = str;
        }
      }
    }
  }
  return result;
}
/**
 * 判断是否是回文
 * @param {String} s 
 */
function isPalindrome(s){
  var len = s.length;
  var i = len % 2 === 0 ? (len / 2) - 1 : Math.floor(len/2);
  var j = len % 2 === 0 ? (len / 2) + 1 : Math.ceil(len/2);      
  return s.substring(0,i+1) === s.substring(j-1).split('').reverse().join('')
}