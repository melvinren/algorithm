/**
 * 给定一个只包括 '('，')'，'{'，'}'，'['，']' 的字符串，判断字符串是否有效。
 * 
有效字符串需满足：

左括号必须用相同类型的右括号闭合。
左括号必须以正确的顺序闭合。
注意空字符串可被认为是有效字符串。

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/valid-parentheses

示例 1:

输入: "()"
输出: true
示例 2:

输入: "()[]{}"
输出: true
示例 3:

输入: "(]"
输出: false
示例 4:

输入: "([)]"
输出: false
示例 5:

输入: "{[]}"
输出: true

 */

/**
 * 
 * @param {string} parentheses 
 * @returns {Boolean}
 */
function isValid(parentheses){
  if(!parentheses || parentheses.length < 2) {
    return false;
  }
  var map = {
    ')':'(',
    '}':'{',
    ']':'['
  }
  var arr = []
  for(var i =0, len = parentheses.length; i<len;i++){
    var c = parentheses[i]
    if(map[c]) {
      if(arr[arr.length-1] === map[c]){
        arr.pop()
      }else{
        return false
      }
    } else {
      arr.push(c)
    }
  }
  return arr.length === 0
}