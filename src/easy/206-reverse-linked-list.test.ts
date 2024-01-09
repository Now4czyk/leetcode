import { ListNode } from "../shared/structures/ListNode.js";

function reverseList(head: ListNode | null): ListNode | null {
  let prev = null;

  while (head) {
    let next = head.next;
    head.next = prev;
    prev = head;
    head = next;
  }

  return prev;
}

describe("206. Reverse Linked List", () => {
  it("Test 1", () => {
    expect(ListNode.array(reverseList(ListNode.node([1, 2, 3, 4, 5])))).toEqual([5, 4, 3, 2, 1]);
  });

  it("Test 2", () => {
    expect(ListNode.array(reverseList(ListNode.node([1, 2])))).toEqual([2, 1]);
  });

  it("Test 3", () => {
    expect(ListNode.array(reverseList(ListNode.node([])))).toEqual([]);
  });
});
