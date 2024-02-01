import { ListNode } from "../shared/structures/ListNode.js";
import { Nullable } from "../shared/utilities/nullable.js";

const isPalindrome = (head: Nullable<ListNode>): boolean => {
  let fast = head;
  let mid = head;
  // Find the middle
  while (fast && fast.next) {
    fast = fast.next.next;
    mid = mid?.next || null;
  }
  // Reverse second half
  let pre: ListNode | null = null;
  while (mid) {
    let temp = mid.next;
    mid.next = pre;
    pre = mid;
    mid = temp;
  }
  // Compare
  while (pre) {
    if (pre.val !== head?.val) return false;
    head = head.next;
    pre = pre.next;
  }
  return true;
};

describe("234. Palindrome Linked List", () => {
  it("Test 1", () => {
    expect(isPalindrome(ListNode.node([1, 2, 2, 1]))).toBe(true);
  });
  it("Test 2", () => {
    expect(isPalindrome(ListNode.node([1, 2]))).toBe(false);
  });
});
