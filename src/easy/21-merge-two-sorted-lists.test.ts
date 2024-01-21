import { ListNode } from "../shared/structures/ListNode.js";
import { Nullable } from "../shared/utilities/nullable.js";

const mergeTwoLists = (list1: Nullable<ListNode>, list2: Nullable<ListNode>): Nullable<ListNode> => {
  if (!list1 && !list2) return null;
  if (list1 === null) {
    return list2;
  }
  if (list2 === null) {
    return list1;
  }

  if (list1.val < list2.val) {
    list1.next = mergeTwoLists(list1.next, list2);
    return list1;
  } else {
    list2.next = mergeTwoLists(list1, list2.next);
    return list2;
  }
};

describe("21. Merge Two Sorted Lists", () => {
  it("Test 1", () => {
    expect(ListNode.array(mergeTwoLists(ListNode.node([1, 2, 4]), ListNode.node([1, 3, 4])))).toEqual([
      1, 1, 2, 3, 4, 4,
    ]);
  });
  it("Test 2", () => {
    expect(ListNode.array(mergeTwoLists(ListNode.node([]), ListNode.node([])))).toEqual([]);
  });
  it("Test 3", () => {
    expect(ListNode.array(mergeTwoLists(ListNode.node([]), ListNode.node([0])))).toEqual([0]);
  });
});
