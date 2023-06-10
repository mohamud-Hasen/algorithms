

// class ListNode {
//     constructor(val = 0, next = null) {
//       this.val = val;
//       this.next = next;
//     }
//   }
  


// var addTwoNumbers = function(l1, l2) {
//     let head = new ListNode(0);
//     let node = head;
//     let carry = 0;

//     while(l1 || l2) {
//     let l1Value = l1 ? l1.value : 0;
//     let l2Value = l2 ? l2.value : 0;

//     let sum = l1Value + l2Value + carry;
//     carry = 0;
//     let newValue = sum;

//     if(sum > 0) {
//         newValue = sum % 10;
//         carry = 1;
//     }

//     node.next = new ListNode(newValue);
//     node = node.next;

//     if(l1) {
//         l1 = l1.next;
//     }

//     if(l2) {
//         l2 = l2.next;
//     }
// }

// if(carry) {
//     node.next = new ListNode(carry);
// }
// return head.next;
    
    
       
// }
// console.log(addTwoNumbers(4131, 4131));

// ListNode class definition
class ListNode {
    constructor(val = 0, next = null) {
      this.val = val;
      this.next = next;
    }
  }
  
  // addTwoNumbers function implementation
  function addTwoNumbers(l1, l2) {
    const dummy = new ListNode(0);
    let curr = dummy;
    let carry = 0;
  
    while (l1 || l2 || carry) {
      const sumVal = (l1?.val || 0) + (l2?.val || 0) + carry;
      carry = Math.floor(sumVal / 10);
      curr.next = new ListNode(sumVal % 10);
      curr = curr.next;
  
      l1 = l1?.next;
      l2 = l2?.next;
    }
  
    return dummy.next;
  }
  
  // Test case
  const l1 = new ListNode(2);
  l1.next = new ListNode(4);
  l1.next.next = new ListNode(3);
  
  const l2 = new ListNode(5);
  l2.next = new ListNode(6);
  l2.next.next = new ListNode(4);
  
  const result = addTwoNumbers(l1, l2);
  
  // Print the result
  let temp = result;
  while (temp) {
    console.log(temp.val);
    temp = temp.next;
  }
  