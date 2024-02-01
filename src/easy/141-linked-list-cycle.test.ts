import { ListNode } from "../shared/structures/ListNode.js";
import { Nullable } from "../shared/utilities/nullable.js";

const hasCycle = (head: Nullable<ListNode>): boolean => {
  const set = new Set<Nullable<ListNode>>();
  let result = false;
  while (head && !result) {
    if (set.has(head)) result = true;
    else set.add(head);
    head = head.next;
  }
  return result;
};

describe("141. Linked List Cycle", () => {
  it("Test 1", () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    head.next.next.next = head.next;
    expect(hasCycle(head)).toBe(true);
  });

  it("Test 2", () => {
    const head = new ListNode(1);
    head.next = new ListNode(2);
    head.next.next = new ListNode(3);
    expect(hasCycle(head)).toBe(false);
  });
});
