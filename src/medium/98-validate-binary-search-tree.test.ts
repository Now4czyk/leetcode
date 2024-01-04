import { TreeNode } from "../shared/structures/TreeNode.js";

function isValidBST(root: TreeNode | null): boolean {
  if (!root) return false;

  const queue: { node: TreeNode; min?: number; max?: number }[] = [{ node: root! }];
  while (queue.length > 0) {
    const { node, min, max } = queue.shift()!;
    if (min != undefined && min >= node.val) return false;
    if (max != undefined && max <= node.val) return false;

    node.left && queue.push({ node: node.left, min, max: node.val });
    node.right && queue.push({ node: node.right, min: node.val, max });
  }
  return true;
}

describe("98. Validate Binary Search Tree", () => {
  it("Test 1", () => {
    const tree = TreeNode.node([2, 1, 3]);
    isValidBST(tree);
    expect(isValidBST(tree)).toEqual(true);
  });
  it("Test 2", () => {
    const tree = TreeNode.node([5, 1, 4, null, null, 3, 6]);
    isValidBST(tree);
    expect(isValidBST(tree)).toEqual(false);
  });
  it("Test 3", () => {
    const tree = TreeNode.node([5, 4, 6, null, null, 3, 7]);
    isValidBST(tree);
    expect(isValidBST(tree)).toEqual(false);
  });
});
