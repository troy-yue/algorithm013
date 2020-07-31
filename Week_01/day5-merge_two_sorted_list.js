/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
// 递归调用
var mergeTwoLists = function(l1, l2) {
  if (l1 == null) {
      return l2;
  } else if (l2 == null) {
      return l1;
  } else if (l1.val < l2.val) {
      l1.next = mergeTwoLists(l1.next, l2);
      return l1;
  } else {
      l2.next = mergeTwoLists(l1, l2.next);
      return l2;
  }
};

// 循环调用
var mergeTwoLists = function(l1, l2) {
  if (l1 == null) {
      return l2;
  } else if (l2 == null) {
      return l1;
  }

  const res = new ListNode(-1);
  let p1 = res;
  while (l1 && l2) {
      if (l1.val <= l2.val) {
          p1.next = l1;
          l1 = l1.next;
      } else {
          p1.next = l2;
          l2 = l2.next;
      }
      p1 = p1.next;
  }
  p1.next = l1 != null ? l1 : l2;
  
  return res.next;
}