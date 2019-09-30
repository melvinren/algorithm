/**
 * 合并 k 个排序链表，返回合并后的排序链表。请分析和描述算法的复杂度。

示例:

输入:
[
  1->4->5,
  1->3->4,
  2->6
]
输出: 1->1->2->3->4->4->5->6

来源：力扣（LeetCode）
链接：https://leetcode-cn.com/problems/merge-k-sorted-lists

 */

/**
 * 分治， 两两合并
 * @param {*} list 
 */
function mergeKLists(list){
  var newlist = list.slice(0)
  var mid = Math.ceil(newlist.length / 2)  
  while(mid > 0){
    var templist = []
    for(var i = 0; i < mid; i++){     
      templist.push(merge2Lists(newlist[2*i], newlist[2*i+1]))
    }
    newlist = templist
    if(templist.length === 1){
      break;
    }
    mid = Math.ceil(templist.length/2)    
  }
  return templist[0]
}

/**
 * 逐一比较合并
 * @param {*} lists 
 */
function mergeKLists(lists){
  var newlist = []
  for(var i = 0, len = lists.length;i<len;i++){
    newlist[i] = new ListNode(0)
    newlist[i].next = lists[i]
  }
  var headlist = templist = new ListNode(0)
  var flag = true  
  while(flag){
    flag = false    
    var minnode = new ListNode(0)
    var minlist = null;
    for(var i = 0, len = newlist.length;i<len;i++){      
      if(!flag && newlist[i].next) {
        flag =  true;
        minnode.val = newlist[i].next.val // 初始值
      }
      if(newlist[i].next && newlist[i].next.val <= minnode.val){
        minnode.val = newlist[i].next.val
        minlist = newlist[i]
      }
    }
    if (flag === false){
      break
    }
    templist.next = new ListNode(minnode.val);
    minlist.next = minlist.next.next

    templist = templist.next;
  }  
  return headlist.next
}

/**
 * 先合并所有节点，然后排序
 * @param {*} lists 
 */
function mergeKLists(lists){
  var arr = []
  // concat all list value
  for(var i = 0, len = lists.length;i<len;i++){
    var l = lists[i]
    while( l !=null ) {
      arr.push(l.val)
      l = l.next;
    }
  }
  // sort value in array
  arr.sort(function(a,b){ return a-b; })
  var headlist = templist = new ListNode(0)
  for(var i = 0, len = arr.length; i<len;i++){
    templist.next = new ListNode(arr[i])
    templist = templist.next
  }
  return headlist
}

/**
 * 有序合并两个列表
 * @param {*} list1 
 * @param {*} list2 
 */
function merge2Lists(list1, list2){
  var dummylist = headlist = new ListNode(0)
  var l1 = list1, l2 = list2;
  while(l1 !=null || l2 !=null){
    if(l1 == null) { headlist.next = l2; break; }
    if(l2 == null) { headlist.next = l1; break; }
    if(l1.val < l2.val){
      headlist.next = new ListNode(l1.val)
      l1 = l1.next
    } else {
      headlist.next = new ListNode(l2.val);
      l2 = l2.next
    }
    headlist = headlist.next
  }
  return dummylist.next;
}

/**
 * 连接两个列表
 * @param {*} list1 
 * @param {*} list2 
 */
function concatListNode(list1, list2){
  var lastnode = list1.next
  while(lastnode !=null){
    lastnode = lastnode.next
  }
  lastnode.next = list2
}

/**
 * Definition for singly-linked list.
 */
function ListNode(val) {
  this.val = val;
  this.next = null;
}

// example
var list1 = new ListNode(1)
list1.next = new ListNode(4)
list1.next.next = new ListNode(5)
list1.next.next.next = new ListNode(6)
var list2 = new ListNode(1)
list2.next = new ListNode(3)
list2.next.next = new ListNode(4)
var list3 = new ListNode(2)
list3.next = new ListNode(7)
lists = [list1, list2,list3]
