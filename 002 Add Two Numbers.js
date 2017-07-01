/**
 description:
 You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

 You may assume the two numbers do not contain any leading zero, except the number 0 itself.

 Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 Output: 7 -> 0 -> 8
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

var addTwoNumbers = function(l1, l2) {
    var l3 = null, h3 = null;
    var newNode = null;
    var v1 = 0 , v2 = 0, v3 = 0, m = 0;

    while(l1 !== null || l2 !== null)
    {
        if(l1 !== null){
            v1 = l1.val;
            l1 = l1.next;
        }else{
            v1 = 0;
        }

        if(l2 !== null){
            v2 = l2.val;
            l2 = l2.next;
        }else{
            v2 = 0;
        }

        v3 = ( v1 + v2 + m) % 10;
        if( v1 + v2 + m >= 10){
            m = 1;
        }else{
            m = 0;
        }

        newNode = new ListNode(v3);
        if(l3 === null){
            l3 = newNode;
            h3 = l3;
        }else{
            h3.next =  newNode;
            h3 = h3.next;
        }
    }

    if(m > 0){
        newNode = new ListNode(m);
        h3.next =  newNode;
    }

    return l3;

};