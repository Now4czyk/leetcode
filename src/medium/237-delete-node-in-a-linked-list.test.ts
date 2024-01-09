import { Nullable } from "../shared/utilities/nullable.js";
import { ListNode } from "../shared/structures/ListNode.js";

const deleteNode = (node: Nullable<ListNode>): void => {
  if (!node) {
    return;
  }
  node.val = node?.next?.val!;
  node.next = node?.next?.next!;
};

describe("237. Delete Node in a Linked List\n", () => {
  it("Test 1", () => {
    const node = ListNode.node([4, 5, 1, 9]);
    deleteNode(node?.next!);
    expect(ListNode.array(node)).toEqual([4, 1, 9]);
  });
  it("Test 2", () => {
    const node = ListNode.node([4, 5, 1, 9]);
    deleteNode(node?.next!.next!);
    expect(ListNode.array(node)).toEqual([4, 5, 9]);
  });
});
