/**
 * 
 * 给定一个仅包含数字 2-9 的字符串，返回所有它能表示的字母组合。
 * 给出数字到字母的映射如下（与电话按键相同）。注意 1 不对应任何字母。

示例:
输入："23"
输出：["ad", "ae", "af", "bd", "be", "bf", "cd", "ce", "cf"].  


来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/letter-combinations-of-a-phone-number/

  */

/**
 * 
 * @param {*} digits 
 * @returns []
 */
function letterCombinations(digits){
    combinate("", digits)
    return result;
}

var letters = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"]
var result = []

function combinate(str, digits){
  if (digits.length ===0){
    result.push(str)    
  } else {
    var d = digits[0]
    var l = letters[d]        
    for(var j=0;j<l.length;j++){      
      combin(str+l[j], digits.substring(1))
    }    
  }
}