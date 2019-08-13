
/**
 *
给你一个字符串 s 和一个字符规律 p，请你来实现一个支持 '.' 和 '*' 的正则表达式匹配。

'.' 匹配任意单个字符
'*' 匹配零个或多个前面的那一个元素
所谓匹配，是要涵盖 整个 字符串 s的，而不是部分字符串。

说明:

s 可能为空，且只包含从 a-z 的小写字母。
p 可能为空，且只包含从 a-z 的小写字母，以及字符 . 和 *。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/regular-expression-matching

*/

/**
 * 回溯
 * @param {*} text 
 * @param {*} pattern 
 */
function isMatch(text, pattern){
  if(!pattern) return !text;

  var firstmatch = text && (text[0] === pattern[0] || pattern[0] === '.')

  if(pattern.length >= 2 && pattern[1] === '*'){
    return isMatch(text, pattern.substring(2)) ||  (firstmatch && isMatch(text.substring(1), pattern));
  } else {
    return firstmatch && isMatch(text.substring(1), pattern.substring(1))
  } 
}


/**
 * 动态规划
 */
var result = [];
function isMatch(text, pattern){
  return dp(0, 0, text, pattern);
}
function dp(i, j, text, pattern){
  if(result[i] && result[i][j] !== undefined){
    return result[i][j] === true;
  }

  var ans;
  if(j === pattern.length){
    ans = i === text.length;
  } else {
    var firstmatch = text[i] && (text[i] === pattern[j] || pattern[j] === '.')
    if(j+1 < pattern.length && pattern[j+1] === '*'){
      ans = dp(i, j+2, text, pattern) || (firstmatch && dp(i+1, j, text, pattern))
    } else {
      ans = firstmatch && dp(i+1, j+1, text, pattern);
    }
  }
  if(!result[i]){
    result[i] = []
    result[i][j] = undefined;
  }
  result[i][j] = ans;
  return ans;
}

