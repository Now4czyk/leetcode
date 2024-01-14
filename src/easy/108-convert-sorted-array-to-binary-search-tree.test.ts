import { TreeNode } from "../shared/structures/TreeNode.js";
import { Nullable } from "../shared/utilities/nullable.js";

const sortedArrayToBST = (nums: number[]): Nullable<TreeNode> => {
  if (!nums.length) return null;

  const middleIndex = Math.floor(nums.length / 2);

  const tree = new TreeNode(nums[middleIndex]);
  tree.left = sortedArrayToBST(nums.slice(0, middleIndex));
  tree.right = sortedArrayToBST(nums.slice(middleIndex + 1));

  return tree;
};

describe("108. Convert Sorted Array to Binary Search Tree", () => {
  it("Test 1", () => {
    expect(sortedArrayToBST([])).toEqual(null);
  });
  it("Test 2", () => {
    expect(TreeNode.array(sortedArrayToBST([-10, -3, 0, 5, 9])!)).toEqual([0, -3, 9, -10, null, 5]);
  });
  it("Test 3", () => {
    expect(TreeNode.array(sortedArrayToBST([1, 3])!)).toEqual([3, 1]);
  });
});
