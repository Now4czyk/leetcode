import { TreeNode } from "../shared/structures/TreeNode.js";
import { Nullable } from "../shared/utilities/nullable.js";

const maxDepth = (root: Nullable<TreeNode>): number =>
  root ? Math.max(maxDepth(root.left), maxDepth(root.right)) + 1 : 0;

describe("104. Maximum Depth of Binary Tree", () => {
  it("Test 1", () => {
    expect(maxDepth(TreeNode.node([3, 9, 20, null, null, 15, 7]))).toEqual(3);
  });
  it("Test 2", () => {
    expect(maxDepth(TreeNode.node([1, null, 2]))).toEqual(2);
  });
});
