/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */

//LINKED LIST IS A KIND OF DATA STRUCTURE. READ ABOUT IT ON THE INTERNET 
 var deleteDuplicates = function(head) {
    if(head === null) return head;
    let current = head;
    while(current) {
         if(current.next && current.val === current.next.val) {
            current.next = current.next.next;
         } else {
            current = current.next;
         }
    }
    return head;
 };

console.log(deleteDuplicates([1,1,2]));