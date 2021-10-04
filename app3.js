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
 var addTwoNumbers = function(l1, l2) {
    l1 = parseInt(l1.reverse().join(''));
    l2 = parseInt(l2.reverse().join(''));

    result = l1+l2
    console.log({result : result})
    
    return result.toString().split('').reverse();
};

console.log(addTwoNumbers([2,4,3],[5,6,4]))