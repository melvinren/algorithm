/**
 * 两数相加
 * 给出两个 非空 的链表用来表示两个非负的整数。其中，它们各自的位数是按照 逆序 的方式存储的，并且它们的每个节点只能存储 一位 数字。
 * 如果，我们将这两个数相加起来，则会返回一个新的链表来表示它们的和。
 * 您可以假设除了数字 0 之外，这两个数都不会以 0 开头。
 * @example
 *   输入：(2 -> 4 -> 3) + (5 -> 6 -> 4)
 *   输出：7 -> 0 -> 8
 *   原因：342 + 465 = 807
  
 * 
 * 来源：力扣（LeetCode）
 * 链接：https://leetcode-cn.com/problems/add-two-numbers
 */

var addTwoNumbers = function(l1, l2) {
  var v1 = (l1 && l1.val) ? l1.val : 0;
  var v2 = (l2 && l2.val) ? l2.val : 0;
  var sum = v1 + v2;
  var v = sum % 10
  var nextplus = sum > 9 ? 1 : 0
  var a3 = [v]
  var n1 = l1 && l1.next || null;
  var n2 = l2 && l2.next || null;
  while(n1 !== null || n2 !== null){
    v1 = (n1 && n1.val) ? n1.val : 0;
    v2 = (n2 && n2.val) ? n2.val : 0;    
    sum = v1 + v2 + nextplus
    v = sum % 10
    nextplus = sum > 9 ? 1 : 0
    a3.push(v)
    if(n1 !== null) n1 = n1.next
    if(n2 !== null) n2 = n2.next
  }
  if(nextplus) a3.push(nextplus)
  return arr2list(a3)
 };

 var addTwoNumbers = function(l1, l2){
  var dummyHead = new ListNode(0);
  var n = dummyHead;
  var nextplus = 0;
  var p = l1, q = l2;
  while(p!==null || q!==null){
    var v1 = (p && p.val) ? p.val : 0;
    var v2 = (q && q.val) ? q.val : 0;    
    var sum = v1 + v2 + nextplus;
    var v = sum % 10
    nextplus = sum > 9 ? 1 : 0    
    n.next = new ListNode(v);
    if(p!=null) p = p.next;
    if(q!=null) q = q.next;
    n = n.next;
  }
  if(nextplus) n.next = new ListNode(nextplus)
  return dummyHead.next;
 } 
 
 var l1 = arr2list([2,4,3])
 var l2 = arr2list([5,6,4])
 
 var arr2list = function(a){
   var dummyHead = new ListNode(0)
   var n = dummyHead;
   for(var i = 0, len = a.length; i< len; i++){
    n.next = new ListNode(a[i])
    n = n.next
  }
  return dummyHead.next;
 }
 
function ListNode(val) {
    this.val = val;
    this.next = null;
}

/**
 * 测试用例
 * [0,1] [0,1,2]
 * [] [0,1]
 * [9,9] [1]
 */