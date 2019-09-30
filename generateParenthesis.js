/**
 * 
 * 给出 n 代表生成括号的对数，请你写出一个函数，使其能够生成所有可能的并且有效的括号组合。

例如，给出 n = 3，生成结果为：

[
  "((()))",
  "(()())",
  "(())()",
  "()(())",
  "()()()"
]

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/generate-parentheses

 * 
 */

 
function generateParenthesis(n){
  var res = []
  backtrack(res, "", 0, 0, n)
  return res;
}


function backtrack(result, curstr, open, close, max){
  if(curstr.length === max*2){
    result.push(curstr)
    return
  }
  if (open < max) {
    backtrack(result, curstr + '(', open+1, close, max)
  }
  if (close < open) {
    backtrack(result, curstr + ')', open, close+1, max)
  }
}


/**
 * 生成字符串
 * @param {*} arr 
 * @param {*} pos 
 * @param {*} max 
 */
function generateAll(arr, pos, max){
  if(pos === max){
    console.log(arr.join())
    return
  }
  arr[pos] = "a"
  generateAll(arr, pos+1, max)
  arr[pos] = "b"
  generateAll(arr, pos+1, max)
  arr[pos] = "c"
  generateAll(arr, pos+1, max)
}

