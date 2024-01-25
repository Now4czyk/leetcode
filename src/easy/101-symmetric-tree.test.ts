import { TreeNode } from "../shared/structures/TreeNode.js";
import { Nullable } from "../shared/utilities/nullable.js";

const isMirror = (lRoot: Nullable<TreeNode>, rRoot: Nullable<TreeNode>): boolean => {
  if (lRoot == null && rRoot == null) return true;
  else if (lRoot?.val !== rRoot?.val) return false;
  else
    return isMirror(lRoot?.left ?? null, rRoot?.right ?? null) && isMirror(lRoot?.right ?? null, rRoot?.left ?? null);
};

const isSymmetric = (root: Nullable<TreeNode>): boolean => isMirror(root?.left ?? null, root?.right ?? null);

describe("101. Symmetric Tree", () => {
  it("Test 1", () => {
    expect(isSymmetric(TreeNode.node([1, 2, 2, 3, 4, 4, 3]))).toEqual(true);
  });
  it("Test 2", () => {
    expect(isSymmetric(TreeNode.node([1, 2, 2, null, 3, null, 3]))).toEqual(false);
  });
});
